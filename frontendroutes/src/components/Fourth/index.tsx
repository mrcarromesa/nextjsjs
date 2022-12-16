import { useContext } from "react";
import { MenuRouteContext } from "../../contexts/MenuRouteContext";

const Fourth = () => {
  const router = useContext(MenuRouteContext);
  return (
    <>
      <h1>Fourth</h1> 
        <button onClick={() => {
          router.goBack();
        }}>Voltar</button>
    </>
  )
}

export default Fourth;
