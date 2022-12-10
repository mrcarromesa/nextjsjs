# Projeto com interface declarativa

- Iniciar o projeto:

```shell
yarn create next-app dashgo  
```

- Remover a pasta `styles` e os arquivos dentro da pasta `public`, remove a pasta `pages/_api`

- criar uma pasta `src` mover a pasta `pages` para lá e criar a pasta `componets` e `styles` dentro de src, modificar os arquivos para a extensão `.tsx`

- no arquivo `_app.tsx` ajustar para: 

```tsx
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

```

e instalar as dependencias: 

```shell
yarn add typescript @types/react @types/node -D
```

- Rodar o comando:

```shell
yarn dev
```

- Dessa forma o next irá detectar que há typescript no projeto e fazer as configurações necessárias

- No arquivo `tsconfig.json` adicionar:

```json
"moduleResolution": "node",
```

---

## Chakra UI

- Instalação:

```shell
yarn add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion
```

- O Chakra foi construído em cima do `emotion`: https://emotion.sh/docs/introduction por isso é necessário instalar as dependencias do `@emotion`,
 e para parte de animações é utilizado o `framer-motion`: https://www.framer.com/motion/


- Dentro da pasta `styles/` adicionar o arquivo `theme.ts`, o arquivo `theme.ts`` serve para quando precisamos mudar algum comportamento padrão do chakra como o padrão de um input, como font, color, etc. 
fazemos isso dentro desse arquivo `theme.ts`

- Por fim para aplica-lo na aplicação no arquivo `src/pages/_app.tsx` adicionar:

```tsx
import { AppProps } from 'next/app';

// chakra
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp

```

---

## Font

- Para utilizar a font apenas pegar uma fonte escolhida do google fonts,
- E adicionar o link dentro de `src/pages/_document.tsx`
- Por fim dentro de `themes.ts` adicionar a chamada a font


---

### Utilização de icon

- Com o chakra utilizamos o container de Icon do proprio chakra:

```tsx
import { Icon } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri';


export function Header() {
  return (
        <Icon as={RiSearchLine} fontSize="20" />
```

---

## Chart

- Uma lib boa de gráficos para react é o [ApexChart](https://apexcharts.com/)

- Para instalar executar o comando:

```shell
yarn add apexcharts react-apexcharts
```

---

## Dependencias que só funciona client-side

- Algumas dependencias não funcionam no lado server apenas client para resolver isso podemos utilizar o `dynamic` do nextjs:

```tsx
import dynamic from 'next/dynamic';


const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false // nao carrega no lado server, so no client
});
```

---

### Estilização especial

- Um exemplo de estilização especial é quando um botão pode estar disabled ou não disabled:

```tsx
<Button
  size="sm"
  fontSize="xs"
  width="4"
  colorScheme="pink"
  disabled
  _disabled={{
    bgColor: 'pink.500',
    cursor: 'default'
  }}
>
  1
</Button>
<Button
  size="sm"
  fontSize="xs"
  width="4"
  bg="gray.700"
  _hover={{
    bg: 'gray.500',
  }}
>
  2
</Button>
```

- No caso através da prop `_disabled` estamos informando ao chakra qual a nova aparencia que deverá ser aplicada quando o botão estivar `disabled`
- Ou até mesmo o caso do `_hover`

---

### Responsividadade

- O ChakraUi possuí uma boa maneira de lidar com a responsividade [Responsividade](https://chakra-ui.com/docs/styled-system/responsive-styles)
- Podemos declarar tanto na forma de array:

```tsx
<Box bg='red.200' w={[300, 400, 500]}>
  This is a box
</Box>
```

- Bem como objeto:

```tsx
<Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
  This is responsive text
</Text>
```

- Breakpoints:

```ts
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
```

- E podemos adicionar mais breakpoints normalmente.

- Outra forma de utilizarmos seria utilizando hooks:

```tsx
const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // ... MORE

  <Profile showProfileData={isWideVersion} />
