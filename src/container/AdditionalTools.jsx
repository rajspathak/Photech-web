import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
export const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40  p-2 max-lg:p-0 rounded-full bg-gray-200">
      <p className="flex items-center justify-center">
        <p className="flex relative p-1 justify-center items-center max-lg:p-0">
          <span className="absolute bg-green-400 rounded-full animate-ping w-16 h-16 -z-20 -top-1 max-lg:w-10 max-lg:h-10 max-lg:-top-0.5">
          </span>
          <a
            href="https://whatsapp.com/channel/0029VaFGFGe9cDDRAGcydB32"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-white text-4xl animate-none bg-green-400 rounded-full p-1" />
          </a>
        </p>
      </p>
    </div>
  );
};
export const PhoneCall=()=>{
  return (
    <div className="fixed bottom-8 left-8 z-40  p-2 max-lg:p-0 rounded-full bg-gray-200">
    <div className="flex items-center justify-center">
      <p className="flex relative p-2 justify-center items-center max-lg:p-0">
        <span className="absolute bg-blue-400 rounded-full animate-ping w-16 h-16 -z-20 -top-1 max-lg:w-10 max-lg:h-10 max-lg:-top-0.5">
        </span>
        <a
          href="tel:9060408657"
          target="_blank"
          rel="noreferrer"
        >
          <IoCall className="text-blue-700 text-3xl animate-none rounded-full " />
        </a>
      </p>
    </div>
  </div>
  );
}
