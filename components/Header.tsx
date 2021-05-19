import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/layout";
import CustomLink from "./Link";

const Header = () => {
  return (
    <Flex justifyContent="space-between" p={["4", "8"]} alignItems="center">
      <Box>
        <Heading size="md" variant="brand" cursor="pointer">
          <CustomLink url="/">Foodie</CustomLink>
        </Heading>
      </Box>
      <Flex>
        <HStack spacing="4">
          <Text>
            <CustomLink url="/login">Log In</CustomLink>
          </Text>
          <CustomLink url="/register">
            <Button>Sign Up</Button>
          </CustomLink>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
