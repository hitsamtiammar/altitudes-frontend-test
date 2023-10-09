import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReceiveBy } from '@/pages/Profile/interfaces';

export interface UserState {
  email: string;
  password: string;
  receiveBy: ReceiveBy;
}

const initialState: UserState = {
  email: 'hitsamtiammmar@gmail.com',
  password: 'hahahehe',
  receiveBy: ReceiveBy.DAILY,
};

export const subscriptionReducers = createSlice({
  name: 'subcription',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.receiveBy = action.payload.receiveBy;
    },
  },
});

export const { setData } = subscriptionReducers.actions;

export default subscriptionReducers.reducer;
