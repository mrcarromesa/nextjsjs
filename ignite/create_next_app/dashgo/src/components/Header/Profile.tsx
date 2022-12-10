import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

const Profile: React.FC<IProfileProps> = ({
  showProfileData = true
}) => {
  return (<Flex
    align="center"
  >
    {showProfileData && (<Box 
      mr="4"
      textAlign="right"
    >
      <Text>My Name</Text>
      <Text
        color="gray.300"
        fontSize="small"
      >
        my-email@email.com
      </Text>
    </Box>)}
    <Avatar 
      size="md"
      name="My Name"
      src=""
    />
  </Flex>);
}

export default Profile;