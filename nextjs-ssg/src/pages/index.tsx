import type { GetStaticProps, NextPage } from 'next';

interface IApiResult {
  org: {
    login: string;
    description: string;
    blog: string;
  }
}

const Home: NextPage<IApiResult> = ({ org }) => {
  return (
    <>
      <h1>{org.login}</h1>
      <h3>{org.description}</h3>

      <p>Site: <a href={org.blog}>{org.blog}</a></p>
    </>
  );
}

export default Home;

// Dados que não precisam estar sempre atualizados, podemos utilizar estrategias para atualizar de tempos em tempos
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat');

  const data = await response.json() as IApiResult;

  return {
    props: {
      org: data,
    },
    revalidate: 10, // em segundos
  }
};