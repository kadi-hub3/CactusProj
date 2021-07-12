import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="h-43 md:h-40 w-screen items-center justify-items-center grid grid-rows-3 md:grid-cols-3 gap-y-10 gap-x-20 py-14 bg-gray-900 z-10">
      <h3 className="font-serif text-lg md:text-xl text-white font-bold tracking-wide md:tracking-wider">
        Alessio Muggani
      </h3>
      <ul className="flex justify-around text-white text-lg md:text-xl tracking wide md:tracking-widest">
        <li className="mx-4 hover:text-red-600">Home</li>
        <li className="mx-4 hover:text-red-600">About Me</li>
        <li className="mx-4 hover:text-red-600">Contact</li>
      </ul>
      <div className="flex justify-around text-2xl text-blue-500">
        <FaFacebook className="m-2 text-blue-300 hover:text-blue-500" />
        <FaLinkedin className="m-2 text-blue-500 hover:text-blue-700" />
        <FaInstagram className="m-2 text-red-400 hover:text-red-600" />
      </div>
    </footer>
  );
};

export default Footer;
