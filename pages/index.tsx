import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Box width="90%" margin="2rem auto">
        <Hero />
      </Box>
    </div>
  );
}
