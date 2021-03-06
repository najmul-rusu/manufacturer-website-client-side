import React from "react";
import Slider1 from "../../assets/images/slider-images/slider-1.jpg"

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <figure>
          <img src={Slider1} className="w-full" alt="Slider1" />
        </figure>
        <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div>
            <h3 className="text-left lg:text-4xl text-xl text-white font-bold">
              NEW TECHNOLOGY & BUILD
            </h3>
            <h2 className="text-left lg:text-7xl text-2xl text-white font-bold">
              WHEELS & TIRES
            </h2>
            <h2 className="text-left lg:text-7xl text-2xl text-white font-bold">
              COLLECTIONS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
