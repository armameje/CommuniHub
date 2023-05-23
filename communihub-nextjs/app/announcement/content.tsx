"use client";

import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Footer from "../(components)/footer";
import { useEffect, useState } from "react";

export default async function Market() {
  // const session = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (session.status !== "authenticated") router.push("/auth/login");
  // }, [session, router]);

  return (
    <><section className="w-auto h-auto bg-[rgb(250,236,225)] flex flex-col justify-center items-center px-48 py-20 gap-8">
    <p className="indent-8 text-center mb-8">
      NEWS AND ANNOUNCEMENTS
    </p>
    <div className="flex gap-12">
      <div className="relative">
        <div className="w-80 h-64 flex justify-center items-center news1 bg-cover bg-center blur-[2px]"></div>
      </div>
      <div className="relative">
        <div className="w-80 h-64 flex justify-center items-center news2 bg-cover bg-center blur-[2px]"></div>
      </div>
      <div className="relative">
        <div className="w-80 h-64 flex justify-center items-center news3 bg-cover bg-center blur-[2px]"></div>
      </div>
    </div>
  </section>
  <Footer></Footer></>
  );
}
