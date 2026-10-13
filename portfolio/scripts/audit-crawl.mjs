import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = "https://www.steffy.in";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--enable-features=NetworkService"],
});

const report = {};
const allLinks = new Map(); // url -> firstSeenPage

async function crawl(path) {
  const page = await browser.newPage();
  const consoleErrors = [];
  const failedRequests = [];
  let jsBytes = 0;

  page.on("console", (msg) => {
    if (["error", "warning"].includes(msg.type())) consoleErrors.push(`${msg.type()}: ${msg.text().slice(0, 140)}`);
  });
  page.on("requestfailed", (req) => failedRequests.push(`${req.failure()?.errorText} ${req.url().slice(0, 120)}`));
  page.on("response", (res) => {
    const type = res.headers()["content-type"] || "";
    if (type.includes("javascript")) jsBytes += Number(res.headers()["content-length"] || 0);
  });

  try {
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 1500));

    const data = await page.evaluate(() => {
      const po = performance.getEntriesByType("paint");
      const nav = performance.getEntriesByType("navigation")[0];
      const imgs = [...document.querySelectorAll("img")];
      return {
        title: document.title,
        metaDesc: document.querySelector('meta[name="description"]')?.content || null,
        og: [...document.querySelectorAll('meta[property^="og:"]')].map((m) => m.getAttribute("property")),
        canonical: document.querySelector('link[rel="canonical"]')?.href || null,
        h1Count: document.querySelectorAll("h1").length,
        h1: [...document.querySelectorAll("h1")].map((h) => h.textContent.trim().slice(0, 60)),
        h2s: [...document.querySelectorAll("h2")].map((h) => h.textContent.trim().slice(0, 40)),
        landmarkMains: document.querySelectorAll("main").length,
        images: imgs.length,
        imgsNoAlt: imgs.filter((i) => !i.hasAttribute("alt")).length,
        links: [...document.querySelectorAll("a[href]")].map((a) => ({ href: a.href, text: a.textContent.trim().slice(0, 30) })),
        formValidation: !!document.querySelector("form"),
        ttfb: nav ? Math.round(nav.responseStart) : null,
        fcp: Math.round(po.find((e) => e.name === "first-contentful-paint")?.startTime ?? 0),
        lcp: (() => {
          let v = 0;
          new PerformanceObserver((l) => (v = Math.round(l.getEntries().at(-1)?.startTime ?? 0))).observe({ type: "largest-contentful-paint", buffered: true });
          return v;
        })(),
        cls: (() => {
          let v = 0;
          new PerformanceObserver((l) => (v += l.getEntries().at(-1)?.value ?? 0)).observe({ type: "layout-shift", buffered: true });
          return v;
        })(),
        bodyText: document.body.innerText.length,
        hasContactEmail: document.body.innerText.includes("steffy.jk2018@gmail.com"),
        overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    });

    const overflowMobile = await (async () => {
      await page.setViewport({ width: 375, height: 667 });
      await new Promise((r) => setTimeout(r, 900));
      return page.evaluate(() => {
        const firstH = document.querySelector("h1,h2");
        return { ox: document.documentElement.scrollWidth - document.documentElement.clientWidth, headingTop: firstH ? Math.round(firstH.getBoundingClientRect().top) : null };
      });
    })();

    report[path] = { ...data, overflowMobile, consoleErrors: consoleErrors.slice(0, 4), failedRequests: failedRequests.slice(0, 4), jsKB: Math.round(jsBytes / 1024) };
    data.links.forEach((l) => { if (!allLinks.has(l.href)) allLinks.set(l.href, path); });
  } catch (e) {
    report[path] = { error: String(e).slice(0, 200) };
  }
  await page.close();
}

for (const p of ["", "/skills", "/projects", "/experience", "/contact", "/terms", "/refund", "/nonexistent-page"]) {
  await crawl(p);
}

// link integrity: check every unique href
const linkStatuses = [];
for (const [href, seenOn] of allLinks) {
  if (href.startsWith(BASE)) {
    const short = href.replace(BASE, "") || "/";
    if (report[short] || short === "/terms" || short === "/refund") continue;
  }
  try {
    const page = await browser.newPage();
    const resp = await page.goto(href, { waitUntil: "domcontentloaded", timeout: 20000 });
    linkStatuses.push({ href: href.slice(0, 90), status: resp?.status(), seenOn });
    await page.close();
  } catch (e) {
    linkStatuses.push({ href: href.slice(0, 90), status: "ERR", seenOn });
  }
}

await browser.close();
console.log(JSON.stringify({ report, linkStatuses }, null, 1));
