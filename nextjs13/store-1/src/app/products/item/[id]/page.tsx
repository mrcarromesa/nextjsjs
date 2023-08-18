'use client'

import { Button } from "../../components/Button";

export default function Item({ params: {id}} : any) {
  return (
    <>
      Item {id}
      <Button />
    </>
  )
}