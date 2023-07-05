"use client";

import React from "react";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";

const GetInTouch = () => {
  return (
    <div className="px-[20%] items-center mt-[300px] mb-[300px]" id="contact">
      <div className="flex justify-center w-full">
        <span className="text-xs mt-1">04. </span>
        <span className="font-bold pl-1"> Get In Touch</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[11px] px-[220px] pt-[20px] text-gray-500 ">
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <a
          href={`mailto:faisalusman390@gmail.com`}
          target="_blank"
          rel="noreferrer"
          className=" flex justify-center items-center px-1 mt-8 w-[15%] py-3 text-xs rounded border border-gray-600"
        >
          <button onClick={() => {}}>Say Hello!</button>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
