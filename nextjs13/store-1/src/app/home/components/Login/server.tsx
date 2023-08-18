'use server'

// export const revalidate = 60;

async function getData() {
  const res = await fetch(`http://localhost:3000/posts`, {
    next: {
      revalidate: 10
    }
  });
  const result = await res.json();
  console.log('getById', result);
  return result;
  
}

export { getData }