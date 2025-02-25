"use client";

import { MessageDto } from "@/types";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

import React from "react";

import MessagesTableCell from "./MessagesTableCell";
import { useMessages } from "@/hooks/useMessages";

type Props = {
  messages: MessageDto[];
};

export default function MessagesTable({ messages }: Props) {
  const { columns, isOutbox, isDeleting, deleteMessage, selectRow } =
    useMessages(messages);
  return (
    <Card className="flex flex-col gap-3 h-[80vh] overflow-auto">
      <Table
        aria-label="Table with messages"
        selectionMode="single"
        onRowAction={(key) => selectRow(key)}
        shadow="none"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              width={column.key === "text" ? "50%" : undefined}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={messages}
          emptyContent="No messages for this container"
        >
          {(item) => (
            <TableRow key={item.id} className="cursor-pointer">
              {(columnKey) => (
                <TableCell
                  className={`${
                    !item.dateRead && !isOutbox ? "font-semibold" : ""
                  }`}
                >
                  <MessagesTableCell
                    item={item}
                    columnKey={columnKey as string}
                    isOutbox={isOutbox}
                    deleteMessage={deleteMessage}
                    isDeleting={isDeleting.loading && isDeleting.id === item.id}
                  />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
