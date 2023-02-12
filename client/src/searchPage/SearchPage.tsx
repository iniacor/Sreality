import React from 'react';
import Header from '../header/Header';
import SimpleMap from '../map/SimpleMap';
import GoogleMaps from '../map/LocationInput';
import Carousel from 'react-multi-carousel';

import PaginationComponent from '@components/Pagination/Pagination';
import BedroomsSelect from '@components/Buttons/FilterButton';
import RangeSlider from '@components/Buttons/FilterButton/PriceSlider';
import responsiveMode from '@common/utils/mediaquery';
import type { Apartment } from '@entities/apartments';

import 'react-multi-carousel/lib/styles.css';
import {
  Container,
  Box,
  Stack,
  Typography,
  CardContent,
  Card,
  CardMedia,
  Grid,
  useTheme,
} from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [data, setData] = useState<Apartment[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const {
        data: { pages, apartments },
      } = await axios.get(`http://localhost:3000/apartments?page=${page}`);

      setData(apartments);
      setTotalPages(pages);
      scrollRef.current?.scrollTo({ top: 0 });
    })();
  }, [page]);

  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 20, position: 'relative' }}>
        <Grid container>
          <Grid item xs={12} sm={4.5}>
            <Box
              sx={{
                background: 'lightgray',
                height: '100vh',
                width: '100%',
                position: 'sticky',
                [theme.breakpoints.down(768)]: {
                  height: '200px',
                  marginBottom: 2,
                },
              }}
            >
              <SimpleMap />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7.5}>
            <Box sx={{ pb: 5 }} display="flex" justifyContent="space-evenly">
              <GoogleMaps />
              <BedroomsSelect />
              <RangeSlider />
            </Box>
            <Box
              sx={{
                maxHeight: '100vh',
                overflow: 'auto',
                mb: 5,
              }}
              ref={scrollRef}
            >
              <Stack spacing={4}>
                {data.map(apartment => (
                  <Card key={`apartment-${apartment.id}`}>
                    <Carousel responsive={responsiveMode}>
                      {apartment.images.map((image, index) => (
                        <CardMedia
                          key={`apartment-media-${apartment.id}-${index}`}
                          image={image.src}
                          alt={apartment.title}
                          loading="lazy"
                          component="img"
                          height={300}
                          width={400}
                        />
                      ))}
                    </Carousel>
                    <CardContent>
                      <Typography variant="h3" sx={{ color: '#000', fontSize: '1.5rem' }}>
                        {apartment.title}
                      </Typography>
                      <Typography color="text.secondary">{apartment.location}</Typography>
                      <Typography>{apartment.price}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ pb: 5, mt: 3 }} display="flex" justifyContent="center">
          {totalPages && (
            <PaginationComponent
              onChange={(_, page) => setPage(page)}
              count={totalPages}
              shape="rounded"
              page={page}
            />
          )}
        </Box>
      </Container>
    </>
  );
};

export default SearchPage;
