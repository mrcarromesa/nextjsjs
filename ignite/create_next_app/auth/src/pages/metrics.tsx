import { useContext, useEffect } from "react";
import Can from "../components/Can";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

const Metrics: React.FC = () => {
  

  return (
    <>
      <h1>Metrics</h1>
    </>
  );
}

export default Metrics;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx as any);
  const response = await apiClient.get('/me');


  console.log(response);

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
});