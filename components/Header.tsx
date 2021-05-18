import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Flex justifyContent="space-between" p="4">
      <Box>
        <Heading size="md" variant="brand" cursor="pointer">
          Food Explorer
        </Heading>
      </Box>
      <Flex>
        <HStack spacing="4">
          <Text> Explore </Text>
          <Text> Log In </Text>
          <Text> Sign Up </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
