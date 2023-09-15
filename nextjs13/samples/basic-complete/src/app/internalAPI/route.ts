export async function GET(request: Request) {
  const a = await fetch('https://jsonplaceholder.typicode.com/todos')
  const result = await a.json()

  return Response.json(result)
}
