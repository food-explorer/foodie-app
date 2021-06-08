import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Posts = {
  title: string;
  desc: string;
  location: { lat: string; long: string; };
  accessiblities: string[];
  images: string[];
  stars: number;
  reviewsCount: number;
}[]

type PostsState = {
  data: Posts,
}

const initialState: PostsState = { data: [] };

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts(state, action: PayloadAction<Posts>) {
      state.data = action.payload;
    },
  },
});

export default postSlice.reducer;
