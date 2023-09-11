'use client'
import { ChangeEvent, useEffect, useMemo, useState, useTransition } from 'react'

export default function LisTodo() {
  const [inputValue, setInputValue] = useState('')
  const [listModified, setListModified] = useState<String[]>([])

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const getData = async () => {
      console.time('A')
      const a = await fetch('http://localhost:3000/internalAPI')
      const result = await a.json()

      console.timeEnd('A')
      console.log('result', result)
    }

    getData()
  }, [])

  const list = useMemo(() => {
    const ARRAY_SIZE = 5000
    const array = []

    for (let i = 0; i <= ARRAY_SIZE; i++) {
      array.push('Teste use Transition')
    }

    return array
  }, [])

  const handleChangeInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value)

    // Prioriza os demais que estão fora do transisition
    // Utilizar a penas quando for necessário pois ele faz uma renderização do component
    // Utilizar apenas quando tem uma renderização muito custosa que tem que dá prioridade para um dos dois.
    // Para testar ir na devtools e alterar a peformance da cpu para 6x menos
    startTransition(() => {
      setListModified(
        value.length === 0
          ? []
          : list.map((item) => item.slice(0, value.length))
      )
    })
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChangeInput}
        value={inputValue}
        placeholder="Buscar"
      />

      {isPending ? (
        <div>Loading</div>
      ) : (
        listModified.map((item, index) => <div key={index}>{item}</div>)
      )}
    </div>
  )
}
