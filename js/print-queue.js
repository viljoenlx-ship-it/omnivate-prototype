/* USB (Web Serial) link and a pause/cancel label queue for the Niimbot M2-H.
   Baud 115200 and 55 55 … aa aa framing match @mmote/niimbluelib SerialClient. */
(function () {
  "use strict";
  var LINK_KEY = "omnivate.printerLink";
  var statusText = "Not connected";
  var port = null;
  var reader = null;
  var writer = null;
  var reading = false;
  var queue = null;

  function remember(kind) {
    try { localStorage.setItem(LINK_KEY, kind); } catch (e) { /* private mode */ }
  }
  function lastLink() {
    try { return localStorage.getItem(LINK_KEY) || ""; } catch (e) { return ""; }
  }
  function setStatus(text) {
    statusText = text;
    var el = document.getElementById("printer-status");
    if (el) el.textContent = text;
  }
  function M2H() {
    return { label: "Niimbot M2-H", id: 4608, dpi: 300, task: "b1", density: 3, label_type: 1, speed: 1, name_prefixes: ["M2"] };
  }

  function extractFrames(state, chunk) {
    var buf = state.buf;
    for (var i = 0; i < chunk.length; i++) buf.push(chunk[i]);
    var frames = [];
    while (buf.length >= 7) {
      if (buf[0] !== 0x55 || buf[1] !== 0x55) { buf.shift(); continue; }
      var len = buf[3];
      var total = 7 + len;
      if (buf.length < total) break;
      var frame = buf.splice(0, total);
      if (frame[total - 2] === 0xaa && frame[total - 1] === 0xaa) frames.push(frame);
    }
    return frames;
  }

  async function readLoop() {
    reading = true;
    try {
      while (port && reader) {
        var result = await reader.read();
        if (result.value) window.Niimbot.ingestSerial(result.value);
        if (result.done) break;
      }
    } catch (e) {
      setStatus("USB unplugged");
    }
    reading = false;
  }

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function hexId(n) {
    if (n == null || isNaN(Number(n))) return "----";
    return Number(n).toString(16).toUpperCase().padStart(4, "0");
  }
  async function closePort() {
    try { if (reader) await reader.cancel(); } catch (e) {}
    try { if (reader) reader.releaseLock(); } catch (e) {}
    try { if (writer) await writer.close(); } catch (e) {}
    try { if (writer) writer.releaseLock(); } catch (e) {}
    try { if (port) await port.close(); } catch (e) {}
    reader = null;
    writer = null;
    port = null;
    reading = false;
  }
  async function writeSerial(bytes) {
    if (!writer) throw new Error("USB port is not writable");
    await sleep(10);
    var u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    for (var off = 0; off < u8.length; off += 512) {
      await writer.write(u8.subarray(off, Math.min(off + 512, u8.length)));
    }
  }
  async function connectUsb() {
    if (!navigator.serial) {
      throw new Error("Web Serial needs Chrome or Edge. The M2-H often appears as Port 3 (COM3). Only install a CH340 driver if Device Manager names a CH340 chip; many M2-H units are plain USB CDC.");
    }
    // Picker first so Chrome still treats this as a click. Then drop any BLE session.
    var chosen = await navigator.serial.requestPort();
    if (window.Niimbot && window.Niimbot.disconnect) {
      try { await window.Niimbot.disconnect(); } catch (e) {}
    }
    await closePort();
    try {
      await chosen.open({ baudRate: 115200, dataBits: 8, stopBits: 1, parity: "none", flowControl: "none", bufferSize: 16384 });
      if (chosen.setSignals) {
        try { await chosen.setSignals({ dataTerminalReady: true, requestToSend: true }); } catch (e) {}
      }
      await sleep(80);
      writer = chosen.writable.getWriter();
      reader = chosen.readable.getReader();
      port = chosen;
      window.Niimbot.setTransport({
        kind: "serial",
        name: "USB",
        write: writeSerial,
        close: closePort
      });
      readLoop();
      await sleep(30);
      try {
        await window.Niimbot.connect(M2H());
      } catch (err) {
        await closePort();
        window.Niimbot.setTransport(null);
        throw err;
      }
      var info = window.Niimbot.printer;
      var ids = chosen.getInfo ? chosen.getInfo() : {};
      if (!info || info.modelId == null) {
        await closePort();
        window.Niimbot.setTransport(null);
        throw new Error("USB port opened (VID " + hexId(ids.usbVendorId) + " PID " + hexId(ids.usbProductId) + ") but the printer did not answer. Close the NIIMBOT phone or desktop app and disconnect Bluetooth on this page first — only one link at a time. Chrome may call the port \"Port 3\" (COM3).");
      }
      remember("usb");
      setStatus("USB · " + (info.label || "M2-H") + " · 115200 · VID " + hexId(ids.usbVendorId) + " PID " + hexId(ids.usbProductId));
    } catch (err) {
      await closePort();
      if (window.Niimbot && window.Niimbot.setTransport) window.Niimbot.setTransport(null);
      throw err;
    }
  }

  function rememberBluetooth() {
    remember("bluetooth");
    setStatus("Bluetooth · connected");
  }

  async function runQueue(items, ui) {
    var total = items.reduce(function (s, it) { return s + (it.copies || 1); }, 0);
    var done = 0;
    queue = { paused: false, cancelled: false };
    var size = window.OmnivateLabels.geom();
    var sizeArg = { w_px: size.w_px, h_px: size.h_px, dpi: 300, w_mm: size.wMm, h_mm: size.hMm };
    for (var i = 0; i < items.length; i++) {
      while (queue.paused && !queue.cancelled) await sleep(200);
      if (queue.cancelled) {
        if (ui.onDone) ui.onDone("Cancelled at " + done + " of " + total);
        queue = null;
        return;
      }
      var item = items[i];
      var copies = Math.max(1, item.copies | 0);
      var attempt = 0;
      while (attempt < 3) {
        try {
          if (ui.onProgress) ui.onProgress(done, total, "Printing " + (done + 1) + " of " + total + " · " + item.title);
          await window.Niimbot.printImage(item.url, {
            model: M2H(),
            size: sizeArg,
            copies: copies,
            offsetY: 0,
            onProgress: function (msg) {
              if (ui.onProgress) ui.onProgress(done, total, msg + " · " + (done + 1) + " of " + total);
            }
          });
          done += copies;
          if (ui.onProgress) ui.onProgress(done, total, done + " of " + total + " printed");
          break;
        } catch (err) {
          attempt++;
          if (ui.onError) {
            var retry = await ui.onError(err, item, attempt);
            if (retry) continue;
          }
          if (ui.onDone) ui.onDone("Stopped at " + done + " of " + total);
          queue = null;
          throw err;
        }
      }
    }
    queue = null;
    if (ui.onDone) ui.onDone("Printed " + done + " of " + total);
  }

  function openReview(title, items) {
    var O = window.Omnivate;
    var rows = items.map(function (it, i) {
      return '<div class="queue-row"><img alt="" src="' + it.url + '" style="width:160px;height:auto;background:#fff;border:1px solid var(--border)"><div><strong>' + O.esc(it.title) + '</strong><div class="field"><label>Labels</label><input class="input queue-qty" data-i="' + i + '" type="number" min="0" value="' + (it.copies || 1) + '"></div></div></div>';
    }).join("");
    O.openModal(
      '<div class="modal-h"><h3>' + O.esc(title) + '</h3><button class="icon-btn light" data-act="close-modal">' + O.icon("x", 16) + "</button></div>" +
      '<div class="modal-b"><p class="tiny">Review how many labels to print for each line. Same artwork uses one Niimbot job with copies. Different labels print one after another so you can pause.</p>' +
      '<div class="queue-list">' + rows + "</div>" +
      '<div class="prog" style="margin-top:12px"><span id="queue-bar" style="width:0%"></span></div>' +
      '<div class="tiny" id="queue-msg">Ready · ' + items.length + " line" + (items.length === 1 ? "" : "s") + "</div></div>" +
      '<div class="modal-f"><button class="btn btn-secondary" type="button" id="queue-pause" disabled>Pause</button>' +
      '<button class="btn btn-secondary" type="button" id="queue-cancel">Cancel</button>' +
      '<button class="btn btn-primary" type="button" id="queue-go">Print to Niimbot</button></div>'
    );
    var go = document.getElementById("queue-go");
    var pause = document.getElementById("queue-pause");
    var cancel = document.getElementById("queue-cancel");
    cancel.onclick = function () {
      if (queue) queue.cancelled = true;
      else O.closeModal();
    };
    pause.onclick = function () {
      if (!queue) return;
      queue.paused = !queue.paused;
      pause.textContent = queue.paused ? "Resume" : "Pause";
    };
    go.onclick = function () {
      var live = items.map(function (it, i) {
        var input = document.querySelector('.queue-qty[data-i="' + i + '"]');
        var copies = input ? Number(input.value) : it.copies;
        return { title: it.title, url: it.url, copies: copies };
      }).filter(function (it) { return it.copies > 0; });
      if (!live.length) { O.toast("Nothing to print", "warn"); return; }
      go.disabled = true;
      pause.disabled = false;
      var total = live.reduce(function (s, it) { return s + it.copies; }, 0);
      runQueue(live, {
        onProgress: function (done, all, msg) {
          var bar = document.getElementById("queue-bar");
          var label = document.getElementById("queue-msg");
          if (bar) bar.style.width = Math.round((done / (all || total)) * 100) + "%";
          if (label) label.textContent = msg;
          setStatus(msg);
        },
        onError: function (err, item) {
          var label = document.getElementById("queue-msg");
          var message = (err && err.message) || String(err);
          if (label) label.textContent = "Failed on " + item.title + " — " + message;
          setStatus("Print failed");
          return new Promise(function (resolve) {
            go.disabled = false;
            go.textContent = "Retry";
            go.onclick = function () { go.disabled = true; go.textContent = "Printing…"; resolve(true); };
            cancel.onclick = function () { queue.cancelled = true; resolve(false); };
          });
        },
        onDone: function (msg) {
          var label = document.getElementById("queue-msg");
          if (label) label.textContent = msg;
          setStatus(msg);
          O.toast(msg, /fail|stop|cancel/i.test(msg) ? "warn" : "ok");
          go.disabled = false;
          go.textContent = "Print to Niimbot";
          pause.disabled = true;
        }
      }).catch(function () { /* onError already reported */ });
    };
  }

  window.OmnivatePrint = {
    connectUsb: connectUsb,
    rememberBluetooth: rememberBluetooth,
    lastLink: lastLink,
    statusText: function () { return statusText; },
    setStatus: setStatus,
    extractFrames: extractFrames,
    runQueue: runQueue,
    openReview: openReview
  };
})();
