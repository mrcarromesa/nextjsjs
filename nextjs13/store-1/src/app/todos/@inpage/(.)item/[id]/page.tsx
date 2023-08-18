const getTodos = async () => {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/todos`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}

export default async function Page(){
  const todos = await getTodos()

  return (
    <section>
      <ul>
        {todos.map((item: any) => (
          <li key={item.title}>item.title</li>
        ))}
      </ul>
    </section>
  )
}