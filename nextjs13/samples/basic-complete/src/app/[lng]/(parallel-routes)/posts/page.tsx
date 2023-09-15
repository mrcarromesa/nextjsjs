const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}
export default async function Posts() {
  const posts = (await getPosts()) as any[]

  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <h2> title: {post.title}</h2>
          <p>description:{post.body}</p>
        </article>
      ))}
    </section>
  )
}
