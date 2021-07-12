import Form from "./Form";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="h-full w-full xl:h-screen items-center justify-items-center grid grid-rows-2 2xl:grid-cols-5 2xl:gap-x-20 2xl:px-36 bg-gray-100">
      <div className="h-5/6 md:text-center w-full xl:h-2/3  row-span-1 bg-black text-white col-span-1 2xl:col-span-2 text-start xl:mb-5 bg-gray-900 justify-items-center py-20">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-wider px-10 mb-20">
          Contact me
        </h2>
        <h4 className="font-serif text-xl lg:text-2xl px-12 py-4 tracking-widest">
          Alessio Muggani
        </h4>
        <h5 className="font-sans text-xl lg:text-2xl italic px-14 py-1 tracking-wider">
          Brand manager
        </h5>
        <div className="px-14 py-6 text-lg lg:items-center lg:text-xl xl:text-center font-sans">
          <p className="text-blue-300 m-2 flex ">
            <FaLinkedin className="mx-2" />
            linkedin.com/alessio
          </p>
          <p className="text-red-300 m-2 flex">
            <FaEnvelope className="mx-2" />
            alessio@alessio.com
          </p>
        </div>
      </div>
      <div className="row-span-1 w-full h-full py-10 lg:px-32 xl:col-span-2 2xl:col-span-3">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
