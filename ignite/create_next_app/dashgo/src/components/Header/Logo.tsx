import { Text } from '@chakra-ui/react';
const Logo: React.FC = () => {
  return (<Text
    fontSize={["2xl", "3xl"]}
    fontWeight="bold"
    letterSpacing="tight"
    w="64" // sera mutiplicado por 4
  >
    dashgo
    <Text 
      as="span"
      ml="1" 
      color="pink.500"
    >.</Text>
  </Text>);
}

export default Logo;