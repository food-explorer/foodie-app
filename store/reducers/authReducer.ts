import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthData {
  email: string;
  name: string;
  location: string;
  image: string;
  token: string | null;
}

type AuthState = {
  data: AuthData
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {} as AuthState,
  reducers: {
    loginSuccess(state, action: PayloadAction<AuthData>) {
      state.data = action.payload;
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
