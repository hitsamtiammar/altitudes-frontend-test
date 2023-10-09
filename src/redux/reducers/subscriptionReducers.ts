import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Subscription } from './interfaces';
import { DUMMY_DATA } from './DUMMY_DATA';

export interface SubscriptionState {
  list: Subscription[];
}

const initialState: SubscriptionState = {
  list: DUMMY_DATA,
};

export const subscriptionReducers = createSlice({
  name: 'subcription',
  initialState,
  reducers: {
    setSubscription(
      state,
      action: PayloadAction<{
        id: string;
        status: boolean;
      }>,
    ) {
      const id = action.payload.id;
      const d = state.list.findIndex((item) => item.id === id);
      const newList = [...state.list];
      newList[d].isSubcribe = action.payload.status;
      state.list = newList;
    },
  },
});

export const { setSubscription } = subscriptionReducers.actions;

export default subscriptionReducers.reducer;
