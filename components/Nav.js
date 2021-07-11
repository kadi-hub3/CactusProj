import React from "react";

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
          ? "fixed top-0 z-20 w-screen grid grid-cols-2 justify-between py-10 px-20 text-white text-lg bg-gray-900"
          : "fixed top-0 z-20 w-screen grid grid-cols-2 justify-between py-10 px-20 text-white text-lg bg-transparent"
      }
    >
      <h2 className="font-serif font-bold text-3xl tracking-widest">
        Alessio Muggani
      </h2>
      <ul className="flex justify-end tracking-widest font-sans text-2xl">
        <li className="mx-4 hover:text-red-400">Home</li>
        <li className="mx-4 hover:text-red-400">About me</li>
        <li className="mx-4 hover:text-red-400">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
