import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";

const Hero = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box>
        <Heading size="2xl">
          Join other food explorers to share more than just food
        </Heading>
        <Box marginTop="4">
          <Link>
            <Text fontSize="3xl">Explore Places</Text>
          </Link>
          <Flex marginTop="4">
            <InputGroup maxWidth="md">
              <Input
                placeholder="Search Places"
                borderRightRadius="none"
                size="lg"
                focusBorderColor='none'
              />
            </InputGroup>
            <IconButton
              size="lg"
              aria-label="Search places"
              icon={<FaSearch />}
              borderLeftRadius="none"
            />
          </Flex>
        </Box>
      </Box>
      <Image src="/main-meal.svg" alt="main meal" width="600px" display={{ base: 'none', md: 'block' }} />
    </Flex>
  );
};

export default Hero;
