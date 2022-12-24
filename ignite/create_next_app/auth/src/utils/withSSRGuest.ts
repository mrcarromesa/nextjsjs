import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from 'nookies';

// Conceito de High order function

export function withSSRGuest<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>): GetServerSideProps {

  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    console.log(ctx.req.cookies); // obter os cookies lado serverside
    const cookies = parseCookies(ctx); // Quando estivermos no lado serverside precisamos passar o context que é o primeiro parametro
  
  
    // caso o usuário esteja logado enviamos ele para o dashboard
    if (cookies['nextauth.token']) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    } 

    return await fn(ctx)

  }

}