import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/layout";
import Link from "next/link";

const Login = () => {
  return (
    <Box w="100%" d="flex" height="100vh">
      <Box w={{ base: "100%", xl: "50%" }} textAlign="center">
        <Box mt="24">
          <VStack spacing={8}>
            <Heading color="brand.400" size="lg">
            <ChakraLink as={Link} href='/'>Foodie</ChakraLink>
            </Heading>
            <Heading size="md">Welcome, let's get you signed in</Heading>
          </VStack>
        </Box>
        <Box
          alignItems="center"
          d="flex"
          flexDir="column"
          mt={8}
          w={["80", "96"]}
          marginX="auto"
        >
          <VStack spacing={4} w="100%">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" size="lg" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" size="lg" />
            </FormControl>
          </VStack>
          <Button mt={8} isLoading={false} type="submit" w="100%" size="lg">
            Log In
          </Button>
        </Box>
        <Box mt={4} d='flex' flexDir='column' alignItems='center'>
          <HStack>
            <Text>Don't have an account?</Text>
            <Text color='brand.400'><ChakraLink as={Link} href='/register'>Register</ChakraLink></Text>
          </HStack>
          <Text color='brand.400'><ChakraLink as={Link} href='/forgot-password'>Forgot Password?</ChakraLink></Text>
        </Box>
      </Box>
      <Box w="50%" display={{ base: "none", xl: "block" }}>
        <Image
          src="/login-food-image.svg"
          alt="Login Page Image"
          boxSize={"100%"}
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Login;
