import { Button, Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { useCallback } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from "../components/Form/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ISignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obritatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors, isSubmitting } = formState;


  const handleSignIn: SubmitHandler<ISignInFormData> = useCallback(async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }, []);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing={4}>
            <Input 
              name="email" 
              type="email" 
              label="E-mail"
              error={errors.email} 
              {...register('email')} 
            />
            <Input 
              name="password" 
              type="password" 
              label="Senha"
              error={errors.password} 
              {...register('password')} 
            />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
