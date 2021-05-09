const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://react-redux.realworld.io/#/login')


  await page.waitForTimeout(5000)

  await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com')
  await page.press('input[type = "email"]', 'Tab')
  await page.type('input[type =  "password"]', 'test12345')
  await page.click('form >> "Sign in"')



  const logoText = await page.$eval('.navbar-brand', el => el.innerText)
  console.log('logoText: ' + logoText)

  const logoHref = await page.$eval('.navbar-brand', el => el.href)
  console.log('logoHref: ' + logoHref)


  const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
  console.log('popularTagsCount ' + popularTagsCount)

  await browser.close()

})()