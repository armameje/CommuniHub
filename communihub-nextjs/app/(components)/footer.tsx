import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="w-full h-[350px] flex flex-col items-center px-48 gap-8 pb-8 bg-green-200">
      <div className="w-full bg-[rgb(1,104,85)] full-bleed flex justify-between px-24 py-8">
        <div className="flex justify-center items-center gap-2 text-[rgb(250,236,225)] hover:cursor-pointer">
          <FaFacebookF />
          Facebook
        </div>
        <div className="flex justify-center items-center gap-2 text-[rgb(250,236,225)] hover:cursor-pointer">
          <BsInstagram />
          Instagram
        </div>
        <div className="flex justify-center items-center gap-2 text-[rgb(250,236,225)] hover:cursor-pointer">
          <FaPinterestP />
          Pinterest
        </div>
        <div className="flex justify-center items-center gap-2 text-[rgb(250,236,225)] hover:cursor-pointer">
          <FaTwitter />
          Twitter
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">About Us</h1>
        <p>
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
