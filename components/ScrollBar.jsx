import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';

const HorizontalImageCarousel = ({ data }) => {
  return (
    <Carousel showArrows autoPlay infiniteLoop>
      {data.map((item) => (
        <div >
          <Box width="100%">
            <img src={item.url} key={item.id} alt='display'/>
          </Box>
        </div>
      ))}
    </Carousel>
  );
};

export default HorizontalImageCarousel;

