const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://react-redux.realworld.io/#/login')

  //const signIn = await page.$('.btn')
  //const signIn = await page.$('css=button')
  //const signIn = await page.$('button')
  //const signIn = await page.$('xpath=//button[@type = "submit"]')
  //const signIn = await page.$('text="Sign in"')

  //const signIn = await page.$('css=form >> "Sign in"')
  //await signIn.click()

  const input = await page.$$('.form-control')
  await input[0].click()
  await input[1].click()


  //await browser.close()

})()