```

---

## Validação de formulário

- Uma boa opção para validar formulários é o `react-hook-form` e ele integra bem com o `yup` também...

- Para utilizar o `yup` juntamente com o `react-hook-form`, já tendo o `react-hook-form` instalado, só adicionar o seguinte:

```shell
yarn add yup @hookform/resolvers
```

---

## Lib para simular api (MIRAGE)

- Quando o backend ainda está em desenvolvimento podemos simular chamadas ao backend utilizando ferramentas, uma delas é o `mirage`
- MirageJS:

```shell
yarn add miragejs -D
```

- Podemos criar o arquivo `src/services/mirage/index.ts`

- Para configurar de forma que funcione com o next temos o seguinte:

```tsx
routes() {
      this.namespace = 'api';
      this.timing = 750; // adicionar delay para testar chamadas asyncronas

      this.get('/users');
      this.post('/users');

      this.namespace = ''; // voltamos ao estado original para não conflitar com o namaspace do next

      this.passthrough(); // caso as rotas não estejam definidas no mirage ele passa adiante para ser tentadas pela aplicação next
    }
```

- E também adicionamos o seguinte em `src/pages/_app.tsx`:

```tsx
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}
```

- Para geração de dados ficticios podemos utilizar outra lib que faz isso que é o `@faker-js/faker`:

```shell
yarn add @faker-js/faker -D
```

- Com o mirage podemos também gera dados fictios! Podemos fazer isso dessa forma:

```ts
factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 200);
    },
```

- Para realizar o test podemos fazer a chamada a api: 

```tsx
 useEffect(() => {
    fetch('http://localhost:3000/api/users').then(response => response.json()).then(data => console.log(data));
  });
```

- Executar o comando:

```shell
yarn dev
```

---

## React Query

- Instalar utilizando o comando:

```shell
yarn add react-query
```

- Precisamos adicionar o provider em `src/pages/_app.tsx`:

```tsx
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>
    // ... MORE
  </QueryClientProvider>
  )
}

export default MyApp

```

- Utilizar em `src/pages/users/index.tsx`

- Ferramenta de desenvolvimento do [React Query Devtool](https://react-query-v3.tanstack.com/devtools),
- Basicamente adicionar o seguinte ao component:

```tsx
import { ReactQueryDevtools } from 'react-query/devtools'
```

- Colocar em `src/pages/_app.tsx` dentro do `QueryClientProvider`

- O importante é dominar os estados do React Query `fresh, fetching, stale inactive`...

- Algo importante quando se trabalha com valores dinamicos como a questão de paginação é que o valor de página muda e precisamos fazer o `fetch` dos dados novamente
- E precisamos inofrmar ao `react-query` que a chave é diferente... para isso mudamos um pouco o hook em `services/hooks/useUsers`:

```ts
export const useUsers = (page: number) => {
  // OLD
  // return useQuery('users', () => getUsers(page), {
  // Sempre que temos um dado que irá mudar como no caso da paginação cada página tem dados diferentes, nesse caso
  // podemos utilizar a chave composta para forçar que o react query realize um novo fetch dos dados
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 5 // 5 segundos para ficar obsoleto
  });
}
```

---

## Paginação utilizando o miragejs

- Para fazer paginação com o miragejs podemos ajustar o arquivo `src/mirage/index.ts`:

```ts
this.get('/users', function (schema, request) {
  const { page = 1, per_page = 10 } = request.queryParams;
  const total = schema.all('user').length

  const pageStart = (Number(page) - 1) * Number(per_page);
  const pageEnd = pageStart + Number(per_page);


  const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

  return new Response(
    200,
    {
      'x-total-count': String(total) // Para retornar o total de registros por página o ideal é retornar no header da requisição e não no corpo, pois essa info é um metadado
    },
    {
      users
    }
  )
});
```