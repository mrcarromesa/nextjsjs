import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUserResponse = {
  totalCount: number;
  users: IUser[]
}

export const getUsers = async (page: number): Promise<GetUserResponse> => {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);
      
  const users = data.users.map(user => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR',{
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }))
  return {users, totalCount};
}

export const useUsers = (page: number, options: UseQueryOptions): UseQueryResult<GetUserResponse> => {
  // OLD
  // return useQuery('users', () => getUsers(page), {
  // Sempre que temos um dado que irá mudar como no caso da paginação cada página tem dados diferentes, nesse caso
  // podemos utilizar a chave composta para forçar que o react query realize um novo fetch dos dados
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos para ficar obsoleto
    ...options,
  }) as UseQueryResult<GetUserResponse>;
}