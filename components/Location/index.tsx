import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import {
  Box, Flex, Heading, HStack, Text,
} from '@chakra-ui/layout';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

interface Props {

}

const Location: React.FC<Props> = () => (
  <Box
    w="sm"
    maxW="100%"
    minH="md"
    p="4"
    bg="gray.100"
    boxShadow="lg"
    borderRadius="md"
  >
    <HStack>
      <Icon as={FaLocationArrow} />
      <Heading size="md">Location</Heading>
    </HStack>
    <Box mt="8" w="100%" bg="gray.600" h="44" />
    <Flex justifyContent="space-between" mt="4">
      <Text>10, Sadiku Street</Text>
      <Button variant="link">Take me there</Button>
    </Flex>
  </Box>
);

export default Location;
