const Nav = () => {
  return (
    <nav className="w-sreen grid grid-cols-2 justify-between py-10 px-20 bg-gray-900 text-white text-lg">
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
