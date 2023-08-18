'use client'
import { Suspense } from "react";
import { List } from "./components/List";

export default function Feed() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <List />
    </Suspense>
  )
}