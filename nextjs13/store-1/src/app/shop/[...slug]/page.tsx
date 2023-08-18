type Props = {
  params: { slug: string };
};

async function getMovies() {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/todos`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}

export default async function Page({ params }: Props) {
  let results = await getMovies();
  // console.log('result', results)
  return (
    <>
      <h1>Shop</h1>
      Slug = {JSON.stringify(params)}

      {results &&
        results.map((index: any) => {
          return <li key={index.title}>{index.title}</li>;
        })}
    </>
  );
}
