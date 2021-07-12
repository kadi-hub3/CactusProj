import SwiperReviews from "./SwiperReviews";

const Reviews = () => {
  return (
    <section className="h-full w-full lg:h-screen items-center justify-items-center py-20 grid grid-rows-5 grid-cols-1 lg:gap-x-20 md:px-20 lg:px-36 bg-white">
      <div className="row-span-5 relative lg:col-span-3 w-5/6 md:py-16">
        <h1 className="absolute -top-20 right-10 lg:-top-20 md:right-40 text-6xl md:text-8xl text-gray-200 uppercase tracking-wider my-10 md:my-20 font-bold">
          clients
        </h1>
        <SwiperReviews />
      </div>
    </section>
  );
};

export default Reviews;
