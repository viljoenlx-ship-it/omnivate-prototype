/* Bulk GRV labels must be unique and consecutive, including the bitmap. */
const puppeteer = require("/tmp/pptest/node_modules/puppeteer-core");

function suffix(code) {
  const m = String(code).match(/(\d+)$/);
  return m ? Number(m[1]) : NaN;
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome-stable",
    headless: "new",
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  const fails = [];
  const check = (name, ok, extra) => {
    console.log((ok ? "PASS" : "FAIL"), name, extra || "");
    if (!ok) fails.push(name + " " + (extra || ""));
  };
  page.on("pageerror", (e) => { console.log("PAGEERROR", e.message); fails.push(e.message); });
  await page.setUserAgent("Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36");
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto("http://127.0.0.1:8765/index.html?labels=1", { waitUntil: "networkidle0" });
  await page.evaluate(() => localStorage.clear());
  await page.evaluate(() => {
    sessionStorage.setItem("omnivate.session.v1", JSON.stringify({ kind: "tenant", tenantId: "granite-warehouse", id: "gw-admin", name: "Granite Warehouse admin", email: "admin@granitewarehouse.demo", role: "administrator" }));
    location.hash = "#/preview/granite-warehouse/work/grv";
  });
  await page.reload({ waitUntil: "networkidle0" });
  await page.waitForSelector("form[data-act=save-grv]");
  await page.evaluate(() => {
    const form = document.querySelector("form[data-act=save-grv]");
    form.elements.supplier.value = "Sample: batch quarry";
    form.elements.qty.value = "12";
    form.elements.cost.value = "100";
    form.requestSubmit();
  });
  await page.waitForFunction(() => document.body.innerText.includes("posted"));
  const number = await page.evaluate(() => document.querySelector("table.data tbody tr").innerText);
  check("posted 12", /12/.test(number), number.slice(0, 80));
  await page.click("[data-act=print-grv]");
  await page.waitForSelector(".queue-row");
  const first = await page.evaluate(() => {
    const titles = [...document.querySelectorAll(".queue-row strong")].map((el) => el.textContent.split(" · ")[0]);
    const urls = [...document.querySelectorAll(".queue-row img")].map((img) => img.getAttribute("src"));
    const t = window.Omnivate.getTenant("granite-warehouse");
    const redraw = titles.map((code) => {
      const row = [...document.querySelectorAll(".queue-row strong")].find((el) => el.textContent.indexOf(code) === 0);
      const sku = row.textContent.split(" · ")[1];
      const p = t.books.products.find((x) => x.sku === sku);
      return window.OmnivateLabels.drawProductLabel(t, p, code).toDataURL("image/png");
    });
    const nums = titles.map((c) => Number(String(c).match(/(\d+)$/)[1]));
    const consecutive = nums.every((n, i) => i === 0 || n === nums[i - 1] + 1);
    const unique = new Set(titles).size === titles.length;
    const bitmaps = urls.every((url, i) => url === redraw[i]);
    const distinct = new Set(urls).size === urls.length;
    return { titles, nums, consecutive, unique, bitmaps, distinct, n: titles.length };
  });
  console.log(first.titles.join(", "));
  check("twelve labels", first.n >= 12, String(first.n));
  check("unique", first.unique);
  check("consecutive", first.consecutive, first.nums.join(","));
  check("bitmaps match their numbers", first.bitmaps && first.distinct);
  await page.screenshot({ path: "/opt/cursor/artifacts/after/label-batch.png" });
  const saved = first.titles.slice();
  await page.reload({ waitUntil: "networkidle0" });
  await page.evaluate(() => { location.hash = "#/preview/granite-warehouse/work/grv"; });
  await page.waitForSelector("[data-act=print-grv]");
  await page.click("[data-act=print-grv]");
  await page.waitForSelector(".queue-row");
  const reprint = await page.evaluate(() => [...document.querySelectorAll(".queue-row strong")].map((el) => el.textContent.split(" · ")[0]));
  check("reprint reuses numbers", reprint.join() === saved.join(), reprint.slice(0, 3).join(",") + " vs " + saved.slice(0, 3).join(","));
  await page.evaluate(() => window.Omnivate.closeModal());
  await page.evaluate(() => {
    const form = document.querySelector("form[data-act=save-grv]");
    form.elements.supplier.value = "Sample: next batch";
    form.elements.qty.value = "2";
    form.requestSubmit();
  });
  await page.waitForFunction(() => document.body.innerText.includes("next batch") || document.querySelectorAll("[data-act=print-grv]").length > 3);
  await page.click("[data-act=print-grv]");
  await page.waitForSelector(".queue-row");
  const next = await page.evaluate(() => [...document.querySelectorAll(".queue-row strong")].map((el) => el.textContent.split(" · ")[0]));
  const nextNums = next.map(suffix);
  const last = suffix(saved[saved.length - 1]);
  check("next batch continues", next.length === 2 && nextNums[0] === last + 1 && nextNums[1] === last + 2, next.join(","));

  await page.evaluate(() => {
    sessionStorage.setItem("omnivate.session.v1", JSON.stringify({ kind: "tenant", tenantId: "top-quartz", id: "tq-admin", name: "Top Quartz admin", email: "admin@topquartz.demo", role: "administrator" }));
    location.hash = "#/preview/top-quartz/work/grv";
  });
  await page.reload({ waitUntil: "networkidle0" });
  await page.click("[data-act=print-grv]");
  await page.waitForSelector(".queue-row");
  const tq = await page.evaluate(() => [...document.querySelectorAll(".queue-row strong")].map((el) => el.textContent.split(" · ")[0]));
  check("top quartz own sequence", tq.every((c) => c.indexOf("TQ-") === 0) && tq[0] === "TQ-0001", tq.join(","));

  await page.evaluate(() => {
    sessionStorage.setItem("omnivate.session.v1", JSON.stringify({ kind: "tenant", tenantId: "granite-warehouse", id: "gw-admin", name: "Granite Warehouse admin", email: "admin@granitewarehouse.demo", role: "administrator" }));
    location.hash = "#/preview/granite-warehouse/work/products";
  });
  await page.reload({ waitUntil: "networkidle0" });
  const scan = await page.evaluate(() => {
    const input = document.querySelector("[data-scan-field]");
    return input.getAttribute("inputmode");
  });
  check("scan inputmode none", scan === "none", scan);
  await page.screenshot({ path: "/opt/cursor/artifacts/after/scan.png" });
  await page.click(".scan-kbd");
  const typed = await page.evaluate(() => document.querySelector("[data-scan-field]").getAttribute("inputmode"));
  check("keyboard toggle", typed === "text", typed);
  await page.click(".scan-kbd");
  const back = await page.evaluate(() => document.querySelector("[data-scan-field]").getAttribute("inputmode"));
  check("scanner mode again", back === "none");
  const leaked = await page.evaluate(() => {
    const field = document.querySelector(".phone-filter");
    window.__scans = 0;
    const old = window.Omnivate.toast;
    window.Omnivate.toast = function () { window.__scans += 1; };
    field.focus();
    "ABCD".split("").forEach((k) => field.dispatchEvent(new KeyboardEvent("keydown", { key: k, bubbles: true })));
    field.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    window.Omnivate.toast = old;
    return window.__scans;
  });
  check("typing in a form does not scan", leaked === 0, String(leaked));

  await page.click("[data-act=add-quote]");
  await page.waitForSelector("form[data-act=confirm-add-quote]");
  await page.screenshot({ path: "/opt/cursor/artifacts/after/add-quote.png" });
  await page.evaluate(() => document.querySelector("form[data-act=confirm-add-quote]").requestSubmit());
  await page.waitForFunction(() => document.body.innerText.includes("View quote") || document.querySelector(".quote-badge"));
  const added = await page.evaluate(() => ({
    badge: document.querySelector(".quote-badge") && document.querySelector(".quote-badge").textContent,
    reserved: !!document.querySelector("[data-act=add-quote]") === false || document.body.innerText.includes("Reserved")
  }));
  check("quote badge", /Quote\s+[1-9]/.test(added.badge || ""), added.badge || "");
  check("reserved after add", added.reserved);
  await page.screenshot({ path: "/opt/cursor/artifacts/after/quote-added.png" });

  await page.setViewport({ width: 1280, height: 800, isMobile: false, hasTouch: false });
  await page.evaluate(() => { location.hash = "#/preview/granite-warehouse/work/products"; });
  await page.reload({ waitUntil: "networkidle0" });
  const desk = await page.evaluate(() => ({
    head: getComputedStyle(document.querySelector("table.data thead")).display,
    add: !!document.querySelector("[data-act=add-quote]"),
    tabs: getComputedStyle(document.querySelector(".phone-tabs")).display
  }));
  check("desktop table and quote button", desk.head === "table-header-group" && desk.add && desk.tabs === "none", JSON.stringify(desk));
  await browser.close();
  if (fails.length) {
    console.log("FAILED", fails);
    process.exit(1);
  }
  console.log("ALL PASS");
})().catch((e) => { console.error(e); process.exit(1); });
