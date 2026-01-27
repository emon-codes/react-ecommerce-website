import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {" "}
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((items, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 "
            >
              <div className="flex gap-10 justify-center h-[600px] px-4">
                <div className="space-y-6">
                  <h3 className="text-green-600 font-semibold font-sans text-sm">
                    Powering your world with the best in Electronics
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-2 md:w-[500px] text-white" > {items.title} </h1>
                  <p className="">{ items.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
