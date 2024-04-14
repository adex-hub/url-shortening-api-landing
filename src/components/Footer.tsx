import { ImFacebook2 } from "react-icons/im";
import Logo from "./header/Logo";
import { RiTwitterXFill } from "react-icons/ri";
import { GrPinterest } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center space-y-5 md:grid h-[100dvh] sm:h-auto grid-rows-5 gap-4 text-center md:text-left sm:items-start md:grid-rows-1 md:grid-cols-5 md:gap-2 bg-verydarkviolet text-white py-12 md:py-16 px-6 md:px-12 md:items-starts">
      <Logo className="invert mx-auto md:mx-0 pb-0" />
      <div className="space-y-4 text-base md:text-sm mx-auto">
        <h3 className="font-semibold">Features</h3>
        <ul className="text-white/55 space-y-2">
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="space-y-4 text-base md:text-sm mx-auto">
        <h3 className="font-semibold">Resources</h3>
        <ul className="text-white/55 space-y-2">
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="space-y-4 text-base md:text-sm mx-auto">
        <h3 className="font-semibold">Company</h3>
        <ul className="text-white/55 space-y-2">
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-6 items-center justify-center sm:items-start col-span-1 mx-auto">
        <ImFacebook2 size={20} />
        <RiTwitterXFill size={20} />
        <GrPinterest size={20} />
        <FaInstagram size={20} />
      </div>
    </footer>
  );
}
