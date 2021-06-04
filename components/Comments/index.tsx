import Icon from '@chakra-ui/icon';
import {
  Box, Flex, Heading, HStack, Text, VStack,
} from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Comment from './Comment';

interface Props {

}

const Comments: React.FC<Props> = () => (
  <Box
    w="md"
    minH="md"
    p="6"
    mt="8"
    bg="gray.100"
    boxShadow="lg"
    borderRadius="md"
  >
    <Heading size="md">Recent Comments</Heading>
    <Box mt="8">
      <Flex justifyContent="space-between">
        <HStack spacing="4">
          <Tag variant="solid">3.0</Tag>
          <HStack>
            {Array(5)
              .fill('')
              .map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Icon as={FaStar} key={i} />
              ))}
          </HStack>
        </HStack>
        <Text>20 comments</Text>
      </Flex>
    </Box>

    <VStack mt="8" spacing="4">
      <Comment />
      <Comment />
    </VStack>
  </Box>

);

export default Comments;
