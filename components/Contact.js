import Form from "./Form";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  let form = useRef(null);
  let card = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: [card, form],
  //       toggleActions: "restart restart pause none",
  //       markers: true,
  //       autoRemoveChildren: true,
  //       // start: "top 80%",
  //     },
  //   });
  //   tl.from(
  //     form,
  //     1.2,
  //     {
  //       x: 1000,
  //       ease: Power3.easeOut,
  //     },
  //     0.3
  //   );
  //   tl.from(
  //     card,
  //     1.2,
  //     {
  //       x: 1000,
  //       ease: Power3.easeOut,
  //     },
  //     0.8
  //   );
  // });

  return (
    <section className="h-full w-full items-center justify-items-center grid grid-rows-2 xl:grid-cols-5 xl:gap-x-20 xl:justify-center bg-white">
      <div
        ref={(el) => (card = el)}
        className="h-10/12 md:text-center w-full xl:h-5/6  row-span-1  xl:row-span-2 bg-black text-white col-span-1 xl:col-span-2 text-start  bg-gray-900 justify-items-center py-20 xl:py-10"
      >
        <h2 className="font-serif text-white text-3xl lg:text-5xl font-bold tracking-wider px-10 mb-20">
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
      <div
        ref={(el) => (form = el)}
        className="row-span-1 xl:row-span-2 w-full h-full py-10 lg:px-32 xl:col-span-3"
      >
        <Form />
      </div>
    </section>
  );
};

export default Contact;
