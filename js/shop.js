/* Production workbook and timesheets (shifts, leave, BCEA pay). Invented sample data only. */
(function () {
  "use strict";
  var O = window.Omnivate;
  if (!O) return;

  var STAGES = ["Ordered", "Collected", "Received", "Cutting", "Polishing", "Done"];
  var QUARRIES = [
    { code: "DLA", name: "Drakensberg Ledge Aggregate" },
    { code: "K2", name: "Kalahari Two Stone" },
    { code: "NSS", name: "Northern Slate & Stone" },
    { code: "PG", name: "Pietersburg Grey Quarry" },
    { code: "VT", name: "Vaal Tributary Granite" }
  ];
  var HOLIDAYS = {
    "2026-01-01": "New Year's Day",
    "2026-03-21": "Human Rights Day",
    "2026-03-23": "Human Rights Day observed",
    "2026-04-03": "Good Friday",
    "2026-04-06": "Family Day",
    "2026-04-27": "Freedom Day",
    "2026-05-01": "Workers' Day",
    "2026-06-16": "Youth Day",
    "2026-08-09": "National Women's Day",
    "2026-08-10": "National Women's Day observed",
    "2026-09-24": "Heritage Day",
    "2026-12-16": "Day of Reconciliation",
    "2026-12-25": "Christmas Day",
    "2026-12-26": "Day of Goodwill",
    "2026-12-28": "Day of Goodwill observed"
  };
  var shopUi = { week: mondayOf(zaToday()), prodTab: "board", timeTab: "week" };

  function zaToday() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Johannesburg", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  }
  function zaTime() {
    var t = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Johannesburg", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date());
    return t.slice(0, 5);
  }
  function mondayOf(iso) {
    var d = new Date(iso + "T12:00:00Z");
    var day = d.getUTCDay();
    var diff = day === 0 ? -6 : 1 - day;
    d.setUTCDate(d.getUTCDate() + diff);
    return d.toISOString().slice(0, 10);
  }
  function addDays(iso, n) {
    var d = new Date(iso + "T12:00:00Z");
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }
  function weekday(iso) { return new Date(iso + "T12:00:00Z").getUTCDay(); }
  function mins(hhmm) {
    var p = String(hhmm || "0:0").split(":");
    return (Number(p[0]) || 0) * 60 + (Number(p[1]) || 0);
  }
  function hoursBetween(start, end) {
    var a = mins(start), b = mins(end);
    if (b <= a) b += 1440;
    return (b - a) / 60;
  }
  function round2(n) { return Math.round((Number(n) || 0) * 100) / 100; }
  function zar2(n) {
    return "R\u00A0" + round2(n).toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function esc(s) { return O.esc(s); }

  function defaultLeaveTypes() {
    return [
      { id: "annual", name: "Annual", days: 15, cycle: "year", paid: true, monthly: 1.25 },
      { id: "sick", name: "Sick", days: 30, cycle: "3year", paid: true, monthly: 0 },
      { id: "family", name: "Family responsibility", days: 3, cycle: "year", paid: true, monthly: 0 },
      { id: "maternity", name: "Maternity", days: 0, months: 4, cycle: "event", paid: false, monthly: 0 },
      { id: "parental", name: "Parental", days: 10, cycle: "event", paid: true, monthly: 0 },
      { id: "unpaid", name: "Unpaid leave", days: 0, cycle: "none", paid: false, monthly: 0 },
      { id: "awol", name: "AWOL", days: 0, cycle: "none", paid: false, monthly: 0 },
      { id: "public", name: "Public holiday", days: 0, cycle: "none", paid: true, monthly: 0 },
      { id: "study", name: "Study", days: 0, cycle: "none", paid: true, monthly: 0 },
      { id: "other", name: "Other", days: 0, cycle: "none", paid: true, monthly: 0 }
    ];
  }
  function defaultShifts() {
    return [
      { id: "day", name: "Day", start: "07:00", end: "16:00", breakMin: 60, days: [1, 2, 3, 4, 5] },
      { id: "aft", name: "Afternoon", start: "14:00", end: "22:00", breakMin: 30, days: [1, 2, 3, 4, 5] },
      { id: "night", name: "Night", start: "22:00", end: "06:00", breakMin: 30, days: [1, 2, 3, 4, 5] }
    ];
  }
  function shiftNet(sh) { return round2(hoursBetween(sh.start, sh.end) - (sh.breakMin || 0) / 60); }

  function seedProduction(t) {
    var cust = (t.books.customers || []).map(function (c) { return c.id; });
    var materials = ["Rustenburg Black", "Impala", "Belfast Black", "Steel Grey", "African Black", "Rustenburg Grey"];
    var blocks = [];
    var cuts = [];
    var polish = [];
    var jobs = [];
    for (var i = 0; i < 15; i++) {
      var L = 240 + (i % 5) * 12;
      var W = 140 + (i % 4) * 8;
      var H = i % 2 ? 140 : 160;
      var m3 = round2(L * W * H / 1e6);
      var rate = 2400 + i * 80;
      var status = STAGES[i % STAGES.length];
      var block = {
        id: "b" + (101 + i),
        date: addDays("2026-09-01", i * 4),
        customerId: cust[i % Math.max(1, cust.length)] || "",
        quarry: QUARRIES[i % QUARRIES.length].code,
        material: materials[i % materials.length],
        blockId: "GW-B" + (101 + i),
        orderNo: "BO" + (3100 + i),
        L: L, W: W, H: H,
        m3: m3,
        tons: round2(m3 * 3.65),
        m3Cost: rate,
        blockCost: round2(m3 * rate),
        dateCollected: status === "Ordered" ? "" : addDays("2026-09-04", i * 4),
        truck: status === "Ordered" ? "" : "Sample truck " + ((i % 3) + 1),
        deliveryNote: status === "Ordered" ? "" : "DN" + (7700 + i),
        location: ["Yard A", "Yard B", "Bay 3"][i % 3],
        status: status
      };
      blocks.push(block);
      if (["Cutting", "Polishing", "Done"].indexOf(status) >= 0) {
        var qty = 4 + (i % 4);
        var sL = 280, sW = 160, sT = 2;
        var m2 = round2((sL / 100) * (sW / 100) * qty);
        var cM3 = round2(m2 * (sT / 100));
        var dept = i % 2 ? "Multiwire" : "Blades";
        cuts.push({
          id: "cut" + block.id, blockId: block.blockId, date: addDays(block.date, 10),
          dept: dept, machine: dept === "Blades" ? "Blade 2" : "Multiwire 1",
          qty: qty, L: sL, W: sW, T: sT, m2: m2, m3: cM3,
          waste: block.m3 ? round2((block.m3 - cM3) / block.m3 * 100) : 0,
          wires: dept === "Multiwire" ? 24 : "",
          amps: dept === "Multiwire" ? 38 : "",
          rate: dept === "Multiwire" ? 18 : "",
          wireSpeed: dept === "Multiwire" ? 22 : "",
          bead: dept === "Multiwire" ? 11 : "",
          newWire: dept === "Multiwire" ? (i % 2 ? "Y" : "N") : ""
        });
        if (status === "Polishing" || status === "Done") {
          for (var n = 1; n <= Math.min(3, qty); n++) {
            var Lm = 2800, Wm = 1600, Tm = 20;
            polish.push({
              id: block.blockId + "-" + n, blockId: block.blockId, date: addDays(block.date, 14),
              dept: n % 2 ? "CTS 1" : "CTS 2", slabNo: block.blockId + "-" + n,
              L: Lm, W: Wm, T: Tm, grade: ["CL", "C", "UP"][n % 3],
              m2: round2(Lm * Wm / 1e6), comments: "Sample polish", operator: "Sample operator " + n
            });
          }
        }
        if (i % 3 === 0) {
          jobs.push({
            id: "job" + block.id, date: addDays(block.date, 16), slabNo: block.blockId + "-1",
            machine: ["MULTI", "BLADE", "CTS"][i % 3], type: ["KERBS", "HEADSTONES", "LEDGERS", "BASES"][i % 4],
            L: 100, W: 20, T: 15, qty: 6, grade: "C",
            m2: round2(1 * 0.2 * 6), m3: round2(1 * 0.2 * 0.15 * 6),
            waste: 12, soNumber: "SO" + (4716 + (i % 10))
          });
        }
      }
    }
    return { quarries: QUARRIES, blocks: blocks, cuts: cuts, polish: polish, jobs: jobs };
  }

  function seedTime(t) {
    var prefix = t.id === "top-quartz" ? "TQ" : "GW";
    var people = t.id === "top-quartz"
      ? [["e1", "Sample: Naledi Khumalo", "day", 92], ["e2", "Sample: Pieter Botha", "aft", 88], ["e3", "Sample: Fatima Essop", "night", 105], ["e4", "Sample: Sipho Ndlovu", "day", 80]]
      : [["e1", "Sample: Karabo Dlamini", "day", 85], ["e2", "Sample: Hendrik Venter", "aft", 78], ["e3", "Sample: Yusuf Patel", "night", 96], ["e4", "Sample: Annette Fourie", "day", 90]];
    var employees = people.map(function (p) {
      return { id: prefix + "-" + p[0], name: p[1], shiftId: p[2], rate: p[3], startDate: "2026-03-01" };
    });
    var shifts = defaultShifts();
    var roster = {};
    var entries = [];
    employees.forEach(function (emp) {
      roster[emp.id] = {};
      var sh = shifts.find(function (s) { return s.id === emp.shiftId; });
      for (var d = 0; d < 21; d++) {
        var iso = addDays("2026-11-02", d);
        var wd = weekday(iso);
        if (sh.days.indexOf(wd) < 0) continue;
        if (iso > "2026-11-16") continue;
        roster[emp.id][iso] = sh.id;
        if (iso === "2026-11-16" && emp.id.endsWith("e4")) continue;
        var start = sh.start, end = sh.end;
        if (iso === "2026-11-05" && emp.shiftId === "day") start = "07:22";
        if (iso === "2026-11-10" && emp.shiftId === "day") end = "15:10";
        if (iso === "2026-11-11" && emp.shiftId === "night") end = "06:20";
        entries.push({
          id: emp.id + "-" + iso, employeeId: emp.id, date: iso,
          start: start, end: end, breakMin: sh.breakMin, job: d % 5 === 0 ? "SO4718" : "", shiftId: sh.id
        });
      }
    });
    var leave = [
      { id: "lv1", employeeId: employees[0].id, type: "annual", from: "2026-11-12", to: "2026-11-13", status: "Approved", note: "Sample family visit" },
      { id: "lv2", employeeId: employees[1].id, type: "sick", from: "2026-11-16", to: "2026-11-16", status: "Pending", note: "Sample clinic" },
      { id: "lv3", employeeId: employees[3].id, type: "unpaid", from: "2026-11-06", to: "2026-11-06", status: "Approved", note: "Sample unpaid day" },
      { id: "lv4", employeeId: employees[2].id, type: "family", from: "2026-11-10", to: "2026-11-10", status: "Approved", note: "Sample family responsibility" },
      { id: "lv5", employeeId: employees[0].id, type: "study", from: "2026-11-20", to: "2026-11-20", status: "Declined", note: "Sample course" },
      { id: "lv6", employeeId: employees[1].id, type: "awol", from: "2026-11-04", to: "2026-11-04", status: "Approved", note: "Sample absent" }
    ];
    entries = entries.filter(function (e) {
      return !leave.some(function (lv) {
        return lv.status === "Approved" && lv.employeeId === e.employeeId && lv.from <= e.date && lv.to >= e.date;
      });
    });
    return {
      shifts: shifts,
      employees: employees,
      roster: roster,
      entries: entries,
      openShifts: {},
      leaveTypes: defaultLeaveTypes(),
      leave: leave,
      settings: { weeklyCap: 45, otMult: 1.5, premiumMult: 2, nightStart: "18:00", nightEnd: "06:00", nightRate: 20 },
      holidays: HOLIDAYS
    };
  }

  function ensureShop(t) {
    if (!t || !t.books) return;
    var changed = false;
    if (!t.books.production || !t.books.production.blocks) {
      t.books.production = seedProduction(t);
      changed = true;
    }
    if (!t.books.time || !t.books.time.employees) {
      t.books.time = seedTime(t);
      changed = true;
    }
    if (changed) O.persist();
    return t.books;
  }

  function quarryName(code) {
    var q = QUARRIES.find(function (x) { return x.code === code; });
    return q ? q.code + " " + q.name : code;
  }
  function prodOn(t) { return !!(t.features && t.features.production); }
  function timeOn(t) { return !!(t.features && t.features.timesheets); }

  function blockOf(t, id) {
    return (t.books.production.blocks || []).find(function (b) { return b.blockId === id || b.id === id; });
  }
  function cutsFor(t, blockId) {
    return (t.books.production.cuts || []).filter(function (c) { return c.blockId === blockId; });
  }
  function polishFor(t, blockId) {
    return (t.books.production.polish || []).filter(function (p) { return p.blockId === blockId; });
  }

  function advanceBlock(t, block) {
    var i = STAGES.indexOf(block.status);
    if (i < 0 || i >= STAGES.length - 1) return block.status;
    block.status = STAGES[i + 1];
    O.persist();
    O.pushAudit({ tenantId: t.id, action: "Block stage advanced", target: block.blockId, before: STAGES[i], after: block.status });
    return block.status;
  }

  function findSlab(t, code) {
    var q = String(code || "").trim().toLowerCase();
    var blocks = (t.books.production && t.books.production.blocks) || [];
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (b.blockId.toLowerCase() === q) return { block: b, slab: "" };
      var cuts = cutsFor(t, b.blockId);
      var n = cuts.reduce(function (s, c) { return s + (c.qty || 0); }, 0) || 6;
      for (var k = 1; k <= n; k++) {
        if ((b.blockId + "-" + k).toLowerCase() === q) return { block: b, slab: b.blockId + "-" + k };
      }
    }
    return null;
  }

  function kpis(t) {
    var blocks = t.books.production.blocks || [];
    var received = blocks.filter(function (b) { return ["Received", "Cutting", "Polishing", "Done"].indexOf(b.status) >= 0; });
    var m3 = received.reduce(function (s, b) { return s + b.m3; }, 0);
    var m2cut = (t.books.production.cuts || []).reduce(function (s, c) { return s + c.m2; }, 0);
    var m2pol = (t.books.production.polish || []).reduce(function (s, p) { return s + p.m2; }, 0);
    var rec = [];
    blocks.forEach(function (b) {
      var m3c = cutsFor(t, b.blockId).reduce(function (s, c) { return s + c.m3; }, 0);
      if (m3c && b.m3) rec.push(m3c / b.m3 * 100);
    });
    var avg = rec.length ? rec.reduce(function (s, n) { return s + n; }, 0) / rec.length : 0;
    return { m3: round2(m3), m2cut: round2(m2cut), m2pol: round2(m2pol), recovery: round2(avg) };
  }

  function tabs(t, screen, tab, items) {
    return '<div class="subnav">' + items.map(function (it) {
      var on = tab === it[0];
      return '<a class="btn btn-sm ' + (on ? "btn-primary" : "btn-secondary") + '" href="#/preview/' + t.id + "/work/" + screen + "/" + it[0] + '">' + it[1] + "</a>";
    }).join("") + "</div>";
  }

  function productionBody(t) {
    if (!prodOn(t)) return '<div class="empty"><h3>Production is off</h3><p>Turn it on under Modules in the Control Centre.</p></div>';
    ensureShop(t);
    var tab = routeParts()[4] || "board";
    var head = '<div class="page-head"><div><h1>Production</h1><p>Sample quarry-to-slab book. Scan a slab barcode such as GW-B104-1 to move the block on.</p></div></div>' +
      tabs(t, "production", tab, [["board", "Board"], ["blocks", "Blocks"], ["cutting", "Cutting"], ["polishing", "Polishing"], ["jobs", "Cut to size"], ["recovery", "Recovery"], ["barcodes", "Barcodes"]]);
    if (tab === "blocks") return head + blocksView(t);
    if (tab === "cutting") return head + cuttingView(t);
    if (tab === "polishing") return head + polishView(t);
    if (tab === "jobs") return head + jobsView(t);
    if (tab === "recovery") return head + recoveryView(t);
    if (tab === "barcodes") return head + barcodeView(t);
    return head + boardView(t);
  }

  function boardView(t) {
    var k = kpis(t);
    var cards = STAGES.map(function (st) {
      var items = t.books.production.blocks.filter(function (b) { return b.status === st; });
      return '<div class="kanban-col"><h3>' + esc(st) + ' <span class="tiny">' + items.length + "</span></h3>" +
        items.map(function (b) {
          return '<div class="kanban-card"><strong>' + esc(b.blockId) + "</strong><div>" + esc(b.material) + "</div><div class=\"tiny\">" + esc(quarryName(b.quarry)) + " · " + b.m3 + " m³</div>" +
            (st === "Done" ? "" : '<button class="btn btn-sm btn-secondary" data-act="advance-block" data-id="' + t.id + '" data-block="' + esc(b.blockId) + '">Advance</button>') +
            "</div>";
        }).join("") + "</div>";
    }).join("");
    return '<div class="preview-dash">' +
      kpi("m³ received", k.m3) + kpi("m² cut", k.m2cut) + kpi("m² polished", k.m2pol) + kpi("Avg recovery", k.recovery + "%") +
      '</div><div class="kanban">' + cards + "</div>";
  }
  function kpi(l, v) { return '<div class="kpi"><div class="label">' + l + '</div><div class="value">' + v + "</div></div>"; }

  function blocksView(t) {
    var rows = t.books.production.blocks.map(function (b) {
      return "<tr><td>" + esc(b.date) + "</td><td>" + esc(custName(t, b.customerId)) + "</td><td>" + esc(quarryName(b.quarry)) + "</td><td>" + esc(b.material) + "</td><td class=\"mono\">" + esc(b.blockId) + "</td><td>" + esc(b.orderNo) + "</td><td>" + b.L + "×" + b.W + "×" + b.H + "</td><td>" + b.m3 + "</td><td>" + b.tons + "</td><td>" + zar2(b.m3Cost) + "</td><td>" + zar2(b.blockCost) + "</td><td>" + esc(b.dateCollected || "—") + "</td><td>" + esc(b.truck || "—") + "</td><td>" + esc(b.deliveryNote || "—") + "</td><td>" + esc(b.location) + "</td><td><span class=\"badge badge-teal\">" + esc(b.status) + "</span></td></tr>";
    }).join("");
    return '<p class="tiny">m³ = L×W×H / 1,000,000. Tons = m³ × 3.65. Block cost = m³ × m³ cost. Dimensions are centimetres.</p>' +
      '<div class="table-wrap"><table class="data"><thead><tr><th>Date</th><th>Customer</th><th>Quarry</th><th>Material</th><th>Block</th><th>Order</th><th>L×W×H</th><th>m³</th><th>Tons</th><th>m³ cost</th><th>Block cost</th><th>Collected</th><th>Truck</th><th>Del. note</th><th>Location</th><th>Status</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
  }
  function custName(t, id) {
    var c = (t.books.customers || []).find(function (x) { return x.id === id; });
    return c ? c.name : "—";
  }
  function cuttingView(t) {
    var blades = t.books.production.cuts.filter(function (c) { return c.dept === "Blades"; });
    var multi = t.books.production.cuts.filter(function (c) { return c.dept === "Multiwire"; });
    function rows(list, extra) {
      return list.map(function (c) {
        return "<tr><td>" + esc(c.date) + "</td><td>" + esc(c.blockId) + "</td><td>" + esc(c.machine) + "</td><td>" + c.qty + "</td><td>" + c.L + "×" + c.W + "×" + c.T + "</td><td>" + c.m2 + "</td><td>" + c.m3 + "</td><td>" + c.waste + "%</td>" + extra(c) + "</tr>";
      }).join("") || "<tr><td colspan=\"8\">None yet.</td></tr>";
    }
    return "<h2>Blades</h2>" + tableHtml(["Date", "Block", "Machine", "Qty", "L×W×T cm", "m²", "m³", "Waste"], rows(blades, function () { return ""; })) +
      "<h2 style=\"margin-top:16px\">Multiwire</h2>" + tableHtml(["Date", "Block", "Machine", "Qty", "L×W×T cm", "m²", "m³", "Waste", "Wires", "Amps", "Rate", "Wire speed", "Bead mm", "New wire"], rows(multi, function (c) {
        return "<td>" + esc(c.wires) + "</td><td>" + esc(c.amps) + "</td><td>" + esc(c.rate) + "</td><td>" + esc(c.wireSpeed) + "</td><td>" + esc(c.bead) + "</td><td>" + esc(c.newWire) + "</td>";
      })) + '<p class="tiny">Waste % = (block m³ − m³ cut) / block m³.</p>';
  }
  function tableHtml(heads, body) {
    return '<div class="table-wrap"><table class="data"><thead><tr>' + heads.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" + body + "</tbody></table></div>";
  }
  function polishView(t) {
    var rows = (t.books.production.polish || []).map(function (p) {
      return "<tr><td>" + esc(p.date) + "</td><td>" + esc(p.dept) + "</td><td class=\"mono\">" + esc(p.slabNo) + "</td><td>" + p.L + "×" + p.W + "×" + p.T + "</td><td>" + esc(p.grade) + "</td><td>" + p.m2 + "</td><td>" + esc(p.comments) + "</td><td>" + esc(p.operator) + "</td></tr>";
    }).join("");
    return '<p class="tiny">Slab size is millimetres. m² = L × W / 1,000,000. Grade CL / C / UP.</p>' +
      tableHtml(["Date", "Dept", "Slab", "L×W×T mm", "Grade", "m²", "Comments", "Operator"], rows);
  }
  function jobsView(t) {
    var rows = (t.books.production.jobs || []).map(function (j) {
      return "<tr><td>" + esc(j.date) + "</td><td>" + esc(j.slabNo) + "</td><td>" + esc(j.machine) + "</td><td>" + esc(j.type) + "</td><td>" + j.L + "×" + j.W + "×" + j.T + "</td><td>" + j.qty + "</td><td>" + esc(j.grade) + "</td><td>" + j.m2 + "</td><td>" + j.m3 + "</td><td>" + j.waste + "%</td><td>" + esc(j.soNumber) + "</td><td><button class=\"btn btn-sm btn-secondary\" data-act=\"print-job\" data-id=\"" + t.id + "\" data-job=\"" + esc(j.id) + "\">Job card</button></td></tr>";
    }).join("");
    return tableHtml(["Date", "Source slab", "Machine", "Type", "L×W×T", "Qty", "Grade", "m²", "m³", "Waste", "SO", ""], rows);
  }
  function recoveryView(t) {
    var rows = t.books.production.blocks.map(function (b) {
      var cs = cutsFor(t, b.blockId);
      var ps = polishFor(t, b.blockId);
      var m2c = round2(cs.reduce(function (s, c) { return s + c.m2; }, 0));
      var m3c = cs.reduce(function (s, c) { return s + c.m3; }, 0);
      var qty = cs.reduce(function (s, c) { return s + c.qty; }, 0);
      var m2p = round2(ps.reduce(function (s, p) { return s + p.m2; }, 0));
      var rec = b.m3 ? round2(m3c / b.m3 * 100) : 0;
      return "<tr><td>" + esc(b.blockId) + "</td><td>" + qty + "</td><td>" + m2c + "</td><td>" + ps.length + "</td><td>" + m2p + "</td><td>" + rec + "%</td><td>" + round2(100 - rec) + "%</td></tr>";
    }).join("");
    var uncut = t.books.production.blocks.filter(function (b) { return !cutsFor(t, b.blockId).length; });
    var unpol = t.books.production.blocks.filter(function (b) { return cutsFor(t, b.blockId).length && !polishFor(t, b.blockId).length; });
    return tableHtml(["Block", "Qty cut", "m² cut", "Qty polished", "m² polished", "Recovery", "Waste"], rows) +
      "<h2 style=\"margin-top:14px\">Uncut blocks</h2><p>" + (uncut.map(function (b) { return esc(b.blockId); }).join(", ") || "None") + "</p>" +
      "<h2>Unpolished blocks</h2><p>" + (unpol.map(function (b) { return esc(b.blockId); }).join(", ") || "None") + "</p>";
  }
  function barcodeView(t) {
    var blocks = t.books.production.blocks.map(function (b) {
      var n = Math.max(1, cutsFor(t, b.blockId).reduce(function (s, c) { return s + c.qty; }, 0) || 4);
      var labels = "";
      for (var i = 1; i <= Math.min(n, 8); i++) {
        labels += '<button class="btn btn-sm btn-secondary" data-act="print-slab" data-id="' + t.id + '" data-block="' + esc(b.blockId) + '" data-n="' + i + '">' + esc(b.blockId) + "-" + i + "</button> ";
      }
      return "<div style=\"margin-bottom:10px\"><strong>" + esc(b.blockId) + "</strong> " + esc(b.material) + "<div>" + labels + "</div></div>";
    }).join("");
    return '<p class="tiny">Each slab is blockID-n. Print uses the M2-H 50×15 mm label (591×177 px unless you changed Label size). A handheld scan of that code advances the block.</p>' + blocks;
  }

  function drawSlab(t, block, n) {
    var size = window.OmnivateLabels.geom();
    var c = document.createElement("canvas");
    c.width = size.w_px;
    c.height = size.h_px;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.save();
    ctx.translate(size.offsetX | 0, size.offsetY | 0);
    ctx.fillStyle = "#000";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(block.material, 8, 26);
    ctx.font = "18px sans-serif";
    ctx.fillText(block.L + " × " + block.W + " × " + block.H + " cm", 8, 48);
    var code = block.blockId + "-" + n;
    var bc = document.createElement("canvas");
    window.JsBarcode(bc, code, { format: "CODE128", displayValue: false, margin: 0, width: 2, height: Math.max(40, c.height - 90), background: "#fff", lineColor: "#000" });
    ctx.drawImage(bc, 8, 56, Math.min(bc.width, c.width - 16), Math.max(40, c.height - 90));
    ctx.font = "16px sans-serif";
    ctx.fillText(code, 8, c.height - 10);
    ctx.restore();
    return c;
  }
  function sendLabel(canvas) {
    var size = window.OmnivateLabels.geom();
    if (!window.Niimbot) { O.toast("Printer driver missing", "err"); return; }
    window.Niimbot.printImage(canvas.toDataURL("image/png"), {
      model: { label: "Niimbot M2-H", id: 4608, dpi: 300, task: "b1", density: 3, label_type: 1, speed: 1, name_prefixes: ["M2"] },
      size: { w_px: size.w_px, h_px: size.h_px, dpi: 300, w_mm: size.wMm, h_mm: size.hMm },
      copies: size.copies || 1, offsetY: 0
    }).then(function () { O.toast("Label sent " + size.w_px + "×" + size.h_px, "ok"); }).catch(function (e) {
      O.toast(String(e.message || e), "err");
    });
  }

  function printJob(t, job) {
    var root = document.getElementById("doc-print-root");
    if (!root) return;
    root.innerHTML = '<article class="paper"><h1>Job card</h1><p>' + esc(t.tradingAs || t.name) + "</p><table>" +
      "<tr><td>Date</td><td>" + esc(job.date) + "</td></tr><tr><td>SO</td><td>" + esc(job.soNumber) + "</td></tr>" +
      "<tr><td>Source slab</td><td>" + esc(job.slabNo) + "</td></tr><tr><td>Machine</td><td>" + esc(job.machine) + "</td></tr>" +
      "<tr><td>Type</td><td>" + esc(job.type) + "</td></tr><tr><td>Size</td><td>" + job.L + " × " + job.W + " × " + job.T + "</td></tr>" +
      "<tr><td>Qty</td><td>" + job.qty + "</td></tr><tr><td>Grade</td><td>" + esc(job.grade) + "</td></tr>" +
      "<tr><td>m² / m³</td><td>" + job.m2 + " / " + job.m3 + "</td></tr><tr><td>Waste</td><td>" + job.waste + "%</td></tr></table></article>";
    document.body.classList.add("printing-doc");
    window.print();
    document.body.classList.remove("printing-doc");
  }

  function nightHours(start, end, ns, ne) {
    var a = mins(start), b = mins(end);
    if (b <= a) b += 1440;
    var n0 = mins(ns), n1 = mins(ne);
    var count = 0;
    for (var m = a; m < b; m++) {
      var mod = ((m % 1440) + 1440) % 1440;
      var inn = n1 <= n0 ? (mod >= n0 || mod < n1) : (mod >= n0 && mod < n1);
      if (inn) count++;
    }
    return count / 60;
  }
  function isHoliday(time, iso) { return !!(time.holidays && time.holidays[iso]); }
  function leaveType(time, id) { return (time.leaveTypes || []).find(function (x) { return x.id === id; }); }
  function leaveOn(time, empId, iso) {
    return (time.leave || []).find(function (lv) {
      return lv.employeeId === empId && lv.status === "Approved" && lv.from <= iso && lv.to >= iso;
    });
  }
  function shiftById(time, id) { return (time.shifts || []).find(function (s) { return s.id === id; }); }
  function assignedShift(time, emp, iso) {
    var id = time.roster && time.roster[emp.id] && time.roster[emp.id][iso];
    if (id === "") return null;
    if (id) return shiftById(time, id);
    var def = shiftById(time, emp.shiftId);
    if (def && def.days.indexOf(weekday(iso)) >= 0) return def;
    return null;
  }
  function entryOn(time, empId, iso) {
    return (time.entries || []).find(function (e) { return e.employeeId === empId && e.date === iso; });
  }
  function monthsWorked(start, today) {
    var s = new Date(start + "T12:00:00Z"), n = new Date(today + "T12:00:00Z");
    var m = (n.getUTCFullYear() - s.getUTCFullYear()) * 12 + (n.getUTCMonth() - s.getUTCMonth());
    if (n.getUTCDate() < s.getUTCDate()) m--;
    return Math.max(0, m);
  }
  function workingDays(time, from, to) {
    var n = 0, iso = from;
    while (iso <= to && n < 400) {
      var wd = weekday(iso);
      if (wd !== 0 && wd !== 6 && !isHoliday(time, iso)) n++;
      iso = addDays(iso, 1);
    }
    return n;
  }
  function entitlement(time, emp, type, today) {
    if (type.id === "annual") return round2(monthsWorked(emp.startDate || "2026-03-01", today) * (type.monthly || 1.25));
    if (type.id === "maternity") return (type.months || 4) + " months";
    if (type.days) return type.days;
    return "—";
  }
  function takenDays(time, empId, typeId) {
    return (time.leave || []).filter(function (lv) { return lv.employeeId === empId && lv.type === typeId && lv.status === "Approved"; })
      .reduce(function (s, lv) { return s + workingDays(time, lv.from, lv.to); }, 0);
  }

  function payEntry(time, emp, entry, shift) {
    var worked = Math.max(0, hoursBetween(entry.start, entry.end) - (entry.breakMin || 0) / 60);
    var scheduled = shift ? shiftNet(shift) : 9;
    var ph = isHoliday(time, entry.date) || weekday(entry.date) === 0;
    var night = nightHours(entry.start, entry.end, time.settings.nightStart, time.settings.nightEnd);
    night = Math.min(night, worked);
    var normal = 0, ot = 0, premium = 0;
    if (ph) premium = worked;
    else {
      normal = Math.min(worked, scheduled);
      ot = Math.max(0, worked - scheduled);
    }
    var late = false, early = false;
    if (shift) {
      var grace = 10;
      var startDiff = mins(entry.start) - mins(shift.start);
      if (startDiff > grace) late = true;
      var endA = mins(entry.end), endS = mins(shift.end);
      if (mins(shift.end) <= mins(shift.start)) {
        if (endA <= mins(shift.start)) endA += 1440;
        endS += 1440;
      }
      if (endA + 5 < endS) early = true;
    }
    return { worked: round2(worked), normal: round2(normal), ot: round2(ot), premium: round2(premium), night: round2(night), late: late, early: early, scheduled: scheduled };
  }

  function weekDays(start) {
    var out = [];
    for (var i = 0; i < 7; i++) out.push(addDays(start, i));
    return out;
  }
  function weekCalc(t, emp, weekStart) {
    var time = t.books.time;
    var days = weekDays(weekStart);
    var rows = days.map(function (iso) {
      var shift = assignedShift(time, emp, iso);
      var entry = entryOn(time, emp.id, iso);
      var lv = leaveOn(time, emp.id, iso);
      var type = lv ? leaveType(time, lv.type) : null;
      var pay = entry ? payEntry(time, emp, entry, shift || shiftById(time, entry.shiftId)) : null;
      var leavePaid = 0, leaveUnpaid = 0;
      if (lv && type && !entry) {
        var hrs = shift ? shiftNet(shift) : 0;
        if (type.paid) leavePaid = hrs;
        else leaveUnpaid = hrs;
      }
      var missed = !entry && !lv && shift && iso < zaToday();
      return { iso: iso, shift: shift, entry: entry, leave: lv, type: type, pay: pay, leavePaid: leavePaid, leaveUnpaid: leaveUnpaid, missed: missed };
    });
    var normal = rows.reduce(function (s, r) { return s + (r.pay ? r.pay.normal : 0) + r.leavePaid; }, 0);
    var ot = rows.reduce(function (s, r) { return s + (r.pay ? r.pay.ot : 0); }, 0);
    var premium = rows.reduce(function (s, r) { return s + (r.pay ? r.pay.premium : 0); }, 0);
    var cap = time.settings.weeklyCap || 45;
    if (normal > cap) { ot += normal - cap; normal = cap; }
    var night = rows.reduce(function (s, r) { return s + (r.pay ? r.pay.night : 0); }, 0);
    var unpaid = rows.reduce(function (s, r) { return s + r.leaveUnpaid; }, 0);
    var rate = emp.rate || 0;
    var gross = normal * rate + ot * rate * (time.settings.otMult || 1.5) + premium * rate * (time.settings.premiumMult || 2) + night * (time.settings.nightRate || 0);
    return { rows: rows, normal: round2(normal), ot: round2(ot), premium: round2(premium), night: round2(night), unpaid: round2(unpaid), leavePaid: round2(rows.reduce(function (s, r) { return s + r.leavePaid; }, 0)), gross: round2(gross) };
  }

  function timesheetBody(t) {
    if (!timeOn(t)) return '<div class="empty"><h3>Timesheets are off</h3><p>Turn Timesheets on under Modules in the Control Centre.</p></div>';
    ensureShop(t);
    var tab = routeParts()[4] || "week";
    var head = '<div class="page-head"><div><h1>Timesheets</h1><p>Shifts, roster and leave. Sample people only.</p></div></div>' +
      tabs(t, "timesheets", tab, [["week", "This week"], ["roster", "Roster"], ["leave", "Leave"]]);
    if (tab === "roster") return head + rosterView(t);
    if (tab === "leave") return head + leaveView(t);
    return head + weekView(t);
  }

  function weekView(t) {
    var time = t.books.time;
    var week = shopUi.week;
    var days = weekDays(week);
    var head = "<tr><th>Employee</th><th>Shift</th>" + days.map(function (d) { return "<th>" + d.slice(5) + "</th>"; }).join("") + "<th>Normal</th><th>OT</th><th>Leave</th><th>Night</th><th>Gross</th></tr>";
    var body = time.employees.map(function (emp) {
      var calc = weekCalc(t, emp, week);
      var shName = (shiftById(time, emp.shiftId) || {}).name || "";
      return "<tr><td>" + esc(emp.name) + "</td><td>" + esc(shName) + "</td>" + calc.rows.map(function (r) {
        var txt = "—";
        if (r.leave) txt = r.type ? r.type.name : "Leave";
        else if (r.pay) txt = r.pay.worked + "h" + (r.pay.late ? " late" : "") + (r.pay.early ? " early" : "");
        else if (r.missed) txt = "Missed";
        return "<td>" + esc(txt) + "</td>";
      }).join("") + "<td>" + calc.normal + "</td><td>" + calc.ot + "</td><td>" + calc.leavePaid + " / " + calc.unpaid + "</td><td>" + calc.night + "h</td><td>" + zar2(calc.gross) + "</td></tr>";
    }).join("");
    var byShift = {};
    time.employees.forEach(function (emp) {
      var calc = weekCalc(t, emp, week);
      var id = emp.shiftId;
      if (!byShift[id]) byShift[id] = { hours: 0, cost: 0 };
      byShift[id].hours += calc.normal + calc.ot + calc.premium;
      byShift[id].cost += calc.gross;
    });
    var sum = time.shifts.map(function (s) {
      var b = byShift[s.id] || { hours: 0, cost: 0 };
      return "<div class=\"kpi\"><div class=\"label\">" + esc(s.name) + " " + esc(s.start) + "–" + esc(s.end) + "</div><div class=\"value\">" + round2(b.hours) + "h</div><div class=\"sub\">" + zar2(b.cost) + "</div></div>";
    }).join("");
    return '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:8px">' +
      '<button class="btn btn-sm btn-secondary" data-act="time-week" data-delta="-7">Previous week</button>' +
      "<strong>Week of " + esc(week) + "</strong>" +
      '<button class="btn btn-sm btn-secondary" data-act="time-week" data-delta="7">Next week</button>' +
      '<button class="btn btn-sm btn-primary" data-act="time-pdf" data-id="' + t.id + '">Timesheet PDF</button>' +
      '<button class="btn btn-sm btn-secondary" data-act="time-wa" data-id="' + t.id + '">WhatsApp</button>' +
      '<button class="btn btn-sm btn-secondary" data-act="time-csv" data-id="' + t.id + '">CSV</button></div>' +
      clockPanel(t) +
      '<div class="table-wrap"><table class="data"><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div>" +
      '<h2 style="margin:14px 0 8px">Per shift</h2><div class="preview-dash">' + sum + "</div>" +
      '<p class="tiny">Overtime is hours beyond the shift length, then anything over ' + time.settings.weeklyCap + " ordinary hours in the week. Sundays and public holidays are paid at " + time.settings.premiumMult + "×. Night allowance is " + zar2(time.settings.nightRate) + "/h between " + esc(time.settings.nightStart) + " and " + esc(time.settings.nightEnd) + ".</p>" +
      settingsForm(t) + manualForm(t);
  }
  function clockPanel(t) {
    var time = t.books.time;
    return '<div class="clock-row">' + time.employees.map(function (emp) {
      var open = time.openShifts && time.openShifts[emp.id];
      return '<div class="clock-card"><div>' + esc(emp.name) + '</div><div class="tiny">' + esc((shiftById(time, emp.shiftId) || {}).name || "") + "</div>" +
        (open ? '<button class="btn btn-lg btn-primary" data-act="clock-out" data-id="' + t.id + '" data-emp="' + emp.id + '">Clock out</button>' : '<button class="btn btn-lg btn-teal" data-act="clock-in" data-id="' + t.id + '" data-emp="' + emp.id + '">Clock in</button>') +
        "</div>";
    }).join("") + "</div>";
  }
  function settingsForm(t) {
    var s = t.books.time.settings;
    return '<form data-act="save-time-settings" data-id="' + t.id + '" class="form-grid" style="margin-top:12px">' +
      '<div class="field"><label>Weekly ordinary cap (h)</label><input class="input" name="weeklyCap" type="number" value="' + s.weeklyCap + '"></div>' +
      '<div class="field"><label>Overtime multiple</label><input class="input" name="otMult" type="number" step="0.1" value="' + s.otMult + '"></div>' +
      '<div class="field"><label>Sunday / public holiday multiple</label><input class="input" name="premiumMult" type="number" step="0.1" value="' + s.premiumMult + '"></div>' +
      '<div class="field"><label>Night from</label><input class="input" name="nightStart" value="' + esc(s.nightStart) + '"></div>' +
      '<div class="field"><label>Night to</label><input class="input" name="nightEnd" value="' + esc(s.nightEnd) + '"></div>' +
      '<div class="field"><label>Night allowance R/h</label><input class="input" name="nightRate" type="number" step="0.01" value="' + s.nightRate + '"></div>' +
      '<div class="field"><label>&nbsp;</label><button class="btn btn-secondary" type="submit">Save pay rules</button></div></form>';
  }
  function manualForm(t) {
    var time = t.books.time;
    return '<h2 style="margin-top:16px">Manual entry</h2><form data-act="save-time-entry" data-id="' + t.id + '" class="form-grid">' +
      '<div class="field"><label>Employee</label><select class="select" name="employee">' + time.employees.map(function (e) { return '<option value="' + e.id + '">' + esc(e.name) + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label>Date</label><input class="input" type="date" name="date" value="' + zaToday() + '"></div>' +
      '<div class="field"><label>Start</label><input class="input" name="start" value="07:00"></div>' +
      '<div class="field"><label>End</label><input class="input" name="end" value="16:00"></div>' +
      '<div class="field"><label>Break min</label><input class="input" type="number" name="breakMin" value="60"></div>' +
      '<div class="field"><label>Job / SO</label><input class="input" name="job" placeholder="Optional"></div>' +
      '<div class="field"><label>&nbsp;</label><button class="btn btn-primary" type="submit">Add entry</button></div></form>' +
      "<h2 style=\"margin-top:16px\">Shifts</h2>" + shiftEditor(t);
  }
  function shiftEditor(t) {
    var rows = t.books.time.shifts.map(function (s) {
      return "<tr><td>" + esc(s.name) + "</td><td>" + esc(s.start) + "</td><td>" + esc(s.end) + "</td><td>" + s.breakMin + "</td><td>" + shiftNet(s) + "h</td><td>" + s.days.join(",") + "</td></tr>";
    }).join("");
    return tableHtml(["Shift", "Start", "End", "Break", "Net", "Days (0=Sun)"], rows) +
      '<form data-act="save-shift" data-id="' + t.id + '" class="form-grid" style="margin-top:8px">' +
      '<div class="field"><label>Name</label><input class="input" name="name" required></div>' +
      '<div class="field"><label>Start</label><input class="input" name="start" value="08:00"></div>' +
      '<div class="field"><label>End</label><input class="input" name="end" value="17:00"></div>' +
      '<div class="field"><label>Break min</label><input class="input" name="breakMin" type="number" value="60"></div>' +
      '<div class="field"><label>Days</label><input class="input" name="days" value="1,2,3,4,5"></div>' +
      '<div class="field"><label>&nbsp;</label><button class="btn btn-secondary" type="submit">Add shift</button></div></form>';
  }
  function rosterView(t) {
    var time = t.books.time;
    var week = shopUi.week;
    var days = weekDays(week);
    var head = "<tr><th>Employee</th>" + days.map(function (d) {
      var names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return "<th>" + names[weekday(d)] + " " + d.slice(8) + (isHoliday(time, d) ? "<div class=\"tiny\">Public holiday</div>" : "") + "</th>";
    }).join("") + "</tr>";
    var body = time.employees.map(function (emp) {
      return "<tr><td>" + esc(emp.name) + "</td>" + days.map(function (d) {
        var lv = leaveOn(time, emp.id, d);
        var cur = (time.roster[emp.id] && time.roster[emp.id][d]) || "";
        if (!cur && assignedShift(time, emp, d)) cur = assignedShift(time, emp, d).id;
        var sel = '<select class="select" data-act="roster-set" data-id="' + t.id + '" data-emp="' + emp.id + '" data-date="' + d + '"><option value="">—</option>' +
          time.shifts.map(function (s) { return '<option value="' + s.id + '"' + (s.id === cur ? " selected" : "") + ">" + esc(s.name) + "</option>"; }).join("") + "</select>";
        return "<td>" + sel + (lv ? '<div class="tiny">' + esc(lv.type) + "</div>" : "") + "</td>";
      }).join("") + "</tr>";
    }).join("");
    return '<p class="tiny">Pick a shift for each day. Night (22:00–06:00) crosses midnight. Leave sits on the same cell.</p>' +
      '<div style="display:flex;gap:8px;margin-bottom:8px"><button class="btn btn-sm btn-secondary" data-act="time-week" data-delta="-7">Previous</button><strong>' + esc(week) + '</strong><button class="btn btn-sm btn-secondary" data-act="time-week" data-delta="7">Next</button></div>' +
      '<div class="table-wrap"><table class="data"><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div>";
  }
  function leaveView(t) {
    var time = t.books.time;
    var today = zaToday();
    var bal = time.employees.map(function (emp) {
      var cells = time.leaveTypes.filter(function (tp) { return tp.days || tp.monthly || tp.months; }).map(function (tp) {
        var ent = entitlement(time, emp, tp, today);
        var taken = takenDays(time, emp.id, tp.id);
        var left = typeof ent === "number" ? round2(ent - taken) : ent;
        return "<td>" + esc(tp.name) + ": " + left + " left (" + taken + " used)</td>";
      }).join("");
      return "<tr><td>" + esc(emp.name) + "</td>" + cells + "</tr>";
    }).join("");
    var reqs = (time.leave || []).map(function (lv) {
      var emp = time.employees.find(function (e) { return e.id === lv.employeeId; });
      var btns = lv.status === "Pending"
        ? '<button class="btn btn-sm btn-primary" data-act="leave-set" data-id="' + t.id + '" data-leave="' + lv.id + '" data-status="Approved">Approve</button> <button class="btn btn-sm btn-secondary" data-act="leave-set" data-id="' + t.id + '" data-leave="' + lv.id + '" data-status="Declined">Decline</button>'
        : esc(lv.status);
      return "<tr><td>" + esc(emp ? emp.name : "") + "</td><td>" + esc(lv.type) + "</td><td>" + esc(lv.from) + "</td><td>" + esc(lv.to) + "</td><td>" + workingDays(time, lv.from, lv.to) + "</td><td>" + esc(lv.note) + "</td><td>" + btns + "</td></tr>";
    }).join("");
    return "<h2>Balances</h2><p class=\"tiny\">Annual leave accrues at 1.25 days a month (15 days a year). Sick leave is 30 days per 36-month cycle. Family responsibility is 3 days a year. Maternity is 4 months, unpaid by the employer (UIF). Parental leave is 10 days.</p>" +
      '<div class="table-wrap"><table class="data"><tbody>' + bal + "</tbody></table></div>" +
      "<h2 style=\"margin-top:14px\">Requests</h2>" + tableHtml(["Employee", "Type", "From", "To", "Days", "Note", ""], reqs) +
      '<form data-act="leave-request" data-id="' + t.id + '" class="form-grid" style="margin-top:10px">' +
      '<div class="field"><label>Employee</label><select class="select" name="employee">' + time.employees.map(function (e) { return '<option value="' + e.id + '">' + esc(e.name) + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label>Type</label><select class="select" name="type">' + time.leaveTypes.map(function (tp) { return '<option value="' + tp.id + '">' + esc(tp.name) + "</option>"; }).join("") + "</select></div>" +
      '<div class="field"><label>From</label><input class="input" type="date" name="from" value="' + zaToday() + '"></div>' +
      '<div class="field"><label>To</label><input class="input" type="date" name="to" value="' + zaToday() + '"></div>' +
      '<div class="field"><label>Note</label><input class="input" name="note"></div>' +
      '<div class="field"><label>&nbsp;</label><button class="btn btn-primary" type="submit">Request leave</button></div></form>' +
      '<div style="margin-top:8px"><button class="btn btn-sm btn-secondary" data-act="leave-csv" data-id="' + t.id + '">Leave CSV</button></div>' +
      "<h2 style=\"margin-top:14px\">Leave rules</h2>" +
      '<form data-act="save-leave-rules" data-id="' + t.id + '">' + time.leaveTypes.map(function (tp) {
        return '<div class="line-edit"><span>' + esc(tp.name) + '</span><input class="input" name="days-' + tp.id + '" type="number" step="0.25" value="' + (tp.days || 0) + '"><label class="tiny"><input type="checkbox" name="paid-' + tp.id + '" ' + (tp.paid ? "checked" : "") + "> Paid</label></div>";
      }).join("") + '<button class="btn btn-secondary" type="submit">Save leave rules</button></form>' +
      "<h2 style=\"margin-top:14px\">Public holidays 2026</h2><p class=\"tiny\">" + Object.keys(time.holidays).map(function (d) { return esc(d + " " + time.holidays[d]); }).join(" · ") + "</p>";
  }

  function routeParts() { return O.parseHash().parts; }

  function pdfTimesheet(t) {
    var time = t.books.time;
    var week = shopUi.week;
    var days = weekDays(week);
    var html = time.employees.map(function (emp) {
      var calc = weekCalc(t, emp, week);
      var sh = shiftById(time, emp.shiftId);
      return "<h2>" + esc(emp.name) + " · " + esc(sh ? sh.name + " " + sh.start + "–" + sh.end : "") + "</h2><table style=\"width:100%;border-collapse:collapse\"><tr><th>Day</th><th>Shift</th><th>Worked</th><th>Leave</th><th>OT</th><th>Night</th></tr>" +
        calc.rows.map(function (r) {
          return "<tr><td>" + r.iso + "</td><td>" + esc(r.shift ? r.shift.name : "") + "</td><td>" + (r.pay ? r.pay.worked : 0) + "</td><td>" + (r.leave ? r.leave.type : "") + "</td><td>" + (r.pay ? r.pay.ot : 0) + "</td><td>" + (r.pay ? r.pay.night : 0) + "</td></tr>";
        }).join("") +
        "</table><p>Worked normal " + calc.normal + "h · leave paid " + calc.leavePaid + "h · leave unpaid " + calc.unpaid + "h · overtime " + calc.ot + "h · Sunday/public holiday " + calc.premium + "h · night " + calc.night + "h · gross " + zar2(calc.gross) + "</p>";
    }).join("");
    var root = document.getElementById("doc-print-root");
    root.innerHTML = '<article class="paper"><h1>Timesheet</h1><p>' + esc(t.tradingAs || t.name) + " · week of " + esc(week) + "</p>" + html + "</article>";
    document.body.classList.add("printing-doc");
    window.print();
    document.body.classList.remove("printing-doc");
  }
  function csvEscape(s) { return '"' + String(s == null ? "" : s).replace(/"/g, '""') + '"'; }
  function download(name, text) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/csv" }));
    a.download = name;
    a.click();
  }
  function timesheetCsv(t) {
    var lines = ["employee,date,shift,worked,leave,leavePaid,leaveUnpaid,overtime,night,late,early"];
    t.books.time.employees.forEach(function (emp) {
      weekCalc(t, emp, shopUi.week).rows.forEach(function (r) {
        lines.push([emp.name, r.iso, r.shift ? r.shift.name : "", r.pay ? r.pay.worked : 0, r.leave ? r.leave.type : "", r.leavePaid, r.leaveUnpaid, r.pay ? r.pay.ot : 0, r.pay ? r.pay.night : 0, r.pay && r.pay.late ? "yes" : "", r.pay && r.pay.early ? "yes" : ""].map(csvEscape).join(","));
      });
    });
    download("timesheet.csv", lines.join("\n"));
  }
  function leaveCsv(t) {
    var lines = ["employee,type,from,to,days,status,note"];
    t.books.time.leave.forEach(function (lv) {
      var emp = t.books.time.employees.find(function (e) { return e.id === lv.employeeId; });
      lines.push([emp ? emp.name : "", lv.type, lv.from, lv.to, workingDays(t.books.time, lv.from, lv.to), lv.status, lv.note].map(csvEscape).join(","));
    });
    download("leave.csv", lines.join("\n"));
  }
  function waTimesheet(t) {
    var bits = ["Timesheet " + (t.tradingAs || t.name) + " week of " + shopUi.week];
    t.books.time.employees.forEach(function (emp) {
      var c = weekCalc(t, emp, shopUi.week);
      var sh = shiftById(t.books.time, emp.shiftId);
      bits.push(emp.name + " (" + (sh ? sh.name : "") + "): normal " + c.normal + "h, leave paid " + c.leavePaid + "h, unpaid " + c.unpaid + "h, OT " + c.ot + "h, night " + c.night + "h, gross " + zar2(c.gross));
    });
    var num = window.prompt("WhatsApp number (27…)", "27");
    if (!num) return;
    var n = String(num).replace(/[^\d]/g, "");
    if (n.startsWith("0")) n = "27" + n.slice(1);
    window.open("https://wa.me/" + n + "?text=" + encodeURIComponent(bits.join("\n")), "_blank", "noopener");
  }

  function clockIn(t, empId) {
    var time = t.books.time;
    var now = { date: zaToday(), time: zaTime() };
    time.openShifts[empId] = now;
    O.persist();
    var emp = time.employees.find(function (e) { return e.id === empId; });
    var sh = assignedShift(time, emp, now.date);
    var msg = "Clocked in " + now.time;
    if (sh && mins(now.time) > mins(sh.start) + 10) msg += " · late for " + sh.name;
    O.toast(msg, "ok");
    O.render();
  }
  function clockOut(t, empId) {
    var time = t.books.time;
    var open = time.openShifts[empId];
    if (!open) return;
    var now = { date: zaToday(), time: zaTime() };
    var emp = time.employees.find(function (e) { return e.id === empId; });
    var sh = assignedShift(time, emp, open.date) || shiftById(time, emp.shiftId);
    time.entries.push({
      id: O.uid("ts"), employeeId: empId, date: open.date, start: open.time, end: now.time,
      breakMin: sh ? sh.breakMin : 0, job: "", shiftId: sh ? sh.id : ""
    });
    delete time.openShifts[empId];
    O.persist();
    O.toast("Clocked out " + now.time, "ok");
    O.render();
  }

  window.OmnivateShop = {
    nav: function (t) {
      var items = [];
      if (prodOn(t)) items.push({ id: "production", label: "Production", on: true });
      if (timeOn(t)) items.push({ id: "timesheets", label: "Timesheets", on: true });
      return items;
    },
    body: function (t, screen) {
      if (screen === "production") return productionBody(t);
      if (screen === "timesheets") return timesheetBody(t);
      return null;
    },
    scan: function (t, code) {
      if (!prodOn(t)) return false;
      ensureShop(t);
      var found = findSlab(t, code);
      if (!found) return false;
      var next = advanceBlock(t, found.block);
      O.toast(found.slab || found.block.blockId + " → " + next, "ok");
      var tab = next === "Cutting" ? "cutting" : next === "Polishing" ? "polishing" : next === "Done" ? "recovery" : "blocks";
      O.navigate("#/preview/" + t.id + "/work/production/" + tab);
      return true;
    },
    act: function (act, el) {
      var id = el.getAttribute("data-id");
      var t = id ? O.getTenant(id) : null;
      if (t) ensureShop(t);
      if (act === "advance-block" && t) {
        var b = blockOf(t, el.getAttribute("data-block"));
        if (b) { advanceBlock(t, b); O.render(); }
        return true;
      }
      if (act === "print-slab" && t) {
        var block = blockOf(t, el.getAttribute("data-block"));
        if (block) sendLabel(drawSlab(t, block, el.getAttribute("data-n")));
        return true;
      }
      if (act === "print-job" && t) {
        var job = (t.books.production.jobs || []).find(function (j) { return j.id === el.getAttribute("data-job"); });
        if (job) printJob(t, job);
        return true;
      }
      if (act === "time-week") {
        shopUi.week = addDays(shopUi.week, Number(el.getAttribute("data-delta")) || 0);
        O.render({ keepScroll: true });
        return true;
      }
      if (act === "clock-in" && t) { clockIn(t, el.getAttribute("data-emp")); return true; }
      if (act === "clock-out" && t) { clockOut(t, el.getAttribute("data-emp")); return true; }
      if (act === "time-pdf" && t) { pdfTimesheet(t); return true; }
      if (act === "time-wa" && t) { waTimesheet(t); return true; }
      if (act === "time-csv" && t) { timesheetCsv(t); return true; }
      if (act === "leave-csv" && t) { leaveCsv(t); return true; }
      if (act === "leave-set" && t) {
        var lv = (t.books.time.leave || []).find(function (x) { return x.id === el.getAttribute("data-leave"); });
        if (lv) {
          var before = lv.status;
          lv.status = el.getAttribute("data-status");
          O.persist();
          O.pushAudit({ tenantId: t.id, action: "Leave " + lv.status.toLowerCase(), target: lv.type, before: before, after: lv.status });
          O.render();
        }
        return true;
      }
      if (act === "roster-set" && t) {
        var emp = el.getAttribute("data-emp");
        var date = el.getAttribute("data-date");
        t.books.time.roster[emp] = t.books.time.roster[emp] || {};
        t.books.time.roster[emp][date] = el.value;
        O.persist();
        return true;
      }
      return false;
    },
    submit: function (act, form) {
      var t = O.getTenant(form.getAttribute("data-id"));
      if (!t) return false;
      ensureShop(t);
      var v = function (n) { return form.elements[n] ? form.elements[n].value : ""; };
      if (act === "save-time-settings") {
        var s = t.books.time.settings;
        s.weeklyCap = Number(v("weeklyCap")) || 45;
        s.otMult = Number(v("otMult")) || 1.5;
        s.premiumMult = Number(v("premiumMult")) || 2;
        s.nightStart = v("nightStart") || "18:00";
        s.nightEnd = v("nightEnd") || "06:00";
        s.nightRate = Number(v("nightRate")) || 0;
        O.persist();
        O.toast("Pay rules saved", "ok");
        O.render({ keepScroll: true });
        return true;
      }
      if (act === "save-shift") {
        t.books.time.shifts.push({
          id: O.uid("sh"), name: v("name") || "Shift", start: v("start") || "08:00", end: v("end") || "17:00",
          breakMin: Number(v("breakMin")) || 0,
          days: String(v("days") || "1,2,3,4,5").split(",").map(function (x) { return Number(x); })
        });
        O.persist();
        O.render();
        return true;
      }
      if (act === "save-time-entry") {
        var emp = t.books.time.employees.find(function (e) { return e.id === v("employee"); });
        var sh = emp ? assignedShift(t.books.time, emp, v("date")) : null;
        t.books.time.entries.push({
          id: O.uid("ts"), employeeId: v("employee"), date: v("date"), start: v("start"), end: v("end"),
          breakMin: Number(v("breakMin")) || 0, job: v("job"), shiftId: sh ? sh.id : (emp && emp.shiftId)
        });
        O.persist();
        O.toast("Entry added", "ok");
        O.render();
        return true;
      }
      if (act === "leave-request") {
        t.books.time.leave.unshift({
          id: O.uid("lv"), employeeId: v("employee"), type: v("type"), from: v("from"), to: v("to") || v("from"),
          status: "Pending", note: v("note")
        });
        O.persist();
        O.pushAudit({ tenantId: t.id, action: "Leave requested", target: v("type"), before: "—", after: "Pending" });
        O.toast("Leave requested", "ok");
        O.render();
        return true;
      }
      if (act === "save-leave-rules") {
        t.books.time.leaveTypes.forEach(function (tp) {
          var days = form.elements["days-" + tp.id];
          var paid = form.elements["paid-" + tp.id];
          if (days) tp.days = Number(days.value) || 0;
          if (paid) tp.paid = !!paid.checked;
        });
        O.persist();
        O.toast("Leave rules saved", "ok");
        O.render();
        return true;
      }
      return false;
    },
    weekCalc: weekCalc,
    nightHours: nightHours,
    hoursBetween: hoursBetween,
    shiftNet: shiftNet
  };

  var prevAct = O.ext.act;
  O.ext.act = function (act, el, e) {
    if (window.OmnivateShop.act(act, el, e)) return true;
    return prevAct ? prevAct(act, el, e) : false;
  };
  var prevSub = O.ext.submit;
  O.ext.submit = function (act, form, e) {
    if (window.OmnivateShop.submit(act, form, e)) return true;
    return prevSub ? prevSub(act, form, e) : false;
  };
  document.addEventListener("change", function (e) {
    var el = e.target.closest && e.target.closest('[data-act="roster-set"]');
    if (!el) return;
    window.OmnivateShop.act("roster-set", el, e);
  });
  O.render();
})();
