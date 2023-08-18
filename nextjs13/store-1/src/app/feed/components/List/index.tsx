'use client'
import { use, cache, useEffect  } from 'react';
import axios from "axios";
import useTranslation from 'next-translate/useTranslation';

const getData = cache(() => axios.get('https://jsonplaceholder.typicode.com/todos'))

export const List = () => {
  const { data: todos } = use(getData())
  const { t } = useTranslation()
  useEffect(() => {
    console.log('Hello....', t('title'));
  }, []);
  return (
    <section>
      <ul>
        {todos.map((item: any) => (
          <li key={item.title}>{item.title} -</li>
        ))}
      </ul>
    </section>
  )

}