import Icon from '@chakra-ui/icon';
import {
  Box, Heading, HStack, Text, VStack,
} from '@chakra-ui/layout';
import React from 'react';
import { FaTags } from 'react-icons/fa';

interface Props {

}

const Accessbilites: React.FC<Props> = () => (
  <Box
    w="sm"
    minH="xs"
    maxW="100%"
    p="4"
    bg="gray.100"
    boxShadow="lg"
    borderRadius="md"
  >
    <HStack>
      <Icon as={FaTags} />
      <Heading size="md">Accessibility</Heading>
    </HStack>
    <VStack alignItems="flex-start" p="6">
      <Text>Free Wifi</Text>
      <Text>Delivery</Text>
      <Text>POS</Text>
    </VStack>
  </Box>
);

export default Accessbilites;
