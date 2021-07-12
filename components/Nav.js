import React from "react";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  const [nav, setNav] = React.useState(false);

  React.useEffect(() => {
    const changeBg = () => {
      if (window.scrollY > 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", changeBg);
  }, []);

  return (
    <nav
      className={
        nav
          ? "fixed top-0 z-20 w-screen flex justify-between py-10 pl-6 lg:px-20 text-white text-lg bg-gray-900"
          : "fixed top-0 z-20 w-screen flex justify-between py-10 pl-6 g:px-20 text-white text-lg bg-transparent"
      }
    >
      <h2
        className={
          nav
            ? "font-serif text-white font-bold text-xl lg:text-3xl lg:tracking-widest"
            : "font-serif text-gray-700 font-bold text-xl lg:text-3xl lg:tracking-widest"
        }
      >
        Alessio Muggani
      </h2>
      <div className="text-red-200 text-2xl px-4">
        <FaBars
          className={
            nav
              ? "text-white hover:text-red-900 lg:hidden"
              : "text-gray-700 hover:text-gray-900 lg:hidden"
          }
        />
      </div>
      <ul className="flex justify-end tracking-widest font-sans text-2xl hidden lg:flex">
        <li className="mx-4 hover:text-red-400">Home</li>
        <li className="mx-4 hover:text-red-400">About me</li>
        <li className="mx-4 hover:text-red-400">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
