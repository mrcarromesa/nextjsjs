import { createContext, useCallback, useEffect, useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { parseCookies, setCookie } from 'nookies';
import Router from 'next/router';
import { api } from "../services/api";

type SignInData = {
  email: string;
  password: string;
}

type User = {
  name: string;
  email: string;
  avatar_url: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  user: User | null;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      recoverUserInformation().then(data => {
        setUser(data.user);
      });
    }

  }, []);

  const signIn = useCallback(async ({
    email,
    password
  }: SignInData) => {
    const { token, user } = await signInRequest({
      email,
      password
    });

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/dashboard');

  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated, user, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}