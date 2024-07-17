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
  
  const Header = () => {
    return (
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"12"}
        bg={"white"}
        boxShadow={'sm'}
        h={"87px"}
        w={"full"}
        display={{ lg: "flex", sm: "none", md: "none" ,xxl:"flex",xlg:"flex"}}
  
      >
        <InputGroup w="300px" h="40px" className="plus_jakarta" bg={"#fffff"}>
          <Input
            type="text"
            placeholder="Search Product"
            fontSize={"14px"}
            fontWeight={"400"}
            borderRadius={"12px"}
            className="plus_jakarta"
          />
          <InputRightElement pointerEvents="none">
            <Image
              src="/assets/search.png"
              alt="search icon"
              width={20}
              height={20}
              quality={100}
            />
          </InputRightElement>
        </InputGroup>
        <Flex gap={"12px"} alignItems={"center"}>
         <Button
            bg={"#F6F6F6"}
            cursor={'pointer'}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"9px"}
            // width={'30px'}
          >
            <Image
              src="/assets/mail.png"
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
                src={"/assets/activeAdmin.png"}
                width={30}
                height={30}
                quality={100}
                alt="img"
              />
            </Box>
            <Box>
              <Text
                className="plus_jakarta"
                fontWeight={"600"}
                fontSize={"14px"}
                color={"rgba(69, 69, 69, 1)"}
                lineHeight={"21px"}
              >
                Admin
              </Text>
              <Text
                className="plus_jakarta"
                fontWeight={"400"}
                fontSize={"12px"}
                color={"rgba(176, 176, 176, 1)"}
                lineHeight={"16.8px"}
              >
                Admin
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  export default Header;
  