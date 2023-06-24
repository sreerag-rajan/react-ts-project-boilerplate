import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

// Assuming you have a todos slice in your Redux store

// Selector function to get the todos slice from the state
const userState = (state : RootState) => state.user;

// Selector using createSelector to get completed todos
export const isUserVerified = createSelector(
  userState,
  (user) => user.isVerified
);