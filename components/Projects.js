import SwiperProject from "./SwiperProj";

const Projects = () => {
  return (
    <section className="h-full w-full lg:h-screen 2xl:h-screen items-center justify-items-center py-20 grid grid-rows-6 grid-cols-1 2xl:grid-cols-5 lg:gap-x-20 md:px-20 lg:px-36 bg-gray-100">
      <div className="row-span-3 my-8 lg:w-full lg:mb-40 2xl:col-span-2 px-10">
        <h2 className="font-serif text-3xl md:text-6xl font-bold tracking-wider py-4 leading-relaxed">
          <span className="pt-2 border-b-2 md:border-b-4 border-red-600">
            Recen
          </span>
          t projects
        </h2>
        <p className="py-6 md:w-full font-sans text-xl tracking-wide md:leading-10 text-black">
          Here you can see a sample of our latest works. If that doesn't
          convince you enough, check out the full experience under the button
        </p>
        <button className="p-4 capitalize border-2 border-gray-900 hover:bg-black hover:text-white">
          <span className="text-red-500 text-xl">... </span>all projects
        </button>
      </div>
      <div className="row-span-3 2xl:h-full relative 2xl:col-span-3 w-5/6 md:py-16 ">
        <h1 className="absolute -top-20 right-10 lg:-top-20 md:right-40 text-6xl md:text-8xl text-gray-200 uppercase tracking-wider my-10 md:my-20 font-bold">
          works
        </h1>
        <SwiperProject />
      </div>
    </section>
  );
};

export default Projects;
