interface IRouteProps {
  children: any;
  path: string;
}

const Route = ({ children }: IRouteProps) => {
  return <>{children}</>
}

export default Route;
