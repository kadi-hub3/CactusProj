import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Autoplay, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, Scrollbar, A11y]);

const SwiperReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getProps();
      console.log(data);
      setReviews(data);
    };
    getData();
  }, []);

  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true} autoplay navigation>
      <div className=" ">
        {reviews &&
          reviews.map((review) => {
            return (
              <SwiperSlide>
                <div className="w-full h-full bg-white">
                  <h2 className="text-center text-2xl py-6 capitalize font-serif tracking-wide">
                    {review.title}
                  </h2>
                  <p className="text-xl capitalize p-12 leading-8 font-sans">
                    {review.body}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
      </div>
    </Swiper>
  );
};

export default SwiperReviews;

export const getProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const projects = await res.json();
  return projects;
};
