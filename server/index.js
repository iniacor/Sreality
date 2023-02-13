const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const express = require('express');
const router = express();
router.use(cors());

const prisma = new PrismaClient();

router.get('/apartments', async (req, res) => {
  const apartments = await prisma.apartment.findMany({
    skip: 20 * (+req.query.page - 1),
    take: 20,
  });
  const apartmentsCount = await prisma.apartment.count({});

  let images = {};
  for (const apartment of apartments) {
    const apartmentImages = await prisma.image.findMany({
      where: {
        apartmentId: {
          equals: apartment.id,
        },
      },
    });

    images[apartment.id] = apartmentImages;
  }

  const imagesApartments = apartments.map(apartment => {
    return {
      ...apartment,
      images: images[apartment.id],
    };
  });

  res.json({
    pages: Math.ceil(apartmentsCount / 20),
    apartments: imagesApartments,
  });
});

router.listen(3000);
