'use client'
import TodoViews from "@/asyncComponents/TodoViews";
import Link from "next/link";
import { Suspense, useEffect, useRef } from "react";

export default function Page() {

  const divRef = useRef(null)

  useEffect(() => {
    console.log('divRef', divRef.current)
  }, [])

  return (
    <section>
      <h2>Todos Page</h2>
      <Link href="/todos/item/1">Item1</Link>
      <div ref={divRef}>
        <Suspense fallback={<div>Loading</div>}>
          <TodoViews />
        </Suspense>
      </div>
    </section>
  );
}
