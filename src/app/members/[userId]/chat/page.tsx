import CardInnerWrapper from "@/components/CardInnerWrapper";
import React from "react";
import ChatForm from "./ChatForm";

export default function ChatPage() {
  return (
    <CardInnerWrapper
      header="Chat"
      body={<div>Chat goes here.</div>}
      footer={<ChatForm />}
    />
  );
}
