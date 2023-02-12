// const browserObject = require('./browser');
// const scraperController = require('./pageController');

// //Start the browser and create a browser instance
// let browserInstance = browserObject.startBrowser();

// // Pass the browser instance to the scraper controller
// scraperController(browserInstance);

const { startBrowser } = require('./browser.js');
const { scrapeAll } = require('./pageController.js');

// Start the browser and create a browser instance
const browserInstance = startBrowser();

// Pass the browser instance to the scraper controller
scrapeAll(browserInstance);
