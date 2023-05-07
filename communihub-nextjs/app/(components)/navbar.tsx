import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between border-2 items-center border-stone-800 px-10 py-6 sticky">
      <div className="flex items-center relative">
        <div className="logo w-[350px] h-[360px] bg-cover absolute"></div>
      </div>
      <div className="flex justify-around gap-8 ml-[250px] ">
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
