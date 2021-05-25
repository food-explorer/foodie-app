import React from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/layout';
import CustomLink from '../../components/Link';

const Register: React.FC = () => (
  <Box w="100%" d="flex" height="100vh">
    <Box w={{ base: '100%', xl: '50%' }} textAlign="center">
      <Box mt="24">
        <VStack spacing={8}>
          <Heading color="brand.400" size="lg">
            <CustomLink url="/">Foodie</CustomLink>
          </Heading>
          <Heading size="md">Welcome, let&lsquo;s get you signed up</Heading>
        </VStack>
      </Box>
      <Box
        alignItems="center"
        d="flex"
        flexDir="column"
        mt={8}
        w={['80', '96']}
        marginX="auto"
      >
        <VStack spacing={4} w="100%">
          <FormControl id="fullName">
            <FormLabel>Full Name</FormLabel>
            <Input type="text" size="lg" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" size="lg" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" size="lg" />
          </FormControl>
          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" size="lg" />
          </FormControl>
        </VStack>
        <Button mt={8} isLoading={false} type="submit" w="100%" size="lg">
          Register
        </Button>
      </Box>
      <Box mt={4} d="flex" flexDir="column" alignItems="center">
        <HStack>
          <Text>Have an account?</Text>
          <Text color="brand.400">
            <CustomLink url="/login">Log In</CustomLink>
          </Text>
        </HStack>
        <Text color="brand.400">
          <CustomLink url="/forgot-password">Forgot Password</CustomLink>
        </Text>
      </Box>
    </Box>
    <Box w="50%" display={{ base: 'none', xl: 'block' }}>
      <Image
        src="/register-image.svg"
        alt="Register Page Image"
        boxSize="100%"
        objectFit="cover"
      />
    </Box>
  </Box>
);

export default Register;
