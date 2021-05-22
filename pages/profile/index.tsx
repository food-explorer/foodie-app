import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import Header from "../../components/Header";
import Slide from "../../components/Slides";

const Profile: React.FC = () => {
  return (
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
              <Avatar size="xl" src='https://i.imgur.com/Gh4Zd8w.jpg' />
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
            <Slide title="Posts" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
