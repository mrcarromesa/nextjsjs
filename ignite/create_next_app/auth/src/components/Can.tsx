import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface ICanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

const Can = ({ children, permissions, roles }: ICanProps) => {

  const userCanSeeComponent = useCan({
    permissions,
    roles,
  });

  if (!userCanSeeComponent) {
    return null;
  }

  return <>{children}</>;
}

export default Can;