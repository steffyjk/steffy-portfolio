import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = "http://localhost:3000";
const PAGES = ["/", "/skills", "/projects", "/experience", "/contact", "/terms", "/refund"];
const VIEWPORTS = [
  { name: "mobile 375x667", width: 375, height: 667 },
  { name: "tablet 768x1024", width: 768, height: 1024 },
  { name: "desktop 1440x900", width: 1440, height: 900 },
];
const NAVBAR_H = 64;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

let failures = 0;

for (const vp of VIEWPORTS) {
  console.log(`\n===== ${vp.name} =====`);
  for (const path of PAGES) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 800)); // let animations settle

    const m = await page.evaluate(() => {
      const de = document.documentElement;
      const overflowX = de.scrollWidth - de.clientWidth;
      const firstHeading = document.querySelector("h1, h2");
      const rect = firstHeading ? firstHeading.getBoundingClientRect() : null;
      // sample text colors on key text blocks for contrast sanity
      return {
        overflowX,
        headingText: firstHeading?.textContent?.trim().slice(0, 40) ?? "(no heading)",
        headingTop: rect ? Math.round(rect.top) : null,
        docHeight: de.scrollHeight,
      };
    });

    const overflowBad = m.overflowX > 1;
    const underNavbar =
      m.headingTop !== null && m.headingTop < NAVBAR_H - 8; // allow small tolerance
    const status = overflowBad || underNavbar ? "❌" : "✓";
    if (overflowBad || underNavbar) failures++;
    console.log(
      `${status} ${path.padEnd(12)} overflowX=${m.overflowX}px  heading="${m.headingText}" top=${m.headingTop}px  doc=${m.docHeight}px`
    );

    // screenshot at mobile only for the main pages
    if (vp.width === 375 && ["/", "/skills", "/projects", "/experience", "/contact"].includes(path)) {
      await page.screenshot({ path: `scripts/shots${path.replace(/\//g, "_") || "_home"}.png`, fullPage: false });
    }
    await page.close();
  }
}

await browser.close();
console.log(`\n${failures === 0 ? "✅ ALL CHECKS PASSED" : `❌ ${failures} failures`}`);
process.exit(failures === 0 ? 0 : 1);
