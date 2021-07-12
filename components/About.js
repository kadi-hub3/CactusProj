import React, { useState, useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let bigHeading = useRef(null);
  let heading = useRef(null);
  let image = useRef(null);
  let text = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: text,
    //     toggleActions: "restart none reverse none",
    //     markers: true,
    // start: "top 80%",
    // end: "top 30%",
    //   },
    // });
    // tl.from(text, 1.2, { y: 1200, ease: Power3.easeOut });
    // tl.staggerFrom([text, button], 1, {
    //   y: 1000,
    //   ease: Power3.easeOut,
    //   delay: 0.8,
    // });
  });

  return (
    <section className="h-full w-full 2xl:h-screen items-center justify-items-center px-10 grid grid-rows-5 md:grid-rows-4  2xl:grid-cols-4 2xl:gap-x-20 md:px-20 2xl:px-36 2xl:mt-20">
      <div className="row-span-2 md:col-span-2 lg:px-10 ">
        <div className="relative w-5/6 2xl:w-full">
          <h1
            ref={(el) => (bigHeading = el)}
            className="text-6xl md:text-8xl text-gray-200 uppercase tracking-wider my-10 md:my-20 font-bold"
          >
            who <br /> we are ?
          </h1>
          <h2
            ref={(el) => (heading = el)}
            className="font-serif absolute text-3xl md:text-6xl left-0 top-10 font-bold tracking-wider leading-relaxed"
          >
            <span className="pt-2 border-b-2 md:border-b-4	border-red-600">
              {" "}
              A few{" "}
            </span>
            words about me
          </h2>
        </div>
        <div ref={(el) => (image = el)} className="">
          <img src="/alessio.jpg" alt="personal photo of the client" />
        </div>
      </div>
      <div className="row-span-3 md:my-8 md:row-span-3 md:col-span-2 lg:px-10">
        <p
          ref={(el) => (text = el)}
          className="py-6 md:w-full lg:py-2 font-sans text-xl tracking-wide md:leading-10 text-black"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper
          lorem vel consectetur scelerisque. <br />
          Aenean nunc tortor, vestibulum in velit vitae, tincidunt pulvinar dui.
          Praesent pulvinar. <br />
          dapibus odio, et placerat lacus finibus tincidunt. Phasellus in lectus
          sit amet nibh aliquam posuere id vitae urna. Sed tempor tempor sem,
          sit amet suscipit felis sollicitudin id. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec semper lorem vel consectetur
          scelerisque. <br />
          Aenean nunc tortor, vestibulum in velit vitae, tincidunt pulvinar dui.
          Praesent pulvinar. <br />
          dapibus odio, et placerat lacus finibus tincidunt. Phasellus in lectus
          sit amet nibh aliquam posuere id vitae urna. Sed tempor tempor sem,
          sit amet suscipit felis sollicitudin id.
        </p>
        <button
          ref={(el) => (button = el)}
          className="font-sans m-10 p-4 capitalize border-2 border-gray-900 tracking-wider hover:bg-black hover:text-white"
        >
          view portfolio
        </button>
      </div>
    </section>
  );
};

export default About;
