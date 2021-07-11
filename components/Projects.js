import Swiper from "./Swiper";

const Projects = () => {
  return (
    <section className="h-screen w-screen items-center justify-items-start grid grid-cols-8 md:row-auto gap-x-20 py-20 px-36">
      <div className="col-span-3 justify-items-start">
        <h2 className="font-serif text-6xl font-bold tracking-wider leading-relaxed">
          Recent <span className="py-2 border-b-4	border-red-600">proje</span>cts
        </h2>
        <p className="font-sans tracking-wide leading-10 text-black mt-8">
          Here you can see a sample of our latest works. If that doesn't
          convince you enough, check out the full experience under the button
        </p>
        <button className="m-10 p-4 capitalize border-2 border-gray-900 hover:bg-black hover:text-white">
          ... all projects
        </button>
      </div>
      <div className="col-span-5 w-full h-1/2 ">
        <Swiper />
      </div>
    </section>
  );
};

export default Projects;
