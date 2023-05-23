"use client";

import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Footer from "../(components)/footer";
import { useEffect, useState } from "react";

export default async function Announcement() {
  // const session = useSession();
  // const { push } = useRouter();

  // useEffect(() => {
  //   console.log(session);
  //   if (session.status !== "authenticated") push("/auth/login");
  // }, []);

  return (
    <><section className="w-auto h-auto bg-[rgb(250,236,225)] flex flex-col justify-center items-center px-48 py-20 gap-8">
    <h1 className="text-6xl font-bold  text-black ">News and Announcements</h1>
    <div className="flex gap-5">
      <div className="relative">
        <div className="w-[900px] h-[700px] flex justify-center items-center news1 bg-cover bg-center"></div>
      </div>
    </div>
    <div className="flex gap-5">
      <div className="relative">
        <div className="w-[900px] h-[700px] flex justify-center items-center news2 bg-cover bg-center"></div>
      </div>
    </div>
    <div className="flex gap-5">
      <div className="relative">
        <div className="w-[900px] h-[700px] flex justify-center items-center news3 bg-cover bg-center"></div>
      </div>
    </div>
    <div className="flex gap-5">
      <div className="relative">
        <div className="w-[900px] h-[700px] flex justify-center items-center news4 bg-cover bg-center"></div>
      </div>
    </div>
    <div className="flex gap-5">
      <div className="relative">
        <div className="w-[900px] h-[700px] flex justify-center items-center news5 bg-cover bg-center"></div>
      </div>
    </div>
    <div className="flex gap-5">
      <div className="relative">
        <div className="w-[900px] h-[700px] flex justify-center items-center news6 bg-cover bg-center"></div>
      </div>
    </div>
    <div className="flex gap-5">
      <div className="relative">
        <div className="w-[900px] h-[700px] flex justify-center items-center news7 bg-cover bg-center"></div>
      </div>
    </div>
  </section>
  <Footer></Footer></>
  );
}
