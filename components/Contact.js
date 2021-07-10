import Form from "./Form";

const Contact = () => {
  return (
    <section className="h-screen w-screen items-center justify-items-center grid grid-cols-3 md:row-auto gap-x-20  py-20">
      <div className="h-5/6 w-full bg-gray-900 text-white col-span-1 text-start p-8">
        <h2 className="font-bold text-2xl">Contact me</h2>
        <h4 className="text-xl p-4">Alessio Muggani</h4>
        <h5 className="text-xl italic px-5 py-1">Brand manager</h5>
        <div>
          <p className="text-blue-300">
            <i className="fab fa-linkedin mx-2"></i>
            linkedin.com/alessio
          </p>
          <p className="text-red-300">
            <i className="fab fa-envelope mx-2"></i>
            alessio@alessio.com
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
