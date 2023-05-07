"use client"

import { useState } from "react"

interface IFormProps {
  children: (props: {
    values: {[key: string]: string};
    handleChange: (key: string, value: string) => void;
  }) => React.ReactNode
}

export const Form = ({ children }: IFormProps) => {
  const [values, setValues] = useState({ key: '' });

  const handleChange = (key: string, value: string) => {
    setValues((prevValues) => ({...prevValues, [key]: value}))
  }

  return (
    <>{children({ values, handleChange })}</>
  )
}