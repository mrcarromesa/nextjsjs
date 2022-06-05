import { Reducer } from 'react';
import { HYDRATE } from "next-redux-wrapper";
import produce from 'immer';
import { ActionTypes, CartState } from './types';
import { addProductToCartSuccess } from './actions';

type ActionPayload = ReturnType<typeof addProductToCartSuccess>;

const INITIAL_STATE: CartState = {
  items: [],
  failedStockCheck: [],
};


const cart: Reducer<CartState, ActionPayload> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        console.log('Aqui111...');
        const { product } = action.payload;
        const productInCartIndex = draft.items.findIndex((item) => item.product.id === product.id);

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }


        break;
      }
      case ActionTypes.addProductToCartFailure: {
        const { product } = action.payload;

        draft.failedStockCheck.push(product.id);

        break;
      }
      default: {
        return draft;
      }
    }
    return draft;
  });
};

export default cart;