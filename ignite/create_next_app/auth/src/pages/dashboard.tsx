import { useContext, useEffect } from "react";
import Can from "../components/Can";
import { AuthContext } from "../context/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    roles: ['administrator', 'editor']
  });

  useEffect(() => {
    api.get('/me').then((response) => {
      console.log('dashOK',response.data);
    }).catch((err) => {
      console.log('dashErr',err);
      console.log(err)
    })
  }, [])

  return (
    <>
      <h1>Dashboard {user?.email}</h1>

      <button onClick={signOut}>Sign out</button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  );
}

export default Dashboard;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx as any);
  const response = await apiClient.get('/me');


  console.log(response);

  return {
    props: {}
  }
});