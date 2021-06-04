import { Avatar } from '@chakra-ui/avatar';
import { HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

interface Props {

}

const Comment: React.FC<Props> = () => (
  <HStack alignItems="flex-start">
    <Avatar />
    <VStack alignItems="flex-start" spacing="sm">
      <Text fontWeight="semibold">Babatunde Yakub</Text>
      <Text>
        Best place to eat no cap, their shrimp is something to go to jail for
      </Text>
      <Text fontSize="sm" color="gray">
        10 days ago
      </Text>
    </VStack>
  </HStack>
);

export default Comment;
