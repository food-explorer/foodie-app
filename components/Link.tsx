import React from 'react';
import {
  Link as ChakraLink,
} from '@chakra-ui/layout';
import Link from 'next/link';

interface CustomLinkProps {
  url: string
}
const CustomLink: React.FC<CustomLinkProps> = ({ children, url }) => (
  <ChakraLink as={Link} href={url}>
    {children}
  </ChakraLink>
);

export default CustomLink;
