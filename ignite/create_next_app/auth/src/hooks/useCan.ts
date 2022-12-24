import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { validateUserPermissions } from "../utils/validateUserPermissions";

interface IUseCanParams {
  permissions?: string[];
  roles?: string[];
}

export function useCan({ permissions, roles}: IUseCanParams) {

  const { user, isAuthenticated } = useContext(AuthContext);


  if (!isAuthenticated) {
    return false;
  }

  return validateUserPermissions({
    user: user!,
    permissions,
    roles,
  });

}