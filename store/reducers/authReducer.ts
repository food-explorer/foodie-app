import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  email: string;
  name: string;
  location: string;
  image: string;
  token: string | null;
}

const initialState: AuthState = {
  email: '',
  name: '',
  location: '',
  image: '',
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<AuthState>) {
      state = action.payload;
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
