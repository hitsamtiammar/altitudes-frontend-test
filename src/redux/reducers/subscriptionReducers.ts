import { createSlice } from '@reduxjs/toolkit';
import { Subscription, DUMMY_DATA } from './interfaces';

export interface SubscriptionState {
  list: Subscription[];
}

const initialState: SubscriptionState = {
  list: DUMMY_DATA,
};

export const subscriptionReducers = createSlice({
  name: 'subcription',
  initialState,
  reducers: {},
});

export default subscriptionReducers.reducer;
