import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';

const HorizontalImageCarousel = ({ data }) => {
  const width= '100vw';
  const height = '80vh';
  return (
    <Carousel showArrows autoPlay infiniteLoop>
      {data.map((item) => (
        <div key={item.id} >
          <Box width={width} height={height}>
            <Image src={item.url} key={item.id} alt='display' width={width} height={height}/>
          </Box>
        </div>
      ))}
    </Carousel>
  );
};

export default HorizontalImageCarousel;

