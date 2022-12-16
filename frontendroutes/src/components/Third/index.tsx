import { useContext } from "react";
import { MenuRouteContext } from "../../contexts/MenuRouteContext";

const Third = () => {
  const router = useContext(MenuRouteContext);
  return (
    <>
      <h1>Third</h1>
        <button onClick={() => {
          router.goBack();
        }}>Voltar</button>
        <button type="button" onClick={() => {
        router.push('fourth');
      }}>Fourth</button>
    </>
  )
}

export default Third;
