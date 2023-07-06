import React from 'react'
import SideMenu from './SideMenu'

const Experience = () => {
  return (
    <div className='px-[20%] items-center mt-[300px]' id='experience'>
      <div className='flex w-full'>
        <span className='text-xs mt-1'>02. </span>
        <span className='font-bold pl-1'> Where I’ve Worked</span>
        <span className='border-b border-gray-300 mt-4 mb-4 w-1/2 ml-5'></span>
      </div>
      <SideMenu />
    </div>
  )
}

export default Experience
