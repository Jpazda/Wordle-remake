import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1000px] mt-[-200px] w-full h-400 mx-auto text-center flex flex-col justify-center md:mt-[-96px] h-[800px]">
        <p className="text-[#00df9a] font-bold p-2 text-2xl">
          YOUR PARTNER FOR LIFE
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With data.
        </h1>
        <div>
          <p className="md:text-4xl sm:text-4xl text-xl font-bold mb-6">
            Your solutions for{" "}
            <Typewriter
              className="md:text-4xl sm:text-4xl text-xl font-bold"
              words={["POS", "Digital Marketing", "CC Processing"]}
              loop={true}
              cursor={true}
            />
          </p>
        </div>
        <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:scale-105 active:scale-100">
          Get Started
        </button>
      </div>
    </div>
  );
};
