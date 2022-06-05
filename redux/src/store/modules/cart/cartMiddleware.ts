import { addProductToCartSuccess, addProductToCartFailure } from './actions';

export const cartMiddleware = (store: any) => (next: (arg0: any) => void) => (action: any) => {
  // Our middleware
  console.log(`Redux Log:`, action)

  // addProductToCartSuccess({
  //   id: Date.now(),
  //   price: 10,
  //   title: 'Product 190909',
  // });

  // call the next function
  next(action);
}