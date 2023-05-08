import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between border-2 items-center border-stone-800 px-10 py-6 sticky">
      <div className="relative w-64 h-16 overflow-visible">
        <img src="/new_logo.png" alt="communihub" className="absolute top-[-130%]" />
      </div>
      <div className="flex justify-around gap-8 ">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/market">Market</Link>
        <Link href="/help">Help</Link>
        <Link href="/about">About Us</Link>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-4">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <BsInstagram />
          </span>
          <span>
            <FaPinterestP />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
        <a href="#" className="border-2 border-stone-950 rounded-full p-2">
          How to use?
        </a>
      </div>
    </nav>
  );
}
