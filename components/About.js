const About = () => {
  return (
    <section className="w-screen h-4/6 items-center justify-items-center grid grid-cols-2 md:row-auto gap-x-20  py-20 px-36">
      <div>
        <div className="relative">
          <h1 className="text-8xl text-gray-300 ml-30 uppercase">
            who <br /> we are ?
          </h1>
          <h2 className="absolute text-3xl left-0 top-10 font-bold tracking-wider">
            A few words
            <br /> <span className="underline">about </span>me
          </h2>
        </div>
        <div>
          <img src="/alessio.jpg" alt="personal photo of the client" />
        </div>
      </div>
      <div className="my-8">
        <p className="leading-10 text-black border-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper
          lorem vel consectetur scelerisque. <br />
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
