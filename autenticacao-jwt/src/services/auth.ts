import { v4 as uuid } from 'uuid';

type SignInRequestData = {
  email: string;
  password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export const signInRequest = async (data: SignInRequestData) => {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Carlos Rodolfo',
      email: 'mrcarromesa@gmail.com',
      avatar_url: 'https://github.com/mrcarromesa.png'
    }
  }
}

export const recoverUserInformation = async () => {
  await delay();

  return {
    user: {
      name: 'Carlos Rodolfo',
      email: 'mrcarromesa@gmail.com',
      avatar_url: 'https://github.com/mrcarromesa.png'
    }
  }
}