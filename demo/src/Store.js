import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './countSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // other reducers if any
  },
});

export default store;
