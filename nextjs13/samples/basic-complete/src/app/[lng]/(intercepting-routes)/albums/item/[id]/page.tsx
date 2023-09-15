const getAlbum = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  return res.json()
}

export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {
  const album = await getAlbum(id)
  return (
    <article>
      <h1>{album.title}</h1>
    </article>
  )
}
