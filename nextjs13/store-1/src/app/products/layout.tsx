export default function Layout(props: any) {
  return (
    <section>
      <h1>Prods</h1>
      {props.children}
      {props.inpage}
    </section>
  )
}