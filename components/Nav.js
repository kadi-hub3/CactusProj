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
          ? "fixed top-0 z-20 w-screen grid grid-cols-2 justify-between py-10 px-20 text-white text-lg bg-black"
          : "fixed top-0 z-20 w-screen grid grid-cols-2 justify-between py-10 px-20 text-white text-lg bg-transparent"
      }
    >
      <h2 className="font-bold text-xl tracking-wider">Alessio Muggani</h2>
      <ul className="flex justify-end tracking-wide">
        <li className="mx-4 hover:text-red-400">Home</li>
        <li className="mx-4 hover:text-red-400">About me</li>
        <li className="mx-4 hover:text-red-400">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
