import React, { useRef, useEffect } from "react";
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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [text, button, image, heading, bigHeading],
        toggleActions: "restart none pause none",
      },
    });
    tl.from([text, button], 1.2, { x: 1000, ease: Power3.easeOut }, 0.3);
    tl.from(
      [image, heading, bigHeading],
      1.2,
      { x: 2000, ease: Power3.easeOut },
      0.8
    );
  });

  return (
    <section className="h-full w-full flex items-center justify-items-center px-10 grid grid-rows-5 lg:grid-rows-4 xl:grid-rows-3 xl:grid-cols-4 xl:gap-x-20  md:px-20 xl:px-36 xl:py-20">
      <div className="row-span-2 xl:row-span-3 xl:col-span-2 xl:px-10 ">
        <div className="relative w-5/6 2xl:w-full">
          <h1
            ref={(el) => (bigHeading = el)}
            className="text-6xl lg:text-7xl text-gray-200 uppercase tracking-wider my-10 lg:my-20 font-bold"
          >
            who <br /> we are ?
          </h1>
          <h2
            ref={(el) => (heading = el)}
            className="font-serif absolute text-3xl lg:text-5xl left-0 top-10 font-bold tracking-wider leading-relaxed"
          >
            <span className="pt-2 border-b-2 xl:border-b-4	border-red-600">
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
      <div className="row-span-3 xl:row-span-3  md:my-8 md:row-span-3 md:col-span-2 xl:px-10">
        <p
          ref={(el) => (text = el)}
          className="py-6 md:w-full lg:py-2 font-sans md:text-xl tracking-wide md:leading-10 text-black"
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
