import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Sidebar from "../../components/Sidebar";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import NextLink from "next/link";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useCallback, useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";

const Users = ({ users = [] }) => {

  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page, 
    // {
    //   initialData: users,
    // }
  );

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const handlerPrefetchUser = useCallback(async (userId: string) => {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const { data } = await api.get(`users/${userId}`);
      return data;
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutos
    })
  }, []);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                Criar novo
              </Button>
            </NextLink>
          </Flex>
          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha" >
                <Thead>
                  <Tr>
                    <Th px={["4", "4",  "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && (<Th>Data de cadastro</Th>)}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users?.map(user => (
                    <Tr key={user.id}>
                      <Td px={["4", "4",  "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => handlerPrefetchUser(user.id)}>
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && (<Td>
                        {user.createdAt}
                      </Td>)}
                      <Td>
                      <Button 
                        as="a" 
                        size="sm" 
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
    
              <Pagination  
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
        
      </Flex>
    </Box>
  );
}

export default Users;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { users, totalCount } = await getUsers(1);

//   return {
//     props: {
//       users,
//     }
//   }
// }