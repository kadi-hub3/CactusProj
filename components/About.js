const About = () => {
  return (
    <section className="w-screen h-screen items-center justify-items-center grid grid-cols-5  md:row-auto gap-x-20 py-20 px-20">
      <div className="col-span-2 ">
        <div className="relative row-span-1 w-full">
          <h1 className="text-9xl text-gray-200 uppercase tracking-widest">
            who <br /> we are ?
          </h1>
          <h2 className="font-serif absolute text-6xl left-0 top-10 font-bold tracking-wider leading-relaxed">
            A few words
            <br /> <span className="py-2 border-b-4	border-red-600">about </span>
            me
          </h2>
        </div>
        <div className="row-span-2">
          <img src="/alessio.jpg" alt="personal photo of the client" />
        </div>
      </div>
      <div className="my-8 row-span-3 col-span-3 px-10">
        <p className="font-sans tracking-wide leading-10 text-black">
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
        <button className="m-10 p-4 capitalize border-2 border-gray-900 hover:bg-black hover:text-white">
          view portfolio
        </button>
      </div>
    </section>
  );
};

export default About;
