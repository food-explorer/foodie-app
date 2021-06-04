import {
  Box,
} from '@chakra-ui/layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slide from '../components/Slides';

export default function Home() {
  return (
    <div>
      <Header />
      <Box width="90%" margin="2rem auto">
        <Hero />
        <Slide title="Discover Restaurants" />
        <Slide title="This week favorite" />
      </Box>
    </div>
  );
}
