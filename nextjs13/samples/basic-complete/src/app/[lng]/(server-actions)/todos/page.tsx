import { revalidatePath } from 'next/cache'
import { AddButton } from './components/AddButton'

const todos = ['Learn React']
export default function Page() {
  async function addTodo(data: FormData) {
    'use server'
    console.log('here...')
    const todo = data.get('todo') as string
    await new Promise((res) => setTimeout(res, 2000))
    todos.push(todo)
    revalidatePath('./')
  }
  return (
    <section>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input name="todo" type="string" />
        <AddButton />
      </form>
    </section>
  )
}
