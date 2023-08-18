import Link from "next/link";

export default function Product() {
  return (
    <section>
      <h1>Product</h1>
      <Link href={`/products/item/1`}>Item 1</Link>
    </section>
  )
} 