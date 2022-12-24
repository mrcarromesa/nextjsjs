import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from '../context/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

let isRefreshing = false;
let failedRequestQueue: any[] = [];


export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`,
    },
  });
  
  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {
    if (error.response?.status === 401) {
      if ((error.response.data as Record<string, unknown>).code === 'token.expired') {
        cookies = parseCookies(ctx);
  
        const  { 'nextauth.refreshToken': refreshToken } = cookies;
        const originalConfig = error!.config;
  
        if (!isRefreshing) {
          console.log('refreshing',Date.now());
          isRefreshing = true;
          api.post('/refresh', {
            refreshToken,
          }).then(response => {
            console.log('response in',Date.now());
            const { token } = response.data;
    
            setCookie(ctx, 'nextauth.token', token, {
              maxAge: 60 * 60 * 24 * 30, // 30 days
              path: '/' // quais caminhos da aplicação tem acesso a esse cookie, nesse caso qualquer endereço terá acesso a esse cookie
            });
            setCookie(ctx, 'nextauth.refreshToken', response.data.refreshToken, {
              maxAge: 60 * 60 * 24 * 30, // 30 days
              path: '/',
            });
    
            api.defaults.headers.Authorization = `Bearer ${token}`
  
            failedRequestQueue.forEach(request => request.onSuccess(token));
            failedRequestQueue = [];
          }).catch((err) => {
            console.log('refreshingError',Date.now());
            failedRequestQueue.forEach(request => request.onFailed(err));
            failedRequestQueue = [];
  
            if (typeof window === 'undefined') {
              return Promise.reject(new AuthTokenError());
            }
            
            signOut();
          }).finally(() => {
            console.log('refreshingEnding',Date.now());
            isRefreshing = false
          })
        }
  
  
        return new Promise((resolve, reject) => {
          console.log('Promise',Date.now(), originalConfig?.url);
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
        if (typeof window === 'undefined') {
          return Promise.reject(new AuthTokenError());
        }
        
        signOut();
      }
    }
  
    return Promise.reject(error); // importante para continuar o fluxo do axios
  })

  return api;
}

