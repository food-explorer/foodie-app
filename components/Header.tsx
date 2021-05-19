import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Flex justifyContent="space-between" p={['4', '8']} alignItems='center'>
      <Box>
        <Heading size="md" variant="brand" cursor="pointer">
          Food Explorer
        </Heading>
      </Box>
      <Flex>
        <HStack spacing="4">
          <Text> Log In </Text>
          <Button>Sign Up</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
