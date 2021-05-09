const playwrigth = require('playwright');

(async () => {

  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwrigth[browserType].launch(

      {
        headless: false
      });

    //context
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://google.com/')
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();

  }

})();