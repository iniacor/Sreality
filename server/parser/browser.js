const puppeteer = require('puppeteer');

async function startBrowser() {
  const browser = await puppeteer
    .launch({
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
      ],
      ignoreHTTPSErrors: true,
    })
    .catch((err) => {
      console.log('Could not create a browser instance => : ', err);
    });
  return browser;
}

module.exports = {
  startBrowser,
};
