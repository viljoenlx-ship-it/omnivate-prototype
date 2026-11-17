/* Omnivate Production — Top Quartz only. Data stays in omnivate.production.* */
(function () {
  "use strict";
  var STORE = "omnivate.production.v1";
  var SESSION = "omnivate.production.session";
  var SEED = "tq-production-2026-11-17";
  var STAGES = ["Ordered", "Collected", "Received", "Cutting", "Polishing", "Done"];
  var state = null;
  var session = null;
  var pending = null;
  var screen = "home";
  var wedge = [];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function round2(n) { return Math.round((Number(n) || 0) * 100) / 100; }
  function uid(p) { return p + "-" + Math.random().toString(36).slice(2, 8); }
  function addDays(iso, n) {
    var d = new Date(iso + "T12:00:00Z");
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }
  function toast(msg, kind) {
    var root = document.getElementById("toast-root");
    var el = document.createElement("div");
    el.className = "toast" + (kind ? " " + kind : "");
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(function () { el.remove(); }, 3200);
  }
  function openModal(html) {
    document.getElementById("modal-root").innerHTML = '<div class="modal-backdrop" data-act="close"><div class="modal" onclick="event.stopPropagation()">' + html + "</div></div>";
  }
  function closeModal() { document.getElementById("modal-root").innerHTML = ""; }
  function geom() {
    var s = state.label;
    var g = window.NiimbotLabelSize.sizeFromMm({ w_mm: s.wMm, h_mm: s.hMm, dpi: 300 });
    return { wMm: s.wMm, hMm: s.hMm, w_px: g.w_px, h_px: g.h_px, dpi: 300, offsetX: s.offsetX | 0, offsetY: s.offsetY | 0 };
  }
  function save() { localStorage.setItem(STORE, JSON.stringify(state)); }
  function load() {
    try { state = JSON.parse(localStorage.getItem(STORE) || "null"); } catch (e) { state = null; }
    if (!state || state.seed !== SEED) { state = seed(); save(); }
  }
  function loadSession() {
    try { session = JSON.parse(sessionStorage.getItem(SESSION) || "null"); } catch (e) { session = null; }
  }
  function setSession(s) {
    session = s;
    if (s) sessionStorage.setItem(SESSION, JSON.stringify(s));
    else sessionStorage.removeItem(SESSION);
  }
  function isAdmin() { return session && session.role === "admin"; }
  function stageOn(name) { return !state.stages || state.stages[name] !== false; }
  function nextStage(name) {
    var i = STAGES.indexOf(name);
    for (var n = i + 1; n < STAGES.length; n++) if (stageOn(STAGES[n])) return STAGES[n];
    return name;
  }
  function quarryName(code) {
    var q = (state.quarries || []).find(function (x) { return x.code === code; });
    return q ? q.name : code;
  }

  function seed() {
    var quarries = [
      { code: "SQW", name: "Spartan Quartz Works" },
      { code: "HGS", name: "Highveld Granite Supply" },
      { code: "PBI", name: "Porcelain Bay Imports" },
      { code: "ERS", name: "East Rand Stone Mill" },
      { code: "KSC", name: "Kempton Surface Co" }
    ];
    var materials = ["Calacatta quartz", "Statuario quartz", "Rustenburg Grey granite", "Belfast Black granite", "Nero porcelain", "Calacatta porcelain"];
    var blocks = [];
    var cuts = [];
    var polish = [];
    var jobs = [];
    var slabs = [];
    var pieces = {};
    var nextLabel = 1;
    function take(key) {
      var code = "TQ-" + String(nextLabel).padStart(4, "0");
      nextLabel += 1;
      pieces[key] = code;
      return code;
    }
    for (var i = 0; i < 15; i++) {
      var L = 250 + (i % 4) * 10;
      var W = 150 + (i % 3) * 8;
      var H = i % 2 ? 150 : 170;
      var m3 = round2(L * W * H / 1e6);
      var status = STAGES[i % STAGES.length];
      var block = {
        id: "b" + (201 + i),
        blockId: "TQ-B" + (201 + i),
        date: addDays("2026-09-02", i * 3),
        quarry: quarries[i % quarries.length].code,
        material: materials[i % materials.length],
        orderNo: "TQ-BO-" + (4400 + i),
        L: L, W: W, H: H, m3: m3,
        tons: round2(m3 * 2.7),
        location: ["Bay 1", "Bay 2", "Rack C"][i % 3],
        status: status
      };
      blocks.push(block);
      if (["Cutting", "Polishing", "Done"].indexOf(status) >= 0) {
        var qty = 4 + (i % 3);
        var m2 = round2(2.8 * 1.6 * qty);
        cuts.push({
          id: "cut-" + block.blockId, blockId: block.blockId, date: addDays(block.date, 6),
          dept: i % 2 ? "Multiwire" : "Blades", machine: i % 2 ? "Multiwire 1" : "Blade 1",
          qty: qty, L: 280, W: 160, T: 2, m2: m2,
          waste: block.m3 ? round2(Math.max(0, (block.m3 - m2 * 0.02) / block.m3 * 100)) : 0
        });
        for (var n = 1; n <= qty; n++) {
          var label = take("slab:" + block.blockId + ":" + n);
          slabs.push({
            slabNo: block.blockId + "-" + n, labelNo: label, blockId: block.blockId,
            material: block.material, L: 280, W: 160, T: 2, m2: round2(2.8 * 1.6),
            grade: ["CL", "C", "A"][n % 3], status: status
          });
        }
        if (status === "Polishing" || status === "Done") {
          polish.push({ id: "pol-" + block.blockId, blockId: block.blockId, date: addDays(block.date, 9), m2: round2(m2 * 0.92), grade: "CL" });
        }
        if (i % 3 === 0) {
          jobs.push({
            id: "job-" + block.blockId, date: addDays(block.date, 11), slabNo: block.blockId + "-1",
            type: ["BENCHTOP", "SPLASHBACK", "ISLAND", "VANITY"][i % 4],
            machine: "CTS 1", L: 240, W: 65, T: 2, qty: 2,
            m2: round2(2.4 * 0.65 * 2), soNumber: "TQ-SO-" + (5100 + i)
          });
        }
      }
    }
    return {
      seed: SEED,
      company: "Top Quartz",
      quarries: quarries,
      stages: { Ordered: true, Collected: true, Received: true, Cutting: true, Polishing: true, Done: true },
      blocks: blocks, cuts: cuts, polish: polish, jobs: jobs, slabs: slabs,
      labelNext: nextLabel, pieces: pieces,
      label: { wMm: 50, hMm: 15, offsetX: 0, offsetY: 0 },
      camera: false,
      users: [
        { email: "admin@topquartz.demo", name: "Top Quartz admin", role: "admin", password: "Demo@123" },
        { email: "operator@topquartz.demo", name: "Floor operator", role: "operator", password: "Demo@123" }
      ]
    };
  }

  function assign(specs) {
    state.pieces = state.pieces || {};
    if (typeof state.labelNext !== "number") state.labelNext = 1;
    var out = [];
    specs.forEach(function (spec) {
      if (state.pieces[spec.key]) { out.push(state.pieces[spec.key]); return; }
      var code = "TQ-" + String(state.labelNext).padStart(4, "0");
      state.labelNext += 1;
      state.pieces[spec.key] = code;
      out.push(code);
    });
    save();
    return out.slice();
  }
  function audit(codes) {
    var seen = {};
    var dups = [];
    codes.forEach(function (c) { if (seen[c]) dups.push(c); seen[c] = true; });
    var nums = codes.map(function (c) { return Number(String(c).match(/(\d+)$/)[1]); });
    var consecutive = nums.every(function (n, i) { return i === 0 || n === nums[i - 1] + 1; });
    if (dups.length) toast("Duplicate label numbers: " + dups.join(", "), "err");
    return { unique: !dups.length, consecutive: consecutive, dups: dups };
  }

  function drawLabel(slab) {
    var size = geom();
    var c = document.createElement("canvas");
    c.width = size.w_px;
    c.height = size.h_px;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#000";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(slab.material, 8, 26);
    ctx.font = "18px sans-serif";
    ctx.fillText(slab.L + " × " + slab.W + " × " + slab.T + " cm", 8, 48);
    var bc = document.createElement("canvas");
    window.JsBarcode(bc, slab.labelNo, { format: "CODE128", displayValue: false, margin: 0, width: 2, height: Math.max(40, c.height - 96), background: "#fff", lineColor: "#000" });
    ctx.drawImage(bc, 8, 56, Math.min(bc.width, c.width - 16), Math.max(40, c.height - 96));
    ctx.font = "bold 18px sans-serif";
    ctx.fillText(slab.labelNo + "  " + slab.slabNo, 8, c.height - 8);
    return c;
  }

  function blockOf(id) { return state.blocks.find(function (b) { return b.blockId === id || b.id === id; }); }
  function slabsOf(blockId) { return state.slabs.filter(function (s) { return s.blockId === blockId; }); }
  function findByScan(code) {
    var q = String(code || "").trim().toLowerCase();
    var slab = state.slabs.find(function (s) { return s.slabNo.toLowerCase() === q || s.labelNo.toLowerCase() === q; });
    if (slab) return { slab: slab, block: blockOf(slab.blockId) };
    var block = state.blocks.find(function (b) { return b.blockId.toLowerCase() === q; });
    if (block) return { block: block };
    return null;
  }
  function advance(block) {
    var nxt = nextStage(block.status);
    block.status = nxt;
    slabsOf(block.blockId).forEach(function (s) { s.status = nxt; });
    save();
    return nxt;
  }

  function counts() {
    var map = {};
    STAGES.forEach(function (s) { map[s] = 0; });
    state.blocks.forEach(function (b) { map[b.status] = (map[b.status] || 0) + 1; });
    var m2 = state.cuts.reduce(function (s, c) { return s + (c.m2 || 0); }, 0);
    var wip = state.blocks.filter(function (b) { return b.status !== "Done"; }).length;
    return { map: map, m2: round2(m2), slabs: state.slabs.length, wip: wip };
  }

  function loginScreen() {
    return '<div class="login-wrap"><form class="login-card" data-act="login"><img src="assets/tq-logo.png" alt="Top Quartz"><div class="kicker">Omnivate Production</div><h1>Sign in</h1><p class="tiny">Top Quartz shop floor. Engineered stone, granite and porcelain slabs.</p><div class="field"><label>Email</label><input class="input" name="email" type="email" autocomplete="username" required></div><div class="field"><label>Password</label><input class="input" name="password" type="password" autocomplete="current-password" required></div><button class="btn btn-primary" type="submit">Continue</button><div class="hint">Demo@123 · MFA 123456<br>admin@topquartz.demo · operator@topquartz.demo</div></form></div>';
  }
  function mfaScreen() {
    return '<div class="login-wrap"><form class="login-card" data-act="mfa"><img src="assets/tq-logo.png" alt="Top Quartz"><div class="kicker">Two-factor</div><h1>Enter the code</h1><p class="tiny">' + esc(pending.email) + '</p><div class="otp" id="otp">' + [0, 1, 2, 3, 4, 5].map(function (i) { return '<input inputmode="numeric" maxlength="1" aria-label="Digit ' + (i + 1) + '">'; }).join("") + '</div><button class="btn btn-primary" type="submit">Verify</button><div class="hint">Demo code 123456</div></form></div>';
  }

  function scanBar() {
    return '<div class="scan-row" style="margin:10px 0"><input class="input" data-scan inputmode="none" autocomplete="off" autocapitalize="off" placeholder="Scan a slab or block"><button class="btn scan-kbd" type="button" data-act="keyboard">Keyboard</button></div>';
  }
  function nav() {
    var items = [["home", "Home"], ["board", "Board"], ["blocks", "Blocks"], ["cutting", "Cutting"], ["polish", "Polishing"], ["jobs", "Cut to size"], ["stock", "Stock"], ["labels", "Labels"], ["scan", "Scan"], ["reports", "Reports"]];
    if (isAdmin()) items.push(["settings", "Settings"]);
    return items.map(function (it) {
      return '<a class="' + (screen === it[0] ? "on" : "") + '" href="#/' + it[0] + '">' + it[1] + "</a>";
    }).join("");
  }
  function shell(body) {
    var phone = [["home", "Home"], ["board", "Board"], ["scan", "Scan"], ["labels", "Print"], ["more", "More"]];
    document.getElementById("app").innerHTML =
      '<div class="shell"><aside class="side"><div class="brand"><img src="assets/tq-logo.png" alt=""><div><strong>Production</strong><span>Top Quartz</span></div></div>' + nav() +
      '<div style="margin-top:auto" class="tiny">Signed in as ' + esc(session.name) + '</div><button class="navbtn" data-act="logout">Sign out</button></aside><div class="main"><div class="topbar"><strong>' + esc(session.name) + '</strong><span class="badge">' + esc(session.role) + '</span></div>' + body + "</div></div>" +
      '<header class="phone-top"><img src="assets/tq-logo.png" alt=""><div style="flex:1"><strong>Top Quartz</strong><span class="tiny">' + esc(session.role) + '</span></div><button class="btn btn-sm" type="button" data-act="logout">Sign out</button></header>' +
      '<nav class="phone-tabs">' + phone.map(function (it) {
        var on = it[0] === "more" ? ["blocks", "cutting", "polish", "jobs", "stock", "reports", "settings"].indexOf(screen) >= 0 : screen === it[0];
        var href = it[0] === "more" ? "#/more" : "#/" + it[0];
        return '<a class="' + (on ? "on" : "") + '" href="' + href + '">' + it[1] + "</a>";
      }).join("") + "</nav>" +
      '<button class="scan-fab" type="button" data-act="go-scan">Scan</button>';
  }

  function home() {
    var c = counts();
    var tiles = [["board", "Board", "Blocks by stage", c.wip + " in progress"], ["stock", "Stock", "Blocks and slabs", state.slabs.length + " slabs"], ["labels", "Labels", "M2-H 50×15", "TQ series"], ["reports", "Reports", "Yield and throughput", round2(c.m2) + " m²"]];
    return "<h1>Top Quartz</h1><p class=\"tiny\">Wholesale engineered stone, granite and porcelain. Shop floor only.</p>" +
      '<div class="quick">' + (isAdmin() ? '<a href="#/blocks">Receive a block</a><a href="#/cutting">Cut slabs</a>' : "") + '<a href="#/scan">Scan to advance</a><a href="#/labels">Print labels</a></div>' +
      '<div class="grid">' + tiles.map(function (t) { return '<a class="tile" href="#/' + t[0] + '"><strong>' + t[1] + '</strong><span class="tiny">' + t[2] + '</span><span class="num">' + t[3] + "</span></a>"; }).join("") + "</div>" +
      '<div class="kpis">' + STAGES.filter(stageOn).map(function (s) { return '<div class="kpi"><div class="tiny">' + s + '</div><div class="value">' + (c.map[s] || 0) + "</div></div>"; }).join("") + "</div>";
  }
  function board() {
    var cols = STAGES.filter(stageOn).map(function (st) {
      var items = state.blocks.filter(function (b) { return b.status === st; });
      return '<div class="kanban-col"><strong>' + st + " " + items.length + "</strong>" + items.map(function (b) {
        return '<div class="kanban-card"><strong>' + esc(b.blockId) + "</strong><div>" + esc(b.material) + '</div><div class="tiny">' + esc(quarryName(b.quarry)) + " · " + b.m3 + " m³</div>" +
          (st === "Done" ? "" : '<button class="btn" data-act="advance" data-block="' + esc(b.blockId) + '">Advance</button>') + "</div>";
      }).join("") + "</div>";
    }).join("");
    var chips = STAGES.filter(stageOn).map(function (st, i) { return '<button type="button" class="stage-chip" data-act="jump" data-i="' + i + '">' + st + "</button>"; }).join("");
    return "<h1>Stage board</h1>" + scanBar() + '<div class="quick">' + chips + '</div><div class="kanban">' + cols + "</div>";
  }
  function blocks() {
    var rows = state.blocks.map(function (b) {
      return "<tr><td data-label=\"Block\">" + esc(b.blockId) + "</td><td data-label=\"Material\">" + esc(b.material) + "</td><td data-label=\"Supplier\">" + esc(quarryName(b.quarry)) + "</td><td data-label=\"Size\">" + b.L + "×" + b.W + "×" + b.H + "</td><td data-label=\"m³\">" + b.m3 + "</td><td data-label=\"Stage\">" + esc(b.status) + "</td></tr>";
    }).join("");
    var form = isAdmin() ? '<form class="card" data-act="receive" style="margin-top:12px"><h2>Receive a block</h2><div class="form-grid"><div class="field"><label>Material</label><input class="input" name="material" value="Calacatta quartz" required></div><div class="field"><label>Supplier</label><select class="select" name="quarry">' + state.quarries.map(function (q) { return '<option value="' + esc(q.code) + '">' + esc(q.name) + "</option>"; }).join("") + '</select></div><div class="field"><label>L cm</label><input class="input" name="L" type="number" value="280"></div><div class="field"><label>W cm</label><input class="input" name="W" type="number" value="160"></div><div class="field"><label>H cm</label><input class="input" name="H" type="number" value="150"></div></div><button class="btn btn-primary inline" type="submit">Receive into the yard</button></form>' : '<p class="tiny">Receiving is for the administrator. You can scan and advance.</p>';
    return "<h1>Blocks</h1><p class=\"tiny\">Sample book TQ-B201 onwards. Wholesale slabs only.</p>" +
      '<div class="card" style="overflow:auto"><table class="data"><thead><tr><th>Block</th><th>Material</th><th>Supplier</th><th>L×W×H</th><th>m³</th><th>Stage</th></tr></thead><tbody>' + rows + "</tbody></table></div>" + form;
  }
  function cutting() {
    var opts = state.blocks.filter(function (b) { return b.status === "Received" || b.status === "Cutting"; }).map(function (b) {
      return '<option value="' + esc(b.blockId) + '">' + esc(b.blockId + " · " + b.material) + "</option>";
    }).join("");
    var rows = state.cuts.map(function (c) {
      return "<tr><td data-label=\"Block\">" + esc(c.blockId) + "</td><td data-label=\"Dept\">" + esc(c.dept) + "</td><td data-label=\"Qty\">" + c.qty + "</td><td data-label=\"m²\">" + c.m2 + "</td><td data-label=\"Waste\">" + c.waste + "%</td></tr>";
    }).join("");
    var form = isAdmin() ? '<form class="card" data-act="cut" style="margin-bottom:12px"><h2>Cut a block into slabs</h2><div class="form-grid"><div class="field"><label>Block</label><select class="select" name="block">' + opts + '</select></div><div class="field"><label>Machine</label><select class="select" name="dept"><option>Blades</option><option>Multiwire</option></select></div><div class="field"><label>Slabs</label><input class="input" name="qty" type="number" min="1" value="6"></div></div><button class="btn btn-primary inline" type="submit">Cut and number the slabs</button></form>' : "";
    return "<h1>Cutting</h1><p class=\"tiny\">Blades and multiwire. Each slab gets the next TQ number.</p>" + form +
      '<div class="card" style="overflow:auto"><table class="data"><thead><tr><th>Block</th><th>Dept</th><th>Qty</th><th>m²</th><th>Waste</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
  }
  function polishing() {
    var rows = state.polish.map(function (p) { return "<tr><td data-label=\"Block\">" + esc(p.blockId) + "</td><td data-label=\"Date\">" + esc(p.date) + "</td><td data-label=\"m²\">" + p.m2 + "</td><td data-label=\"Grade\">" + esc(p.grade) + "</td></tr>"; }).join("");
    return "<h1>Polishing</h1><p class=\"tiny\">m² polished is the usable face after the cut.</p><div class=\"card\" style=\"overflow:auto\"><table class=\"data\"><thead><tr><th>Block</th><th>Date</th><th>m²</th><th>Grade</th></tr></thead><tbody>" + rows + "</tbody></table></div>";
  }
  function jobs() {
    var rows = state.jobs.map(function (j) {
      return "<tr><td data-label=\"Date\">" + esc(j.date) + "</td><td data-label=\"Slab\">" + esc(j.slabNo) + "</td><td data-label=\"Type\">" + esc(j.type) + "</td><td data-label=\"Size\">" + j.L + "×" + j.W + "×" + j.T + "</td><td data-label=\"Qty\">" + j.qty + "</td><td data-label=\"m²\">" + j.m2 + "</td><td data-label=\"\"><button class=\"btn btn-sm\" data-act=\"job-card\" data-job=\"" + esc(j.id) + "\">Job card</button></td></tr>";
    }).join("");
    return "<h1>Cut to size</h1><p class=\"tiny\">Job cards for fabricator cuts. Sample sizes only.</p><div class=\"card\" style=\"overflow:auto\"><table class=\"data\"><thead><tr><th>Date</th><th>Slab</th><th>Type</th><th>Size</th><th>Qty</th><th>m²</th><th></th></tr></thead><tbody>" + (rows || "<tr><td>No job cards yet.</td></tr>") + "</tbody></table></div>";
  }
  function stock() {
    var blocks = state.blocks.map(function (b) { return "<tr><td data-label=\"Block\">" + esc(b.blockId) + "</td><td data-label=\"Material\">" + esc(b.material) + "</td><td data-label=\"Stage\">" + esc(b.status) + "</td><td data-label=\"m³\">" + b.m3 + "</td></tr>"; }).join("");
    var slabs = state.slabs.map(function (s) { return "<tr><td data-label=\"Slab\">" + esc(s.slabNo) + "</td><td data-label=\"Label\">" + esc(s.labelNo) + "</td><td data-label=\"Material\">" + esc(s.material) + "</td><td data-label=\"m²\">" + s.m2 + "</td><td data-label=\"Stage\">" + esc(s.status) + "</td></tr>"; }).join("");
    return "<h1>Stock</h1><p class=\"tiny\">Generated from production. Blocks in the yard and the slabs cut from them.</p><h2>Blocks</h2><div class=\"card\" style=\"overflow:auto\"><table class=\"data\"><thead><tr><th>Block</th><th>Material</th><th>Stage</th><th>m³</th></tr></thead><tbody>" + blocks + "</tbody></table></div><h2 style=\"margin-top:16px\">Slabs</h2><div class=\"card\" style=\"overflow:auto\"><table class=\"data\"><thead><tr><th>Slab</th><th>Label</th><th>Material</th><th>m²</th><th>Stage</th></tr></thead><tbody>" + (slabs || "<tr><td>No slabs cut yet.</td></tr>") + "</tbody></table></div>";
  }
  function labels() {
    var blocks = state.blocks.filter(function (b) { return slabsOf(b.blockId).length; });
    var list = blocks.map(function (b) {
      return '<div class="rowcard"><strong>' + esc(b.blockId) + "</strong> " + esc(b.material) + '<div class="tiny">' + slabsOf(b.blockId).length + ' slabs</div><div class="actions"><button class="btn btn-primary inline" data-act="print-block" data-block="' + esc(b.blockId) + '">Print all labels</button></div></div>';
    }).join("");
    var s = state.label;
    return "<h1>Labels and printer</h1><p class=\"tiny\">Niimbot M2-H, 50×15 mm, 591×177 px at 300 dpi. Each slab keeps its TQ number.</p>" +
      '<div class="card"><p id="printer-status">Not connected</p><div class="actions" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn" data-act="ble">Connect via Bluetooth</button><button class="btn usb-only" data-act="usb">Connect via USB</button><button class="btn" data-act="test-label">Print test label</button></div><p class="usb-note">USB needs desktop Chrome or Edge. On this phone, use Bluetooth.</p></div>' +
      '<div class="list" style="margin-top:12px">' + (list || '<p class="tiny">Cut a block before printing slab labels.</p>') + "</div>" +
      (isAdmin() ? '<form class="card" data-act="save-label" style="margin-top:12px"><h2>Label size</h2><div class="form-grid"><div class="field"><label>Width mm</label><input class="input" name="wMm" type="number" value="' + s.wMm + '"></div><div class="field"><label>Feed mm</label><input class="input" name="hMm" type="number" value="' + s.hMm + '"></div></div><button class="btn" type="submit">Save size</button></form>' : "");
  }
  function scanPage() {
    return "<h1>Scan</h1><p class=\"tiny\">A handheld scanner types into this field. The phone keyboard stays closed until you tap Keyboard.</p>" + scanBar() +
      (state.camera ? '<button class="btn" data-act="camera">Open camera</button>' : '<p class="tiny">Camera scan is off. An administrator can turn it on in Settings.</p>') +
      '<div class="card" style="margin-top:12px"><h2>Try a sample</h2><p class="tiny">TQ-B204-1 advances that block. Numbers already on the book are reused.</p></div>';
  }
  function reports() {
    var c = counts();
    var rows = STAGES.filter(stageOn).map(function (s) { return "<tr><td data-label=\"Stage\">" + s + "</td><td data-label=\"Blocks\">" + (c.map[s] || 0) + "</td></tr>"; }).join("");
    var cutM2 = round2(state.cuts.reduce(function (s, x) { return s + x.m2; }, 0));
    var polM2 = round2(state.polish.reduce(function (s, x) { return s + x.m2; }, 0));
    return "<h1>Reports</h1><div class=\"kpis\"><div class=\"kpi\"><div class=\"tiny\">Work in progress</div><div class=\"value\">" + c.wip + "</div></div><div class=\"kpi\"><div class=\"tiny\">m² cut</div><div class=\"value\">" + cutM2 + "</div></div><div class=\"kpi\"><div class=\"tiny\">m² polished</div><div class=\"value\">" + polM2 + "</div></div></div>" +
      '<div class="card" style="overflow:auto"><table class="data"><thead><tr><th>Stage</th><th>Blocks</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
  }
  function settings() {
    if (!isAdmin()) return "<h1>Settings</h1><p>The floor role can scan, advance and print. Settings stay with the administrator.</p>";
    var stages = STAGES.map(function (s) {
      return '<label class="rowcard" style="display:flex;justify-content:space-between;align-items:center"><span>' + s + '</span><input type="checkbox" data-act="stage" data-stage="' + s + '"' + (stageOn(s) ? " checked" : "") + "></label>";
    }).join("");
    var quarries = state.quarries.map(function (q) { return "<li>" + esc(q.code + " · " + q.name) + "</li>"; }).join("");
    var users = state.users.map(function (u) { return "<li>" + esc(u.name + " · " + u.email + " · " + u.role) + "</li>"; }).join("");
    return "<h1>Settings</h1><h2>Stages</h2><div class=\"list\">" + stages + "</div><h2 style=\"margin-top:16px\">Suppliers</h2><ul>" + quarries + "</ul>" +
      '<form data-act="add-quarry" class="form-grid"><input class="input" name="code" placeholder="Code"><input class="input" name="name" placeholder="Supplier name"><button class="btn" type="submit">Add supplier</button></form>' +
      "<h2 style=\"margin-top:16px\">Users</h2><ul>" + users + "</ul><p class=\"tiny\">Passwords stay Demo@123 in this demo. Camera scan is " + (state.camera ? "on" : "off") + '.</p><button class="btn" data-act="camera-toggle">' + (state.camera ? "Turn camera off" : "Turn camera on") + '</button> <button class="btn" data-act="reset">Reset sample data</button>';
  }
  function more() {
    var links = [["blocks", "Blocks"], ["cutting", "Cutting"], ["polish", "Polishing"], ["jobs", "Cut to size"], ["stock", "Stock"], ["reports", "Reports"]];
    if (isAdmin()) links.push(["settings", "Settings"]);
    return "<h1>More</h1><div class=\"list\">" + links.map(function (l) { return '<a class="rowcard" href="#/' + l[0] + '">' + l[1] + "</a>"; }).join("") + "</div>";
  }
  function body() {
    if (screen === "board") return board();
    if (screen === "blocks") return blocks();
    if (screen === "cutting") return cutting();
    if (screen === "polish") return polishing();
    if (screen === "jobs") return jobs();
    if (screen === "stock") return stock();
    if (screen === "labels") return labels();
    if (screen === "scan") return scanPage();
    if (screen === "reports") return reports();
    if (screen === "settings") return settings();
    if (screen === "more") return more();
    return home();
  }
  function render() {
    loadSession();
    if (!session) {
      document.getElementById("app").innerHTML = pending ? mfaScreen() : loginScreen();
      wireOtp();
      return;
    }
    var hash = (location.hash || "#/home").slice(2) || "home";
    screen = hash;
    if (!isAdmin() && (screen === "settings")) screen = "home";
    shell(body());
  }
  function wireOtp() {
    var inputs = document.querySelectorAll("#otp input");
    inputs.forEach(function (inp, i) {
      inp.addEventListener("input", function () {
        inp.value = inp.value.replace(/\D/g, "").slice(-1);
        if (inp.value && inputs[i + 1]) inputs[i + 1].focus();
      });
    });
  }

  function onScan(code) {
    var found = findByScan(code);
    if (!found || !found.block) { toast("No block or slab for " + code, "warn"); return; }
    var nxt = advance(found.block);
    toast((found.slab ? found.slab.slabNo : found.block.blockId) + " → " + nxt);
    screen = "board";
    location.hash = "#/board";
    render();
  }
  function printSlabs(block) {
    var slabs = slabsOf(block.blockId);
    if (!slabs.length) { toast("Cut this block before printing", "warn"); return; }
    var report = audit(slabs.map(function (s) { return s.labelNo; }));
    var items = slabs.map(function (s) {
      return { title: s.labelNo + " · " + s.slabNo, code: s.labelNo, url: drawLabel(s).toDataURL("image/png"), copies: 1 };
    });
    if (!report.unique) return;
    window.OmnivatePrint.openReview(block.blockId + " labels", items);
  }
  function m2h() {
    return { label: "Niimbot M2-H", id: 4608, dpi: 300, task: "b1", density: 3, label_type: 1, speed: 1, name_prefixes: ["M2"] };
  }

  document.addEventListener("submit", function (e) {
    var form = e.target.closest("form");
    if (!form) return;
    e.preventDefault();
    var act = form.getAttribute("data-act");
    if (act === "login") {
      var email = form.elements.email.value.trim().toLowerCase();
      var user = (state.users || []).find(function (u) { return u.email === email; });
      if (!user || form.elements.password.value !== (user.password || "Demo@123")) { toast("Unknown login or password", "err"); return; }
      pending = user;
      render();
      return;
    }
    if (act === "mfa") {
      var code = Array.prototype.map.call(document.querySelectorAll("#otp input"), function (i) { return i.value; }).join("");
      if (code !== "123456") { toast("Demo code is 123456", "warn"); return; }
      setSession({ email: pending.email, name: pending.name, role: pending.role });
      pending = null;
      location.hash = "#/home";
      render();
      return;
    }
    if (act === "receive" && isAdmin()) {
      var n = 201 + state.blocks.length;
      var L = Number(form.elements.L.value) || 280;
      var W = Number(form.elements.W.value) || 160;
      var H = Number(form.elements.H.value) || 150;
      var m3 = round2(L * W * H / 1e6);
      state.blocks.unshift({
        id: uid("b"), blockId: "TQ-B" + n, date: new Date().toISOString().slice(0, 10),
        quarry: form.elements.quarry.value, material: form.elements.material.value || "Calacatta quartz",
        orderNo: "TQ-BO-" + (5000 + n), L: L, W: W, H: H, m3: m3, tons: round2(m3 * 2.7), location: "Bay 1", status: "Received"
      });
      save();
      toast("TQ-B" + n + " received");
      render();
      return;
    }
    if (act === "cut" && isAdmin()) {
      var b = blockOf(form.elements.block.value);
      if (!b) return;
      var qty = Math.max(1, Number(form.elements.qty.value) || 1);
      var existing = slabsOf(b.blockId).length;
      var specs = [];
      for (var i = 1; i <= qty; i++) specs.push({ key: "slab:" + b.blockId + ":" + (existing + i) });
      var codes = assign(specs);
      var made = [];
      for (var k = 0; k < qty; k++) {
        var slab = {
          slabNo: b.blockId + "-" + (existing + k + 1), labelNo: codes[k], blockId: b.blockId,
          material: b.material, L: 280, W: 160, T: 2, m2: round2(2.8 * 1.6), grade: "CL", status: "Cutting"
        };
        state.slabs.push(slab);
        made.push(slab);
      }
      var m2 = round2(2.8 * 1.6 * qty);
      state.cuts.push({ id: uid("cut"), blockId: b.blockId, date: new Date().toISOString().slice(0, 10), dept: form.elements.dept.value, machine: form.elements.dept.value === "Blades" ? "Blade 1" : "Multiwire 1", qty: qty, L: 280, W: 160, T: 2, m2: m2, waste: b.m3 ? round2(Math.max(0, (b.m3 - m2 * 0.02) / b.m3 * 100)) : 0 });
      b.status = "Cutting";
      save();
      audit(made.map(function (s) { return s.labelNo; }));
      toast(b.blockId + " cut into " + qty + " slabs, " + codes[0] + "–" + codes[codes.length - 1]);
      render();
      return;
    }
    if (act === "save-label" && isAdmin()) {
      state.label.wMm = Number(form.elements.wMm.value) || 50;
      state.label.hMm = Number(form.elements.hMm.value) || 15;
      save();
      toast("Label size saved");
      return;
    }
    if (act === "add-quarry" && isAdmin()) {
      if (!form.elements.code.value || !form.elements.name.value) return;
      state.quarries.push({ code: form.elements.code.value.trim(), name: form.elements.name.value.trim() });
      save();
      render();
    }
  });

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (!el) return;
    var act = el.getAttribute("data-act");
    if (act === "close" || act === "close-modal") { closeModal(); return; }
    if (act === "logout") { setSession(null); location.hash = "#/home"; render(); return; }
    if (act === "go-scan") { location.hash = "#/scan"; render(); var field = document.querySelector("[data-scan]"); if (field) field.focus(); return; }
    if (act === "keyboard") {
      var field = (el.closest(".scan-row") || document).querySelector("[data-scan]");
      if (!field) return;
      var typing = field.getAttribute("inputmode") === "text";
      field.setAttribute("inputmode", typing ? "none" : "text");
      el.textContent = typing ? "Keyboard" : "Scanner";
      field.focus();
      return;
    }
    if (act === "jump") {
      var col = document.querySelectorAll(".kanban-col")[Number(el.getAttribute("data-i"))];
      if (col && col.scrollIntoView) col.scrollIntoView({ inline: "start", behavior: "smooth" });
      return;
    }
    if (act === "advance") {
      var b = blockOf(el.getAttribute("data-block"));
      if (b) { toast(b.blockId + " → " + advance(b)); render(); }
      return;
    }
    if (act === "print-block") {
      var block = blockOf(el.getAttribute("data-block"));
      if (block) printSlabs(block);
      return;
    }
    if (act === "job-card") {
      var job = state.jobs.find(function (j) { return j.id === el.getAttribute("data-job"); });
      if (!job) return;
      openModal("<div class=\"modal-h\"><h3>Job card</h3><button data-act=\"close\">Close</button></div><div class=\"modal-b\"><p><strong>Top Quartz</strong></p><p>" + esc(job.type) + " · " + esc(job.slabNo) + "</p><p>" + job.L + " × " + job.W + " × " + job.T + " cm · qty " + job.qty + " · " + job.m2 + " m²</p><p class=\"tiny\">" + esc(job.soNumber) + " · " + esc(job.machine) + "</p></div><div class=\"modal-f\"><button class=\"btn\" onclick=\"window.print()\">Print</button></div>");
      return;
    }
    if (act === "ble") {
      if (!window.Niimbot) { toast("Printer driver missing", "err"); return; }
      window.Niimbot.connect(m2h()).then(function () { toast("Bluetooth connected"); var s = document.getElementById("printer-status"); if (s) s.textContent = "Bluetooth connected"; }).catch(function (err) { toast(String(err.message || err), "err"); });
      return;
    }
    if (act === "usb") {
      if (!window.OmnivatePrint) return;
      window.OmnivatePrint.connectUsb().then(function () { toast(window.OmnivatePrint.statusText()); }).catch(function (err) { toast(String(err.message || err), "err"); });
      return;
    }
    if (act === "test-label") {
      var fake = { material: "Top Quartz test", L: 50, W: 15, T: 0, labelNo: "TQ-TEST", slabNo: "TEST" };
      var canvas = drawLabel(fake);
      if (window.Niimbot) window.Niimbot.printImage(canvas.toDataURL("image/png"), { model: m2h(), size: geom(), copies: 1, offsetY: 0 }).then(function () { toast("Test sent"); }).catch(function (err) { toast(String(err.message || err), "err"); });
      return;
    }
    if (act === "stage" && isAdmin()) {
      state.stages[el.getAttribute("data-stage")] = el.checked;
      save();
      return;
    }
    if (act === "camera-toggle" && isAdmin()) { state.camera = !state.camera; save(); render(); return; }
    if (act === "camera") { toast(state.camera ? "Camera scan is optional in this demo. Use the handheld field." : "Camera is off", "warn"); return; }
    if (act === "reset" && isAdmin()) { state = seed(); save(); toast("Sample data restored"); render(); }
  });

  document.addEventListener("keydown", function (e) {
    var scan = e.target && e.target.closest && e.target.closest("[data-scan]");
    if (scan) {
      if (e.key === "Enter") { e.preventDefault(); var code = scan.value.trim(); scan.value = ""; if (code) onScan(code); }
      wedge = [];
      return;
    }
    var tag = e.target && e.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target && e.target.isContentEditable)) { wedge = []; return; }
    var now = Date.now();
    if (e.key === "Enter") {
      if (wedge.length >= 4 && now - wedge[wedge.length - 1].t < 120) onScan(wedge.map(function (c) { return c.k; }).join(""));
      wedge = [];
      return;
    }
    if (e.key.length !== 1) return;
    if (wedge.length && now - wedge[wedge.length - 1].t > 60) wedge = [];
    wedge.push({ k: e.key, t: now });
  });
  document.addEventListener("focusin", function (e) {
    var el = e.target;
    if (!el || !el.hasAttribute || !el.hasAttribute("data-scan")) return;
    if (el.getAttribute("inputmode") === "text") return;
    el.setAttribute("readonly", "readonly");
    setTimeout(function () { el.removeAttribute("readonly"); }, 80);
  });
  window.addEventListener("hashchange", render);

  window.Omnivate = {
    openModal: openModal, closeModal: closeModal, esc: esc, toast: toast,
    icon: function () { return ""; }
  };
  window.OmnivateLabels = {
    geom: geom,
    auditCodes: function (codes) {
      var seen = {};
      var dups = [];
      (codes || []).forEach(function (c) { if (seen[c]) dups.push(c); seen[c] = true; });
      var nums = (codes || []).map(function (c) { var m = String(c).match(/(\d+)$/); return m ? Number(m[1]) : NaN; });
      return { unique: dups.length === 0, consecutive: nums.every(function (n, i) { return i === 0 || n === nums[i - 1] + 1; }), dups: dups, codes: codes || [] };
    }
  };
  window.OmnivateProduction = { audit: audit, drawLabel: drawLabel, geom: geom };

  load();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
  render();
})();
