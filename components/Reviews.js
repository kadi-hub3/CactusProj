import SwiperReviews from "./SwiperReviews";

const Reviews = () => {
  return (
    <section className=" w-screen h-screen items-center justify-items-center grid grid-cols-5 gap-x-20 px-36 py-10 bg-white">
      <div className="col-span-1"></div>
      <div className="relative col-span-3 w-full h-3/5">
        <h1 className="absolute -top-20 right-60 text-9xl text-gray-300 uppercase tracking-wider font-bold">
          clients
        </h1>
        <SwiperReviews />
      </div>
      <div className="col-span-1"></div>
    </section>
  );
};

export default Reviews;
