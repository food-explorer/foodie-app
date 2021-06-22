import faker from 'faker';

export interface IPostCard {
  id: string;
  title: string;
  image: string;
  averageRating: number;
  visitCount: number;
  reviewsCount: number;
  slug: string;
}

const fetchData = () => Array(10).fill('').map(() => ({
  slug: faker.lorem.slug(),
  title: faker.name.title(),
  id: faker.random.alphaNumeric(10),
  image: faker.image.food(),
  averageRating: faker.datatype.number({ min: 1, max: 5 }),
  reviewsCount: faker.datatype.number(100),
  visitCount: faker.datatype.number(300),
}));

const data: IPostCard[] = fetchData();

export default data;
