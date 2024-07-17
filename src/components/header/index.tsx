import {
  Flex,
  InputGroup,
  Text,
  Box,
  Input,
  InputRightElement,
  Button,
  Center,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
interface HeaderProps {
  pageHeading: string;
}
const Header:React.FC <HeaderProps>= ({pageHeading}) => {
  return (
    <Flex
     
      px={"8"}
      bg={"white"}
      boxShadow={'sm'}
      flexDirection={'row'}

      h={"87px"}
      w={"full"}
      display={{ lg: "flex", sm: "none", md: "none" ,xxl:"flex",xlg:"flex"}}

    >
      <Flex 
       justifyContent={"space-between"}
       alignItems={"center"} pt={'4'}>
     <Text color='#303030' className='inter ' fontSize='26px' lineHeight='31.47px' fontWeight={'500'}>{pageHeading}</Text>
        <Flex gap={"12px"} alignItems={"center"}>
         <Button
            // bg={"#F6F6F6"}
            cursor={'pointer'}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"9px"}
            // width={'30px'}
            bg='transparent'
          >
            <Image
              src="/assets/notification.png"
              alt="sms_icon"
              width={20}
              height={20}
              quality={100}
            />
          </Button>
          {/*  <Button
            bg={"#F6F6F6"}
            cursor={'pointer'}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"9px"}
          >
            <Image
              src="/assets/notifications.png"
              alt="sms_icon"
              width={20}
              height={20}
              quality={100}
            />
          </Button> */}
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex gap={"2"}>
            <Box>
              <Image
                src="/assets/memoji.png"
                width={40}
                height={40}
                quality={100}
                alt="img"
              />
            </Box>
            <Box>
              <Text
                className="inter"
                fontWeight={"500"}
                fontSize={"16px"}
                color={'#303030'}

                lineHeight={"19.36px"}
              >
                Adeniyi Tosin
              </Text>
              <Text
                className="inter"
                fontWeight={"400"}
                fontSize={"14px"}
                pt={'2'}
                color={'#7C7C7C'}
                lineHeight={"16.49px"}
              >
                Admin
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
