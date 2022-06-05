import { configureStore } from '@reduxjs/toolkit'

import { createWrapper } from 'next-redux-wrapper';

import { persistStore, persistReducer, Storage } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';
import {  cartMiddleware } from './modules/cart/cartMiddleware';

const myStorage: Storage = {
  getItem: key => {
    return new Promise((resolve) => {
      let result = '';
      try {
        if (typeof window !== 'undefined') {
          result = String(sessionStorage.getItem(key));
        } 
      } catch (error) {
        console.log(error)
      }
      resolve(result);    

    });
  },
  setItem: (key, value) => {
    return new Promise((resolve) => {
      console.log('my setItem')
      if (typeof window !== 'undefined') {
        resolve(sessionStorage.setItem(key, value))
      }
    })
  },
  removeItem: async key => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined') {
        resolve(sessionStorage.removeItem(key))
      }
    })
  },
}

const persistConfig = {
  key: '@APPLICATION_root',
  storage: myStorage,
  // storage: storage,
  whitelist: ['cart']
}

const persistReducerMake = persistReducer(persistConfig, rootReducer); 


export const store = configureStore({
  reducer: persistReducerMake,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(cartMiddleware),
});
persistStore(store);

// const initStore = (initialState = {}) => {
//   return store
// };

export const makeStore = () =>
store;



export const wrapper = createWrapper(makeStore, { debug: true });