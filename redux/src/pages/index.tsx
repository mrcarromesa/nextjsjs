import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useDispatch, useSelector } from 'react-redux';

import { addProductToCartSuccess } from '../store/modules/cart/actions';
import { useCallback, useEffect } from 'react';

const Home: NextPage = (props) => {

  console.log(props);

  const a = useSelector((state: any) => state);
  const products = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log(a);

  }, [a]);

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartSuccess({
      id: Date.now(),
      price: 10,
      title: 'Product 1',
    }));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>title</th>
          <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product: any) => (
            <tr key={product.product.id}>
              <td>{product.product.id}</td>
              <td>{product.product.title}</td>
              <td>{product.product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type='button' onClick={handleAddProductToCart}>Add Item</button>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log('asdf',context.req);
  return {
    props: {}, // will be passed to the page component as props
  }
}
