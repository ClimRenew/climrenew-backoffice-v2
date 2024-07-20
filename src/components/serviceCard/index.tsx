'use client';
import {
    Box,
    Button,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Flex,
    useDisclosure,
  } from "@chakra-ui/react";
  import { FiMoreHorizontal, FiMoreVertical } from "react-icons/fi";
import AddServiceModal from "../addServiceModal";
import { useRouter } from "next/navigation";

  interface ServiceCardProps {
    name: string;
    content: string;
    img: string;
    
  }

const ServiceCard:React.FC<ServiceCardProps> = ({name,img,content,}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const handleOpen = ({id}:any) => {
    router.push(`/services/${id}`)
  }
return (
    <>
     <Box
      borderRadius="22px"
      p={4}
      width={"511px"}
     
      height={"458px"}
      bg="#FFFFFF"
    >
      <Flex justifyContent={'space-between'} alignContent={'center'}> 
        <Text className="inter" fontSize={'26px'} fontWeight={'500'} lineHeight={'31.47px'}>
          {name}
        </Text>
        <Flex justifyContent={"end"}>
          <Menu>
            <MenuButton
              as={Button}
              w="17px"
              h="16px"
              bg="#F9F9F9"
              rightIcon={<FiMoreHorizontal />}
            ></MenuButton>
            <MenuList>
              <MenuItem onClick={onOpen}>Update</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Box pt={"4"}>
        <Image
          src={img}
          alt={`${name} img`}
          // boxSize="150px"
          // w='240px'
          objectFit="contain"
          mx="auto"
          // mb={4}
        />
        <Text
          fontWeight="500"
          textAlign="start"
          fontSize="18px"
          lineHeight={"27px"}
          className="urbanist"

          pt={"6"}
        >
          {content}
        </Text> 
        <Box pt={'4'} display={'flex'} alignItems={'center'} gap={'4'} >
          <Text  color={'#22C55E'} className='inter' fontWeight={'500'} fontSize={'20px'}>Features</Text>
          <Image src='/assets/green-foward-icon.png' alt='icon'/>
        </Box>
      </Box>
      <AddServiceModal 
      isOpen={isOpen}
      onClose={onClose}
      onOpen/>
    </Box>
    </>
)
}
export default ServiceCard;