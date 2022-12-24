interface IUser {
  permissions: string[];
  roles: string[];
}

interface IValidateUserPermissionsParams {
  user: IUser;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: IValidateUserPermissionsParams) {
  if (permissions && permissions.length > 0) {
    // retorna true caso todos os items forem satisfeitos
    const hasAllPermissions = permissions.every(permission => {
      return user?.permissions.includes(permission)
    });

    if (!hasAllPermissions) {
      return false
    }
  }
  
  if (roles && roles.length > 0) {
    // retorna true caso todos os items forem satisfeitos
    const hasAllRoles = roles.some(roles => {
      return user?.roles.includes(roles)
    });

    if (!hasAllRoles) {
      return false
    }
  }

  return true;
}