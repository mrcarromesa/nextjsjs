export default function Layout(props: any) {
  return (
    <section>
      <h1>TODOs</h1>
      {props.children}
      {props.inpage}
    </section>
  )
} 