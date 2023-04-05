import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './setup/redux';

const store = configureStore({ reducer: rootReducer });
export default store;
