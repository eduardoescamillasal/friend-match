"use client";

import { usePresenceChannel } from "@/hooks/usePresenceChannel";
import { HeroUIProvider } from "@heroui/react";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: ReactNode }) {
  usePresenceChannel();
  return (
    <HeroUIProvider>
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        className="z-50"
      />
      {children}
    </HeroUIProvider>
  );
}
