import Form from "./Form";

const Contact = () => {
  return (
    <section className="h-screen w-screen items-center justify-items-center grid grid-cols-3 md:row-auto gap-x-20  py-20">
      <div className="h-full w-full bg-gray-900 text-white col-span-1 text-start p-8 bg-gray-900 justify-items-center">
        <h2 className="font-serif text-4xl font-bold tracking-wider p-10">
          Contact me
        </h2>
        <h4 className="font-serif text-2xl px-12 py-4 tracking-widest">
          Alessio Muggani
        </h4>
        <h5 className="font-sans text-2xl italic px-14 py-1 tracking-wider">
          Brand manager
        </h5>
        <div className="px-14 py-6 text-xl font-sans">
          <p className="text-blue-300 m-2">
            <i className="fab fa-linkedin mx-2"></i>
            linkedin.com/alessio
          </p>
          <p className="text-red-300 m-2">
            <i className="fab fa-envelope mx-2"></i>
            alessio@alessio.com
          </p>
        </div>
      </div>
      <div className="w-full px-32 col-span-2">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
