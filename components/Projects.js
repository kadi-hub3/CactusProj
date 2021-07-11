import SwiperProject from "./SwiperProj";

const Projects = () => {
  return (
    <section className=" w-screen h-screen items-center justify-items-center grid grid-cols-5 gap-x-20 px-36 bg-gray-100">
      <div className="col-span-2 ">
        <h2 className="font-serif text-6xl font-bold tracking-wider leading-relaxed">
          <span className="py-2 border-b-4 border-red-600">Recen</span>t
          projects
        </h2>
        <p className="font-sans tracking-wide leading-10 text-black mt-8">
          Here you can see a sample of our latest works. If that doesn't
          convince you enough, check out the full experience under the button
        </p>
        <button className="m-10 p-4 capitalize border-2 border-gray-900 hover:bg-black hover:text-white">
          <span className="text-red-500 text-xl">... </span>all projects
        </button>
      </div>
      <div className="relative col-span-3 w-full">
        <h1 className="absolute -top-20 right-40 text-9xl font-bold text-gray-300 uppercase tracking-wider">
          works
        </h1>
        <SwiperProject />
      </div>
    </section>
  );
};

export default Projects;
