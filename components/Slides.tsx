import {
  Box, Flex, Heading, HStack,
} from '@chakra-ui/layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { IconButton } from '@chakra-ui/button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SliderPost } from './post';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1275,
      settings: {
        slidesToShow: 3.5,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 3.2,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4.2,
        swipeToSlide: true,
      },
    },
  ],
};

const Slide = ({ title }: { title?: string }) => {
  const sliderRef = useRef<Slider | null>(null);

  const handler = (type: 'next' | 'prev') => {
    if (!sliderRef.current) return;
    if (type === 'next') {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <Box marginTop="8">
      <Flex
        alignItems="center"
        justifyContent={title ? 'space-between' : 'flex-end'}
        mb="4"
      >
        {title && <Heading size="lg">{title}</Heading>}
        <Box mr="6" display={{ base: 'none', lg: 'block' }}>
          <IconButton
            aria-label="Goto previous post list"
            size="lg"
            colorScheme="gray"
            isActive={false}
            icon={<FaChevronLeft />}
            onClick={() => handler('prev')}
            variant="ghost"
          />
          <IconButton
            aria-label="Goto next post list"
            size="lg"
            colorScheme="gray"
            isActive={false}
            icon={<FaChevronRight />}
            onClick={() => handler('next')}
            variant="ghost"
          />
        </Box>
      </Flex>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Slider {...settings} ref={sliderRef} className="slicked">
          {Array(10)
            .fill('')
            .map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <SliderPost key={i} />
            ))}
        </Slider>
      </Box>
      <HStack
        spacing="8"
        overflowX="auto"
        flexFlow="unset"
        mt="4"
        display={{ base: 'flex', lg: 'none' }}
      >
        {Array(10)
          .fill('')
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SliderPost key={i} />
          ))}
      </HStack>
    </Box>
  );
};

export default Slide;
