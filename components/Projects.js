import Swiper from "./Swiper";

const Projects = () => {
  return (
    <section className="h-screen w-screen items-center justify-items-center grid grid-cols-2 md:row-auto gap-x-20 py-20 px-36">
      <div>
        <h2 className="text-3xl my-8 font-bold tracking-wider">
          Recent <span className="underline">projects</span>
        </h2>
        <p className="leading-10 text-black border-black">
          Here you can see a sample of our latest works. If that doesn't
          convince you enough, check out the full experience under the button
        </p>
        <button className="m-10 p-4 capitalize border-2 border-gray-900 hover:bg-black hover:text-white">
          ... all projects
        </button>
      </div>
      <div className="w-full px-20">
        <Swiper />
      </div>
    </section>
  );
};

export default Projects;
