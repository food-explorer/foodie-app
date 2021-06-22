import React from 'react';
import {
  Box,
} from '@chakra-ui/layout';
import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slide from '../components/Slides';
import postsData, { IPostCard } from '../data/postsData';

type HomeProps = {
  posts: IPostCard[]
}
const Home: React.FC<HomeProps> = ({ posts }) => (
  <div>
    <Header />
    <Box width="90%" margin="2rem auto">
      <Hero />
      <Slide title="Discover Restaurants" data={posts} />
      <Slide title="This week favorite" data={posts} />
    </Box>
  </div>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    posts: postsData,
  },
});
