(async () => {
  const puppeteer = require('puppeteer');

  const browser = await puppeteer.launch({ dumpio: true })
  const page = await browser.newPage()

  await page.setRequestInterception(true)
  page.on('request', request => {
    request.continue()
  })

  try {
    page.evaluateOnNewDocument(() => {
      setInterval(() => {
        console.log("carga: " + document.readyState)
      }, 95000);
    })
    await page.goto('http://127.0.0.1:5501/gamification.html',
      {
        timeout: 15000,
        waitUntil: 'networkidle2'
      });
    let element = await page.$('#my-target');
    await element.screenshot({ path: 'images/screenshot/screenshot.png' });
  } catch (error) {
    console.log("ERROR: " + error.message)
  }

  const title = await page.title()
  console.log("TITLE: " + title)

  await browser.close()
})()