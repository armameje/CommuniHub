"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { FormEvent, FormEventHandler, useState } from "react";

export default function LoginPage() {
  // const searchParams = useSearchParams();
  // console.log(searchParams);
  // const callbackUrl: any = searchParams.get("callbackUrl");
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const { push } = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
    if (res?.error === null) push("/");
    setUserInfo({ username: "", password: "" });
  }

  return (
    <section className="w-full h-[80vh] overflow-y-hidden flex flex-col justify-center items-center">
      <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} className="border border-black flex items-center py-8 px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} className="login-logo w-64 h-64 bg-contain"></motion.div>
        <div className="flex flex-col items-center justify-start h-full pl-12 pr-16 py-8 gap-10">
          <div className="flex flex-col items-center justify-center mb-4 leading-none">
            <h1 className="text-3xl">Welcome to Communihub!</h1>
          </div>
          <form className="flex flex-col justify-center items-center grow" onSubmit={handleSubmit}>
            <div className="relative mb-5">
              <input type="text" className="form-input" name="username" value={userInfo.username} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} required />
              <label className="form-label">Username</label>
            </div>
            <div className="relative mb-8">
              <input type="password" className="form-input" name="password" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} required />
              <label className="form-label">Password</label>
            </div>
            <button>Login</button>
          </form>
        </div>
        <div></div>
      </motion.div>
    </section>
  );
}
