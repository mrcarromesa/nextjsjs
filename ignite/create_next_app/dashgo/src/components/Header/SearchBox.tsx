import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const SearchBox: React.FC = () => {
  return (<Flex
    as="label"
    flex="1"
    py="4" // padding vertical
    px="8" // padding horizontal
    ml="6"
    maxWidth={400}
    alignSelf="center"
    color="grey.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
  >
    <Input
      color="gray.50"
      variant="unstyled"
      px="4"
      mr="4"
      placeholder="Buscar na plataforma"
      _placeholder={{ color: 'gray.400' }}
    />
    <Icon as={RiSearchLine} fontSize="20" />
  </Flex>);
}

export default SearchBox;