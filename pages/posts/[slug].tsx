import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/layout';
import {
  FaHeart,
} from 'react-icons/fa';
import Accessbilites from '../../components/Accessibilities';
import Comments from '../../components/Comments';
import Header from '../../components/Header';
import Location from '../../components/Location';

const ViewPost = () => (
  <>
    <Header />
    <HStack spacing="4" overflowX="auto" flexFlow="unset">
      {Array(10)
        .fill('')
        .map((_, i) => (
          <Image
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            w="72"
          />
        ))}
    </HStack>
    <Box width="90%" margin="2rem auto">
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box w={{ base: '100%', md: '100%', xl: '60%' }}>
          <VStack spacing="4" alignItems="flex-start">
            <Heading>White House & Dine</Heading>
            <HStack spacing="4">
              <Text>3 Total Visits</Text>
              <Button variant="link">Write a review</Button>
            </HStack>
            <Button borderRadius="full" leftIcon={<FaHeart />}>
              Favourite
            </Button>
          </VStack>
          <SimpleGrid minChildWidth={['100%', '380px']} spacing="20px" mt="8">
            <Location />
            <Accessbilites />
          </SimpleGrid>
        </Box>
        <Comments />
      </Flex>
    </Box>
  </>
);

export default ViewPost;
