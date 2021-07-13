import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SwiperProject from "./SwiperProj";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  let description = useRef(null);
  let swiper = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: [description, swiper],
  //       toggleActions: "restart none pause none",
  //       markers: true,
  //       // start: "top 80%",
  //     },
  //   });
  //   tl.from(swiper, 1.2, { x: 1000, ease: Power3.easeOut }, 0.3);
  //   tl.from(description, 1.2, { x: 2000, ease: Power3.easeOut }, 0.8);
  // });

  return (
    <section className="h-full w-full items-center justify-items-center py-20 grid grid-rows-6 grid-cols-1 xl:grid-cols-5 xl:grid-rows-3 lg:gap-x-20 md:px-20  xl:py-6 lg:px-36 bg-gray-100">
      <div
        ref={(el) => (description = el)}
        className="row-span-3 my-8  lg:mb-40 xl:mb-12 xl:col-span-2 px-10"
      >
        <h2 className="font-serif text-3xl lg:text-5xl xl:text-6xl font-bold tracking-wider py-4 leading-relaxed xl:leading-relaxed">
          <span className="pt-2 border-b-2 md:border-b-4 border-red-600">
            Recen
          </span>
          t projects
        </h2>

        <p className="py-6 lg:w-full font-sans md:text-xl tracking-wide lg:leading-10 text-black">
          Here you can see a sample of our latest works. If that doesn't
          convince you enough, check out the full experience under the button
        </p>
        <button className="p-4 capitalize border-2 border-gray-900 hover:bg-black hover:text-white">
          <span className="text-red-500 text-xl">... </span>all projects
        </button>
      </div>
      <div
        ref={(el) => (swiper = el)}
        className="row-span-3  relative xl:col-span-3 w-5/6 md:py-16 "
      >
        <h1 className="absolute -top-20 right-10 lg:-top-20 md:right-40 text-6xl md:text-8xl text-gray-200 uppercase tracking-wider my-10 md:my-20 font-bold">
          works
        </h1>
        <SwiperProject />
      </div>
    </section>
  );
};

export default Projects;
