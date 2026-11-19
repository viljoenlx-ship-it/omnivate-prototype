/* Client workspace: stock, quotes, invoices, granite slab orders, NIIMBOT labels, scanners. */
(function () {
  "use strict";
  var O = window.Omnivate;
  if (!O) return;

  var SEED = "demo-2026-11-17-wholesale";
  var LABEL_GEOM_KEY = "omnivate.m2hLabel.v2";
  var LABEL_SERIAL_KEY = "omnivate.labels.v1";
  var M2H = {
    label: "Niimbot M2-H",
    id: 4608,
    dpi: 300,
    task: "b1",
    protocol: "v4",
    density: 3,
    label_type: 1,
    speed: 1,
    name_prefixes: ["M2"]
  };
  var hit = { kind: "", id: "" };
  var draft = null;
  var printerMsg = "Not connected";
  var wedge = [];

  function round2(n) { return Math.round((Number(n) || 0) * 100) / 100; }
  function zar2(n) {
    return "R\u00A0" + round2(n).toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function excl(incl) { return round2((Number(incl) || 0) / 1.15); }
  function cameraOn(t) { return !!(t && t.features && t.features.cameraScan); }
  function todayKey() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Johannesburg", year: "numeric", month: "2-digit" }).format(new Date()).slice(0, 7);
  }
  function routeParts() { return O.parseHash().parts; }
  function tenant() {
    var id = routeParts()[1];
    return id ? O.getTenant(id) : null;
  }
  function screenName() { return routeParts()[3] || "home"; }
  function actorRole(t) {
    var imp = O.ui && O.ui.impersonating;
    if (imp && t && imp.tenantId === t.id && imp.userId) {
      var user = (t.users || []).find(function (x) { return x.id === imp.userId; });
      if (user && user.role) return user.role;
    }
    var session = O.getSession();
    if (session && session.kind === "tenant" && t && session.tenantId === t.id && session.role) return session.role;
    return "administrator";
  }
  function can(t, code, flag) {
    if (!t) return false;
    if (actorRole(t) === "administrator") return true;
    var bucket = t.permissions && t.permissions[actorRole(t)] && t.permissions[actorRole(t)][code];
    return !!(bucket && bucket[flag]);
  }
  function allow(t, code, flag) {
    if (can(t, code, flag)) return true;
    var word = { C: "create", R: "view", U: "change", D: "delete", A: "approve" }[flag] || "change";
    O.toast("Your role cannot " + word + " that", "warn");
    return false;
  }

  function splitLegacyLabelStore() {
    var raw;
    try { raw = JSON.parse(localStorage.getItem(LABEL_SERIAL_KEY) || "null"); } catch (e) { return; }
    if (!raw || typeof raw !== "object" || !(Number(raw.wMm) > 0)) return;
    if (!localStorage.getItem(LABEL_GEOM_KEY)) {
      localStorage.setItem(LABEL_GEOM_KEY, JSON.stringify({
        wMm: Number(raw.wMm) || 50,
        hMm: Number(raw.hMm) || 15,
        offsetX: raw.offsetX | 0,
        offsetY: raw.offsetY | 0,
        showPrice: raw.showPrice !== false,
        copies: raw.copies > 0 ? raw.copies | 0 : 1
      }));
    }
    delete raw.wMm;
    delete raw.hMm;
    delete raw.offsetX;
    delete raw.offsetY;
    delete raw.showPrice;
    delete raw.copies;
    localStorage.setItem(LABEL_SERIAL_KEY, JSON.stringify(raw));
  }
  function loadLabel() {
    splitLegacyLabelStore();
    var d = { wMm: 50, hMm: 15, offsetX: 0, offsetY: 0, showPrice: true, copies: 1 };
    try {
      var raw = JSON.parse(localStorage.getItem(LABEL_GEOM_KEY) || "null");
      if (raw && typeof raw === "object") {
        if (raw.wMm > 0) d.wMm = Number(raw.wMm);
        if (raw.hMm > 0) d.hMm = Number(raw.hMm);
        d.offsetX = raw.offsetX | 0;
        d.offsetY = raw.offsetY | 0;
        if (typeof raw.showPrice === "boolean") d.showPrice = raw.showPrice;
        if (raw.copies > 0) d.copies = raw.copies | 0;
      }
    } catch (e) { /* keep defaults */ }
    return d;
  }
  function saveLabel(p) {
    var cur = loadLabel();
    Object.keys(p).forEach(function (k) { cur[k] = p[k]; });
    localStorage.setItem(LABEL_GEOM_KEY, JSON.stringify(cur));
    return cur;
  }
  function geom() {
    var s = loadLabel();
    var g = window.NiimbotLabelSize && window.NiimbotLabelSize.sizeFromMm({ w_mm: Number(s.wMm) || 50, h_mm: Number(s.hMm) || 15, dpi: 300 });
    if (!g) g = { w_px: 591, h_px: 177 };
    return { wMm: Number(s.wMm) || 50, hMm: Number(s.hMm) || 15, w_px: g.w_px, h_px: g.h_px, dpi: 300, offsetX: s.offsetX | 0, offsetY: s.offsetY | 0, showPrice: s.showPrice !== false, copies: Math.max(1, s.copies | 0) };
  }

  function fit(ctx, text, max) {
    var s = String(text || "");
    if (ctx.measureText(s).width <= max) return s;
    while (s.length > 1 && ctx.measureText(s + "\u2026").width > max) s = s.slice(0, -1);
    return s + "\u2026";
  }
  function barcodeCanvas(value, barW, height) {
    var c = document.createElement("canvas");
    try {
      window.JsBarcode(c, String(value || "0"), {
        format: "CODE128", displayValue: false, margin: 0,
        width: barW || 2, height: height || 70, background: "#ffffff", lineColor: "#000000"
      });
    } catch (e) {
      c.width = 20; c.height = 20;
    }
    return c;
  }
  function paintShifted(size, painter) {
    var c = document.createElement("canvas");
    c.width = size.w_px;
    c.height = size.h_px;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.save();
    ctx.translate(size.offsetX | 0, size.offsetY | 0);
    painter(ctx, c.width, c.height);
    ctx.restore();
    return c;
  }
  function edgeBox(ctx, w, h) {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, 1);
    ctx.fillRect(0, h - 1, w, 1);
    ctx.fillRect(0, 0, 1, h);
    ctx.fillRect(w - 1, 0, 1, h);
  }
  function drawTest() {
    var size = geom();
    return paintShifted(size, function (ctx, w, h) {
      edgeBox(ctx, w, h);
      ctx.fillStyle = "#000";
      ctx.font = "bold 22px sans-serif";
      ctx.fillText("M2-H test  " + size.wMm + "\u00d7" + size.hMm + " mm", 10, 28);
      ctx.font = "18px sans-serif";
      ctx.fillText(w + " \u00d7 " + h + " px   feed " + size.hMm + " mm", 10, 52);
      ctx.font = "16px sans-serif";
      ctx.fillText("border is the bitmap edge", 10, 74);
      var bc = barcodeCanvas("M2H-TEST", 2, Math.max(36, h - 110));
      var bw = Math.min(bc.width, w - 24);
      ctx.drawImage(bc, 12, 86, bw, Math.max(36, h - 118));
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("L", 8, h - 10);
      ctx.textAlign = "right";
      ctx.fillText("R", w - 8, h - 10);
      ctx.textAlign = "left";
    });
  }
  function labelPrefix(t) {
    if (t.id === "granite-warehouse") return "GW";
    if (t.id === "top-quartz") return "TQ";
    return String(t.id || "LB").replace(/[^a-z0-9]/gi, "").slice(0, 3).toUpperCase() || "LB";
  }
  function readLabelStore() {
    splitLegacyLabelStore();
    try { return JSON.parse(localStorage.getItem(LABEL_SERIAL_KEY) || "{}") || {}; } catch (e) { return {}; }
  }
  function assignCodes(t, specs) {
    var all = readLabelStore();
    var book = all[t.id];
    if (!book || typeof book.next !== "number" || !book.pieces) book = { next: 1, pieces: {} };
    var out = [];
    specs.forEach(function (spec) {
      var existing = book.pieces[spec.key];
      if (existing) { out.push(existing); return; }
      var code = spec.code;
      if (!code) {
        code = labelPrefix(t) + "-" + String(book.next).padStart(4, "0");
        book.next += 1;
      }
      book.pieces[spec.key] = code;
      out.push(code);
    });
    all[t.id] = book;
    localStorage.setItem(LABEL_SERIAL_KEY, JSON.stringify(all));
    t.labelSerial = { next: book.next, pieces: book.pieces };
    if (window.Omnivate) window.Omnivate.persist();
    return out.slice();
  }
  function auditCodes(codes) {
    var seen = {};
    var dups = [];
    (codes || []).forEach(function (c) {
      if (!c) return;
      if (seen[c]) dups.push(c);
      seen[c] = true;
    });
    var nums = (codes || []).map(function (c) {
      var m = String(c).match(/(\d+)$/);
      return m ? Number(m[1]) : NaN;
    });
    var consecutive = nums.length > 0 && nums.every(function (n, i) { return i === 0 || n === nums[i - 1] + 1; });
    return { unique: dups.length === 0, consecutive: consecutive, dups: dups, codes: (codes || []).slice() };
  }
  function warnCodes(report) {
    if (!report) return report;
    if (!report.unique) O.toast("Duplicate label numbers: " + report.dups.join(", "), "err");
    else if (report.codes.length > 1 && !report.consecutive) O.toast("Label numbers are not consecutive", "warn");
    return report;
  }
  function drawProductLabel(t, p, code) {
    var size = geom();
    var label = code || (p && p.sku) || "LABEL";
    return paintShifted(size, function (ctx, w, h) {
      ctx.fillStyle = "#000";
      ctx.font = "bold 22px sans-serif";
      var price = size.showPrice && p ? zar2(p.sellIncl) : "";
      var pw = price ? ctx.measureText(price).width + 8 : 0;
      ctx.fillText(fit(ctx, (p && p.name) || label, w - 20 - pw), 8, 26);
      if (price) {
        ctx.textAlign = "right";
        ctx.fillText(price, w - 8, 26);
        ctx.textAlign = "left";
      }
      var bc = barcodeCanvas(label, 2, Math.max(40, h - 78));
      var bw = Math.min(bc.width, w - 16);
      ctx.drawImage(bc, 8, 36, bw, Math.max(40, h - 78));
      ctx.font = "bold 18px sans-serif";
      ctx.fillText(label, 8, h - 10);
    });
  }
  function drawOrderLabel(o) {
    var size = geom();
    var code = o.slab || o.orderNo;
    return paintShifted(size, function (ctx, w, h) {
      ctx.fillStyle = "#000";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText(fit(ctx, o.stockType + "  " + o.colour + " " + o.finish, w - 16), 8, 24);
      ctx.font = "18px sans-serif";
      ctx.fillText(o.L + " \u00d7 " + o.W + " \u00d7 " + o.T + " cm", 8, 46);
      var bc = barcodeCanvas(code, 2, Math.max(36, h - 86));
      var bw = Math.min(bc.width, w - 16);
      ctx.drawImage(bc, 8, 54, bw, Math.max(36, h - 86));
      ctx.font = "16px sans-serif";
      ctx.fillText(code, 8, h - 8);
    });
  }

  function explainBle(err) {
    var m = String((err && (err.message || err.name)) || err || "");
    if (/cancel|NotFoundError/i.test(m)) return "No printer selected.";
    if (/GATT|NetworkError|disconnect|security|not connected/i.test(m)) {
      return "Could not reach the NIIMBOT. Turn off the NIIMBOT phone app and disconnect it there first — only one connection at a time. On Android, Bluetooth and Location must both be on.";
    }
    return m || "Print failed";
  }
  function printCanvas(canvas) {
    var size = geom();
    if (canvas.width !== size.w_px || canvas.height !== size.h_px) {
      O.toast("Bitmap " + canvas.width + "\u00d7" + canvas.height + " does not match " + size.w_px + "\u00d7" + size.h_px, "err");
      return;
    }
    if (!window.Niimbot) {
      O.toast("Printer driver did not load", "err");
      return;
    }
    var url = canvas.toDataURL("image/png");
    var sizeArg = { w_px: size.w_px, h_px: size.h_px, dpi: 300, w_mm: size.wMm, h_mm: size.hMm };
    printerMsg = "Sending " + size.w_px + "\u00d7" + size.h_px + " px\u2026";
    window.Niimbot.printImage(url, {
      model: M2H,
      size: sizeArg,
      copies: Math.max(1, size.copies | 0),
      offsetY: 0,
      onProgress: function (s) { printerMsg = s; var el = document.getElementById("printer-status"); if (el) el.textContent = s; }
    }).then(function () {
      printerMsg = "Printed " + size.w_px + "\u00d7" + size.h_px + " px (" + size.wMm + "\u00d7" + size.hMm + " mm)";
      O.toast(printerMsg, "ok");
      var el = document.getElementById("printer-status");
      if (el) el.textContent = printerMsg;
    }).catch(function (err) {
      printerMsg = explainBle(err);
      O.toast(printerMsg, "err");
      var el = document.getElementById("printer-status");
      if (el) el.textContent = printerMsg;
    });
  }
  function connectPrinter() {
    if (!window.Niimbot || !window.Niimbot.isSupported()) {
      O.toast("Web Bluetooth needs Chrome or Edge on HTTPS. On Android turn Bluetooth and Location on.", "warn");
      return;
    }
    printerMsg = "Choose the M2_H over Bluetooth\u2026";
    if (window.Niimbot.transportKind && window.Niimbot.transportKind() === "usb") window.Niimbot.disconnect();
    window.Niimbot.connect(M2H).then(function () {
      if (window.OmnivatePrint) window.OmnivatePrint.rememberBluetooth();
      var info = window.Niimbot.printer;
      printerMsg = info ? ("Bluetooth \u00b7 " + info.label + " (id " + info.modelId + ")") : "Bluetooth \u00b7 connected";
      O.toast(printerMsg, "ok");
      var el = document.getElementById("printer-status");
      if (el) el.textContent = printerMsg;
    }).catch(function (err) {
      printerMsg = explainBle(err);
      O.toast(printerMsg, "err");
    });
  }
  function browserPrint(canvas) {
    var size = geom();
    var root = document.getElementById("label-print-root");
    if (!root) return;
    root.innerHTML = '<img alt="Label" style="width:' + size.wMm + 'mm;height:' + size.hMm + 'mm;display:block" src="' + canvas.toDataURL("image/png") + '">';
    var style = document.getElementById("label-page-css") || document.createElement("style");
    style.id = "label-page-css";
    style.textContent = "@page { size: " + size.wMm + "mm " + size.hMm + "mm; margin: 0; } @media print { html, body { margin: 0 !important; padding: 0 !important; } body.printing-labels > *:not(#label-print-root) { display: none !important; } body.printing-labels #label-print-root { display: block !important; } }";
    document.head.appendChild(style);
    document.body.classList.add("printing-labels");
    var cleanup = function () {
      document.body.classList.remove("printing-labels");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    setTimeout(function () { window.print(); }, 40);
  }

  function P(sku, name, sell, cost, onHand, reorder, uom) {
    return { id: sku, sku: sku, barcode: sku, name: name, sellIncl: sell, costIncl: cost, onHand: onHand, reorder: reorder, uom: uom };
  }
  function C(code, name, city, sample) {
    return { id: code, code: code, name: name, city: city, phone: "", email: "", terms: "30 days", sample: !!sample, address: city ? city + ", Gauteng" : "Gauteng" };
  }
  function measures(L, W, T, qty) {
    var m2 = round2((L / 100) * (W / 100) * qty);
    var m3 = round2(m2 * (T / 100));
    var kg = round2(m3 * 3000);
    return { m2: m2, m3: m3, kg: kg };
  }
  function lineMoney(o) {
    var base = o.priceMode === "m2" ? o.m2 * o.price : o.qty * o.price;
    return round2(base * (1 - (o.discount || 0) / 100));
  }
  function docTotals(lines) {
    var sub = round2(lines.reduce(function (s, l) { return s + (Number(l.qty) || 0) * (Number(l.price) || 0); }, 0));
    var vat = round2(sub * 0.15);
    return { sub: sub, vat: vat, total: round2(sub + vat) };
  }

  var TQ_PRODUCTS = [
    P("TQ-GR-RST20", "Rustenburg Grey granite 20 mm polished", 2450, 1680, 42, 12, "m\u00b2"),
    P("TQ-GR-IMP30", "Impala Black granite 30 mm polished", 3200, 2100, 8, 10, "m\u00b2"),
    P("TQ-GR-AFB20", "African Black granite 20 mm honed", 2890, 1950, 18, 8, "m\u00b2"),
    P("TQ-GR-BEL20", "Belfast Black granite 20 mm leather", 3100, 2050, 6, 8, "m\u00b2"),
    P("TQ-GR-STG20", "Steel Grey granite 20 mm polished", 2680, 1750, 21, 8, "m\u00b2"),
    P("TQ-QZ-CAL20", "Calacatta engineered quartz 20 mm", 3850, 2400, 22, 8, "m\u00b2"),
    P("TQ-QZ-CAR20", "Carrara-look quartz 20 mm polished", 3450, 2200, 14, 6, "m\u00b2"),
    P("TQ-QZ-CON20", "Concrete Grey quartz 20 mm honed", 2980, 1900, 11, 6, "m\u00b2"),
    P("TQ-QZ-STA20", "Statuario quartz 20 mm polished", 4200, 2700, 4, 6, "m\u00b2"),
    P("TQ-PO-NERO", "Nero porcelain slab 6 mm", 1890, 1120, 16, 6, "slab"),
    P("TQ-PO-CAL", "Calacatta porcelain slab 6 mm", 2150, 1300, 9, 4, "slab"),
    P("TQ-PO-CEM", "Cement Grey porcelain 600\u00d71200", 285, 160, 80, 20, "m\u00b2"),
    P("TQ-PO-OAK", "Oak porcelain \u00b7 polished \u00b7 20 mm \u00b7 3200\u00d71600 \u00b7 CL", 2680, 1740, 14, 4, "m\u00b2"),
    P("TQ-OFF-GRY", "Rustenburg Grey offcuts \u00b7 honed \u00b7 20 mm \u00b7 randoms \u00b7 C", 980, 420, 22, 8, "m\u00b2"),
    P("TQ-OFF-BLK", "Impala Black offcuts \u00b7 polished \u00b7 30 mm \u00b7 randoms \u00b7 C", 1240, 510, 9, 4, "m\u00b2"),
    P("TQ-GR-NRO20", "Nero Africa granite \u00b7 polished \u00b7 20 mm \u00b7 3200\u00d71600 \u00b7 CL", 3120, 2080, 11, 4, "m\u00b2"),
    P("TQ-QZ-ISL20", "Island White quartz \u00b7 polished \u00b7 20 mm \u00b7 3200\u00d71600 \u00b7 A", 3980, 2550, 7, 3, "m\u00b2")
  ];
  var GW_PRODUCTS = [
    P("GW-GR-RST20", "Rustenburg Grey 20 mm polished", 2890, 2100, 15, 6, "m\u00b2"),
    P("GW-GR-IMP20", "Impala Black 20 mm flamed", 3350, 2400, 3, 5, "m\u00b2"),
    P("GW-GR-BEL20", "Belfast Black 20 mm polished", 3650, 2600, 10, 4, "m\u00b2"),
    P("GW-GR-STG20", "Steel Grey granite 20 mm", 2750, 1900, 12, 4, "m\u00b2"),
    P("GW-GR-KAS20", "Kashmir White granite 20 mm", 4100, 2950, 2, 3, "m\u00b2"),
    P("GW-QZ-CAL20", "Calacatta quartz 20 mm", 4450, 3100, 8, 4, "m\u00b2"),
    P("GW-QZ-SNO20", "Snow White quartz 20 mm", 3980, 2700, 6, 3, "m\u00b2"),
    P("GW-QZ-BLK20", "Absolute Black quartz 20 mm", 4200, 2900, 7, 3, "m\u00b2"),
    P("GW-QZ-SAN20", "Sand Dune quartz 20 mm leather", 3600, 2450, 5, 3, "m\u00b2"),
    P("GW-PO-MAR", "Marble-look porcelain slab 6 mm", 2350, 1500, 11, 4, "slab"),
    P("GW-PO-TER", "Terrazzo porcelain 600\u00d7600", 340, 190, 60, 20, "m\u00b2"),
    P("GW-PO-SLT", "Slate-look porcelain 600\u00d7600", 310, 175, 8, 15, "m\u00b2"),
    P("GW-OFF-MIX", "Mixed granite offcuts \u00b7 honed \u00b7 20 mm \u00b7 randoms \u00b7 C", 890, 360, 18, 6, "m\u00b2"),
    P("GW-OFF-QZ", "Quartz offcuts \u00b7 polished \u00b7 20 mm \u00b7 randoms \u00b7 C", 1120, 470, 11, 4, "m\u00b2"),
    P("GW-GR-AFB20", "African Black granite \u00b7 polished \u00b7 20 mm \u00b7 3200\u00d71600 \u00b7 CL", 3340, 2210, 8, 3, "m\u00b2"),
    P("GW-QZ-CAL30", "Calacatta quartz \u00b7 leathered \u00b7 30 mm \u00b7 3200\u00d71600 \u00b7 A", 4680, 3120, 5, 2, "m\u00b2"),
    P("GW-OFF-BEL", "Belfast Black offcuts \u00b7 polished \u00b7 20 mm \u00b7 randoms \u00b7 C", 1360, 540, 7, 3, "m\u00b2"),
    P("GW-PO-NRO20", "Nero porcelain \u00b7 honed \u00b7 20 mm \u00b7 3200\u00d71600 \u00b7 CL", 2460, 1580, 9, 3, "m\u00b2")
  ];

  function sampleCustomers(prefix, names, other) {
    var rows = [C(prefix + "-OTHER", other.name, other.city, false)];
    names.forEach(function (n, i) { rows.push(C(prefix + "-C" + (i + 1), n[0], n[1], true)); });
    return rows;
  }
  function quote(id, number, customerId, date, status, lines) {
    return { id: id, number: number, customerId: customerId, date: date, status: status, lines: lines };
  }
  function invoice(id, number, customerId, date, status, lines) {
    return { id: id, number: number, customerId: customerId, date: date, due: date, status: status, lines: lines, stockApplied: true };
  }
  function linesOf(products, spec) {
    return spec.map(function (s) {
      var p = products.find(function (x) { return x.sku === s[0]; });
      return { productId: p.id, qty: s[1], price: excl(p.sellIncl) };
    });
  }

  function seedOrders(customers) {
    var rand = (function (a) {
      return function () { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; };
    })(4716);
    var pick = function (arr) { return arr[Math.floor(rand() * arr.length)]; };
    var grades = ["CL", "C", "A"];
    var finishes = ["Polished", "Honed", "Leathered"];
    var colours = [["RTB", "Rustenburg Black"], ["RGR", "Rustenburg Grey"], ["IMP", "Impala"], ["BEL", "Belfast Black"], ["AFB", "African Black"], ["STG", "Steel Grey"], ["NRO", "Nero"], ["CAL", "Calacatta"]];
    var orders = [];
    for (var i = 0; i < 30; i++) {
      var type = i % 5 === 0 ? "RANDOMS" : "SLABS";
      var L = type === "SLABS" ? 280 + (i % 5) * 10 : 140 + (i % 4) * 20;
      var W = type === "SLABS" ? 160 : 80;
      var T = i % 2 ? 3 : 2;
      var qty = type === "SLABS" ? 4 + (i % 3) : 6;
      var col = pick(colours);
      var price = type === "SLABS" ? 1850 + (i % 6) * 150 : 1100 + (i % 3) * 80;
      var day = 18 + Math.floor((i / 30) * 58);
      var dt = new Date(Date.UTC(2026, 8, 18));
      dt.setUTCDate(dt.getUTCDate() + Math.floor(i * 1.9));
      var iso = dt.toISOString().slice(0, 10);
      var o = {
        id: "SO" + (4716 + i),
        orderNo: "SO" + (4716 + i),
        date: iso,
        customerId: customers[i % customers.length].id,
        stockType: type,
        L: L, W: W, T: T, qty: qty,
        slab: "S" + (1040 + i),
        grade: grades[i % grades.length],
        colour: col[0],
        colourName: col[1],
        finish: finishes[i % finishes.length],
        discount: [0, 0, 5, 10][i % 4],
        priceMode: "m2",
        price: price,
        transport: [0, 450, 850, 1200][i % 4],
        sage: i % 3 === 0 ? "" : "SI" + (88000 + i),
        production: i % 4 !== 0,
        complete: i % 5 === 0
      };
      var mm = measures(o.L, o.W, o.T, o.qty);
      o.m2 = mm.m2; o.m3 = mm.m3; o.kg = mm.kg;
      o.total = lineMoney(o);
      orders.push(o);
    }
    return orders;
  }

  function seedBooks(t) {
    if (t.id === "top-quartz") {
      var cust = sampleCustomers("TQ", [
        ["Sample: East Rand Stoneworks", "Kempton Park"],
        ["Sample: Highveld Kitchens", "Springs"],
        ["Sample: Vaal Fabricators", "Vereeniging"],
        ["Sample: Pretoria Surface Co", "Pretoria"],
        ["Sample: West Rand Installers", "Roodepoort"],
        ["Sample: Midrand Benchtops", "Midrand"],
        ["Sample: Alberton Stone & Tops", "Alberton"],
        ["Sample: Benoni Kitchen Fitters", "Benoni"],
        ["Sample: Germiston Stone Retail", "Germiston"]
      ], { name: "The Granite Warehouse (sample account)", city: "Gauteng" });
      var lines = function (spec) { return linesOf(TQ_PRODUCTS, spec); };
      return {
        seed: SEED,
        products: TQ_PRODUCTS,
        customers: cust,
        quotes: [
          quote("q1", "TQ-QT-1042", "TQ-C1", "2026-11-14", "Draft", lines([["TQ-GR-RST20", 18], ["TQ-OFF-GRY", 6]])),
          quote("q2", "TQ-QT-1043", "TQ-C6", "2026-11-10", "Sent", lines([["TQ-QZ-CAL20", 22]])),
          quote("q3", "TQ-QT-1044", "TQ-C2", "2026-11-04", "Sent", lines([["TQ-GR-BEL20", 14], ["TQ-QZ-STA20", 8]])),
          quote("q4", "TQ-QT-1045", "TQ-OTHER", "2026-10-28", "Accepted", lines([["TQ-GR-IMP30", 16], ["TQ-OFF-BLK", 5]])),
          quote("q5", "TQ-QT-1046", "TQ-C4", "2026-11-16", "Draft", lines([["TQ-PO-NERO", 20]]))
        ],
        invoices: [
          invoice("i1", "TQ-INV-2201", "TQ-C1", "2026-09-16", "Paid", [{ productId: "TQ-GR-RST20", qty: 40, price: 2500 }]),
          invoice("i2", "TQ-INV-2202", "TQ-C3", "2026-09-29", "Paid", [{ productId: "TQ-GR-AFB20", qty: 30, price: 2600 }]),
          invoice("i3", "TQ-INV-2203", "TQ-C6", "2026-10-09", "Paid", [{ productId: "TQ-QZ-CAL20", qty: 36, price: 3400 }]),
          invoice("i4", "TQ-INV-2204", "TQ-C4", "2026-10-23", "Paid", [{ productId: "TQ-PO-NERO", qty: 50, price: 1900 }]),
          invoice("i5", "TQ-INV-2205", "TQ-C5", "2026-11-03", "Paid", [{ productId: "TQ-GR-IMP30", qty: 48, price: 2800 }]),
          invoice("i6", "TQ-INV-2206", "TQ-C6", "2026-11-11", "Unpaid", [{ productId: "TQ-QZ-CAR20", qty: 55, price: 3100 }]),
          invoice("i7", "TQ-INV-2207", "TQ-C7", "2026-11-18", "Unpaid", [{ productId: "TQ-QZ-STA20", qty: 40, price: 3650 }]),
          invoice("i8", "TQ-INV-2208", "TQ-OTHER", "2026-11-24", "Paid", [{ productId: "TQ-GR-RST20", qty: 70, price: 2450 }]),
          invoice("i9", "TQ-INV-2209", "TQ-C8", "2026-11-27", "Paid", [{ productId: "TQ-PO-CAL", qty: 80, price: 1870 }])
        ],
        orders: seedOrders(cust)
      };
    }
    if (t.id === "granite-warehouse") {
      var gc = sampleCustomers("GW", [
        ["Sample: Mamelodi Fabricators", "Pretoria"],
        ["Sample: Eastvale Stone Retail", "Springs"],
        ["Sample: Highveld Installers", "Heidelberg"],
        ["Sample: Kempton Kitchen Tops", "Kempton Park"],
        ["Sample: Vaal River Fabricators", "Vanderbijlpark"],
        ["Sample: Pretoria Stone Fitters", "Pretoria"],
        ["Sample: West Rand Kitchens", "Krugersdorp"],
        ["Sample: Alberton Benchtops", "Alberton"],
        ["Sample: Boksburg Installations", "Boksburg"]
      ], { name: "Top Quartz (sample account)", city: "Kempton Park" });
      return {
        seed: SEED,
        products: GW_PRODUCTS,
        customers: gc,
        quotes: [
          quote("gq1", "GW-QT-876", "GW-C4", "2026-11-11", "Sent", linesOf(GW_PRODUCTS, [["GW-QZ-CAL20", 4]])),
          quote("gq2", "GW-QT-877", "GW-C1", "2026-11-15", "Draft", linesOf(GW_PRODUCTS, [["GW-GR-AFB20", 12]]))
        ],
        invoices: [
          invoice("gi1", "GW-INV-1538", "GW-C4", "2026-09-14", "Paid", [{ productId: "GW-GR-RST20", qty: 42, price: 2550 }]),
          invoice("gi2", "GW-INV-1539", "GW-C2", "2026-09-26", "Paid", [{ productId: "GW-GR-BEL20", qty: 32, price: 3200 }]),
          invoice("gi3", "GW-INV-1540", "GW-C5", "2026-10-07", "Paid", [{ productId: "GW-QZ-CAL20", qty: 40, price: 3600 }]),
          invoice("gi4", "GW-INV-1541", "GW-C6", "2026-10-20", "Paid", [{ productId: "GW-GR-STG20", qty: 46, price: 2400 }]),
          invoice("gi5", "GW-INV-1542", "GW-C3", "2026-11-02", "Paid", [{ productId: "GW-GR-IMP20", qty: 50, price: 2900 }]),
          invoice("gi6", "GW-INV-1543", "GW-C7", "2026-11-10", "Unpaid", [{ productId: "GW-QZ-BLK20", qty: 48, price: 3650 }]),
          invoice("gi7", "GW-INV-1544", "GW-C8", "2026-11-17", "Unpaid", [{ productId: "GW-GR-KAS20", qty: 36, price: 3600 }]),
          invoice("gi8", "GW-INV-1545", "GW-OTHER", "2026-11-22", "Paid", [{ productId: "GW-PO-MAR", qty: 90, price: 2040 }]),
          invoice("gi9", "GW-INV-1546", "GW-C9", "2026-11-28", "Paid", [{ productId: "GW-QZ-SNO20", qty: 44, price: 3460 }])
        ],
        orders: seedOrders(gc)
      };
    }
    return { seed: SEED, products: [P(t.id.toUpperCase().slice(0, 4) + "-ITEM", "Sample item", 100, 60, 10, 2, "each")], customers: [C("C1", "Sample customer", t.profile && t.profile.city, true)], quotes: [], invoices: [], orders: [] };
  }
  function makeGrvs(products, prefix) {
    function line(index, qty) {
      var p = products[index] || products[0];
      return { productId: p.id, qty: qty, cost: excl(p.costIncl) };
    }
    return [
      { id: prefix + "-grv1", number: prefix + "-GRV-104", supplier: "Sample: Northern Slate & Stone", date: "2026-11-08", posted: true, lines: [line(0, 6), line(1, 2)] },
      { id: prefix + "-grv2", number: prefix + "-GRV-105", supplier: "Sample: Kalahari Two Stone", date: "2026-11-12", posted: true, lines: [line(2, 4)] },
      { id: prefix + "-grv3", number: prefix + "-GRV-106", supplier: "Sample: Pietersburg Grey Quarry", date: "2026-11-15", posted: true, lines: [line(3, 3), line(4, 1)] }
    ];
  }
  function bumpDocSequences(t) {
    if (!t || !t.profile || !t.books) return false;
    var changed = false;
    (t.profile.sequences || []).forEach(function (seq) {
      var list = /quot/i.test(seq.doc) ? t.books.quotes : /inv/i.test(seq.doc) ? t.books.invoices : null;
      if (!list || !seq.prefix) return;
      var re = new RegExp("^" + String(seq.prefix).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(\\d+)$");
      var max = 0;
      list.forEach(function (d) {
        var m = String(d.number || "").match(re);
        if (m) max = Math.max(max, Number(m[1]));
      });
      if ((Number(seq.next) || 0) <= max) {
        seq.next = max + 1;
        changed = true;
      }
    });
    return changed;
  }
  function ensureBooks(t) {
    if (!t) return null;
    var changed = false;
    if (!t.books || t.books.seed !== SEED) {
      t.books = seedBooks(t);
      changed = true;
    }
    if (!t.books.grvs) {
      t.books.grvs = makeGrvs(t.books.products || [], labelPrefix(t));
      changed = true;
    }
    if (bumpDocSequences(t)) changed = true;
    if (changed) O.persist();
    return t.books;
  }

  function cust(t, id) {
    return (t.books.customers || []).find(function (c) { return c.id === id; });
  }
  function prod(t, id) {
    return (t.books.products || []).find(function (p) { return p.id === id; });
  }
  function low(p) { return (Number(p.onHand) || 0) <= (Number(p.reorder) || 0); }

  function metrics(t) {
    var b = t.books;
    var sales = 0;
    var debtors = 0;
    (b.invoices || []).forEach(function (inv) {
      if (inv.status === "Void") return;
      var d = String(inv.date || "");
      if (d < "2026-09-01" || d > "2026-11-30") return;
      var tot = docTotals(inv.lines).total;
      sales += tot;
      if (inv.status !== "Paid") debtors += tot;
    });
    if (!(b.invoices || []).length) {
      var ym = todayKey();
      (b.orders || []).forEach(function (o) {
        if (String(o.date).slice(0, 7) === ym) sales += (o.total || 0) + (o.transport || 0);
      });
    }
    var openQ = (b.quotes || []).filter(function (q) { return quoteHoldsStock(q.status); }).length;
    var openO = (b.orders || []).filter(function (o) { return !o.complete; }).length;
    var stock = 0, lows = 0;
    (b.products || []).forEach(function (p) {
      stock += (Number(p.onHand) || 0) * excl(p.costIncl);
      if (low(p)) lows++;
    });
    var orderBook = (b.orders || []).reduce(function (s, o) { return s + (Number(o.total) || 0) + (Number(o.transport) || 0); }, 0);
    return { sales: round2(sales), debtors: round2(debtors), orderBook: round2(orderBook), openQ: openQ, openO: openO, stock: stock, lows: lows };
  }

  function findCode(t, code) {
    var q = String(code || "").trim().toLowerCase();
    if (!q) return {};
    var product = (t.books.products || []).find(function (p) {
      return String(p.sku).toLowerCase() === q || String(p.barcode).toLowerCase() === q;
    });
    var order = (t.books.orders || []).find(function (o) {
      return String(o.orderNo).toLowerCase() === q || String(o.slab || "").toLowerCase() === q;
    });
    return { product: product, order: order };
  }

  function go(t, screen) { O.navigate("#/preview/" + t.id + "/work/" + screen); }

  function onScan(code, source) {
    var t = tenant();
    if (!t) return;
    ensureBooks(t);
    if (window.OmnivateShop && window.OmnivateShop.scan(t, code)) return;
    var found = findCode(t, code);
    var screen = screenName();
    if (!found.product && !found.order) {
      O.toast("No product or slab for " + code, "warn");
      return;
    }
    if ((screen === "orders") && found.order) {
      hit = { kind: "order", id: found.order.id };
      O.toast(found.order.orderNo + " \u00b7 " + found.order.stockType + (found.order.slab ? " \u00b7 " + found.order.slab : ""), "ok");
      O.render({ keepScroll: true });
      return;
    }
    if (found.product && (screen === "quote" || screen === "invoice") && draft) {
      captureDraft();
      draft.lines.push({ productId: found.product.id, qty: 1, price: excl(found.product.sellIncl) });
      O.toast("Added " + found.product.sku, "ok");
      O.render();
      var field = document.querySelector("[data-scan-field]");
      if (source === "field" && field) field.focus();
      return;
    }
    if (found.order) {
      hit = { kind: "order", id: found.order.id };
      O.toast("Slab/order " + (found.order.slab || found.order.orderNo), "ok");
      if (screen !== "orders") go(t, "orders");
      else O.render({ keepScroll: true });
      return;
    }
    hit = { kind: "product", id: found.product.id };
    O.toast(found.product.sku + " \u00b7 " + found.product.name + " \u00b7 " + found.product.onHand + " " + found.product.uom, "ok");
    if (screen !== "products") go(t, "products");
    else O.render({ keepScroll: true });
  }

  function isTyping(el) {
    if (!el || !el.tagName) return false;
    var tag = el.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    return !!el.isContentEditable;
  }
  document.addEventListener("keydown", function (e) {
    var scan = e.target && e.target.closest && e.target.closest("[data-scan-field]");
    if (scan) {
      if (e.key === "Enter") {
        e.preventDefault();
        var code = scan.value.trim();
        scan.value = "";
        if (code) onScan(code, "field");
      }
      wedge = [];
      return;
    }
    if (isTyping(e.target) && !(e.target.closest && e.target.closest("[data-scan-field]"))) { wedge = []; return; }
    var now = Date.now();
    if (e.key === "Enter") {
      if (wedge.length >= 4) {
        var maxGap = 0;
        for (var i = 1; i < wedge.length; i++) maxGap = Math.max(maxGap, wedge[i].t - wedge[i - 1].t);
        var span = wedge[wedge.length - 1].t - wedge[0].t;
        if (maxGap <= 60 && span < 900 && now - wedge[wedge.length - 1].t < 100) {
          e.preventDefault();
          onScan(wedge.map(function (c) { return c.k; }).join(""), "wedge");
        }
      }
      wedge = [];
      return;
    }
    if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
    if (wedge.length && now - wedge[wedge.length - 1].t > 60) wedge = [];
    wedge.push({ k: e.key, t: now });
  });

  function scanBar(hint) {
    return '<div class="scan-bar"><div class="scan-row"><input class="input" data-scan-field inputmode="none" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Scan barcode, SKU or slab # then Enter"><button type="button" class="btn btn-secondary scan-kbd" data-act="scan-keyboard" aria-label="Type a code">Keyboard</button></div><div class="tiny">' + hint + "</div></div>";
  }
  function cameraBtn(t) {
    if (!cameraOn(t)) return "";
    return '<button class="btn btn-sm btn-secondary" data-act="scan-camera" data-id="' + t.id + '">Scan by camera</button>';
  }

  function labelPanel() {
    var s = geom();
    var preview = drawTest().toDataURL("image/png");
    return '<div class="card" style="margin-bottom:12px"><div class="card-b">' +
      '<div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center">' +
      "<div><strong>Label size</strong><div class=\"tiny\">M2-H default 50 mm across the printhead \u00d7 15 mm feed. Bitmap " + s.w_px + " \u00d7 " + s.h_px + " px at 300 dpi (same 50 mm width as a 50\u00d730 label, half the height).</div></div>" +
      '<span class="badge badge-teal" id="printer-status">' + O.esc(window.OmnivatePrint && window.OmnivatePrint.statusText() !== "Not connected" ? window.OmnivatePrint.statusText() : printerMsg) + "</span></div>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0">' +
      presetBtn(50, 15) + presetBtn(50, 30) + presetBtn(50, 25) + presetBtn(40, 30) + presetBtn(30, 15) +
      "</div>" +
      '<div class="form-grid">' +
      numField("Width mm (printhead)", "wMm", s.wMm) +
      numField("Feed mm (length)", "hMm", s.hMm) +
      numField("Offset X px", "offsetX", s.offsetX) +
      numField("Offset Y px", "offsetY", s.offsetY) +
      '<div class="field"><label>Copies</label><input class="input" type="number" min="1" data-label-setting="copies" value="' + s.copies + '"></div>' +
      '<div class="field"><label>Price on product labels</label><label class="switch"><input type="checkbox" data-label-setting="showPrice" ' + (s.showPrice ? "checked" : "") + '><span></span></label></div>' +
      "</div>" +
      '<img alt="Test label preview" src="' + preview + '" style="width:100%;max-width:520px;height:auto;background:#fff;border:1px solid var(--border);margin:8px 0">' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<button class="btn btn-sm btn-primary" data-act="print-test">Print test label</button>' +
      '<button class="btn btn-sm btn-secondary" data-act="print-test-browser">Test via computer</button>' +
      '<button class="btn btn-sm btn-secondary" data-act="connect-printer">Connect via Bluetooth</button>' +
      '<button class="btn btn-sm btn-secondary usb-only" data-act="connect-usb">Connect via USB</button>' +
      "</div>" +
      '<p class="usb-phone-note">USB needs desktop Chrome or Edge. On this phone, use Bluetooth.</p>' +
      '<p class="tiny" style="margin-top:8px">The test draws a black box on the exact edge of the ' + s.w_px + "\u00d7" + s.h_px + " bitmap. Nudge offset X/Y if the box does not sit on the label. Last link: " + O.esc((window.OmnivatePrint && window.OmnivatePrint.lastLink()) || "none") + ". Chrome may list the printer as \"Port 3\" (COM3). Close the NIIMBOT phone and desktop apps, and disconnect Bluetooth on this page, before USB — one link only. Only install a CH340 driver if Device Manager names a CH340 chip; many M2-H units use built-in USB CDC.</p>" +
      "</div></div>";
  }
  function presetBtn(w, h) {
    var s = loadLabel();
    var on = Number(s.wMm) === w && Number(s.hMm) === h;
    return '<button class="btn btn-sm ' + (on ? "btn-primary" : "btn-secondary") + '" data-act="label-preset" data-w="' + w + '" data-h="' + h + '">' + w + "\u00d7" + h + "</button>";
  }
  function numField(label, key, val) {
    return '<div class="field"><label>' + label + '</label><input class="input" type="number" step="1" data-label-setting="' + key + '" value="' + val + '"></div>';
  }

  function cols(t, mod, screen, map) {
    var resolved = O.resolvedColumns(t, mod, screen);
    var byId = {};
    map.forEach(function (col) { byId[col.id] = col; });
    var seen = {};
    var out = [];
    resolved.forEach(function (r) {
      var col = byId[r.id];
      if (!col || r.visible === false) return;
      seen[col.id] = true;
      out.push({ id: col.id, key: col.key, label: r.displayName || col.label, align: col.align || "" });
    });
    map.forEach(function (col) {
      if (seen[col.id]) return;
      if (resolved.some(function (r) { return r.id === col.id; })) return;
      out.push({ id: col.id, key: col.key, label: col.label, align: col.align || "" });
    });
    return out;
  }
  var PRODUCT_MAP = [
    { id: "M29::Item master::1", key: "sku", label: "Item code" },
    { id: "M29::Item master::2", key: "name", label: "Description" },
    { id: "M29::Item master::8", key: "barcode", label: "Barcode" },
    { id: "M29::Item master::14", key: "sell", label: "Selling price", align: "right" },
    { id: "M29::Item master::11", key: "cost", label: "Standard cost", align: "right" },
    { id: "M29::Stock on hand::6", key: "onHand", label: "Qty on hand", align: "right" },
    { id: "M29::Item master::17", key: "reorder", label: "Reorder point", align: "right" }
  ];
  var CUST_MAP = [
    { id: "M22::Customers::1", key: "code", label: "Customer code" },
    { id: "M22::Customers::2", key: "name", label: "Name" },
    { id: "M22::Customers::15", key: "city", label: "City" },
    { id: "M22::Customers::18", key: "phone", label: "Phone" },
    { id: "M22::Customers::19", key: "email", label: "Email" },
    { id: "M22::Customers::7", key: "terms", label: "Payment terms" }
  ];
  var QUOTE_MAP = [
    { id: "M22::Sales quotations::1", key: "number", label: "Quote no." },
    { id: "M22::Sales quotations::2", key: "date", label: "Date" },
    { id: "M22::Sales quotations::5", key: "customer", label: "Customer" },
    { id: "M22::Sales quotations::12", key: "sub", label: "Subtotal", align: "right" },
    { id: "M22::Sales quotations::13", key: "vat", label: "VAT", align: "right" },
    { id: "M22::Sales quotations::14", key: "total", label: "Total", align: "right" },
    { id: "M22::Sales quotations::15", key: "status", label: "Status" }
  ];
  var INV_MAP = [
    { id: "M22::Sales invoices::1", key: "number", label: "Invoice no." },
    { id: "M22::Sales invoices::2", key: "date", label: "Date" },
    { id: "M22::Sales invoices::5", key: "customer", label: "Customer" },
    { id: "M22::Sales invoices::12", key: "sub", label: "Subtotal", align: "right" },
    { id: "M22::Sales invoices::13", key: "vat", label: "VAT", align: "right" },
    { id: "M22::Sales invoices::14", key: "total", label: "Total", align: "right" },
    { id: "M22::Sales invoices::16", key: "status", label: "Status" }
  ];

  function cell(p, key) {
    if (key === "sku" || key === "barcode" || key === "code" || key === "number") return O.esc(p[key] || p.sku || "");
    if (key === "name") return O.esc(p.name) + (p.sample ? ' <span class="badge badge-neutral">Sample</span>' : "") + (low(p) && p.reorder !== undefined && p.onHand !== undefined && p.sellIncl !== undefined ? ' <span class="badge badge-warning">Low stock</span>' : "");
    if (key === "sell") return zar2(p.sellIncl);
    if (key === "cost") return zar2(p.costIncl);
    if (key === "onHand") return O.esc(p.onHand + " " + (p.uom || ""));
    if (key === "city" || key === "terms" || key === "reorder") return O.esc(p[key] == null || p[key] === "" ? "\u2014" : p[key]);
    if (key === "phone" || key === "email") return O.esc(p[key] || "\u2014");
    return O.esc(p[key] || "");
  }

  function table(columns, rows, rowHtml, lead) {
    return '<div class="table-wrap"><table class="data"><thead><tr>' +
      (lead ? "<th></th>" : "") +
      columns.map(function (c) { return "<th" + (c.align ? ' class="' + c.align + '"' : "") + ">" + O.esc(c.label) + "</th>"; }).join("") +
      "<th></th></tr></thead><tbody>" +
      (rows.map(rowHtml).join("") || '<tr><td colspan="' + (columns.length + 1) + '"><div class="empty">Nothing here yet.</div></td></tr>') +
      "</tbody></table></div>";
  }

  function quoteHoldsStock(status) {
    return status === "Draft" || status === "Sent" || status === "Accepted";
  }
  function openQuotedQty(t, productId, exceptQuoteId) {
    return (t.books.quotes || []).reduce(function (sum, q) {
      if (!quoteHoldsStock(q.status) || q.id === exceptQuoteId) return sum;
      return sum + (q.lines || []).reduce(function (n, l) {
        return l.productId === productId ? n + (Number(l.qty) || 0) : n;
      }, 0);
    }, 0);
  }
  function slabHold(t, p) {
    var onHand = Number(p.onHand) || 0;
    if (onHand <= 0) return "sold";
    if (openQuotedQty(t, p.id) >= onHand) return "reserved";
    return "free";
  }
  function quoteBadge(t) {
    var q = (t.books.quotes || []).find(function (d) { return d.id === t.books.quoteFocus; });
    if (!q) return "";
    return '<a class="quote-badge" href="#/preview/' + t.id + "/work/quote/" + q.id + '">Quote ' + (q.lines || []).length + "</a>";
  }
  function productRow(t, columns, p) {
    var hold = slabHold(t, p);
    var quoteBtn = !can(t, "M22", "C") ? "" : hold === "free"
      ? '<button class="btn btn-sm btn-primary" data-act="add-quote" data-id="' + t.id + '" data-sku="' + O.esc(p.id) + '">Add to quote</button>'
      : '<button class="btn btn-sm btn-secondary" type="button" disabled>' + (hold === "sold" ? "Sold" : "Reserved") + "</button>";
    return '<tr class="' + (hit.kind === "product" && hit.id === p.id ? "scan-hit" : "") + '" data-product="' + O.esc(p.id) + '">' +
      '<td><input type="checkbox" class="pick-product" value="' + O.esc(p.id) + '" aria-label="Select ' + O.esc(p.sku) + '"></td>' +
      columns.map(function (c) {
        var html = c.key === "name" ? (O.esc(p.name) + (low(p) ? ' <span class="badge badge-warning">Low stock</span>' : "") + (hold === "sold" ? ' <span class="badge badge-neutral">Sold</span>' : hold === "reserved" ? ' <span class="badge badge-warning">Reserved</span>' : "")) : cell(p, c.key);
        return "<td" + (c.align ? ' class="' + c.align + '"' : "") + ">" + html + "</td>";
      }).join("") +
      '<td><button class="btn btn-sm btn-secondary" data-act="slab-detail" data-id="' + t.id + '" data-sku="' + O.esc(p.id) + '">Details</button> ' +
      quoteBtn +
      ' <button class="btn btn-sm btn-secondary" data-act="print-product" data-id="' + t.id + '" data-sku="' + O.esc(p.sku) + '">Print label</button></td></tr>';
  }

  function docRow(t, columns, doc, kind) {
    var tot = docTotals(doc.lines);
    var c = cust(t, doc.customerId);
    var val = {
      number: doc.number, date: doc.date, customer: c ? c.name : "", status: doc.status,
      sub: zar2(tot.sub), vat: zar2(tot.vat), total: zar2(tot.total)
    };
    return "<tr>" + columns.map(function (col) {
      return "<td" + (col.align ? ' class="' + col.align + '"' : "") + ">" + O.esc(val[col.key] || "") + "</td>";
    }).join("") +
      '<td><a class="btn btn-sm btn-secondary" href="#/preview/' + t.id + "/work/" + kind + "/" + doc.id + '">Open</a></td></tr>';
  }

  function orderCells(t, o) {
    var c = cust(t, o.customerId);
    return {
      date: o.date,
      customer: c ? c.name : "",
      order: o.orderNo,
      type: o.stockType,
      L: String(o.L), W: String(o.W), T: String(o.T),
      qty: String(o.qty),
      slab: o.slab || "\u2014",
      grade: o.grade,
      m2: String(o.m2), m3: String(o.m3), kg: String(o.kg),
      colour: o.colour + " " + o.colourName,
      finish: o.finish,
      disc: String(o.discount),
      price: zar2(o.price),
      unit: o.priceMode === "m2" ? "per m\u00b2" : "per piece",
      total: zar2(o.total),
      transport: zar2(o.transport || 0),
      sage: o.sage || "\u2014"
    };
  }
  var ORDER_MAP = [
    { id: "M22::Slab orders::date", key: "date", label: "Date" },
    { id: "M22::Slab orders::customer", key: "customer", label: "Customer" },
    { id: "M22::Slab orders::order", key: "order", label: "Order no." },
    { id: "M22::Slab orders::type", key: "type", label: "Stock type" },
    { id: "M22::Slab orders::L", key: "L", label: "L cm" },
    { id: "M22::Slab orders::W", key: "W", label: "W cm" },
    { id: "M22::Slab orders::T", key: "T", label: "T cm" },
    { id: "M22::Slab orders::qty", key: "qty", label: "Qty" },
    { id: "M22::Slab orders::slab", key: "slab", label: "Slab #" },
    { id: "M22::Slab orders::grade", key: "grade", label: "Grade" },
    { id: "M22::Slab orders::m2", key: "m2", label: "m\u00b2" },
    { id: "M22::Slab orders::m3", key: "m3", label: "m\u00b3" },
    { id: "M22::Slab orders::kg", key: "kg", label: "kg" },
    { id: "M22::Slab orders::colour", key: "colour", label: "Colour code" },
    { id: "M22::Slab orders::finish", key: "finish", label: "Finish" },
    { id: "M22::Slab orders::disc", key: "disc", label: "Discount %" },
    { id: "M22::Slab orders::price", key: "price", label: "Price", align: "right" },
    { id: "M22::Slab orders::unit", key: "unit", label: "Price unit" },
    { id: "M22::Slab orders::total", key: "total", label: "Line total", align: "right" },
    { id: "M22::Slab orders::transport", key: "transport", label: "Transport", align: "right" },
    { id: "M22::Slab orders::sage", key: "sage", label: "Sage invoice" },
    { id: "M22::Slab orders::prod", key: "prod", label: "Production" },
    { id: "M22::Slab orders::done", key: "done", label: "Complete" }
  ];

  function ordersTable(t) {
    var columns = cols(t, "M22", "Slab orders", ORDER_MAP);
    var rows = t.books.orders || [];
    return '<div class="table-wrap"><table class="data"><thead><tr>' +
      columns.map(function (c) { return "<th>" + O.esc(c.label) + "</th>"; }).join("") +
      "<th></th></tr></thead><tbody>" +
      rows.map(function (o) {
        var v = orderCells(t, o);
        return '<tr class="' + (hit.kind === "order" && hit.id === o.id ? "scan-hit" : "") + '" id="order-' + O.esc(o.id) + '">' +
          columns.map(function (c) {
            if (c.key === "prod" || c.key === "done") {
              var flag = c.key === "prod" ? "production" : "complete";
              var on = c.key === "prod" ? o.production : o.complete;
              var lock = can(t, "M22", "U") ? "" : " disabled";
              return '<td><input type="checkbox" data-act="order-flag" data-id="' + t.id + '" data-order="' + o.id + '" data-flag="' + flag + '" ' + (on ? "checked" : "") + lock + "></td>";
            }
            return "<td>" + O.esc(v[c.key] == null ? "" : v[c.key]) + "</td>";
          }).join("") +
          '<td><button class="btn btn-sm btn-secondary" data-act="print-sales-order" data-id="' + t.id + '" data-order="' + o.id + '">Order</button> ' +
          '<button class="btn btn-sm btn-secondary" data-act="print-delivery" data-id="' + t.id + '" data-order="' + o.id + '">Delivery note</button> ' +
          '<button class="btn btn-sm btn-secondary" data-act="print-order" data-id="' + t.id + '" data-order="' + o.id + '">Label</button></td></tr>';
      }).join("") +
      "</tbody></table></div>";
  }

  function nav(t) {
    var items = [{ id: "home", label: "Home", on: true }];
    if (t.modules.M29 && can(t, "M29", "R")) items.push({ id: "products", label: "Stock", on: true });
    if (t.modules.M29 && can(t, "M29", "R")) items.push({ id: "grv", label: "GRV", on: true });
    if ((t.modules.M22 || t.modules.M23) && (can(t, "M22", "R") || can(t, "M23", "R"))) items.push({ id: "customers", label: "Customers", on: true });
    if (t.modules.M22 && can(t, "M22", "R")) items.push({ id: "quotes", label: "Quotes", on: true });
    if ((t.modules.M22 || t.modules.M17) && (can(t, "M22", "R") || can(t, "M17", "R"))) items.push({ id: "invoices", label: "Invoices", on: true });
    if (t.modules.M22 && can(t, "M22", "R") && (t.id === "granite-warehouse" || t.id === "top-quartz")) items.push({ id: "orders", label: "Sales orders", on: true });
    items.push({ id: "labels", label: "Labels", on: true });
    if (window.OmnivateShop) items = items.concat(window.OmnivateShop.nav(t));
    var cur = screenName();
    return items.filter(function (i) { return i.on !== false; }).map(function (i) {
      return '<a href="#/preview/' + t.id + "/work/" + i.id + '" class="' + (cur === i.id || (cur === "quote" && i.id === "quotes") || (cur === "invoice" && i.id === "invoices") ? "active" : "") + '">' + O.esc(i.label) + "</a>";
    }).join("");
  }

  function ico(name) {
    var paths = {
      home: '<path d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/>',
      stock: '<path d="M3 8h18v11H3z"/><path d="M3 8 7 4h10l4 4"/>',
      scan: '<path d="M7 4H4v3M17 4h3v3M4 17v3h3M20 17v3h-3M8 12h8"/>',
      prod: '<path d="M12 3 4 7v10l8 4 8-4V7z"/>',
      sales: '<path d="M5 7h14v12H5zM9 7V5h6v2"/>',
      more: '<path d="M5 7h14M5 12h14M5 17h14"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || paths.more) + "</svg>";
  }
  function quickRow(t) {
    var bits = [];
    if (t.modules.M29 && can(t, "M29", "C")) bits.push(["grv", "Receive stock"]);
    if (t.modules.M22 && can(t, "M22", "C")) bits.push(["quote/new", "New quote"]);
    if (t.features && t.features.production) bits.push(["production", "Move a block"]);
    if (t.features && t.features.timesheets) bits.push(["timesheets", "Clock in"]);
    if (!bits.length) return "";
    return '<div class="quick-row">' + bits.map(function (b) {
      return '<a href="#/preview/' + t.id + "/work/" + b[0] + '">' + O.esc(b[1]) + "</a>";
    }).join("") + "</div>";
  }
  function phoneBar(t) {
    var cur = screenName();
    var prodOn = !!(t.features && t.features.production);
    var fourth = prodOn ? { id: "production", label: "Production", icon: "prod" } : { id: "quotes", label: "Sales", icon: "sales" };
    var on = function (id) {
      if (id === "products") return cur === "products" || cur === "grv";
      if (id === "production") return cur === "production";
      if (id === "quotes") return cur === "quotes" || cur === "quote" || cur === "invoices" || cur === "invoice" || cur === "orders";
      return cur === id;
    };
    var tab = function (id, label, icon) {
      return '<a class="phone-tab' + (on(id) ? " on" : "") + '" href="#/preview/' + t.id + "/work/" + id + '">' + ico(icon) + "<span>" + label + "</span></a>";
    };
    var logo = t.logoData
      ? '<img class="phone-logo" src="' + t.logoData + '" alt="">'
      : '<span class="phone-mark">' + O.esc((t.tradingAs || "O").slice(0, 1)) + "</span>";
    return '<header class="phone-top">' + logo +
      '<div class="phone-id"><strong>' + O.esc(t.tradingAs || t.name) + "</strong><span>" + O.esc((t.profile && (t.profile.city || t.profile.province)) || "") + "</span></div>" +
      '<button class="btn btn-sm btn-secondary" type="button" data-act="logout">Sign out</button></header>' +
      '<div class="phone-sheet" id="phone-sheet"><button class="phone-sheet-bg" type="button" data-act="phone-more" aria-label="Close menu"></button><div class="phone-sheet-card"><div class="phone-sheet-h"><strong>More</strong><button class="btn btn-sm btn-secondary" type="button" data-act="phone-more">Close</button></div><div class="phone-sheet-links">' + nav(t) + "</div></div></div>" +
      '<nav class="phone-tabs">' + tab("home", "Home", "home") + tab("products", "Stock", "stock") +
      '<button type="button" class="phone-tab" data-act="phone-scan" data-id="' + t.id + '">' + ico("scan") + "<span>Scan</span></button>" +
      tab(fourth.id, fourth.label, fourth.icon) +
      '<button type="button" class="phone-tab" data-act="phone-more">' + ico("more") + "<span>More</span></button></nav>" +
      '<button type="button" class="scan-fab" data-act="phone-scan" data-id="' + t.id + '">' + ico("scan") + "<span>Scan</span></button>";
  }
  function shell(t, body) {
    var session = O.getSession();
    var who = session ? (session.name + (session.email ? " \u00b7 " + session.email : "")) : "";
    var imp = O.ui && O.ui.impersonating && O.ui.impersonating.tenantId === t.id ? O.ui.impersonating : null;
    var banner = imp
      ? '<div class="preview-banner">Impersonating <strong>' + O.esc(imp.userName) + "</strong> · " + O.esc(imp.reason) + '<span class="spacer"></span><button class="btn btn-sm btn-secondary" type="button" data-act="stop-impersonate" data-id="' + t.id + '">Stop impersonating</button></div>'
      : "";
    document.getElementById("app").innerHTML =
      banner +
      '<div class="preview-shell phone-app">' +
      '<aside class="preview-side" style="background: linear-gradient(180deg, ' + O.esc(t.color || "#3B2F8F") + ' 0%, #0f172a 140%)">' +
      '<div class="brand"><div class="tile" style="background:rgba(255,255,255,0.15);width:36px;height:36px;border-radius:8px;display:grid;place-items:center">' +
      (t.logoData ? '<img src="' + t.logoData + '" alt="" style="width:100%;height:100%;object-fit:contain">' : O.esc((t.tradingAs || t.name || "?").slice(0, 2).toUpperCase())) +
      '</div><div><div class="name">' + O.esc(t.tradingAs || t.name) + '</div><div class="plan">' + O.esc(t.profile && t.profile.city ? t.profile.city : (t.profile && t.profile.province) || "") + "</div></div></div>" +
      '<nav class="preview-nav">' + nav(t) + "</nav></aside>" +
      '<div class="preview-main"><div class="preview-top"><strong>' + O.esc(t.tradingAs || t.name) + '</strong>' +
      '<span class="spacer"></span><span class="tiny">Signed in as ' + O.esc(who) + "</span>" +
      '<button class="btn btn-sm btn-secondary" data-act="logout">Sign out</button>' +
      (session && session.kind === "tenant" ? "" : '<button class="btn btn-sm btn-primary" data-act="exit-preview" data-id="' + t.id + '">Control Centre</button>') +
      '</div><div class="preview-body">' + body + "</div></div>" + phoneBar(t) + "</div>";
    var row = document.querySelector(".scan-hit");
    if (row && row.scrollIntoView) row.scrollIntoView({ block: "center" });
  }

  function printerChip(t) {
    var status = (window.OmnivatePrint && window.OmnivatePrint.statusText()) || printerMsg || "Not connected";
    return '<a class="printer-chip" href="#/preview/' + t.id + '/work/labels" id="printer-status">' + O.esc(status) + "</a>";
  }
  function moduleTiles(t) {
    if (window.OmnivateShop && window.OmnivateShop.ready) window.OmnivateShop.ready(t);
    var m = metrics(t);
    var tiles = [];
    if (t.modules.M29 && can(t, "M29", "R")) tiles.push({ href: "products", icon: "St", name: "Stock", desc: "Slabs and offcuts on hand", num: (t.books.products || []).length + " lines" });
    if (t.modules.M29 && can(t, "M29", "R")) tiles.push({ href: "grv", icon: "GR", name: "Goods received", desc: "Receipts that update stock", num: (t.books.grvs || []).length + " GRVs" });
    if ((t.modules.M22 || t.modules.M23) && (can(t, "M22", "R") || can(t, "M23", "R"))) tiles.push({ href: "customers", icon: "Cu", name: "Customers", desc: "Fabricators, installers and retailers", num: String((t.books.customers || []).length) });
    if (t.modules.M22 && can(t, "M22", "R")) tiles.push({ href: "quotes", icon: "Qu", name: "Quotes", desc: "Open and sent quotations", num: m.openQ + " open" });
    if ((t.modules.M22 || t.modules.M17) && (can(t, "M22", "R") || can(t, "M17", "R"))) tiles.push({ href: "invoices", icon: "In", name: "Invoices", desc: "Tax invoices with 15% VAT", num: (t.books.invoices || []).filter(function (i) { return i.status !== "Paid"; }).length + " unpaid" });
    if (t.modules.M22 && can(t, "M22", "R") && (t.id === "granite-warehouse" || t.id === "top-quartz")) tiles.push({ href: "orders", icon: "SO", name: "Sales orders", desc: "Wholesale slab order book", num: m.openO + " open" });
    if (t.features && t.features.production) {
      var cutting = ((t.books.production && t.books.production.blocks) || []).filter(function (b) { return b.status === "Cutting"; }).length;
      tiles.push({ href: "production", icon: "Pr", name: "Production", desc: "Blocks, cutting and polishing", num: cutting + " cutting" });
    }
    if (t.features && t.features.timesheets) {
      var clocked = t.books.time && t.books.time.openShifts ? Object.keys(t.books.time.openShifts).length : 0;
      tiles.push({ href: "timesheets", icon: "Ti", name: "Timesheets", desc: "Shifts, roster and leave", num: clocked + " clocked in" });
    }
    tiles.push({ href: "labels", icon: "Lb", name: "Labels & printer", desc: "M2-H size, Bluetooth and USB", num: (window.OmnivatePrint && window.OmnivatePrint.statusText()) || "Not connected" });
    return '<div class="module-grid">' + tiles.map(function (tile) {
      return '<a class="module-tile" href="#/preview/' + t.id + "/work/" + tile.href + '"><span class="ic">' + tile.icon + "</span><strong>" + O.esc(tile.name) + '</strong><span class="tiny">' + O.esc(tile.desc) + '</span><span class="num">' + O.esc(String(tile.num)) + "</span></a>";
    }).join("") + "</div>";
  }
  function home(t) {
    var m = metrics(t);
    var k = [
      ["Sales, Sep\u2013Nov", zar2(m.sales), "Incl. 15% VAT"],
      ["Debtors", zar2(m.debtors), "Unpaid, incl. VAT"],
      ["Quotes open", String(m.openQ), "Draft, sent and accepted"],
      ["Stock value", zar2(m.stock), "At cost, excl. VAT"],
      ["Low stock", String(m.lows), "At or below reorder"]
    ];
    if (t.id === "granite-warehouse" || t.id === "top-quartz") k.splice(2, 0, ["Order book", zar2(m.orderBook), "Slab orders, excl. VAT"]);
    return quickRow(t) + moduleTiles(t) +
      '<div class="preview-dash">' + k.map(function (x) {
        return '<div class="kpi"><div class="label">' + x[0] + '</div><div class="value">' + x[1] + '</div><div class="sub">' + x[2] + "</div></div>";
      }).join("") + "</div>" +
      scanBar("Handheld scanner is always on. Camera scan is " + (cameraOn(t) ? "on" : "off") + ".") +
      cameraBtn(t);
  }

  function products(t) {
    var columns = cols(t, "M29", "Item master", PRODUCT_MAP);
    return '<div class="page-head"><div><h1>Stock</h1><p>Prices include 15% VAT. Scan a SKU or barcode. Tick rows to print several labels.</p></div><div class="actions">' +
      quoteBadge(t) +
      printerChip(t) +
      '<button class="btn btn-sm btn-primary" data-act="print-selected" data-id="' + t.id + '">Print selected labels</button>' + cameraBtn(t) + "</div></div>" +
      scanBar("Focus this box, or click the page background and scan. Enter looks the item up.") +
      '<div class="card">' + table(columns, t.books.products, function (p) { return productRow(t, columns, p); }, true) + "</div>";
  }

  function customers(t) {
    var columns = cols(t, "M22", "Customers", CUST_MAP);
    var editable = can(t, "M22", "U");
    return '<div class="page-head"><div><h1>Customers</h1><p>Sample names are marked. Type a phone or email on the row — it is saved in this browser and used for WhatsApp.</p></div></div>' +
      '<div class="card">' + table(columns, t.books.customers, function (c) {
        return "<tr>" + columns.map(function (col) {
          var html;
          if (col.key === "name") html = O.esc(c.name) + (c.sample ? ' <span class="badge badge-neutral">Sample</span>' : "");
          else if ((col.key === "phone" || col.key === "email") && editable) {
            html = '<input class="input" data-act="cust-field" data-id="' + t.id + '" data-cust="' + O.esc(c.id) + '" data-field="' + col.key + '" value="' + O.esc(c[col.key] || "") + '" placeholder="' + (col.key === "phone" ? "27…" : "name@company.co.za") + '">';
          } else html = cell(c, col.key);
          return "<td>" + html + "</td>";
        }).join("") + "<td></td></tr>";
      }) + "</div>";
  }

  function quotes(t) {
    var columns = cols(t, "M22", "Sales quotations", QUOTE_MAP);
    return '<div class="page-head"><div><h1>Quotes</h1></div><div class="actions">' + (can(t, "M22", "C") ? '<a class="btn btn-primary" href="#/preview/' + t.id + '/work/quote/new">New quote</a>' : "") + cameraBtn(t) + "</div></div>" +
      scanBar("Scan a product to start a quote line, or open a quote first.") +
      '<div class="card">' + table(columns, t.books.quotes, function (q) { return docRow(t, columns, q, "quote"); }) + "</div>";
  }
  function invoices(t) {
    var columns = cols(t, "M22", "Sales invoices", INV_MAP);
    return '<div class="page-head"><div><h1>Invoices</h1></div><div class="actions">' + cameraBtn(t) + "</div></div>" +
      scanBar("Open an invoice, then scan to add a line. Invoicing reduces stock.") +
      '<div class="card">' + table(columns, t.books.invoices, function (q) { return docRow(t, columns, q, "invoice"); }) + "</div>";
  }

  function lineEditor(t, lines, locked) {
    var opts = t.books.products.map(function (p) {
      return '<option value="' + O.esc(p.id) + '">' + O.esc(p.sku + " \u00b7 " + p.name) + "</option>";
    }).join("");
    var rows = (lines.length ? lines : [{ productId: t.books.products[0] && t.books.products[0].id, qty: 1, price: excl(t.books.products[0] && t.books.products[0].sellIncl) }]);
    return rows.map(function (l, i) {
      return '<div class="line-edit" data-line><select class="select" name="product"' + (locked ? " disabled" : "") + ">" + opts.replace('value="' + l.productId + '"', 'value="' + l.productId + '" selected') + "</select>" +
        '<input class="input" name="qty" type="number" min="0" step="1" value="' + (l.qty || 1) + '"' + (locked ? " readonly" : "") + ">" +
        '<input class="input" name="price" type="number" min="0" step="0.01" value="' + (l.price || 0) + '" title="Unit price excl. VAT"' + (locked ? " readonly" : "") + ">" +
        (locked ? "" : '<button type="button" class="btn btn-sm btn-secondary" data-act="drop-line" data-i="' + i + '">Remove</button>') + "</div>";
    }).join("");
  }
  function captureDraft() {
    var form = document.getElementById("doc-form");
    if (!form || !draft) return;
    if (form.customer) draft.customerId = form.customer.value;
    draft.lines = [];
    form.querySelectorAll("[data-line]").forEach(function (row) {
      draft.lines.push({
        productId: row.querySelector("[name=product]").value,
        qty: Number(row.querySelector("[name=qty]").value) || 0,
        price: Number(row.querySelector("[name=price]").value) || 0
      });
    });
  }
  function docEditor(t, kind) {
    var tot = docTotals(draft.lines || []);
    var title = kind === "invoice" ? "Invoice" : "Quote";
    var code = kind === "invoice" ? "M17" : "M22";
    var canSave = draft.id ? can(t, code, "U") || (kind === "invoice" && can(t, "M22", "U")) : can(t, code, "C") || (kind === "invoice" && can(t, "M22", "C"));
    var canConvert = can(t, "M22", "C") || can(t, "M17", "C");
    return scanBar("Scan a SKU to add a line. Prices are exclusive; VAT is 15%.") + cameraBtn(t) +
      '<form id="doc-form" data-act="save-doc" data-id="' + t.id + '" data-kind="' + kind + '">' +
      '<div class="field"><label>Customer</label><select class="select" name="customer"' + (canSave ? "" : " disabled") + ">" +
      t.books.customers.map(function (c) {
        return '<option value="' + c.id + '"' + (c.id === draft.customerId ? " selected" : "") + ">" + O.esc(c.name) + "</option>";
      }).join("") + "</select></div>" +
      '<div id="doc-lines">' + lineEditor(t, draft.lines || [], !canSave) + "</div>" +
      (canSave ? '<button type="button" class="btn btn-sm btn-secondary" data-act="add-line" style="margin:8px 0">Add line</button>' : "") +
      '<div class="tiny" id="doc-totals">Subtotal ' + zar2(tot.sub) + " \u00b7 VAT 15% " + zar2(tot.vat) + " \u00b7 Total " + zar2(tot.total) + "</div>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">' +
      (canSave ? '<button class="btn btn-primary" type="submit">Save ' + title.toLowerCase() + "</button>" : '<span class="tiny">Your role can view this ' + title.toLowerCase() + ".</span>") +
      (kind === "quote" && draft.id && canSave && draft.status === "Draft" ? '<button class="btn btn-secondary" type="button" data-act="quote-status" data-id="' + t.id + '" data-status="Sent">Mark sent</button>' : "") +
      (kind === "quote" && draft.id && canSave && (draft.status === "Draft" || draft.status === "Sent") ? '<button class="btn btn-secondary" type="button" data-act="quote-status" data-id="' + t.id + '" data-status="Accepted">Mark accepted</button>' : "") +
      (kind === "quote" && draft.id && canConvert && draft.status !== "Converted" ? '<button class="btn btn-secondary" type="button" data-act="convert-quote" data-id="' + t.id + '" data-q="' + draft.id + '">Convert to invoice</button>' : "") +
      (kind === "invoice" && draft.id && canSave && draft.status !== "Paid" ? '<button class="btn btn-secondary" type="button" data-act="mark-paid" data-id="' + t.id + '">Mark paid</button>' : "") +
      (draft.id ? '<button class="btn btn-secondary" type="button" data-act="wa-doc" data-id="' + t.id + '" data-kind="' + kind + '" data-doc="' + draft.id + '">Send via WhatsApp</button>' : "") +
      (draft.id ? '<button class="btn btn-secondary" type="button" data-act="pdf-doc" data-id="' + t.id + '" data-kind="' + kind + '" data-doc="' + draft.id + '">Print / Save as PDF</button>' : "") +
      "</div></form>" +
      (draft.id ? '<h2 class="biz-preview-h">Print preview</h2><div class="biz-preview" id="biz-preview">' + renderBizDoc(t, salesDocSpec(t, draft, kind)) + "</div>" : "");
  }

  function grvView(t) {
    ensureBooks(t);
    var rows = (t.books.grvs || []).map(function (g) {
      var qty = g.lines.reduce(function (s, l) { return s + (Number(l.qty) || 0); }, 0);
      return "<tr><td class=\"mono\">" + O.esc(g.number) + "</td><td>" + O.esc(g.date) + "</td><td>" + O.esc(g.supplier) + "</td><td>" + g.lines.length + "</td><td>" + qty + "</td><td>" + (g.posted ? "Posted" : "Draft") + "</td><td>" +
        '<button class="btn btn-sm btn-secondary" data-act="print-grv-doc" data-id="' + t.id + '" data-grv="' + O.esc(g.id) + '">Print GRV</button> ' +
        '<button class="btn btn-sm btn-primary" data-act="print-grv" data-id="' + t.id + '" data-grv="' + O.esc(g.id) + '">Print all labels</button></td></tr>';
    }).join("");
    var opts = t.books.products.map(function (p) { return '<option value="' + O.esc(p.id) + '">' + O.esc(p.sku + " · " + p.name) + "</option>"; }).join("");
    return '<div class="page-head"><div><h1>Goods received</h1><p>A posted GRV adds the received quantity to stock. Print all labels uses that quantity, and you can change it before printing.</p></div><div class="actions">' + printerChip(t) + "</div></div>" +
      '<div class="card" style="margin-bottom:12px"><div class="table-wrap"><table class="data"><thead><tr><th>GRV</th><th>Date</th><th>Supplier</th><th>Lines</th><th>Units</th><th>Status</th><th></th></tr></thead><tbody>' +
      (rows || '<tr><td colspan="7">No receipts yet.</td></tr>') + "</tbody></table></div></div>" +
      '<form class="card" data-act="save-grv" data-id="' + t.id + '"><div class="card-b"><h2>New receipt</h2><div class="form-grid">' +
      '<div class="field"><label>Supplier</label><input class="input" name="supplier" placeholder="Sample supplier" required></div>' +
      '<div class="field"><label>Date</label><input class="input" type="date" name="date" value="' + new Date().toISOString().slice(0, 10) + '"></div>' +
      '<div class="field"><label>Product</label><select class="select" name="product">' + opts + "</select></div>" +
      '<div class="field"><label>Qty received</label><input class="input" type="number" min="1" name="qty" value="1"></div>' +
      '<div class="field"><label>Cost each excl. VAT</label><input class="input" type="number" min="0" step="0.01" name="cost" value="0"></div>' +
      "</div>" + (can(t, "M29", "C") ? "<button class=\"btn btn-primary\" type=\"submit\">Post GRV and update stock</button>" : "<p class=\"tiny\">Your role can view receipts. An administrator can post a GRV.</p>") + "</div></form>";
  }
  function orders(t) {
    if (!t.modules.M22) return '<div class="empty"><h3>Sales is turned off</h3><p>Enable the Sales module in the Control Centre.</p></div>';
    return '<div class="page-head"><div><h1>Sales orders</h1><p>Wholesale slabs and offcuts for fabricators. Order book ' + zar2(metrics(t).orderBook) + '. Scan S1040 or SO4716.</p></div><div class="actions">' + printerChip(t) + cameraBtn(t) + "</div></div>" +
      scanBar("Handheld wedge works even when this box is not focused, as long as you are not typing in another field.") +
      '<div class="card">' + ordersTable(t) + "</div>";
  }

  function bodyFor(t) {
    var s = screenName();
    var id = routeParts()[4];
    if (s === "products") {
      if (!t.modules.M29) return off("Inventory");
      if (!can(t, "M29", "R")) return denied("Stock");
      return products(t);
    }
    if (s === "customers") {
      if (!(t.modules.M22 || t.modules.M23)) return off("Sales");
      if (!(can(t, "M22", "R") || can(t, "M23", "R"))) return denied("Customers");
      return customers(t);
    }
    if (s === "quotes") {
      if (!t.modules.M22) return off("Sales");
      if (!can(t, "M22", "R")) return denied("Quotes");
      return quotes(t);
    }
    if (s === "quote") {
      if (!t.modules.M22) return off("Sales");
      if (!can(t, "M22", "R")) return denied("Quotes");
      if (id === "new" && !can(t, "M22", "C")) return denied("New quotes");
      openDraft(t, "quote", id);
      return '<h1 style="font-size:20px;margin-bottom:8px">' + O.esc(draft.number || "New quote") + " <span class=\"badge badge-teal\">" + O.esc(draft.status || "Draft") + "</span></h1>" + docEditor(t, "quote");
    }
    if (s === "invoices") {
      if (!(t.modules.M22 || t.modules.M17)) return off("Sales");
      if (!(can(t, "M22", "R") || can(t, "M17", "R"))) return denied("Invoices");
      return invoices(t);
    }
    if (s === "invoice") {
      if (!(can(t, "M22", "R") || can(t, "M17", "R"))) return denied("Invoices");
      openDraft(t, "invoice", id);
      return '<h1 style="font-size:20px;margin-bottom:8px">' + O.esc(draft.number || "Invoice") + " <span class=\"badge badge-teal\">" + O.esc(draft.status || "") + "</span></h1>" + docEditor(t, "invoice");
    }
    if (s === "orders") {
      if (!can(t, "M22", "R")) return denied("Sales orders");
      return orders(t);
    }
    if (s === "grv") {
      if (!t.modules.M29) return off("Inventory");
      if (!can(t, "M29", "R")) return denied("Goods received");
      return grvView(t);
    }
    if (s === "labels") return '<div class="page-head"><div><h1>Labels & printer</h1><p>Size, Bluetooth, USB and a test label for the M2-H.</p></div></div>' + labelPanel();
    if (window.OmnivateShop) {
      var shopHtml = window.OmnivateShop.body(t, s);
      if (shopHtml != null) return shopHtml;
    }
    return home(t);
  }
  function off(name) {
    return '<div class="empty"><h3>' + name + ' is turned off</h3><p>Turn the module back on in the Control Centre and this screen returns.</p></div>';
  }
  function denied(name) {
    return '<div class="empty"><h3>' + name + ' is hidden for this role</h3><p>An administrator can tick Read on the Users & roles matrix.</p></div>';
  }
  function openDraft(t, kind, id) {
    var list = kind === "invoice" ? t.books.invoices : t.books.quotes;
    if (id && id !== "new") {
      var existing = list.find(function (d) { return d.id === id; });
      if (existing && (!draft || draft.id !== existing.id || draft.kind !== kind)) {
        draft = JSON.parse(JSON.stringify(existing));
        draft.kind = kind;
      }
      return;
    }
    if (!draft || draft.kind !== kind || draft.id) {
      var first = t.books.products[0];
      draft = {
        kind: kind, id: null, number: "", customerId: t.books.customers[0] && t.books.customers[0].id,
        date: new Date().toISOString().slice(0, 10), status: kind === "invoice" ? "Unpaid" : "Draft",
        lines: first ? [{ productId: first.id, qty: 1, price: excl(first.sellIncl) }] : []
      };
    }
  }

  function renderWorkspace() {
    var t = tenant();
    if (!t) { O.navigate("#/fleet"); return; }
    ensureBooks(t);
    shell(t, bodyFor(t));
  }

  function nextNo(t, kind) {
    var seq = (t.profile.sequences || []).find(function (s) { return /quot/i.test(s.doc) && kind === "quote" || /inv/i.test(s.doc) && kind === "invoice"; });
    if (!seq) return (kind === "quote" ? "QT-" : "INV-") + Date.now().toString().slice(-4);
    var list = kind === "invoice" ? t.books.invoices : t.books.quotes;
    var used = {};
    (list || []).forEach(function (d) { if (d && d.number) used[d.number] = true; });
    var code = "";
    var guard = 0;
    do {
      code = seq.prefix + String(seq.next).padStart(seq.pad || 4, "0");
      seq.next += 1;
      guard += 1;
    } while (used[code] && guard < 10000);
    return code;
  }
  function saveDoc(t, kind) {
    captureDraft();
    if (!draft.lines.length) { O.toast("Add a line first", "warn"); return; }
    var flag = draft.id ? "U" : "C";
    var codes = kind === "invoice" ? ["M22", "M17"] : ["M22"];
    if (!codes.some(function (code) { return can(t, code, flag); })) {
      allow(t, codes[0], flag);
      return;
    }
    var list = kind === "invoice" ? t.books.invoices : t.books.quotes;
    if (!draft.id) {
      draft.id = O.uid(kind === "invoice" ? "inv" : "qt");
      draft.number = nextNo(t, kind);
      draft.date = new Date().toISOString().slice(0, 10);
      if (kind === "invoice") applyStock(t, draft);
      list.unshift(draft);
    } else {
      var idx = list.findIndex(function (d) { return d.id === draft.id; });
      if (idx >= 0) {
        if (kind === "invoice" && list[idx].stockApplied) adjustStock(t, list[idx].lines, draft.lines);
        if (kind === "invoice") draft.stockApplied = list[idx].stockApplied || draft.stockApplied;
        if (kind === "quote") draft.status = draft.status || list[idx].status || "Draft";
        list[idx] = draft;
      }
    }
    O.persist();
    O.pushAudit({ tenantId: t.id, action: (kind === "invoice" ? "Invoice" : "Quote") + " saved", target: draft.number, before: "\u2014", after: docTotals(draft.lines).total + " incl VAT" });
    O.toast(draft.number + " saved", "ok");
    var id = draft.id;
    draft = null;
    O.navigate("#/preview/" + t.id + "/work/" + kind + "/" + id);
  }
  function applyStock(t, inv) {
    if (inv.stockApplied) return;
    (inv.lines || []).forEach(function (l) {
      var p = prod(t, l.productId);
      if (p) p.onHand = round2((Number(p.onHand) || 0) - (Number(l.qty) || 0));
    });
    inv.stockApplied = true;
  }
  function adjustStock(t, beforeLines, afterLines) {
    var delta = {};
    (beforeLines || []).forEach(function (l) {
      delta[l.productId] = (delta[l.productId] || 0) + (Number(l.qty) || 0);
    });
    (afterLines || []).forEach(function (l) {
      delta[l.productId] = (delta[l.productId] || 0) - (Number(l.qty) || 0);
    });
    Object.keys(delta).forEach(function (id) {
      if (!delta[id]) return;
      var p = prod(t, id);
      if (p) p.onHand = round2((Number(p.onHand) || 0) + delta[id]);
    });
  }
  function convertQuote(t, qid) {
    if (!can(t, "M22", "C") && !can(t, "M17", "C")) { allow(t, "M22", "C"); return; }
    if (draft && draft.id === qid) {
      captureDraft();
      var current = t.books.quotes.find(function (x) { return x.id === qid; });
      if (current) {
        current.customerId = draft.customerId;
        current.lines = draft.lines;
      }
    }
    var q = t.books.quotes.find(function (x) { return x.id === qid; });
    if (!q || q.status === "Converted") { O.toast("Already converted", "warn"); return; }
    var inv = {
      id: O.uid("inv"), number: nextNo(t, "invoice"), customerId: q.customerId, quoteId: q.id,
      date: new Date().toISOString().slice(0, 10), status: "Unpaid",
      lines: q.lines.map(function (l) { return { productId: l.productId, qty: l.qty, price: l.price }; }),
      stockApplied: false
    };
    applyStock(t, inv);
    t.books.invoices.unshift(inv);
    q.status = "Converted";
    O.persist();
    O.pushAudit({ tenantId: t.id, action: "Quote converted to invoice", target: q.number + " \u2192 " + inv.number, before: "Quote", after: "Stock reduced" });
    O.toast(inv.number + " issued, stock reduced", "ok");
    draft = null;
    O.navigate("#/preview/" + t.id + "/work/invoice/" + inv.id);
  }
  function waText(t, doc) {
    var c = cust(t, doc.customerId);
    var tot = docTotals(doc.lines);
    var lines = doc.lines.map(function (l) {
      var p = prod(t, l.productId);
      return (p ? p.name : l.productId) + " \u00d7 " + l.qty + " @ " + zar2(l.price);
    }).join("\n");
    return (doc.number || "Document") + " from " + (t.tradingAs || t.name) + "\n" + (c ? c.name : "") + "\n" + lines + "\nSubtotal " + zar2(tot.sub) + "\nVAT 15% " + zar2(tot.vat) + "\nTotal " + zar2(tot.total) + "\nRef " + (doc.number || "");
  }
  function openWa(t, doc) {
    var c = cust(t, doc.customerId);
    var phone = (c && c.phone) || "";
    var typed = phone || window.prompt("Customer phone is blank. Enter a South African number (27\u2026) to open WhatsApp. It is saved on the customer.", "27");
    if (!typed) return;
    var n = String(typed).replace(/[^\d]/g, "");
    if (n.startsWith("0")) n = "27" + n.slice(1);
    if (c && !c.phone) c.phone = n;
    if (doc.status === "Draft") doc.status = "Sent";
    O.persist();
    var url = "https://wa.me/" + n + "?text=" + encodeURIComponent(waText(t, doc));
    window.open(url, "_blank", "noopener");
    O.pushAudit({ tenantId: t.id, action: "WhatsApp opened", target: doc.number, before: "\u2014", after: n });
    O.render();
  }
  var PUBLIC_BUSINESS = {
    "granite-warehouse": {
      legalName: "The Granite Warehouse (Pty) Ltd",
      phone: "012 256 4599",
      email: "info@thegranitewarehouse.co.za",
      website: "https://thegranitewarehouse.co.za/",
      address1: "Erf 1059 of the farm Hartbeespoort",
      address2: "Kareepoort",
      city: "Brits",
      postal: "0250",
      province: "North West",
      logo: "assets/tenants/tgw-logo.png",
      brandColor: "#9B1B2E",
      footer: "Wholesale slabs from our factory in Kareepoort, Brits. Goods remain the property of The Granite Warehouse (Pty) Ltd until paid in full. E&OE. The banking details on this document are an example for the demo."
    },
    "top-quartz": {
      phone: "011 452 1121",
      email: "sales@topquartz.co.za",
      website: "https://www.topquartz.co.za/",
      logo: "assets/tenants/tq-logo.png",
      brandColor: "#0E7A4A",
      footer: "Quartz, granite and porcelain slabs, cut to size. Goods remain the property of Top Quartz until paid in full. E&OE. The banking details on this document are an example for the demo."
    }
  };
  function blank(v) { return v == null || String(v).trim() === ""; }
  function ensureBusiness(t) {
    if (!t) return false;
    var spec = PUBLIC_BUSINESS[t.id];
    t.profile = t.profile || {};
    var p = t.profile;
    p.business = p.business || {};
    var b = p.business;
    var changed = false;
    if (spec) {
      ["phone", "email", "website"].forEach(function (k) {
        if (blank(p[k]) && spec[k]) { p[k] = spec[k]; changed = true; }
      });
      if (blank(p.address1) && spec.address1) {
        ["address1", "address2", "city", "postal", "province"].forEach(function (k) { if (spec[k]) p[k] = spec[k]; });
        changed = true;
      }
      if (spec.legalName && p.legalName === "The Granite Warehouse" && blank(p.registrationNumber) && p.address1 === spec.address1) {
        p.legalName = spec.legalName;
        t.name = spec.legalName;
        changed = true;
      }
      if (!t.logoData && spec.logo) { t.logoData = spec.logo; changed = true; }
      if (blank(b.brandColor) && spec.brandColor) { b.brandColor = spec.brandColor; changed = true; }
      if (blank(b.footer) && spec.footer) { b.footer = spec.footer; changed = true; }
    }
    if (blank(b.bankName)) { b.bankName = "Example Bank"; changed = true; }
    if (blank(b.accountName)) { b.accountName = t.tradingAs || t.name || ""; changed = true; }
    if (blank(b.accountNumber)) { b.accountNumber = "000 000 0000"; changed = true; }
    if (blank(b.branchCode)) { b.branchCode = "000000"; changed = true; }
    if (typeof b.bankIsExample !== "boolean") { b.bankIsExample = true; changed = true; }
    if (blank(b.footer)) { b.footer = "Goods remain our property until paid in full. E&OE. Banking details are an example."; changed = true; }
    if (blank(b.brandColor)) { b.brandColor = t.color || "#3B2F8F"; changed = true; }
    return changed;
  }
  function applyBusinessDefaults() {
    var state = O.getState();
    if (!state || !state.tenants) return;
    var changed = false;
    state.tenants.forEach(function (t) {
      if (ensureBusiness(t)) changed = true;
      if (t.books && bumpDocSequences(t)) changed = true;
    });
    if (changed) O.persist();
  }
  function plusDays(iso, n) {
    var d = new Date(String(iso || "") + "T00:00:00Z");
    if (isNaN(d.getTime())) return "";
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }
  function partyFromCustomer(t, id) {
    var c = cust(t, id);
    if (!c) return { name: "Sample account", lines: ["Invented for this demo"] };
    return { name: c.name, lines: [c.address || "", c.city || "", "Sample account — invented for this demo"].filter(function (x) { return x; }) };
  }
  function yardParty(t) {
    ensureBusiness(t);
    var p = t.profile;
    return {
      name: p.tradingAs || t.tradingAs || t.name,
      lines: [p.address1, p.address2, [p.city, p.postal].filter(Boolean).join(" "), p.province].filter(function (x) { return x && String(x).trim(); })
    };
  }
  function metaRow(k, v) {
    if (!v) return "";
    return "<tr><th>" + O.esc(k) + "</th><td>" + O.esc(v) + "</td></tr>";
  }
  function renderBizDoc(t, spec) {
    ensureBusiness(t);
    var p = t.profile;
    var b = p.business;
    var color = b.brandColor || t.color || "#3B2F8F";
    var lines = spec.lines || [];
    var showMoney = spec.showMoney !== false;
    var sub = round2(lines.reduce(function (s, l) {
      if (l.amount != null && l.amount !== "") return s + Number(l.amount);
      if (l.price == null || l.price === "") return s;
      return s + (Number(l.qty) || 0) * (Number(l.price) || 0);
    }, 0));
    var vat = showMoney ? round2(sub * 0.15) : 0;
    var total = round2(sub + vat);
    var logo = t.logoData
      ? '<img class="biz-logo" src="' + O.esc(t.logoData) + '" alt="' + O.esc(t.tradingAs || t.name) + '">'
      : '<div class="biz-word">' + O.esc(t.tradingAs || t.name) + "</div>";
    var addr = [p.address1, p.address2, [p.city, p.postal].filter(Boolean).join(" "), p.province, p.country || "South Africa"].filter(function (x) { return x && String(x).trim(); });
    var party = function (title, who) {
      if (!who) return "";
      return '<div class="biz-party"><div class="biz-k">' + O.esc(title) + "</div><strong>" + O.esc(who.name || "") + "</strong>" +
        (who.lines || []).map(function (x) { return x ? "<div>" + O.esc(x) + "</div>" : ""; }).join("") + "</div>";
    };
    var rows = lines.map(function (l) {
      var priced = !(l.price == null || l.price === "");
      var amount = l.amount != null && l.amount !== "" ? Number(l.amount) : (priced ? (Number(l.qty) || 0) * Number(l.price) : null);
      return "<tr><td>" + O.esc(l.description || "") + (l.detail ? '<div class="biz-detail">' + O.esc(l.detail) + "</div>" : "") +
        '</td><td class="num">' + O.esc(l.qty) + "</td><td>" + O.esc(l.unit || "") + '</td><td class="num">' + (priced ? zar2(l.price) : "—") +
        '</td><td class="num">' + (priced ? "15%" : "—") + '</td><td class="num">' + (amount == null ? "—" : zar2(amount)) + "</td></tr>";
    }).join("");
    var trading = p.tradingAs && p.tradingAs !== p.legalName ? "<div>Trading as " + O.esc(p.tradingAs) + "</div>" : "";
    return '<article class="biz-doc" style="--brand:' + O.esc(color) + '"><header class="biz-top"><div class="biz-brand">' + logo + '</div><div class="biz-co"><strong>' +
      O.esc(p.legalName || t.name) + "</strong>" + trading +
      addr.map(function (x) { return "<div>" + O.esc(x) + "</div>"; }).join("") +
      (p.phone ? "<div>" + O.esc(p.phone) + "</div>" : "") +
      (p.email ? "<div>" + O.esc(p.email) + "</div>" : "") +
      (p.website ? "<div>" + O.esc(p.website) + "</div>" : "") +
      (p.vatNumber ? "<div>VAT " + O.esc(p.vatNumber) + "</div>" : "") +
      (p.registrationNumber ? "<div>Reg. " + O.esc(p.registrationNumber) + "</div>" : "") +
      '</div></header><div class="biz-title"><div><div class="biz-docname">' + O.esc(spec.title || "Document") + '</div><div class="biz-num">' + O.esc(spec.number || "") + "</div></div>" +
      '<table class="biz-meta"><tbody>' + metaRow("Date", spec.date) + metaRow(spec.untilLabel || "Due", spec.until) + metaRow("Reference", spec.reference) + metaRow("Status", spec.status) + "</tbody></table></div>" +
      '<div class="biz-parties">' + party(spec.billLabel || "Bill to", spec.bill) + party(spec.shipLabel || "Ship to", spec.ship) + "</div>" +
      '<table class="biz-lines"><thead><tr><th>Description</th><th class="num">Qty</th><th>Unit</th><th class="num">Unit price</th><th class="num">VAT</th><th class="num">Amount</th></tr></thead><tbody>' +
      (rows || '<tr><td colspan="6">No lines</td></tr>') + "</tbody></table>" +
      (showMoney
        ? '<div class="biz-totals"><div><span>Subtotal</span><strong>' + zar2(sub) + "</strong></div><div><span>VAT 15%</span><strong>" + zar2(vat) + '</strong></div><div class="grand"><span>Total</span><strong>' + zar2(total) + "</strong></div></div>"
        : (spec.note ? '<p class="biz-note">' + O.esc(spec.note) + "</p>" : "")) +
      '<div class="biz-bank"><div class="biz-k">Banking details</div>' +
      (b.bankIsExample ? '<div class="biz-example">Example only — not a real bank account</div>' : "") +
      "<div>" + O.esc(b.bankName) + " · " + O.esc(b.accountName) + "</div><div>Account " + O.esc(b.accountNumber) + " · Branch " + O.esc(b.branchCode) + "</div></div>" +
      '<footer class="biz-foot"><div>' + O.esc(b.footer || "") + '</div><div class="biz-page">Page 1 of 1</div></footer></article>';
  }
  function openPrint(html) {
    var root = document.getElementById("doc-print-root");
    if (!root) return;
    root.innerHTML = html;
    document.body.classList.add("printing-doc");
    var cleanup = function () {
      document.body.classList.remove("printing-doc");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    setTimeout(function () { window.print(); }, 40);
  }
  function productLine(t, l, priceKey) {
    var p = prod(t, l.productId);
    var price = priceKey ? l[priceKey] : l.price;
    return {
      description: p ? p.name : (l.productId || ""),
      detail: p ? p.sku : "",
      qty: l.qty,
      unit: (p && p.uom) || "each",
      price: price
    };
  }
  function salesDocSpec(t, doc, kind) {
    var invoice = kind === "invoice";
    return {
      title: invoice ? "Tax invoice" : "Quotation",
      number: doc.number,
      date: doc.date,
      untilLabel: invoice ? "Due" : "Valid until",
      until: invoice ? (doc.due && doc.due !== doc.date ? doc.due : plusDays(doc.date, 30)) : plusDays(doc.date, 14),
      reference: doc.number,
      status: doc.status,
      bill: partyFromCustomer(t, doc.customerId),
      ship: partyFromCustomer(t, doc.customerId),
      lines: (doc.lines || []).map(function (l) { return productLine(t, l); })
    };
  }
  function orderLines(o) {
    var unit = round2(o.price * (1 - (o.discount || 0) / 100));
    var qty = o.priceMode === "m2" ? o.m2 : o.qty;
    var lines = [{
      description: (o.colourName || o.colour || "Slab") + " " + (o.finish || "") + " " + o.stockType,
      detail: o.L + " × " + o.W + " × " + o.T + " cm · grade " + o.grade + (o.slab ? " · slab " + o.slab : "") + (o.discount ? " · " + o.discount + "% discount" : ""),
      qty: qty,
      unit: o.priceMode === "m2" ? "m²" : "pcs",
      price: unit,
      amount: o.total
    }];
    if (o.transport) lines.push({ description: "Transport", detail: "Delivery of this order", qty: 1, unit: "trip", price: o.transport, amount: o.transport });
    return lines;
  }
  function orderSpec(t, o, delivery) {
    return {
      title: delivery ? "Delivery note" : "Sales order",
      number: delivery ? ("DN-" + o.orderNo) : o.orderNo,
      date: o.date,
      untilLabel: delivery ? "Order" : "Sage invoice",
      until: delivery ? o.orderNo : (o.sage || "Not invoiced"),
      reference: o.slab || o.orderNo,
      status: o.complete ? "Complete" : "Open",
      bill: partyFromCustomer(t, o.customerId),
      ship: partyFromCustomer(t, o.customerId),
      lines: orderLines(o)
    };
  }
  function grvSpec(t, g) {
    return {
      title: "Goods received note",
      number: g.number,
      date: g.date,
      untilLabel: "Posted",
      until: g.posted ? "Yes — stock updated" : "Draft",
      reference: g.number,
      billLabel: "Received from",
      bill: { name: g.supplier || "Sample supplier", lines: ["Sample supplier — invented for this demo"] },
      shipLabel: "Delivered to",
      ship: yardParty(t),
      lines: (g.lines || []).map(function (l) { return productLine(t, l, "cost"); })
    };
  }
  function printDoc(t, doc, kind) {
    openPrint(renderBizDoc(t, salesDocSpec(t, doc, kind || (String(doc.number || "").indexOf("INV") >= 0 ? "invoice" : "quote"))));
  }

  var camTimer = null;
  var camStream = null;
  var camGen = 0;
  function stopWorkspaceCamera() {
    camGen += 1;
    if (camTimer) { clearInterval(camTimer); camTimer = null; }
    if (camStream) {
      camStream.getTracks().forEach(function (tr) { try { tr.stop(); } catch (e) { /* already stopped */ } });
      camStream = null;
    }
  }
  function openCamera(t) {
    if (!cameraOn(t)) return;
    stopWorkspaceCamera();
    var gen = camGen;
    O.openModal('<div class="modal-h"><h3>Scan by camera</h3><button class="icon-btn light" data-act="close-modal">' + O.icon("x", 16) + '</button></div><div class="modal-b"><video id="cam-video" autoplay playsinline muted style="width:100%;background:#0f172a;border-radius:8px"></video><p class="tiny" id="cam-status">Starting camera\u2026</p><div class="scan-row"><input class="input" id="cam-manual" data-scan-field inputmode="none" autocomplete="off" placeholder="SKU or slab #"><button type="button" class="btn btn-secondary scan-kbd" data-act="scan-keyboard">Keyboard</button></div></div><div class="modal-f"><button class="btn btn-secondary" data-act="close-modal">Close</button></div>');
    var video = document.getElementById("cam-video");
    var status = document.getElementById("cam-status");
    if (!navigator.mediaDevices || !window.BarcodeDetector) {
      if (status) status.textContent = "This browser has no Barcode Detector. Use the handheld scanner or type the code.";
      return;
    }
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
      if (gen !== camGen || !video || !document.body.contains(video)) {
        stream.getTracks().forEach(function (tr) { tr.stop(); });
        return;
      }
      camStream = stream;
      video.srcObject = stream;
      var det = new window.BarcodeDetector({ formats: ["code_128", "ean_13", "ean_8", "qr_code", "code_39"] });
      camTimer = setInterval(function () {
        if (gen !== camGen) return;
        det.detect(video).then(function (codes) {
          if (gen !== camGen) return;
          if (codes && codes[0]) {
            stopWorkspaceCamera();
            O.closeModal();
            onScan(codes[0].rawValue, "camera");
          }
        }).catch(function () {});
      }, 400);
    }).catch(function () {
      if (status && document.body.contains(status)) status.textContent = "Camera permission was blocked. Use the handheld scanner.";
    });
  }
  var prevCloseModal = O.closeModal;
  O.closeModal = function () {
    stopWorkspaceCamera();
    return prevCloseModal.apply(this, arguments);
  };

  document.addEventListener("input", function (e) {
    var form = e.target.closest && e.target.closest("#doc-form");
    if (!form || !draft) return;
    captureDraft();
    var tot = docTotals(draft.lines || []);
    var label = document.getElementById("doc-totals");
    if (label) label.textContent = "Subtotal " + zar2(tot.sub) + " · VAT 15% " + zar2(tot.vat) + " · Total " + zar2(tot.total);
    var preview = document.getElementById("biz-preview");
    var t = O.getTenant(form.getAttribute("data-id"));
    if (preview && t && draft.id) preview.innerHTML = renderBizDoc(t, salesDocSpec(t, draft, form.getAttribute("data-kind")));
  });
  document.addEventListener("change", function (e) {
    var custField = e.target.closest && e.target.closest("[data-act='cust-field']");
    if (custField) {
      var tc = O.getTenant(custField.getAttribute("data-id"));
      var customer = tc && (tc.books.customers || []).find(function (c) { return c.id === custField.getAttribute("data-cust"); });
      if (customer && allow(tc, "M22", "U")) {
        customer[custField.getAttribute("data-field")] = custField.value.trim();
        O.persist();
        O.toast("Customer saved", "ok");
      }
      return;
    }
    var el = e.target.closest && e.target.closest("[data-label-setting]");
    if (!el) return;
    var key = el.getAttribute("data-label-setting");
    var patch = {};
    if (key === "showPrice") patch.showPrice = el.checked;
    else patch[key] = Number(el.value);
    saveLabel(patch);
    if (O.parseHash().view === "preview") O.render({ keepScroll: true });
  });

  function openSlabDetail(t, p) {
    var hold = slabHold(t, p);
    var action = hold === "free"
      ? '<button class="btn btn-primary" type="button" data-act="add-quote" data-id="' + t.id + '" data-sku="' + O.esc(p.id) + '">Add to quote</button>'
      : '<button class="btn btn-secondary" type="button" disabled>' + (hold === "sold" ? "Sold" : "Reserved on a quote") + "</button>";
    O.openModal('<div class="modal-h"><h3>' + O.esc(p.sku) + '</h3><button class="icon-btn light" data-act="close-modal">' + O.icon("x", 16) + '</button></div><div class="modal-b"><p><strong>' + O.esc(p.name) + '</strong></p><p class="tiny">On hand ' + O.esc(p.onHand + " " + (p.uom || "")) + " · " + zar2(p.sellIncl) + " incl. VAT</p></div><div class=\"modal-f\">" + action + '<button class="btn btn-secondary" type="button" data-act="close-modal">Close</button></div>');
  }
  function openAddQuote(t, productId) {
    var p = prod(t, productId);
    if (!p) return;
    var hold = slabHold(t, p);
    if (hold !== "free") { O.toast(hold === "sold" ? "This slab is sold" : "This slab is already on a quote", "warn"); return; }
    var drafts = (t.books.quotes || []).filter(function (q) { return q.status === "Draft" || q.status === "Sent"; });
    var quoteOpts = drafts.map(function (q) {
      var c = cust(t, q.customerId);
      return '<option value="' + O.esc(q.id) + '">' + O.esc(q.number + " · " + (c ? c.name : "Quote") + " · " + (q.lines || []).length + " lines") + "</option>";
    }).join("") + '<option value="new">New quote</option>';
    var custOpts = (t.books.customers || []).map(function (c) {
      return '<option value="' + O.esc(c.id) + '">' + O.esc(c.name) + "</option>";
    }).join("");
    O.openModal('<div class="modal-h"><h3>Add to quote</h3><button class="icon-btn light" data-act="close-modal">' + O.icon("x", 16) + '</button></div><form class="modal-b" data-act="confirm-add-quote" data-id="' + t.id + '" data-sku="' + O.esc(p.id) + '"><p><strong>' + O.esc(p.name) + '</strong></p><p class="tiny">' + zar2(excl(p.sellIncl)) + " excl. VAT · 1 " + O.esc(p.uom || "slab") + '</p><div class="field"><label>Quote</label><select class="select" name="quote">' + quoteOpts + '</select></div><div class="field"><label>Customer</label><select class="select" name="customer">' + custOpts + '</select></div><p class="tiny">Customer is used when you start a new quote. An existing quote keeps its customer.</p><div class="modal-f" style="padding-left:0;padding-right:0"><button class="btn btn-primary" type="submit">Add slab</button></div></form>');
  }
  function toastQuote(t, q) {
    O.toast("Added to " + q.number);
    setTimeout(function () {
      var spans = document.querySelectorAll("#toast-root .toast span");
      var last = spans[spans.length - 1];
      if (!last) return;
      last.innerHTML = O.esc("Added to " + q.number) + ' · <a href="#/preview/' + t.id + "/work/quote/" + q.id + '" style="color:#fff;font-weight:700;text-decoration:underline">View quote</a>';
    }, 0);
  }
  function addSlabToQuote(t, productId, quoteId, customerId) {
    var p = prod(t, productId);
    if (!p) return;
    if (slabHold(t, p) !== "free") { O.toast("This slab is already reserved or sold", "warn"); return; }
    var q = quoteId && quoteId !== "new" ? (t.books.quotes || []).find(function (d) { return d.id === quoteId; }) : null;
    if (!q) {
      q = {
        id: O.uid("qt"),
        number: nextNo(t, "quote"),
        customerId: customerId || (t.books.customers[0] && t.books.customers[0].id),
        date: new Date().toISOString().slice(0, 10),
        status: "Draft",
        lines: []
      };
      t.books.quotes.unshift(q);
    }
    q.lines = q.lines || [];
    var heldElsewhere = openQuotedQty(t, p.id, q.id);
    var onThis = q.lines.reduce(function (n, l) { return l.productId === p.id ? n + (Number(l.qty) || 0) : n; }, 0);
    if (heldElsewhere + onThis + 1 > (Number(p.onHand) || 0)) {
      O.toast("Not enough " + p.sku + " left to quote", "warn");
      return;
    }
    var existing = q.lines.find(function (l) { return l.productId === p.id; });
    if (existing) existing.qty = (Number(existing.qty) || 0) + 1;
    else q.lines.push({ productId: p.id, qty: 1, price: excl(p.sellIncl) });
    t.books.quoteFocus = q.id;
    O.persist();
    O.closeModal();
    toastQuote(t, q);
    O.render();
  }
  document.addEventListener("focusin", function (e) {
    var el = e.target;
    if (!el || !el.hasAttribute || !el.hasAttribute("data-scan-field")) return;
    if (el.getAttribute("inputmode") === "text") return;
    var coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (!coarse) return;
    el.setAttribute("readonly", "readonly");
    setTimeout(function () { el.removeAttribute("readonly"); }, 80);
  });
  O.ext.preview = function () {
    var parts = routeParts();
    if (parts[0] !== "preview") return false;
    if (parts[2] && parts[2] !== "work") return false;
    renderWorkspace();
    return true;
  };
  O.ext.afterReset = function () {
    draft = null;
    hit = { kind: "", id: "" };
    try { localStorage.removeItem(LABEL_SERIAL_KEY); } catch (err) { /* private mode */ }
  };
  O.ext.act = function (act, el) {
    var id = el.getAttribute("data-id");
    if (act === "phone-more") {
      var sheet = document.getElementById("phone-sheet");
      if (sheet) sheet.classList.toggle("show");
      return true;
    }
    if (act === "phone-scan") {
      var ts = O.getTenant(id) || tenant();
      if (!ts) return true;
      if (cameraOn(ts)) { openCamera(ts); return true; }
      var field = document.querySelector(".preview-body [data-scan-field]");
      if (!field) {
        O.openModal('<div class="modal-h"><h3>Scan</h3><button class="icon-btn light" data-act="close-modal">' + O.icon("x", 16) + '</button></div><div class="modal-b"><p class="tiny">Camera scan is off. The field stays open for a handheld scanner and does not open the phone keyboard.</p><div class="scan-row"><input class="input" id="phone-scan-input" data-scan-field inputmode="none" autocomplete="off" placeholder="SKU, barcode or slab #"><button type="button" class="btn btn-secondary scan-kbd" data-act="scan-keyboard">Keyboard</button></div></div><div class="modal-f"><button class="btn btn-primary" type="button" data-act="close-modal">Done</button></div>');
        var typed = document.getElementById("phone-scan-input");
        if (typed) typed.focus();
        return true;
      }
      field.focus();
      if (field.scrollIntoView) field.scrollIntoView({ block: "center" });
      return true;
    }
    if (act === "print-test") { printCanvas(drawTest()); return true; }
    if (act === "print-test-browser") { browserPrint(drawTest()); return true; }
    if (act === "connect-printer") { connectPrinter(); return true; }
    if (act === "connect-usb") {
      if (!window.OmnivatePrint) return true;
      window.OmnivatePrint.connectUsb().then(function () {
        printerMsg = window.OmnivatePrint.statusText();
        O.toast(printerMsg, "ok");
      }).catch(function (err) {
        var msg = (err && err.message) || String(err);
        if (/cancel|NotFound/i.test(msg)) msg = "No USB port selected.";
        printerMsg = msg;
        O.toast(msg, "err");
        var el = document.getElementById("printer-status");
        if (el) el.textContent = msg;
      });
      return true;
    }
    if (act === "print-selected") {
      var ts = O.getTenant(id); ensureBooks(ts);
      var ids = Array.prototype.map.call(document.querySelectorAll(".pick-product:checked"), function (box) { return box.value; });
      if (!ids.length) { O.toast("Tick at least one product", "warn"); return true; }
      var specs = ids.map(function (pid) { return { key: "sku:" + pid }; });
      var codes = assignCodes(ts, specs);
      var items = codes.map(function (code, i) {
        var p = prod(ts, ids[i]);
        return { title: code + " · " + (p ? p.sku : ids[i]), code: code, url: drawProductLabel(ts, p, code).toDataURL("image/png"), copies: 1 };
      });
      warnCodes(auditCodes(codes));
      window.OmnivatePrint.openReview("Print selected labels", items);
      return true;
    }
    if (act === "print-grv") {
      var tg = O.getTenant(id); ensureBooks(tg);
      var grv = (tg.books.grvs || []).find(function (g) { return g.id === el.getAttribute("data-grv"); });
      if (!grv) return true;
      var specs = [];
      var pieces = [];
      (grv.lines || []).forEach(function (l, li) {
        var qty = Math.max(0, l.qty | 0);
        for (var u = 0; u < qty; u++) {
          specs.push({ key: "grv:" + grv.id + ":" + li + ":" + u });
          pieces.push(l.productId);
        }
      });
      if (!specs.length) { O.toast("This receipt has no units", "warn"); return true; }
      var codes = assignCodes(tg, specs);
      var batch = codes.map(function (code, i) {
        var p = prod(tg, pieces[i]);
        return { title: code + " · " + (p ? p.sku : pieces[i]), code: code, url: drawProductLabel(tg, p, code).toDataURL("image/png"), copies: 1 };
      });
      warnCodes(auditCodes(codes));
      window.OmnivatePrint.openReview(grv.number + " labels", batch);
      return true;
    }
    if (act === "label-preset") {
      saveLabel({ wMm: Number(el.getAttribute("data-w")), hMm: Number(el.getAttribute("data-h")) });
      O.render({ keepScroll: true });
      return true;
    }
    if (act === "print-product") {
      var t = O.getTenant(id); ensureBooks(t);
      var p = prod(t, el.getAttribute("data-sku"));
      if (p) {
        var one = assignCodes(t, [{ key: "sku:" + p.id }])[0];
        printCanvas(drawProductLabel(t, p, one));
      }
      return true;
    }
    if (act === "print-order") {
      var tg = O.getTenant(id); ensureBooks(tg);
      var o = (tg.books.orders || []).find(function (x) { return x.id === el.getAttribute("data-order"); });
      if (o) {
        if (!o.slab) {
          o.slab = assignCodes(tg, [{ key: "order:" + o.id }])[0];
          O.persist();
        } else {
          assignCodes(tg, [{ key: "order:" + o.id, code: o.slab }]);
        }
        printCanvas(drawOrderLabel(o));
      }
      return true;
    }
    if (act === "scan-keyboard") {
      var row = el.closest(".scan-bar") || el.closest(".modal") || document;
      var field = row.querySelector("[data-scan-field]");
      if (!field) return true;
      var typing = field.getAttribute("inputmode") === "text";
      field.setAttribute("inputmode", typing ? "none" : "text");
      el.textContent = typing ? "Keyboard" : "Scanner";
      field.focus();
      return true;
    }
    if (act === "slab-detail") {
      var td = O.getTenant(id); ensureBooks(td);
      var pd = prod(td, el.getAttribute("data-sku"));
      if (pd) openSlabDetail(td, pd);
      return true;
    }
    if (act === "add-quote") {
      var tq = O.getTenant(id); ensureBooks(tq);
      openAddQuote(tq, el.getAttribute("data-sku"));
      return true;
    }
    if (act === "scan-camera") {
      var tc = O.getTenant(id);
      if (!cameraOn(tc)) return true;
      openCamera(tc);
      return true;
    }
    if (act === "order-flag") {
      var tf = O.getTenant(id);
      if (tf && !allow(tf, "M22", "U")) { el.checked = !el.checked; return true; }
      var order = tf && (tf.books.orders || []).find(function (x) { return x.id === el.getAttribute("data-order"); });
      if (order) {
        order[el.getAttribute("data-flag")] = el.checked;
        O.persist();
      }
      return true;
    }
    if (act === "quote-status") {
      var tstat = O.getTenant(id);
      if (!tstat || !draft) return true;
      if (!allow(tstat, "M22", "U")) return true;
      captureDraft();
      var next = el.getAttribute("data-status");
      draft.status = next;
      var saved = (tstat.books.quotes || []).find(function (q) { return q.id === draft.id; });
      if (saved) {
        saved.status = next;
        saved.customerId = draft.customerId;
        saved.lines = draft.lines;
      }
      O.persist();
      O.pushAudit({ tenantId: tstat.id, action: "Quote " + next.toLowerCase(), target: draft.number, before: "—", after: next });
      O.toast(draft.number + " marked " + next, "ok");
      O.render();
      return true;
    }
    if (act === "mark-paid") {
      var tpay = O.getTenant(id);
      if (!tpay || !draft) return true;
      if (!can(tpay, "M22", "U") && !can(tpay, "M17", "U")) { allow(tpay, "M22", "U"); return true; }
      captureDraft();
      draft.status = "Paid";
      var inv = (tpay.books.invoices || []).find(function (d) { return d.id === draft.id; });
      if (inv) {
        if (inv.stockApplied) adjustStock(tpay, inv.lines, draft.lines);
        inv.customerId = draft.customerId;
        inv.lines = draft.lines;
        inv.status = "Paid";
        draft.stockApplied = inv.stockApplied;
      }
      O.persist();
      O.pushAudit({ tenantId: tpay.id, action: "Invoice marked paid", target: draft.number, before: "Unpaid", after: "Paid" });
      O.toast(draft.number + " marked paid", "ok");
      O.render();
      return true;
    }
    if (act === "add-line") {
      captureDraft();
      var tp = tenant();
      var first = tp.books.products[0];
      draft.lines.push({ productId: first.id, qty: 1, price: excl(first.sellIncl) });
      O.render();
      return true;
    }
    if (act === "drop-line") {
      captureDraft();
      draft.lines.splice(Number(el.getAttribute("data-i")), 1);
      O.render();
      return true;
    }
    if (act === "convert-quote") { convertQuote(O.getTenant(id), el.getAttribute("data-q")); return true; }
    if (act === "wa-doc") {
      var tw = O.getTenant(id);
      captureDraft();
      var list = el.getAttribute("data-kind") === "invoice" ? tw.books.invoices : tw.books.quotes;
      var doc = list.find(function (d) { return d.id === el.getAttribute("data-doc"); });
      if (doc && draft && draft.id === doc.id) {
        doc.customerId = draft.customerId;
        doc.lines = draft.lines;
        doc.status = draft.status || doc.status;
      }
      if (doc) openWa(tw, doc);
      return true;
    }
    if (act === "pdf-doc") {
      var td = O.getTenant(id);
      captureDraft();
      var list2 = el.getAttribute("data-kind") === "invoice" ? td.books.invoices : td.books.quotes;
      var doc2 = list2.find(function (d) { return d.id === el.getAttribute("data-doc"); });
      if (doc2) printDoc(td, draft && draft.id === doc2.id ? draft : doc2, el.getAttribute("data-kind"));
      return true;
    }
    if (act === "print-sales-order" || act === "print-delivery") {
      var to = O.getTenant(id); ensureBooks(to);
      var ord = (to.books.orders || []).find(function (x) { return x.id === el.getAttribute("data-order"); });
      if (ord) openPrint(renderBizDoc(to, orderSpec(to, ord, act === "print-delivery")));
      return true;
    }
    if (act === "print-grv-doc") {
      var tgr = O.getTenant(id); ensureBooks(tgr);
      var note = (tgr.books.grvs || []).find(function (g) { return g.id === el.getAttribute("data-grv"); });
      if (note) openPrint(renderBizDoc(tgr, grvSpec(tgr, note)));
      return true;
    }
    return false;
  };
  O.ext.submit = function (act, form) {
    if (act === "confirm-add-quote") {
      var tq = O.getTenant(form.getAttribute("data-id"));
      ensureBooks(tq);
      var quoteId = form.elements.quote ? form.elements.quote.value : "new";
      var customerId = form.elements.customer ? form.elements.customer.value : "";
      addSlabToQuote(tq, form.getAttribute("data-sku"), quoteId, customerId);
      return true;
    }
    if (act === "save-grv") {
      var tg = O.getTenant(form.getAttribute("data-id"));
      ensureBooks(tg);
      if (!allow(tg, "M29", "C")) return true;
      var val = function (n) { return form.elements[n] ? form.elements[n].value : ""; };
      var qty = Math.max(1, Number(val("qty")) || 1);
      var grv = {
        id: O.uid("grv"),
        number: labelPrefix(tg) + "-GRV-" + (1000 + (tg.books.grvs.length + 1)),
        supplier: val("supplier") || "Sample supplier",
        date: val("date") || new Date().toISOString().slice(0, 10),
        posted: true,
        lines: [{ productId: val("product"), qty: qty, cost: Number(val("cost")) || 0 }]
      };
      var p = prod(tg, grv.lines[0].productId);
      if (p) p.onHand = round2((Number(p.onHand) || 0) + qty);
      tg.books.grvs.unshift(grv);
      O.persist();
      O.pushAudit({ tenantId: tg.id, action: "GRV posted", target: grv.number, before: p ? String(p.onHand - qty) : "—", after: p ? String(p.onHand) + " on hand" : "posted" });
      O.toast(grv.number + " posted, stock updated", "ok");
      O.render();
      return true;
    }
    if (act !== "save-doc") return false;
    var t = O.getTenant(form.getAttribute("data-id"));
    saveDoc(t, form.getAttribute("data-kind"));
    return true;
  };

  if (!document.getElementById("label-print-root")) {
    var lr = document.createElement("div");
    lr.id = "label-print-root";
    document.body.appendChild(lr);
  }
  if (!document.getElementById("doc-print-root")) {
    var dr = document.createElement("div");
    dr.id = "doc-print-root";
    document.body.appendChild(dr);
  }
  function dressPhone() {
    document.querySelectorAll("table.data").forEach(function (table) {
      if (table.dataset.dressed) return;
      table.dataset.dressed = "1";
      var heads = Array.prototype.map.call(table.querySelectorAll("thead th"), function (th) { return (th.textContent || "").trim(); });
      table.querySelectorAll("tbody tr").forEach(function (tr) {
        var cells = Array.prototype.slice.call(tr.children);
        cells.forEach(function (td, i) {
          var label = heads[i] || "";
          td.setAttribute("data-label", label);
          if (td.querySelector("button, a.btn")) td.classList.add("phone-actions");
          if (td.querySelector('input[type="checkbox"]')) td.classList.add("phone-check");
          if (cells.length > 7 && i > 3 && i < cells.length - 1) td.classList.add("phone-extra");
        });
        if (cells.length > 7 && cells[cells.length - 1]) {
          var more = document.createElement("button");
          more.type = "button";
          more.className = "btn btn-secondary phone-more-btn";
          more.textContent = "More details";
          more.addEventListener("click", function () {
            tr.classList.toggle("show-more");
            more.textContent = tr.classList.contains("show-more") ? "Fewer details" : "More details";
          });
          cells[cells.length - 1].appendChild(more);
        }
      });
      var wrap = table.closest(".table-wrap") || table.parentNode;
      if (wrap && !wrap.querySelector(".phone-filter")) {
        var input = document.createElement("input");
        input.className = "input phone-filter";
        input.type = "search";
        input.placeholder = "Search";
        input.setAttribute("aria-label", "Search this list");
        input.addEventListener("input", function () {
          var q = input.value.toLowerCase();
          table.querySelectorAll("tbody tr").forEach(function (row) {
            row.hidden = !!(q && row.textContent.toLowerCase().indexOf(q) < 0);
          });
        });
        wrap.insertBefore(input, wrap.firstChild);
      }
    });
  }
  window.OmnivatePhone = { dress: dressPhone };
  window.OmnivateLabels = {
    geom: geom, drawTest: drawTest, findCode: findCode, cameraOn: cameraOn,
    drawProductLabel: drawProductLabel, assignCodes: assignCodes, auditCodes: auditCodes
  };
  window.OmnivateDocs = {
    render: renderBizDoc,
    open: openPrint,
    ensure: ensureBusiness,
    jobSpec: function (t, job) {
      var order = (t.books.orders || []).find(function (o) { return o.orderNo === job.soNumber; });
      return {
        title: "Job card",
        number: job.soNumber ? (job.soNumber + " · " + job.slabNo) : job.slabNo,
        date: job.date,
        untilLabel: "Sales order",
        until: job.soNumber || "",
        reference: job.slabNo,
        status: job.type,
        billLabel: "Customer",
        bill: order ? partyFromCustomer(t, order.customerId) : yardParty(t),
        shipLabel: "Cut to size",
        ship: { name: job.type || "Cut", lines: [job.L + " × " + job.W + " × " + job.T + " cm", "Grade " + (job.grade || ""), "Machine " + (job.machine || ""), "Waste " + job.waste + "%"].filter(Boolean) },
        showMoney: false,
        note: "Production instruction only. Price, VAT and the amount sit on sales order " + (job.soNumber || "—") + ".",
        lines: [{
          description: (job.type || "Cut") + " from slab " + (job.slabNo || ""),
          detail: (job.machine || "") + " · " + job.L + " × " + job.W + " × " + job.T + " cm",
          qty: job.qty,
          unit: "pcs",
          price: null
        }]
      };
    }
  };
  var prevReset = O.ext.afterReset;
  O.ext.afterReset = function () {
    if (prevReset) prevReset();
    applyBusinessDefaults();
  };
  applyBusinessDefaults();
  O.render();
})();
