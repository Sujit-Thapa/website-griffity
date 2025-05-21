import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="] h-screen w-full relative">
      {/* Left bottom: contact info */}
      <div className="absolute bottom-5 left-10 text-white">
        <p className="font-bold text-xl">
          GRIFFITY<span className="font-thin">STUDIOS</span>
        </p>
        <div className="font-light">
          <p>Bhaisepati, Kathmandu</p>
          <p>+977 9861292675</p>
          <p>info@griffitystudios.com</p>
        </div>
      </div>

      {/* Bottom right: social icons */}
      <div className="absolute bottom-20 right-10 flex gap-4 text-xl text-white">
        <FaFacebookF className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaTiktok className="cursor-pointer" />
        <FaYoutube className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
      </div>

      {/* Bottom center: copyright */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-light text-white text-l">
        <p>© 2025 Griffity Studio Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
