import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Header from "../components/Header";
import { FaStar } from "react-icons/fa";
import Hero from "../components/Hero";
import Icon from "@chakra-ui/icon";

export const SliderPost = () => {
  return (
    <Box minW="263px" w='263px'>
      <Box>
        <Image src="/post.svg" alt="svg post" w='100%' />
      </Box>
      <Flex justifyContent="space-between" mt="2">
        <Text fontSize="lg" fontWeight="600">
          White House
        </Text>
        <Text color="gray">By Tunde</Text>
      </Flex>

      <Flex mt="2">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Icon
              as={FaStar}
              key={i}
              color={i < 4 ? "brand.300" : "gray.300"}
            />
          ))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          12 reviews
        </Box>
      </Flex>
    </Box>
  );
};
const Post = () => {
  return (
    <Box minWidth="263px">
      <Box>
        <Image src="/post.svg" alt="svg post" w='100%' />
      </Box>
      <Flex justifyContent="space-between" mt="2">
        <Text fontSize="lg" fontWeight="600">
          White House
        </Text>
        <Text color="gray">By Tunde</Text>
      </Flex>

      <Flex mt="2">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Icon
              as={FaStar}
              key={i}
              color={i < 4 ? "brand.300" : "gray.300"}
            />
          ))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          12 reviews
        </Box>
      </Flex>
    </Box>
  );
};

export default Post;
