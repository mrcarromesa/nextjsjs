import { useContext } from "react";
import { MenuRouteContext } from "../../contexts/MenuRouteContext";

const Main = () => {
  const router = useContext(MenuRouteContext);
  return (
    <div
      style={{
        width: 300,
        height: 200,
      }}
    >
      <h1>Main</h1>
      <button type="button" onClick={() => {
        router.push('second');
      }}>Second</button>
      <button type="button" onClick={() => {
        router.push('fourth');
      }}>Fourth</button>
    </div>
  )
}

export default Main;
