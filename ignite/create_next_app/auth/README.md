# Auth Token


- Utilizar cookies para armazenar informações "publicas" a cerca do token, pois assim o next pode acessar tanto server side como client side, o que não seria muito viavel se fosse local ou session Storage

- Para trabalhar melhor com cookies podemos utilizar alguma dependencia, nesse caso uma interessante é a nookies:

```shell
yarn add nookies
```

- Exemplo de utilização:

```ts
setCookie(undefined, 'nextauth.token', token, {
  maxAge: 60 * 60 * 24 * 30, // 30 days
  path: '/' // quais caminhos da aplicação tem acesso a esse cookie, nesse caso qualquer endereço terá acesso a esse cookie
});

setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
  maxAge: 60 * 60 * 24 * 30, // 30 days
  path: '/',
});
```

- Pelo browser o primeiro parametro sempre utilizar `undefined`, o segundo parametro é um identificador do cookie, utilizar um valor que não conflite com outras aplicações, e por fim o valor.

- No arquivo `src/services/api` adicionamos também a atualização do token por cookie:

```ts
import { parseCookies } from 'nookies';

const cookies = parseCookies();

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['nextauth.token']}`,
  },
});
```

- Porém isso pode ser que em um primeiro momento não irá propagar no mesmo momento para todas as requisições, por isso quando damos o signIn no `context/AuthContext` precisamos fazer isso também:

```ts
const signIn = useCallback(async ({ email, password }: ISignInCredentials) => {
  // ... more
  api.defaults.headers.Authorization = `Bearer ${token}`
  // ... more
```

### Refresh Token

- Para que o refresh token possa ser tratado quando alguma requisição falhar, podemos realizar o interceptor do axios.
- Temos que ter em mente o seguinte, 2 ou mais requisições podem estar sendo feitas ao mesmo tempo, nesse caso precisamos tratar isso também, do contrário será feito 
várias chamadas solicitando o refresh token, e dessa forma as chamadas após a primeira de solicitação de refresh token irão falhar,
- Para evitar essa falha devemos fazer algo parecido com uma fila para que as requisições ocorram só após a primeira tentativa de refresh token
- Um exemplo está em `src/services/api.ts`:

```ts
// MORE...
let isRefreshing = false;
let failedRequestQueue: any[] = [];
// MORE...

api.interceptors.response.use(response => {
  return response;
}, (error: AxiosError) => {
  // Escolhemos tratar apenas as requisições que forem 401 e que o problema for de token expirado
  if (error.response?.status === 401) {
    if ((error.response.data as Record<string, unknown>).code === 'token.expired') {
      cookies = parseCookies();

      const  { 'nextauth.refreshToken': refreshToken } = cookies;
      const originalConfig = error!.config;

      if (!isRefreshing) {
        isRefreshing = true;
        api.post('/refresh', {
          refreshToken,
        }).then(response => {
          const { token } = response.data;
  
          setCookie(undefined, 'nextauth.token', token, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/' // quais caminhos da aplicação tem acesso a esse cookie, nesse caso qualquer endereço terá acesso a esse cookie
          });
          setCookie(undefined, 'nextauth.refreshToken', response.data.refreshToken, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
          });
  
          api.defaults.headers.Authorization = `Bearer ${token}`

          // como a chamada a api leva um pouquinho de tempo, é suficiente para que a variavel `failedRequestQueue` seja populada la no return new Promise...
          // e recuperada aqui.
          failedRequestQueue.forEach(request => request.onSuccess(token));
          failedRequestQueue = [];
        }).catch((err) => {
          failedRequestQueue.forEach(request => request.onFailed(err));
          failedRequestQueue = [];
        }).finally(() => {
          isRefreshing = false
        })
      }


      return new Promise((resolve, reject) => {
        failedRequestQueue.push({
          onSuccess: (token: string) => {
            
            originalConfig!.headers!.Authorization = `Bearer ${token}`;
            

            resolve(api(originalConfig!))
          },
          onFailed: (err: AxiosError) => {
            reject(err)
          }, 
        })
      })

    } else {
      // logout
      signOut();
    }
  }

  return Promise.reject(error); // importante para continuar o fluxo do axios
})
```

- Os comentários no código ajudarão no entendimento.

---

### Cookies server side

- Um exemplo está em `src/pages/index.tsx`:

```tsx
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.req.cookies); // obter os cookies lado serverside
  const cookies = parseCookies(ctx); // Quando estivermos no lado serverside precisamos passar o context que é o primeiro parametro


  // caso o usuário esteja logado enviamos ele para o dashboard
  if (cookies['nextauth.token']) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
