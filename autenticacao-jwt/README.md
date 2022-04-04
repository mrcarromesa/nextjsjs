# JWT Next

- Não conseguimos utilizar o localstorage pois quando a aplicação estiver em server-side ele não terá acesso ao localstorage...
- Para tal podemos utilizar cookies, porém não da para sair usando o document.cookie pois ela está disponível apenas no browser, ou seja no next não conseguimos utilizar estrategias que estejam disponíveis apenas no browser, ela precisa estar disponível no backend também, dessa forma podemos utilizar algumas das libs para gerenciar os cookies no front e backend, uma delas são:

- jscookie
- universal-cookie
- nookies -> é do next e já tem toda integração.

---

- Nesse projeto vamos utilizar o token nas requisições de client-side e server-side, para tal criamos dois arquivos:

- `src/services/api.ts` - client-side
- `src/services/apiClient.ts` - server-side

- Também criamos um Context API para via hooks useContext poder autenticar o usuário e obter a informação se o mesmo está logado ou não...

---

# Verificando usuário logado via server-side

- No arquivo /src/pages/dashboard/index.ts

- Podemos verificar se o usuário está logado via server-side com a function `getServerSideProps` dessa forma:

```ts
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { 'nextauth.token': token } = parseCookies(ctx); // <- Verificar o cookie de autenticação

  if (!token) { // <- Caso não existir redirecionamos para tela de login
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  await getApiClient(ctx).get('/user');

  return {
    props: {}
  }
}
```

- O context utilizado para autenticação é o `src/contexts/AuthContext`