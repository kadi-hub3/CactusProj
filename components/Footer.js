const Footer = () => {
  return (
    <footer className="h-30 w-screen items-center justify-items-center grid grid-cols-3  gap-x-20 py-14 bg-black">
      <h3 className="text-lg text-white font-bold">Alessio Muggani</h3>
      <ul className="flex justify-around text-white text-base font-bold">
        <li className="mx-4 hover:text-red-600">Home</li>
        <li className="mx-4 hover:text-red-600">About Me</li>
        <li className="mx-4 hover:text-red-600">Contact</li>
      </ul>
      <div className="flex justify-around text-base text-blue-500">
        <i className="fab fa-facebook mx-2"></i>
        <i className="fab fa-linkedin mx-2"></i>
        <i className="fab fa-instagram mx-2"></i>
      </div>
    </footer>
  );
};

export default Footer;
