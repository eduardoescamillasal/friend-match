"use client";

import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { HiPhoto } from "react-icons/hi2";
export default function ImageUploadButton() {
  return (
    <CldUploadButton
      options={{ maxFiles: 1 }}
      onSuccess={(res) => console.log("on succ", res)}
      onError={(res) => console.log(res)}
      signatureEndpoint="/api/sign-image"
      uploadPreset="fm-demo"
      className="flex items-center gap-2 bg-secondary text-white rounded-lg py-2 px-4 hover:bg-secondary/70"
    >
      <HiPhoto size={28} />
      Upload new image
    </CldUploadButton>
  );
}
