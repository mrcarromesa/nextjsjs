import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

type IContenxtProps = {
  login: string;
}

type IContentStaticResult = {
  login: string;
}

type IMemberProps = {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
  }
}

const Member: NextPage<IMemberProps> = ({ user  }) => {
  
  const { query, isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>
  }
  
  return (
    <>
      <h1>{query.login}</h1>
      <img src={user.avatar_url} alt={user.name} width={80} height={80} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </>

  );
}

export default Member;

export const getStaticPaths: GetStaticPaths = async () => {

  // Aqui ele só irá gerar de forma estatica os 2 primeiros itens
  const response = await fetch('https://api.github.com/orgs/rocketseat/members?per_page=2');
  const data = await response.json() as IContentStaticResult[];

  const paths = data.map((item) => ({
    params: { login: item.login }
  }));

  return {
    paths,
    fallback: true,
  }
}

// so isso em pagina dinamicas não é suficiente precisa do getStaticPaths!
export const getStaticProps = async ({ params }: GetStaticPropsContext<IContenxtProps>): Promise<GetStaticPropsResult<IMemberProps>> => {
  
  const { login } = params || { login: '' };

  const response = await fetch(`https://api.github.com/users/${login}`);
  const data = await response.json() as IMemberProps['user'];
  console.log('verify = ', new Date(), data);
  return {
    props: { user: data },
    revalidate: 10,
  }
}