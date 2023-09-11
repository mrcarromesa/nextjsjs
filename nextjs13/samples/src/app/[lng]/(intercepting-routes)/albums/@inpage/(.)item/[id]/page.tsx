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
    <article
      style={{
        height: '100px',
        width: '300px',
        background: 'white',
        border: '#ccc solid 1px',
      }}
    >
      <h1>{album.title}</h1>
    </article>
  )
}
