import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
    <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>

        <AiOutlineArrowLeft className="arrows" style={{...style, display:"block", borderRadius:"50px", background:"#f53347", color:"white", position:"absolute", padding:"2px", left:"50px" }} onMouseOver="this.style.backgroundColor='#555'" />
      </div>
    )
  }
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight className="arrows" style={{...style, display:"block", borderRadius:"50px", background:"#f53347", color:"white", position:"absolute", padding:"2px", left:"50px" }}/>
      </div>
    )
  }

var settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
              <div className="flex gap-10 justify-center h-[600px] px-4 my-20">
                <div className="space-y-6">
                  <h3 className="text-green-600 font-semibold font-sans text-sm">
                    Powering your world with the best in Electronics
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-2 md:w-[500px] text-white" > {items.title} </h1>
                  <p className="md:w-[500px] line-clamp-2 text-gray-400 pr-7">{items.description}</p>
                  <button className="bg-red-500 text-black px-4 py-1 cursor-pointer rounded">Shop Now</button>
                </div>
                <div>
                  <img src={items.image} alt={items.title} className="max-w-[550px]  hover:scale-105 transition-all shadow" />
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
