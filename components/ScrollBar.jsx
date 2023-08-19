import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';

const HorizontalImageCarousel = ({ data }) => {
  const width= '100vw';
  const height = '80vh';
  return (
    <Carousel showArrows autoPlay infiniteLoop>
      {data.map((item) => (
        <div >
          <Box width={width} height={height}>
            <img src={item.url} key={item.id} alt='display' width={width} height={height}/>
          </Box>
        </div>
      ))}
    </Carousel>
  );
};

export default HorizontalImageCarousel;

