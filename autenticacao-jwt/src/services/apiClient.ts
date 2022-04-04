import axios from "axios";
import { NextPageContext } from 'next';
import { parseCookies } from "nookies";

export const getApiClient = (ctx?: Pick<NextPageContext, 'req'>) => {
  const { 'nextauth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333"
  });

  api.interceptors.request.use(async config => { 
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return api;
}