import 'server-only'
import { Item } from '../components/Item';

export const revalidate = 60
// NAO TRABALHA BEM COM o USETRANSLATE dar uma olhada em https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components talvez utilizar app/[locale]/
// export async function generateStaticParams() {
//   const res = await fetch('http://localhost:3000/posts?id=1&id=2');
//   const posts = await res.json();

//   console.log('posts',posts)

//   return posts.map((p: any) => ({
//     title: p.title
//   }))
// }

async function getPostById(id: number) {
  const res = await fetch(`http://localhost:3000/posts/${id.toString()}`);
  const result = await res.json();
  console.log('getById', result);
  return result;
} 

export default async function Posts({ params }: { params: {id:number}}) {
  const post = await getPostById(params.id)

  return (
    <article>
      <Item title={post.title} description={post.description} />
      {/* <h1>{post.title}</h1>
      <p>{post.description}</p> */}
    </article>
  )
}