const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const PAGE_PUPPETEER_OPTS = {
  networkIdle2Timeout: 5000,
  waitUntil: 'networkidle2',
  timeout: 3000000,
};

async function deleteApartments() {
  try {
    await prisma.image.deleteMany({
      where: {},
    });

    await prisma.apartment.deleteMany({
      where: {},
    });
  } catch (error) {
    console.error('Error while deleting apartments:', error);
  }
}

const scraperObject = {
  url: 'https://www.sreality.cz/en/search/for-sale/apartments',
  async scraper(browser) {
    let page;
    try {
      page = await browser.newPage();
      console.log(`Navigating to ${this.url}...`);
      let allData = [];
      for (let i = 1; i <= 25; i++) {
        await page.goto(this.url + `?page=${i}`, PAGE_PUPPETEER_OPTS);
        const flatsList = await page.$$eval('.property', (flats) => {
          return flats.map((el) => {
            const images = Array.from(
              el.querySelectorAll('[component="property-carousel"] a > img')
            );
            let srcs = [];
            let title = el.querySelector('span.name').innerText;
            let location = el.querySelector('span.locality').innerText;
            let price = el.querySelector('span.norm-price').innerText;

            for (const image of images) {
              srcs.push(image.getAttribute('src'));
            }

            return {
              title,
              location,
              price,
              images: srcs,
            };
          });
        });

        allData.push(...flatsList);
      }

      const uniqueData = [
        ...new Set(allData.map((item) => JSON.stringify(item))),
      ].map((item) => JSON.parse(item));

      await deleteApartments().finally(async () => {
        await prisma.$disconnect();
      });
      await Promise.all(
        uniqueData.map(async (apartment) => {
          const { title, location, price, images } = apartment;
          return await prisma.apartment.create({
            data: {
              title,
              location,
              price,
              images: {
                create: images.map((image) => ({ src: image })),
              },
            },
          });
        })
      );
    } catch (error) {
      console.error('Error:', error);
    } finally {
      if (page) {
        await browser.close();
      }
    }
  },
};

module.exports = scraperObject;
