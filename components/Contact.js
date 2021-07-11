import Form from "./Form";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="h-screen w-screen items-center justify-items-center grid grid-cols-3 md:row-auto gap-x-20 py-10">
      <div className="h-5/6 w-full bg-black text-white col-span-1 text-start mb-5 bg-gray-900 justify-items-center py-20">
        <h2 className="font-serif text-5xl font-bold tracking-wider px-10 mb-20">
          Contact me
        </h2>
        <h4 className="font-serif text-2xl px-12 py-4 tracking-widest">
          Alessio Muggani
        </h4>
        <h5 className="font-sans text-2xl italic px-14 py-1 tracking-wider">
          Brand manager
        </h5>
        <div className="px-14 py-6 text-xl font-sans">
          <p className="text-blue-300 m-2 flex">
            <FaLinkedin className="mx-2" />
            linkedin.com/alessio
          </p>
          <p className="text-red-300 m-2 flex">
            <FaEnvelope className="mx-2" />
            alessio@alessio.com
          </p>
        </div>
      </div>
      <div className="w-full h-2/3 px-32 col-span-2">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
