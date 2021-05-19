import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/layout";
import Link from "next/link";

const Header = () => {
  return (
    <Flex justifyContent="space-between" p={["4", "8"]} alignItems="center">
      <Box>
        <Heading size="md" variant="brand" cursor="pointer">
          <ChakraLink as={Link} href="/">
            Foodie
          </ChakraLink>
        </Heading>
      </Box>
      <Flex>
        <HStack spacing="4">
          <Text>
            <ChakraLink as={Link} href="/login">
              Log In
            </ChakraLink>
          </Text>
          <ChakraLink as={Link} href="/register">
            <Button>Sign Up</Button>
          </ChakraLink>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
