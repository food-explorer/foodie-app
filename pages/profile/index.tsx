import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import {
  Box, Flex, Heading, HStack, Text,
} from '@chakra-ui/layout';
import Link from 'next/link';
import Header from '../../components/Header';
import Post from '../../components/post';

const Profile: React.FC = () => (
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
            <Button borderRadius="full">Edit Profile</Button>
          </Flex>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Babatunde Yakub
            </Text>
            <Text fontWeight="light" color="gray.500">
              Lagos, Nigeria
            </Text>
          </Box>
          <HStack spacing="24px">
            <HStack spacing="4px">
              <Text fontWeight="bold">2000</Text>
              <Text fontWeight="light" color="gray.500">
                Followers
              </Text>
            </HStack>
            <HStack spacing="4px">
              <Text fontWeight="bold">500</Text>
              <Text fontWeight="light" color="gray.500">
                Following
              </Text>
            </HStack>
          </HStack>
        </Box>
        <Box>
          <Flex alignItems="center" justifyContent="space-between" mt="8">
            <Heading size="md">Posts</Heading>
            <Box mr="6">
              <Button variant="link">
                <Link href="/posts">View all</Link>
              </Button>
            </Box>
          </Flex>
          <HStack spacing="8" overflowX="auto" flexFlow="unset" mt="4">
            {Array(6)
              .fill('')
              .map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Post key={i} />
              ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  </>
);

export default Profile;
