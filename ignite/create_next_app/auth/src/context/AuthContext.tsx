import Router from "next/router";
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { api } from "../services/apiClient";
import { AuthTokenError } from "../services/errors/AuthTokenError";

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  permissions: string[];
  roles: string[];
}


interface IAuthContextData {
  signIn(credentials: ISignInCredentials): Promise<void>;
  user?: IUser;
  isAuthenticated: boolean;
  signOut: () => void;
}



export const AuthContext = createContext({} as IAuthContextData);

let authChannel: BroadcastChannel;

interface IAuthProviderProps {
  children: ReactNode;
}

function goToDashboard() {
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');

  console.log('OI');

  Router.push('/')
}

export function signOut() {  

  // if (token) {
  //   return;
  // }

  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');
  authChannel.postMessage('signOut');

  console.log('OI');

  Router.push('/')
}

export const AuthProvider = ({children}: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          goToDashboard();
          break;
        // case 'signIn':
        //   Router.push('/dashboard'); 
        //   break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      api.get('/me').then(response => {
        console.log('ContextOK');
        const { email, permissions, roles } = response.data;
        setUser({
          email,
          permissions,
          roles
        })
        
      }).catch(() => {
        console.log('ContextError');
        signOut();
      });
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: ISignInCredentials) => {
    try {
      const { data } = await api.post('sessions', {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = data;

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/' // quais caminhos da aplicação tem acesso a esse cookie, nesse caso qualquer endereço terá acesso a esse cookie
      });
      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });
      
      setUser({
        email,
        permissions,
        roles,
      });

      api.defaults.headers.Authorization = `Bearer ${token}`;

      Router.push('/dashboard');

      authChannel.postMessage('signIn');

    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}