import React from "react";

export const Newsletter = () => {
  return (
    <div className="text-white w-full py-16">
      <div className="max-w-[1240px] grid lg:grid-cols-3 mx-auto">
        <div className="text-center lg:col-span-2 lg:mr-[100px]">
          <h1 className="md:text-6xl sm:text-3xl text-xl">Book a demo</h1>
          <p className="pt-5 lg:text-lg">
            Learn about our POS, Credit Card Proccessing, Digital Marketing
            solutions and more
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-row align-center justify-between gap-5 sm:ps-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="ps-2 rounded-md h-[50px] text-black"
            />
            <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 hover:scale-105 active:scale-100">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
