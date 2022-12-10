import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import Logo from "./Logo";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";


export function Header() {


  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20" // sera mutiplcado por 4
      mx="auto" // margin horizontal
      mt="4" // margin top
      px="6" // padding horizontal
      align="center"
    >

      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}