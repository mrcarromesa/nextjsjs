import type { NextPage } from 'next';
import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';

const Home: NextPage = () => {

  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  const handleSignIn = useCallback(async (data) => {
    await signIn(data);
  },[signIn]);

  return (
   <form onSubmit={handleSubmit(handleSignIn)}>
     <label htmlFor='email'>
       Email:
       <input {...register('email')} name='email' type='email' id='email' placeholder='email' />
     </label>
     <label htmlFor='password'>
       Senha:
       <input {...register('password')} name='password' type='password' id='password' placeholder='senha' />
     </label>
     <button type='submit'>Enviar</button>
   </form>
  )
}

export default Home
