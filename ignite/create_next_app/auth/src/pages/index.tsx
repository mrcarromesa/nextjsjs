import { GetServerSideProps } from 'next';
import { FormEvent, useCallback, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Home.module.css'
import { withSSRGuest } from '../utils/withSSRGuest';

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password
    };

    await signIn(data)

  }, [email, password, signIn]);


  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  )
}


export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {

  return {
    props: {}
  }
})