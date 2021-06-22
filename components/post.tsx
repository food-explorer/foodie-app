import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { FaStar } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import { BoxProps, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion<BoxProps>(LinkBox);

export const SliderPost = () => (
  <LinkBox minW="263px" w="263px  ">
    <LinkOverlay href="/posts/hber">
      <Box borderRadius="2xl" border="medium" overflow="hidden">
        <MotionBox whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
          <Image src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="svg post" w="1020px" />
        </MotionBox>
      </Box>
    </LinkOverlay>
    <Flex justifyContent="space-between" mt="2">
      <Text fontSize="lg" fontWeight="600">
        White House
      </Text>
      <Text color="gray">By Tunde</Text>
    </Flex>

    <Flex mt="2">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <Icon
            as={FaStar}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            color={i < 4 ? 'brand.300' : 'gray.300'}
          />
        ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        12 reviews
      </Box>
    </Flex>
  </LinkBox>
);
const Post = () => (
  <LinkBox minWidth="263px">
    <LinkOverlay href="/posts/erjne">
      <Box borderRadius="2xl" border="medium" overflow="hidden">
        <MotionBox whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
          <Image src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="svg post" w="1020px" />
        </MotionBox>
      </Box>
    </LinkOverlay>
    <Flex justifyContent="space-between" mt="2">
      <Text fontSize="lg" fontWeight="600">
        White House
      </Text>
      <Text color="gray">By Tunde</Text>
    </Flex>
    <Flex mt="2">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <Icon
            as={FaStar}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            color={i < 4 ? 'brand.300' : 'gray.300'}
          />
        ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        12 reviews
      </Box>
    </Flex>
  </LinkBox>
);

export default Post;
