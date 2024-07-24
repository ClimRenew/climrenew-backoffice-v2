"use client";

import { sendNewsletter } from "@/redux/features/newsletter";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const NewsletterContent = () => {
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const toast = useToast();
  const newsletterStatus = useAppSelector((state) => state.newsletter.status);
  const newsletterError = useAppSelector((state) => state.newsletter.error);

  const handleBroadcast = async () => {
    const resultAction = await dispatch(
      sendNewsletter({ name, replyTo, subject, message })
    );
    if (sendNewsletter.fulfilled.match(resultAction)) {
      toast({
        title: "Success",
        description: "Newsletter broadcasted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description:
          newsletterError ||
          (resultAction.payload as any)?.errors?.replyTo?.join(", ") ||
          "Failed to broadcast newsletter.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={replyTo}
              onChange={(e) => setReplyTo(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
        </Flex>

        <Box pt={14}>
          <Button
            bg="#22C55E"
            color={"white"}
            w="243px"
            h="48px"
            fontSize={"20px"}
            borderRadius={"30px"}
            fontWeight={"600"}
            lineHeight={"24px"}
            className="urbanist"
            onClick={handleBroadcast}
            isLoading={newsletterStatus === "loading"}
          >
            Broadcast
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default NewsletterContent;
