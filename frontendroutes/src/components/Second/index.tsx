import { useContext } from "react";
import { MenuRouteContext } from "../../contexts/MenuRouteContext";

const Second = () => {
  const router = useContext(MenuRouteContext);
  return (
    <div style={{
      height: 75
    }}>
      <h1>Second</h1> 
        <button onClick={() => {
          router.goBack();
        }}>Voltar</button>
        <button type="button" onClick={() => {
          router.push('third');
        }}>Third</button> 
    </div>
  )
}

export default Second;
