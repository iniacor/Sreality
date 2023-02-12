const scraperObject = require('./pageScraper.js');

async function scrapeAll(browserInstance) {
  try {
    const browser = await browserInstance;
    try {
      await scraperObject.scraper(browser);
    } catch (err) {
      console.error('Error while running the scraper:', err);
    }
  } catch (err) {
    console.error('Could not resolve the browser instance:', err);
  }
}

module.exports = {
  scrapeAll,
};
