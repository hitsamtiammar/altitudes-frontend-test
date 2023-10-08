import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducers from './reducers/subscriptionReducers';
import userReducers from './reducers/userReducers';

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducers,
    users: userReducers,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