```

- Algo que é interessante fazer é verificar a documentação sobre os cookies: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

---

### High Order function

- Utilizamos esse conceito em `src/pages/index.tsx`, para realizar um desacoplamento...

- Ficou algo assim:

```tsx
export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {

  return {
    props: {}
  }
})
```

- E em `src/utils/withSSRGuest.ts` ficou algo assim:

```ts
export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {

  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    console.log(ctx.req.cookies); // obter os cookies lado serverside
    const cookies = parseCookies(ctx); // Quando estivermos no lado serverside precisamos passar o context que é o primeiro parametro
  
  
    // caso o usuário esteja logado enviamos ele para o dashboard
    if (cookies['nextauth.token']) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    } 

    return await fn(ctx)

  }

}
```

- Ou seja eu recebo uma função como parametro, e só utilizo ela caso o if `if (cookies['nextauth.token'])` for falso e acabar caindo em

```ts
return await fn(ctx)
```

- Foi criado também outra em `src/utils/withSSRAuth` o qual redireciona o usuário para página de login caso o token não seja válido

---

### Repassar contexto lado servidor

- Para repassar os cookies do server side para a api do axios e utilizando a dependencia nookies precisamos passar o context e para isso foi necessário refatorar o arquivo `services/api.ts`, e para facilitar utilizamos o arquivo `services/apiClient.ts` para realizar as chamadas,

- Dessa forma do lado do browser podemos realizar a chamada normal sem passar o context para ele:

```ts
import { api } from "../services/apiClient";

// ...MORE...

api.get('me')
```

- Já do lado servidor chamamos o `services/api.ts`:

```ts
import { setupAPIClient } from "../services/api";

// ... MORE


export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx as any);
  const response = await apiClient.get('/me');


  console.log(response);

  return {
    props: {}
  }
});

```

---

### Tratamento de erro do token server side

- Para tratamento do erro do lado server side, criamos o arquivo `src/services/errors/AuthTokenError.ts`, dessa forma podemos obter o tipo de error ao invés de um generico para tomar uma ação a partir do tipo de erro.

- No arquivo `src/services/api.ts` ajustamos para quando está do lado server ao invés de executar o signOut direto retornamos uma Promise.reject com
o erro `AuthTokenError`:

```ts
if (typeof window === 'undefined') {
  return Promise.reject(new AuthTokenError());
}

signOut();
```
- E ajustamos no arquivo `utils/withSSRAuth.ts`:

```ts
try {
  return await fn(ctx)
} catch (err) {
  if (err instanceof AuthTokenError) {
    destroyCookie(ctx, 'nextauth.token');
    destroyCookie(ctx, 'nextauth.refreshToken');

    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}

return {
  props: {} as P
}


```

### Realizando a validação das permissões no server side

- Para tal, nesse caso no proprio jwt é passado o permissions e roles, para obter essa informação encriptada do jwt utilizamos a dependencia `jwt-decode`:

```shell
yarn add jwt-decode
```

- Ajustamos o hook `src/hooks/useCan` para desacoplar a função de validar as permissões do usuário em `src/utils/validateUserPermissions.ts`
- E dentro de `src/utils/withSSRAuth.ts` adicionamos o seguinte:

```ts
interface WithSSRAuthOptions {
  permissions?: string[];
  roles?: string[]; 
}

// Conceito de High order function

export function withSSRAuth<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>, options?: WithSSRAuthOptions): GetServerSideProps {

// MORE...
// MORE...
// MORE...
// MORE...

if (options) {
  const user = decode<{ permissions: string[]; roles: string[]; }>(token);
  const { permissions, roles } = options;

  const userHasValidPermissions = validateUserPermissions({
    user: user,
    permissions,
    roles,
  });

  if (!userHasValidPermissions) {
    return {
      // caso nao tenha uma página que todos os usuários possam acessar podemos enviar para o notfound:
      // notFound: true
      // Ou se não podemos fazer um redirect para uma página do qual todos os usuários tenham permissões:
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
}
```

- E por fim na página `src/pages/metrics.tsx` ajustamos a chamada da função de ordem superior:

```ts
export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx as any);
  const response = await apiClient.get('/me');


  console.log(response);

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
});
```

---

### BroadcastChannel

https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel

- Criamos um BroadcastChannel simples para deslogar o usuário quando ele tem várias abas abertas e em uma delas ele clica para sair,
- Dessa forma saímos de todas as abas do qual a aplicação está aberta, redirecionando para página de dashboard:

```tsx
let authChannel: BroadcastChannel;

interface IAuthProviderProps {
  children: ReactNode;
}

// ... MORE

export const AuthProvider = ({children}: IAuthProviderProps) => {

  // ... MORE

  useEffect(() => {
    // Iniciar o broadcast:
    authChannel = new BroadcastChannel('auth');
    // Ao receber mensagem:
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          goToDashboard();
          break;
        default:
          break;
      }
    }
  }, []);
```