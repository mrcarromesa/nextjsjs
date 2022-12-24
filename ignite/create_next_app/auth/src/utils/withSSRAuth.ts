import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from "../services/errors/AuthTokenError";
import decode from 'jwt-decode';
import { validateUserPermissions } from "./validateUserPermissions";


interface WithSSRAuthOptions {
  permissions?: string[];
  roles?: string[]; 
}

// Conceito de High order function

export function withSSRAuth<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>, options?: WithSSRAuthOptions): GetServerSideProps {

  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    console.log(ctx.req.cookies); // obter os cookies lado serverside
    const cookies = parseCookies(ctx); // Quando estivermos no lado serverside precisamos passar o context que é o primeiro parametro
  
    const token = cookies['nextauth.token'];

    // caso o usuário esteja logado enviamos ele para o dashboard
    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    } 

    if (options) {
      const user = decode<{ permissions: string[]; roles: string[]; }>(token);
      const { permissions, roles } = options;
  
      const userHasValidPermissions = validateUserPermissions({
        user: user,
        permissions,
        roles,
      });

      if (!userHasValidPermissions) {
        return {
          // caso nao tenha uma página que todos os usuários possam acessar podemos enviar para o notfound:
          // notFound: true
          // Ou se não podemos fazer um redirect para uma página do qual todos os usuários tenham permissões:
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }
    }

    

    try {
      return await fn(ctx)
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'nextauth.token');
        destroyCookie(ctx, 'nextauth.refreshToken');
  
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }

    return {
      props: {} as P
    }


  }

}