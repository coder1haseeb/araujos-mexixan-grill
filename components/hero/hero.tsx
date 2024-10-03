import React from 'react';
import '../../app/globals.css'
const Hero = () => {
  return (
    <div className="hero_image lg:h-auto lg:p-8 md:p-5  mx-4 p-5 rounded-3xl bg-dark">
      <h1 className="text-4xl text-white font-bold md:text-3xl">
        Araujo’s Mexican Grill
      </h1>
      <div className="flex items-center mt-5 md:mt-3">
        <h3 className="text-white text-xl w-1/2 md:w-full lg:w-3/4">
          Experience the bold flavors of Mexico, crafted with passion and served with pride. Taste the tradition at Araujo’s Mexican Grill today!
        </h3>
      </div>
      <div>
        <div className="mt-8 md:mt-5">
          <a
            target="_blank"
            href="https://order.online/business/araujos-mexican-grill-312560"
            className="bg-reddish text-white text-base font-medium px-4 py-2 rounded-full  hover:bg-red-600 transition duration-300"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
