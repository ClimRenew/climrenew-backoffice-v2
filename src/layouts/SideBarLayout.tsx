import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface SideBarLayoutProps {
  route: string;
  label: string;
  children: React.ReactNode;
  isCollapsed?: boolean;
  activeImage: string;
  inActiveImage: string;
}

const SideBarLayout = ({
  route,
  label,
  children,
  isCollapsed,
  activeImage,
  inActiveImage,
}: SideBarLayoutProps) => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const imageSrc = isActive ? inActiveImage : activeImage;

  useEffect(() => {
    // Check if the current path includes the route of this sidebar item
    setIsActive(window.location.pathname.includes(route));
  }, [route]);

  return (
    <Flex
      cursor={"pointer"}
      gap="20px"
      // borderRadius={"5px"}
      onClick={() => (window.location.href = route)}
      fontWeight="500"
      // px={isCollapsed ? "36px" : "18px"}

      alignItems={"center"}
      transition="0.5s ease"
      // _hover={{ bg: "rgba(153, 178, 198, 0.2)" }}
      fontSize={"16px"}
      bg={isActive ? "#FFFFFF" : "#22C55E"}
      py={isActive ? "4" : ""}
      px={'34px'}
      // width={'28px'}
      // height={isActive ? '43px' : ""}
  
      // color={isActive ? "#22C55E" : "#FFFFFF"}
      // color={'red'}
    >
      <Box>
        <Image src={imageSrc} alt={label} />
      </Box>
      {!isCollapsed && ( // Conditionally render this based on isCollapsed
        <Text
          className={"inter"}
          fontWeight={"500"}
          lineHeight={'19px'}
          color={isActive ? "#22C55E" : "#FFFFFF"}
          textAlign={'start'}
        >
          {label}
        </Text>
      )}
    </Flex>
  );
};

export default SideBarLayout;