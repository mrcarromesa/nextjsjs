import { useTranslation } from '@/app/i18n'

export const revalidate = 60
export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?id=1&id=2'
  )
  const posts = await res.json()

  console.log('posts', posts)

  return posts.map((p: any) => ({
    title: p.title,
  }))
}

async function getPostById(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id.toString()}`
  )
  const result = await res.json()
  console.log('getById', result)
  return result
}

export default async function Home({
  params: { lng, id },
}: {
  params: { lng: string; id: number }
}) {
  const { t } = await useTranslation(lng)
  const post = await getPostById(id)
  return (
    <>
      <h1>{t`title`}</h1>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </>
  )
}
