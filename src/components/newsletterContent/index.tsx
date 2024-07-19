"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Flex,
} from "@chakra-ui/react";

const NewsletterContent = () => {
  return (
    <>
      <Box pl="8" pt={"12"} pb={"12"} pr={"4"}>
        <Stack spacing={4}>
          <Flex justify="start" gap={"6"}>
            <FormControl id="sender-name" width="48%">
              <FormLabel
                color={"#232323"}
                className="inter"
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"30px"}
              >
                Sender Name
              </FormLabel>
              <Input
                type="text"
                bg="white"
                borderRadius={"8px"}
                border={"1px solid #D9D9D9"}
                h="48px"
                className="inter"
              />
            </FormControl>

            <FormControl id="reply-to" width="48%">
              <FormLabel
                color={"#232323"}
                className="inter"
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"30px"}
              >
                Reply To
              </FormLabel>
              <Input
                type="text"
                value="@Climenew"
                readOnly
                bg="white"
                borderRadius={"8px"}
                border={"1px solid #D9D9D9"}
                h="48px"
                className="inter"
              />
            </FormControl>
          </Flex>

          <Flex justify="start" gap={"6"}>
            <FormControl id="subject" width="48%">
              <FormLabel
                color={"#232323"}
                className="inter"
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"30px"}
              >
                Subject
              </FormLabel>
              <Input
                type="text"
                bg="white"
                borderRadius={"8px"}
                border={"1px solid #D9D9D9"}
                h="48px"
                className="inter"
              />
            </FormControl>

            <FormControl id="message" width="48%">
              <FormLabel
                color={"#232323"}
                className="inter"
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"30px"}
              >
                Message
              </FormLabel>
              <Textarea
                bg={"white"}
                borderRadius={"8px"}
                border={"1px solid #D9D9D9"}
              />
            </FormControl>
          </Flex>

          <Box pt={14}>
            <Button
              bg="#22C55E"
              color={"white"}
              w='243px'
              h='48px'
              fontSize={"20px"}
              borderRadius={"30px"}
              fontWeight={'600'}
              lineHeight={'24px'}
              className="urbanist"
            >
              Broadcast
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default NewsletterContent;
