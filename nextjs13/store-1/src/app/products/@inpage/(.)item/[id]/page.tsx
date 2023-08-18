'use client'

import { Button } from "@/app/products/components/Button";

export default function Item({ params: { id } }: any) {
  return (
    <>
      @Item Modal {id}
      <Button />
    </>
  )
}