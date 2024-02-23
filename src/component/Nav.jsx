import { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo1.png";
import { PiInstagramLogo } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaXTwitter, FaEnvelope } from "react-icons/fa6";
function Navbar() {
  const [show, setShow] = useState(false);
  const showNavbar = () => {
    setShow(!show);
  };
  return (
    <div className="fixed z-50 w-full">
      <div className="flex justify-between px-10 bg-[#233364] text-white w-full subheader  max-lg:px-2">
        <div className="flex ">
          <span className="border border-gray-400 p-2 max-md:p-1 ">
            <a href="https://www.facebook.com/profile.php?id=61552731042092&mibextid=ZbWKwL">
              <FaFacebookF className="text-gray-300 hover:text-white max-md:text-xs " />
            </a>
          </span>
          <span className="border border-gray-400 p-2 max-md:p-1 ">
            <a href="https://instagram.com/photechtechnology?igshid=NzZlODBkYWE4Ng==">
              <PiInstagramLogo className="text-gray-300 hover:text-white max-md:text-xs" />
            </a>
          </span>
          <span className="border border-gray-400 p-2 max-md:p-1 ">
            <a href="/">
              <FaXTwitter className="text-gray-300 hover:text-white max-md:text-xs" />
            </a>
          </span>
          <span className="border border-gray-400 p-2 max-md:p-1 ">
            <a href="https://www.linkedin.com/company/photech-technology-pvt-ltd/">
              <FaLinkedinIn className="text-gray-300 hover:text-white max-md:text-xs" />
            </a>
          </span>
        </div>
        <div className="flex gap-3 items-center ">
          <p className="flex gap-1 items-center">
            <IoCall className="text-md max-md:text-xs" />
            <a href="tel:9060408657">
              <span className="text-gray-300 hover:text-white text-sm max-md:text-xs">
                +919060408657
              </span>
            </a>
          </p>
          <p className="flex gap-2 items-center">
            <FaEnvelope className="text-md" />
            <span className="text-gray-300 hover:text-white text-sm max-md:text-xs">
             <a href="mailto:hr.photech@gmail.com">hr.photech@gmail.com</a>
            </span>
          </p>
        </div>
      </div>
      <header className="flex justify-between items-center p-4 max-lg:p-1 h-20 w-full z-50 header-bg fixed ">
        <div>
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              className="h-10 ml-3 relative z-50 border-0 "
              alt="photechindia"
            />
          </NavLink>
        </div>
        <nav className={show ? "responsive_nav" : ""}>
          <NavLink to="/about" className="text-md " onClick={showNavbar}>
            About
          </NavLink>
          <div className="dropdown">
            <button className="text-md">Service</button>
            <div className="dropdown-content">
              <NavLink to="/service/web-development" className="text-sm">
                Web Development
              </NavLink>
              <NavLink to="/service/mobile-development" className="text-sm">
                Mobile Development
              </NavLink>
              <NavLink to="/service/ui-ux-development" className="text-sm">
                UX Design
              </NavLink>
              <NavLink to="/service/ai-generative" className="text-sm">
                Generative AI
              </NavLink>
              <NavLink to="/service/web-development" className="text-sm">
                Data Science
              </NavLink>
              <NavLink to="/service/web-development" className="text-sm">
                DevOps Services
              </NavLink>
              <NavLink to="/service/web-development" className="text-sm">
                Cybersecurity
              </NavLink>
              <NavLink to="/service/web-development" className="text-sm">
                Quality Engineering
              </NavLink>
            </div>
          </div>
          <NavLink to="/work" className="text-md " onClick={showNavbar}>
            Our Work
          </NavLink>
          <NavLink to="/career" className="text-md " onClick={showNavbar}>
            Careers
          </NavLink>
          <NavLink to="/contact" className="text-md " onClick={showNavbar}>
            Contact Us
          </NavLink>
        </nav>
        <button
          id=""
          className="lg:hidden relative z-10 right-2"
          onClick={showNavbar}
        >
          <span className="nav-btn">
            {" "}
            {show ? <FaTimes /> : <FaBars className="text-black" />}{" "}
          </span>
        </button>
      </header>
    </div>
  );
}

export default Navbar;
