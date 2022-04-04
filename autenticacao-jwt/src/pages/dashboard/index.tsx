import type { NextPage, GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import { getApiClient } from '../../services/apiClient';

const Dashboard: NextPage = () => {

  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/user');
  }, []);


  return (
    <>
      <h1>Dashboard</h1>
      <p>{user?.name}</p>
    </>
  )
}

export default Dashboard;

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { 'nextauth.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  await getApiClient(ctx).get('/user');

  return {
    props: {}
  }
}
