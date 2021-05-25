import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import {
  Box,
  Flex,
  Link,
  Stack,
  VStack,
} from '@chakra-ui/layout';
import Header from '../../components/Header';

const EditProfile: React.FC = () => (
  <>
    <Header />
    <Box>
      <Image
        src="/header-image.svg"
        alt="Header Image"
        w="100%"
        h="56"
        objectFit="cover"
      />
      <Box width="90%" margin="2rem auto">
        <Box position="relative" top="-55px" marginBottom="-55px">
          <Flex
            alignItems="center"
            flexWrap="wrap"
            width="64"
            justifyContent="space-between"
          >
            <Avatar size="xl" src="https://i.imgur.com/Gh4Zd8w.jpg" />
          </Flex>
        </Box>

        <Box d="flex" flexDir="column" alignItems="center" mt="8">
          <VStack
            spacing={{ base: 4, sm: 8 }}
            w={{ base: '100%', md: '90%', lg: '70%' }}
          >
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 4, md: 16 }}
              w="100%"
            >
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input type="text" size="md" variant="filled" value="Tunde" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" size="md" variant="filled" value="Nasri" />
              </FormControl>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 4, md: 16 }}
              w="100%"
            >
              <FormControl id="location">
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  size="md"
                  variant="filled"
                  value="Lagos, Nigeria"
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  size="md"
                  variant="filled"
                  value="tundenasri@gmail.com"
                  isDisabled
                />
              </FormControl>
            </Stack>
          </VStack>
          <Button
            mt={8}
            isLoading={false}
            w="40"
            borderRadius="3xl"
            type="submit"
            size="lg"
          >
            Submit
          </Button>
          <Link href="/profile" color="brand.400" fontWeight="bold" mt="4">
            Go Back
          </Link>
        </Box>
      </Box>
    </Box>
  </>
);

export default EditProfile;
