import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { FaHeart, FaLocationArrow, FaStar, FaTags } from "react-icons/fa";
import Header from "../../components/Header";

const Comment = () => {
  return (
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
};

const Comments = () => {
  return (
    <Box
      w='md'
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
                .fill("")
                .map((_, i) => (
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
};

const Access = () => {
  return (
    <Box
      w='sm'
      minH="xs"
      maxW='100%'
      p="4"
      bg="gray.100"
      boxShadow="lg"
      borderRadius="md"
    >
      <HStack>
        <Icon as={FaTags} />
        <Text>Accessibility</Text>
      </HStack>
      <VStack alignItems="flex-start" p="6">
        <Text>Free Wifi</Text>
        <Text>Delivery</Text>
        <Text>POS</Text>
      </VStack>
    </Box>
  );
};

const Location = () => {
  return (
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
        <Text>Location</Text>
      </HStack>
      <Box mt='8' w="100%" bg="gray.600" h="44"></Box>
      <Flex justifyContent='space-between' mt='4'>
        <Text>10, Sadiku Street</Text>
        <Button variant="link">Take me there</Button>
      </Flex>
    </Box>
  );
};

const ViewPost = () => {
  return (
    <>
      <Header />
      <HStack spacing="4" overflowX="auto" flexFlow="unset">
        {Array(10)
          .fill("")
          .map((_, i) => (
            <Image
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              key={i}
              w="72"
            />
          ))}
      </HStack>
      <Box width="90%" margin="2rem auto">
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box w={{ base: '100%', md: "100%", xl: "60%" }}>
            <VStack spacing="4" alignItems="flex-start">
              <Heading>White House & Dine</Heading>
              <HStack spacing="4">
                <Text>3 Total Visits</Text>
                <Button variant="link">Write a review</Button>
              </HStack>
              <Button borderRadius="full" leftIcon={<FaHeart />}>
                Favourite
              </Button>
            </VStack>
            <SimpleGrid minChildWidth={['100%', '380px']} spacing="20px" mt="8">
              <Location />
              <Access />
            </SimpleGrid>
          </Box>
          <Comments />
        </Flex>
      </Box>
    </>
  );
};

export default ViewPost;
