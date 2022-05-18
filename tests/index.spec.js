import path from "path";
//const path = require('path');

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "../public/index.html")}`;
    await page.setViewport({'width': 1024, 'height': 768 });
    await page.goto(URL);
    await page.screenshot({ path: 'index.png'});
  });

  it("test heading", async () => {
    await page.waitForSelector('#first');
    let element = await page.$('#first');
    let value = await page.evaluate(el => el.innerHTML, element);
    expect(value).toBe('Hellox!');
  });
});
