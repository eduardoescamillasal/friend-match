import CardInnerWrapper from "@/components/CardInnerWrapper";
import React from "react";
import ChatForm from "./ChatForm";
import { getMessageThread } from "@/app/actions/messageActions";

export default async function ChatPage({
  params,
}: {
  params: { userId: string };
}) {
  const messages = await getMessageThread(params.userId);
  console.log({ messages });
  return (
    <CardInnerWrapper
      header="Chat"
      body={<div>Chat goes here.</div>}
      footer={<ChatForm />}
    />
  );
}
