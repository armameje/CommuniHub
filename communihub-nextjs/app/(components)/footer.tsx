"use client";

import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="w-full h-[290px] flex flex-col items-center px-48 py-17 gap-3 pb-3 bg-green-200">
      <div className="w-full bg-[rgb(1,104,85)] full-bleed flex justify-between px-24 py-5">
        <motion.div whileHover={{ scale: 1.2 }} className="text-[rgb(250,236,225)] hover:cursor-pointer">
          <a href="https://www.facebook.com/profile.php?id=100092607835157" target="_blank" className="no-underline flex justify-center items-center gap-2">
            <FaFacebookF />
            Facebook
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex justify-center items-center gap-2 text-[rgb(250,236,225)] hover:cursor-pointer">
          <a href="https://www.instagram.com/communihubb/" target="_blank" className="no-underline flex justify-center items-center gap-2">
            <BsInstagram />
            Instagram
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex justify-center items-center gap-2 text-[rgb(250,236,225)] hover:cursor-pointer">
          <a href="https://www.pinterest.ph/communih/" target="_blank" className="no-underline flex justify-center items-center gap-2">
            <FaPinterestP />
            Pinterest
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="flex justify-center items-center gap-2 text-[rgb(250,236,225)] hover:cursor-pointer">
          <a href="https://twitter.com/CommuniHub" target="_blank" className="no-underline flex justify-center items-center gap-2">
            <FaTwitter />
            Twitter
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col gap-1 ">
        <h1 className="text-4xl">About Us</h1>
        <p className="italic">
          CommuniHub is a software platform designed to bring communities together by streamlining essential functions and encouraging interactions between residents. Our user-friendly platform
          features a comprehensive community map, entry and exit detection system for added security, an online market for local businesses, and group messaging for residents to work together on
          projects and events. Our goal is to promote community building and support local businesses, ultimately improving the quality of life for residents.
        </p>
      </div>
      <div className="flex justify-start w-full">
        <div className="text-xs">© 2023. Group 1 - BS CpE 3203. Software Design Final Project.</div>
      </div>
    </section>
  );
}
