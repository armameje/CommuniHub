"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function LoginPage() {
  // const searchParams = useSearchParams();
  // console.log(searchParams);
  // const callbackUrl: any = searchParams.get("callbackUrl");

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} className="border border-black flex items-center py-8 px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} className="login-logo w-64 h-64 bg-contain"></motion.div>
        <div className="flex flex-col items-center justify-start h-full pl-12 pr-16 py-8 gap-10">
          <div className="flex flex-col items-center justify-center mb-4 leading-none">
            <h1 className="text-3xl">Welcome to Communihub!</h1>
          </div>
          <div className="flex justify-center items-center">
            {/* <motion.button whileHover={{ scale: 1.2 }} className="w-full px-4 bg-green-300" onClick={() => signIn("google")}>
              Continue with Google
            </motion.button> */}
          </div>
        </div>
        <div></div>
      </motion.div>
    </section>
  );
}
