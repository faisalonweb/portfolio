import React from 'react'
import Image from 'next/image'
import { BiRightArrow } from 'react-icons/bi'

const About = () => {
  return (
    <div className='px-[20%] items-center mt-[300px]' id='about'>
      <div className='flex'>
        <div className='flex w-full'>
          <span className='text-xs mt-1'>01. </span>
          <span className='font-bold pl-1'> About Me</span>
          <span className='border-b border-gray-300 mt-4 mb-4 w-1/2 ml-5'></span>
        </div>
      </div>
      <div className='flex'>
        <div className='grow basis-0'>
          <p className='text-[11px]  text-gray-500'>
            I am an experienced React Frontend Developer specializing in creating exceptional user
            interfaces and interactive web applications. With 2+ years of experience, I have
            mastered React.js and its ecosystem to build elegant and scalable solutions. My skills
            include translating designs into pixel-perfect UIs, proficiently using HTML5, CSS3, and
            JavaScript, and managing application states with React Router, Redux, and JSX. I have a
            collaborative approach, working closely with cross-functional teams to deliver
            high-quality products. I excel in integrating APIs, optimizing performance, and ensuring
            cross-browser compatibility. With a meticulous eye for detail and a passion for staying
            updated with emerging technologies, I write modular and maintainable code.. Here are a
            few technologies I’ve been working with recently:
          </p>
          <div className='flex mt-4 ml-5'>
            <div>
              <div className='flex '>
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className='text-[8px]  text-gray-500 pl-2'>ReactJS</span>
              </div>
              <div className='flex mt-2'>
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className='text-[8px]  text-gray-500 pl-2'>NextJS</span>
              </div>
              <div className='flex  mt-2'>
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className='text-[8px]  text-gray-500 pl-2'>NodeJS</span>
              </div>
            </div>
            <div className='ml-8'>
              <div className='flex'>
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className='text-[8px]  text-gray-500 pl-2'>Typescript</span>
              </div>
              <div className='flex  mt-2'>
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className='text-[8px]  text-gray-500 pl-2'>Javascript</span>
              </div>
              <div className='flex  mt-2'>
                <span>
                  <BiRightArrow size={8} />
                </span>
                <span className='text-[8px]  text-gray-500 pl-2'>Wordpress</span>
              </div>
            </div>
          </div>
        </div>
        <div className='md:block hidden grow basis-0'>
          <Image src='/logo.png' width={500} height={500} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default About
