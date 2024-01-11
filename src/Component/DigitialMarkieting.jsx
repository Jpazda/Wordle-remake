import React from "react";
import LLMS from "../assets/llms.jpg";

export const DigitalMarketing = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid gap-[250px] md:grid-cols-2">
        <img
          src={LLMS}
          className="rounded-3xl w-[400px] mx-auto img-shadow"
        ></img>
        <div className="mt-[-200px] flex flex-col text-center justify-around md:m-0">
          <h1 className="text-[#00df9a] font-bold uppercase md:text-4xl sm:text-3xl text-2xl">
            Cutting Edge Technology
          </h1>
          <p className=" md:text-xl">
            At Lifelong Merchant Services, we provide advanced,
            technology-driven solutions tailored for your business, including
            our in-house supported POS and secure payment gateway options. We
            also offer a loyalty and customer retention program to help enhance
            customer relationships and drive repeat business.
          </p>
          <button className="text-[#00df9a] bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:scale-105 active:scale-100">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
