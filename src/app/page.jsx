import Header from "@/components/Header";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function HeaderPage() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      {/* <body /> */}
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://pngimg.com/uploads/google/google_PNG19644.png"
          alt="google image"
        />
        <HomeSearch />
      </div>
    </>
  );
}
