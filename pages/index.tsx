import {
  Box,
  Heading,
  HStack,
} from "@chakra-ui/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Post from "../components/post";

export default function Home() {
  return (
    <div>
      <Header />
      <Box width="90%" margin="2rem auto">
        <Hero />
        <Box marginTop="8">
          <Heading size="lg">Discover Food Places</Heading>
          <HStack spacing="8" overflowX="auto" flexFlow="unset" mt="4">
            {Array(10)
              .fill("")
              .map((_, i) => (
                <Post key={i} />
              ))}
          </HStack>
        </Box>
        <Box marginTop="8">
          <Heading size="lg">This week's favorite</Heading>
          <HStack spacing="8" overflowX="auto" flexFlow="unset" mt="4">
            {Array(10)
              .fill("")
              .map((_, i) => (
                <Post key={i} />
              ))}
          </HStack>
        </Box>
      </Box>
    </div>
  );
}
