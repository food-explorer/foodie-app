import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";

const Hero = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box>
        <Heading size="xl">
          Share more than just food with other foodies, share memories too.
        </Heading>
        <Box marginTop="4">
          <Link>
            <Button rightIcon={<FaArrowRight />} variant="link" size="lg">
              Explore Places
            </Button>
            {/* <Flex alignItems='center'>
              <Text fontSize={["xl", "3xl"]}>Explore Places</Text>
              <Icon as={FaArrowRight} boxSize={8}/>
            </Flex> */}
          </Link>
          <Flex marginTop="4">
            <InputGroup maxWidth="md">
              <Input
                placeholder="Search Places"
                borderRightRadius="none"
                size="lg"
                focusBorderColor="none"
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
      <Image
        src="/main-meal.svg"
        alt="main meal"
        width="600px"
        display={{ base: "none", md: "block" }}
      />
    </Flex>
  );
};

export default Hero;
