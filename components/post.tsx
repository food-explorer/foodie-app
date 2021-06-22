import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { FaStar } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import Link from 'next/link';
import React from 'react';
import { IPostCard } from '../data/postsData';

type PostProps = {
  post: IPostCard

}

const PostCard: React.FC<PostProps> = ({ post }) => (
  <>
    <Link href={`/posts/${post.slug}`}>
      <Box borderRadius="2xl" border="medium" overflow="hidden" cursor="pointer">
        <Image
          src={post.image}
          alt="svg post"
          w="1020px"
          _hover={{ transition: '400ms ease-in', transform: 'scale(1.1)' }}
        />
      </Box>
    </Link>
    <Flex justifyContent="space-between" mt="2">
      <Text fontSize="md" fontWeight="600">
        {post.title}
      </Text>
      <Text color="gray" w="40%" textAlign="end">{`${post.visitCount} visits`}</Text>
    </Flex>

    <Flex mt="2">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <Icon
            as={FaStar}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            color={i < post.averageRating ? 'brand.300' : 'gray.300'}
          />
        ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {`${post.reviewsCount} reviews`}
      </Box>
    </Flex>
  </>
);
export const SliderPost: React.FC<PostProps> = ({ post }) => (
  <Box minW="263px" w="263px">
    <PostCard post={post} />
  </Box>
);

const Post: React.FC<PostProps> = ({ post }) => (
  <Box minWidth="263px">
    <PostCard post={post} />
  </Box>
);

export default Post;
