const Home = () => {
  return (
    <section className="max-h-screen w-screen bg-hero-pattern">
      <div className="relative">
        <img
          src="/hero-cover.jpg"
          alt="hero cover"
          className=" w-screen h-screen object-cover"
        />
        <div className="absolute left-5 bottom-0 bg-white w-1/2 py-16 px-8">
          <h2>#3D Visualization #3D Design</h2>
          <p>A small random description over here</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
