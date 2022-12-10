import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkPorps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLinks";


interface INavLinkProps extends ChakraLinkPorps {
  icon: ElementType;
  children: string;
  href: string;
}

const NavLink: React.FC<INavLinkProps> = ({
  icon, children, href, ...rest
}) => {
  return (
  <ActiveLink href={href} passHref>
    <ChakraLink display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </ChakraLink>
  </ActiveLink>
);
}

export default NavLink;