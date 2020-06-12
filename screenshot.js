const playwright = require("playwright");

(async () => {
  const browser = await playwright["chromium"].launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8080");
  await page.screenshot({ path: "card.png" });

  await browser.close();
})();
