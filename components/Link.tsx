import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/layout";
import Link from "next/link";

interface CustomLinkProps {
  url: string
} 
const CustomLink: React.FC<CustomLinkProps> = ({ children, url }) => {
  return (
    <ChakraLink as={Link} href={url}>
      {children}
    </ChakraLink>
  );
};

export default CustomLink;
