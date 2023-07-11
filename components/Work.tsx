import React from 'react'
import Image from 'next/image'
// import { BiRightArrow } from 'react-icons/bi'

const Work = () => {
  return (
    <div className='px-[20%] items-center md:mt-[300px] mt-[500px]' id='work'>
      <div className='flex w-full'>
        <span className='text-xs mt-1'>03. </span>
        <span className='font-bold pl-1'> Some Things I’ve Worked on</span>
        <span className='border-b border-gray-300 mt-4 mb-4 w-1/2 ml-5'></span>
      </div>
      <div className='relative  mt-[100px]'>
        <div className='md:block hidden'>
          <Image src='/vfse.png' width={500} height={500} alt='img' />
        </div>
        <div className='md:absolute top-0 right-0'>
          <p className='text-gray-500 text-[15px] flex justify-end font-bold'>Featured Project</p>
          <p className='flex justify-end font-bold'>VFSE</p>
          <div className='block max-w-sm p-6 mt-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 z-100'>
            <p className='text-gray-500 text-[10px]'>
              VFSE efficiently stores and manages a wide range of medical imaging data, including CT
              scans and MRIs. It provides a secure and centralized platform for healthcare
              professionals to access and analyze these records. With its user-friendly interface,
              it simplifies the process of uploading, organizing, and retrieving medical images. The
              application ensures patient privacy and confidentiality while facilitating seamless
              collaboration between healthcare providers. By digitizing and centralizing medical
              imaging records, it enhances diagnostic accuracy and improves patient care.
            </p>
          </div>
          <p className='text-[9px] flex justify-end mt-3'>VSCode Sublime Text Atom</p>
        </div>
      </div>
      <div className='relative mt-[100px]'>
        <div className='md:block hidden'>
          <Image src='/starzplay.png' width={500} height={500} alt='img' />
        </div>
        <div className='md:absolute top-0 right-0'>
          <p className='text-gray-500 text-[15px] flex justify-end font-bold'>Featured Project</p>
          <p className='flex justify-end font-bold'>STARZPLAY</p>
          <div className='block max-w-sm p-6 mt-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 z-100'>
            <p className='text-gray-500 text-[10px]'>
              Starzplay is a web application where user can stream movies and TV series and other
              available genre. The app is available from small mobile screens to big TV screens.
            </p>
          </div>
          <p className='text-[9px] flex justify-end mt-3'>VSCode Sublime Text Atom</p>
        </div>
      </div>
      <div className='relative mt-[100px]'>
        <div className='md:block hidden'>
          <Image src='/unation.png' width={500} height={500} alt='img' />
        </div>
        <div className='md:absolute top-0 right-0'>
          <p className='text-gray-500 text-[15px] flex justify-end font-bold'>Featured Project</p>
          <p className='flex justify-end font-bold'>UNATION</p>
          <div className='block max-w-sm p-6 mt-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 z-100'>
            <p className='text-gray-500 text-[10px]'>
              UNATION is the app that makes it super easy to find stuff to do near you and create
              your own events with cool features like mobile ticketing and registration. This app
              helps people to sell/purchase tickets for their events. This app also have discovery
              feature that shows the active events in the active location of the active user within
              14 states of America. I worked on the core development of features that makes this app
              really amazing and useful for the enthusiastic people who really want to join
              different events and looking forward to enhance their social circle.
            </p>
          </div>
          <p className='text-[9px] flex justify-end mt-3'>VSCode Sublime Text Atom</p>
        </div>
      </div>
      <div className='relative mt-[100px]'>
        <div className='md:block hidden'>
          <Image src='/conch.png' width={500} height={500} alt='img' />
        </div>
        <div className='md:absolute top-0 right-0'>
          <p className='text-gray-500 text-[15px] flex justify-end font-bold'>Featured Project</p>
          <p className='flex justify-end font-bold'>CONCH AI</p>
          <div className='block max-w-sm p-6 mt-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 z-100'>
            <p className='text-gray-500 text-[10px]'>
              Conch provides users with valuable assistance by offering suggestions based on their
              existing writing. It aids in generating ideas, structuring content, and improving
              overall writing quality. The applications intelligent algorithms analyze the users
              input and provide relevant suggestions for enhancing coherence, grammar, and
              vocabulary usage. With its user friendly interface, it simplifies the writing process,
              helping users save time and effort. By facilitating better organization and refinement
              of ideas, the application promotes the development of well crafted and impactful
              essays and assignments.
            </p>
          </div>
          <p className='text-[9px] flex justify-end mt-3'>VSCode Sublime Text Atom</p>
        </div>
      </div>
    </div>
  )
}

export default Work
