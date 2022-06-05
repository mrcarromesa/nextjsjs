import { combineReducers } from 'redux';

import { AnyAction } from '@reduxjs/toolkit'

import { REHYDRATE } from 'redux-persist';

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import cart from './cart/reducer';

const masterReducer = (state = {}, action: AnyAction) => {
  console.log('ZZZ =>', action);
  switch (action.type) {
    case REHYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      console.log('here...')
      return state;
    default:
      return state;
  }
};


export default combineReducers({ masterReducer, cart, composeWithDevTools });