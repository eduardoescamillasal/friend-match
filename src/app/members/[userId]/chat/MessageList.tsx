"use client";

import { MessageDto } from "@/types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import { pusherClient } from "@/lib/pusher";
import { formatShortDateTime } from "@/lib/util";

type Props = {
  initialMessages: MessageDto[];
  currentUserId: string;
  chatId: string;
};

export default function MessageList({
  initialMessages,
  currentUserId,
  chatId,
}: Props) {
  const [messages, setMessages] = useState(initialMessages);
  const channelRef = useRef<Channel | null>(null);
  const handleNewMessage = useCallback((message: MessageDto) => {
    setMessages((prevState) => {
      return [...prevState, message];
    });
  }, []);

  const handleReadMessages = useCallback((messagesIds: string[]) => {
    setMessages((prevState) =>
      prevState.map((message) =>
        messagesIds.includes(message.id)
          ? { ...message, dateRead: formatShortDateTime(new Date()) }
          : message
      )
    );
  }, []);

  useEffect(() => {
    if (!channelRef.current) {
      channelRef.current = pusherClient.subscribe(chatId);

      channelRef.current.bind("message:new", handleNewMessage);
      channelRef.current.bind("messages:read", handleReadMessages);
    }
    return () => {
      if (channelRef.current && channelRef.current.subscribed) {
        channelRef.current.unsubscribe();
        channelRef.current.unbind("message:new", handleNewMessage);
        channelRef.current.unbind("messages:read", handleReadMessages);
      }
    };
  }, [chatId, handleNewMessage, handleReadMessages]);

  return (
    <div>
      {messages.length == 0 ? (
        "No messages to display"
      ) : (
        <div>
          {messages.map((message) => (
            <MessageBox
              key={message.id}
              message={message}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
