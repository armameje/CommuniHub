import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="w-auto h-72 flex flex-col justify-center items-center px-48 gap-16">
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">About Us</h1>
          <p>
            CommuniHub is a software platform designed to bring communities together by streamlining essential functions and encouraging interactions between residents. Our user-friendly platform
            features a comprehensive community map, entry and exit detection system for added security, an online market for local businesses, and group messaging for residents to work together on
            projects and events. Our goal is to promote community building and support local businesses, ultimately improving the quality of life for residents.
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-xs">© 2023. Group 1 - BS CpE 3203. Software Design Final Project.</div>
        <div className="flex gap-2">
          <span>
            <a href="#">
              <FaFacebookF />
            </a>
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
      </div>
    </section>
  );
}
