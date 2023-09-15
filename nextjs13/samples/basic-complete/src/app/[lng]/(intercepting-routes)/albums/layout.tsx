export default function Layout(props: any) {
  return (
    <section>
      <h1>Albums</h1>
      {props.inpage}
      {props.children}
    </section>
  )
}
