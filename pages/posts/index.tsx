import {
  Box, SimpleGrid,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import Header from '../../components/Header';
import Post from '../../components/post';
import postsData from '../../data/postsData';

const Posts = () => (
  <>
    <Header />
    <Box width="90%" margin="10rem auto">
      <Tabs colorScheme="brand">
        <TabList borderBottom="none">
          <Tab>Lists</Tab>
          <Tab>Favorites</Tab>
        </TabList>

        <TabPanels marginTop="8">
          <TabPanel padding="0">
            <SimpleGrid minChildWidth="270px" spacing="20px">
              {postsData.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel padding="0">
            <SimpleGrid minChildWidth="270px" spacing="20px">
              {postsData.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </>
);

export default Posts;
