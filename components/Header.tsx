import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import {
  Box, Flex, Heading, HStack, Text,
} from '@chakra-ui/layout';
import Link from 'next/link';
import CustomLink from './Link';

const Header = () => {
  const isAuthentcated = true;
  return (
    <Flex justifyContent="space-between" p={['4', '8']} alignItems="center">
      <Box>
        <Heading size="md" variant="brand" cursor="pointer">
          <CustomLink url="/">Foodie</CustomLink>
        </Heading>
      </Box>
      {!isAuthentcated ? (
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
      ) : (
        <Flex>
          <HStack spacing="4">
            <Text>
              <CustomLink url="/posts">My List</CustomLink>
            </Text>
            <Text>
              <CustomLink url="/login">New Post</CustomLink>
            </Text>
            <Link href="/profile">
              <Avatar
                name="Tunde Nasri"
                size="sm"
                src="https://i.imgur.com/Gh4Zd8w.jpg"
                cursor="pointer"
              />
            </Link>
          </HStack>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
