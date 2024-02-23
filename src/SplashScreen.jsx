import React from "react";
import Logo from "./assests/logo1.png";
import { NavLink } from "react-router-dom";
const SplashScreen = ({ onClose }) => {
//   console.log(onClose);
  return (
    <div className="splash-screen">
      <div className="flex flex-col gap-10">
        <img src={Logo} alt="Photech Technology" />
        <div className="flex justify-center">
          <p className=" border-4 h-14 w-14 border-t-blue-600 rounded-full animate-spin"></p>
        </div>
        <div className="flex justify-between gap-10 w-full">
          <button onClick={()=>onClose()}>
            <div className="p-10 bg-red-500">Photech india </div>
          </button>
          <NavLink to="https://www.photechindia.in/" target="_blank"><div className="p-10 bg-green-500"> Photech construction</div></NavLink>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
