"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const session = useSession();
  const { push } = useRouter();

  function handleSignOut() {
    signOut({ redirect: false, callbackUrl: "/auth/login" });
    push("/auth/login");
  }

  return (
    <nav className="w-full flex justify-between border-2 items-center border-stone-800 px-10 py-1 sticky top-0 z-10 bg-[rgba(255,99,71,0.2)]">
      <div className="relative w-64 h-16 overflow-visible">
        <Link href= "/"><button><img src="/new_logo.png" alt="communihub" className="absolute top-[-135%]"/></button></Link>
      </div>
      <div className="flex justify-around gap-8 ">
        <Link href="/" className="hover:text-[#015243] font-bold">
          Home
        </Link>
        <Link href="/services" className="hover:text-[#015243] font-bold">
          Services
        </Link>
        <Link href="/market" className="hover:text-[#015243] font-bold">
          Market
        </Link>
        <Link href="/help" className="hover:text-[#015243] font-bold">
          Help
        </Link>
        <Link href="/about" className="hover:text-[#015243] font-bold">
          About Us
        </Link>
      </div>
      <div className="flex gap-8 w-[205px]">{session.status === "authenticated" ? <button onClick={handleSignOut}>Sign Out</button> : <Link href="/auth/login">Log In</Link>}</div>
    </nav>
  );
}


