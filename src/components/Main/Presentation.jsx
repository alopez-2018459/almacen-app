import React from "react";
import "animate.css";

import { AiOutlineDown } from "react-icons/ai";





const Presentation = () => {

  return (
    <div className="bg-presentation w-full h-[100svh] bg-cover bg-center overflow-hidden">
      <div className="absolute transition-all bg-black opacity-80 inset-0  bg-gradient-to-b from-black via-black gradient to-gray-800" />
      <div className="absolute bg-black inset-0 opacity-10" />
      <div className="flex items-center w-full h-full sm:justify-center">
        {/* Presentation Text */}
        <div className=" z-[2] max-sm:ml-6 ">
          <div className="underline-container ">
            <h1 className="underline-text animate__animated animate__fadeInUp transition-all text-white ropa-sans sm:tracking-widest text-center text-[140px] font-bold max-sm:hidden max-lg:text-[120px]">
              BLACKBOX
            </h1>
            <div className="underline max-sm:hidden" />
            <h3 className="underline-label max-sm:hidden text-white jetbrains-mono text-center text-[15px]">
              We store your success, we take care of your products. </h3> </div> {/** Mobile Title */}
          <div className="underline-container transition-all mb-44 text-white jetbrains-mono text-[60px] sm:hidden">
            <h1 className="underline-text animate__animated animate__slideInDown">
              BLACK
            </h1>
            <div className="underline" />
            <h1 className="underline-label  animate__animated animate__fadeInUp ">
              BOX
            </h1>
          </div>
          <div className="z-[2] max-sm:absolute max-sm:left-[30%] mt-20 max-sm:ml-4 flex justify-center">
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="flex justify-center items-center w-full bounce-animation">
        <div className="absolute bottom-9">
          <h1 className="text-white text-sm tracking-widest jetbrains-mono pb-1">
            Explore further
          </h1>
          <AiOutlineDown className="text-white absolute left-[45%]" />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
