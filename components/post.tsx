import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { FaStar } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/react';
import React from 'react';

export const SliderPost = () => (
  <Box minW="263px" w="263px">
    <Link href="/posts/hber">
      <Box borderRadius="2xl" border="medium" overflow="hidden">
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="svg post"
          w="1020px"
          _hover={{ transition: '400ms ease-in', transform: 'scale(1.1)' }}
        />
      </Box>
    </Link>
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
  </Box>
);
const Post = () => (
  <Box minWidth="263px">
    <Link href="/posts/hber">
      <Box borderRadius="2xl" border="medium" overflow="hidden">
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="svg post"
          w="1020px"
          _hover={{ transition: '400ms ease-in', transform: 'scale(1.1)' }}
        />
      </Box>
    </Link>
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
  </Box>
);

export default Post;
