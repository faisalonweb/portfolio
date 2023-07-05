import React from "react";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";

const About = () => {
  return (
    <div className="px-[20%] items-center mt-[300px]" id="about">
      <div className="flex">
        <div className="flex w-full">
          <span className="text-xs mt-1">01. </span>
          <span className="font-bold pl-1"> About Me</span>
          <span className="border-b border-gray-300 mt-4 mb-4 w-1/2 ml-5"></span>
        </div>
      </div>
      <div className="flex">
        <div className="grow basis-0">
          <p className="text-[11px]  text-gray-500">
            I am an accomplished React Frontend Developer with a passion for
            building exceptional user interfaces and interactive web
            applications. With 2+ years of experience, I have honed my skills in
            leveraging the power of React.js and its ecosystem to create elegant
            and scalable solutions. My expertise lies in translating design
            concepts and wireframes into pixel-perfect UIs that offer seamless
            user experiences. I possess an in-depth understanding of HTML5,
            CSS3, and JavaScript, allowing me to craft clean and efficient code.
            Proficient in React Router, Redux, and JSX, I excel at managing
            application states and ensuring smooth data flow. I thrive in
            collaborative environments and have a proven track record of working
            closely with cross-functional teams, including designers and backend
            developers, to deliver high-quality products. I am skilled in
            integrating RESTful APIs, optimizing performance, and ensuring
            cross-browser compatibility. With a meticulous eye for detail, I am
            committed to writing modular and maintainable code that adheres to
            industry best practices. I continuously stay updated with emerging
            technologies and trends in the frontend development space,
            incorporating innovative solutions into my work. A natural problem
            solver, I embrace challenges with enthusiasm and approach them with
            analytical thinking and creativity. I am an effective communicator
            and a reliable team player, capable of providing constructive
            feedback and mentoring junior developers. Here are a few
            technologies I’ve been working with recently:
          </p>
          <div className="flex mt-4 ml-5">
            <div>
              <div className="flex ">
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className="text-[8px]  text-gray-500 pl-2">ReactJS</span>
              </div>
              <div className="flex mt-2">
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className="text-[8px]  text-gray-500 pl-2">NextJS</span>
              </div>
              <div className="flex  mt-2">
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className="text-[8px]  text-gray-500 pl-2">NodeJS</span>
              </div>
            </div>
            <div className="ml-8">
              <div className="flex">
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className="text-[8px]  text-gray-500 pl-2">
                  Typescript
                </span>
              </div>
              <div className="flex  mt-2">
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className="text-[8px]  text-gray-500 pl-2">
                  Javascript
                </span>
              </div>
              <div className="flex  mt-2">
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className="text-[8px]  text-gray-500 pl-2">
                  Wordpress
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grow basis-0">
          <Image src="/logo.png" width={500} height={500} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;
