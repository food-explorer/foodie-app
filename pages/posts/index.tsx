import {
  Box, SimpleGrid,
} from '@chakra-ui/layout';
import {
  Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/tabs';
import Header from '../../components/Header';
import Post from '../../components/post';

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
              {Array(10)
                .fill('')
                .map((_, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Post key={i} />
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel padding="0">
            <SimpleGrid minChildWidth="270px" spacing="20px">
              {Array(10)
                .fill('')
                .map((_, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Post key={i} />
                ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </>
);

export default Posts;
