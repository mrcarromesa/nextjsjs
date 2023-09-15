'use client'
import { use, cache, useEffect } from 'react'
import axios from 'axios'

// cache not working with Suspense
// const getData = cache(async () => {
//   const result = await axios.get('https://jsonplaceholder.typicode.com/todos')

//   return result.data
// })

let cacheData: any[] | null = null
const getData = async () => {
  if (cacheData) {
    return cacheData
  }
  const result = await axios.get('https://jsonplaceholder.typicode.com/users')
  cacheData = result.data
  return cacheData
}

export const List = () => {
  const users = use(getData())
  useEffect(() => {
    console.log('Hello....')
  }, [])
  return (
    <section>
      <ul>{users?.map((item: any) => <li key={item.id}>{item.name}</li>)}</ul>
    </section>
  )
}
