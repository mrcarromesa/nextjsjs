import Link from 'next/link'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  return res.json()
}
export default async function Page() {
  const albums = (await getData()) as any[]
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/albums/item/${item.id}`}>{item.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
