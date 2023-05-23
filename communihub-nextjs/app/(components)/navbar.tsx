import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between border-2 items-center border-stone-800 px-10 py-1 sticky top-0 z-10 bg-[rgba(255,99,71,0.2)]">
      <div className="relative w-64 h-16 overflow-visible">
        <Link href="/">
          <button>
            <img src="/new_logo.png" alt="communihub" className="absolute top-[-135%]" />
          </button>
        </Link>
      </div>
      <div className="w-full flex justify-between border-2 items-center border-stone-800 px-16 py-6 sticky">
        <div className="flex items-center relative">
          <div className="logo w-[150px] h-[150px] bg-cover absolute"></div>
          <input type="text" placeholder="Search..." className="ml-44 w-16" />
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
        <div className="flex gap-8 w-[205px]">
          {/* Place your social media icons or any other content here */}
          <FaFacebookF />
          <FaPinterestP />
          <FaTwitter />
          <BsInstagram />
        </div>
      </div>
      <><div className="flex justify-around gap-8 ">
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
        </div><div className="flex gap-8 w-[205px]">
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
            Login
            </a>
          </div></>
    </nav>
    </nav>
  );
}
