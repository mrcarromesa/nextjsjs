export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?id=1&id=2'
  )
  const todos = await res.json()

  return todos.map((p: any) => ({
    title: p.title,
  }))
}

const getTodos = async () => {
  await new Promise((res) => setTimeout(res, 2000))
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?id=1&id=2'
  )
  return res.json()
}

export default async function Todo() {
  const todos = (await getTodos()) as any[]
  return (
    <section>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </section>
  )
}
