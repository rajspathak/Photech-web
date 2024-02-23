import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo1.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaXTwitter, FaEnvelope } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="footer-bg  p-20  max-lg:p-10 max-sm:p-4">
        <div className="grid grid-cols-4 max-lg:grid-cols-2  max-md:grid-cols-1 gap-10 justify-evenly items-center  ">
          <div>
            <div>
              <img
                src={logo}
                alt="ProtechIndia"
                className="h-38 w-48 logo-border"
              />
            </div>
            <div className="mt-3 ">
              <p className=" text-md text-justify" style={{ color: "#616161" }}>
                Code is art, Code is us
              </p>
              <p className=" text-md text-justify text-gray-800">
                ©2020 <span className="font-semibold">Photech Technology</span>.
                <br /> All rights reserved.
              </p>
              <p className="flex gap-3 mt-2">
                <span className=" p-2 max-md:p-1 ">
                  <a href="https://www.facebook.com/profile.php?id=61552731042092&mibextid=ZbWKwL">
                    <FaFacebookF className="text-blue-600 text-lg max-md:text-xs " />
                  </a>
                </span>
                <span className=" p-2 max-md:p-1 ">
                  <a href="https://instagram.com/photechtechnology?igshid=NzZlODBkYWE4Ng==">
                    <PiInstagramLogo className="text-pink-600 text-lg max-md:text-xs" />
                  </a>
                </span>
                <span className=" p-2 max-md:p-1 ">
                  <a href="/">
                    <FaXTwitter className="text-black max-md:text-xs text-lg " />
                  </a>
                </span>
                <span className=" p-2 max-md:p-1 ">
                  <a href="https://www.linkedin.com/company/photech-technology-pvt-ltd/">
                    <FaLinkedinIn className=" text-lg text-blue-800 max-md:text-xs" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="">
              <h1
                className="text-2xl font-bold mb-4  max-lg:text-2xl"
                style={{ color: "#666161" }}
              >
                Services
              </h1>
              <ul>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/service/web-development">
                    Web Development
                  </NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/service/mobile-development">
                    Mobile Development
                  </NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/service/ui-ux-development">UX design</NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/service/ai-generative">Generative AI</NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/">Cybersecurity</NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/">DevOps Services</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="">
              <h1
                className="text-2xl font-bold mb-4  max-lg:text-2xl"
                style={{ color: "#666161" }}
              >
                Quick Links
              </h1>
              <ul className="flex flex-col gap-2 ">
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/">Home</NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/about">About</NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/work">Our Work</NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/career">Careers</NavLink>
                </li>
                <li
                  className="text-md link max-lg:text-lg cursor-pointer"
                  style={{ color: "#616161" }}
                >
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="">
              <h1
                className="text-2xl font-bold mb-4  max-lg:text-2xl"
                style={{ color: "#666161" }}
              >
                Get In Touch
              </h1>
              <p
                className="text-md max-lg:text-lg link flex items-center gap-2 mt-1"
                style={{ color: "#616161" }}
              >
                <FaEnvelope />
                <a href="mailto:hr.photech@gmail.com">hr.photech@gmail.com</a>
              </p>
              <p
                className="text-md max-lg:text-lg link flex items-center gap-2 mt-1"
                style={{ color: "#616161" }}
              >
                <IoCall />
                <a href="tel:9060408657">+91 9060408657</a>
              </p>
              <p
                className="text-md max-lg:text-lg link"
                style={{ color: "#616161" }}
              >
                Noida, Sec 73, Sarfabad Near by ASQUARE MALL, <br />
                201307, Uttar pradesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
