'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import Image from 'next/image'
import Link from 'next/link'

interface Hero {
  textEnter: () => void
  textLeave: () => void
  variants: any
  cursorVariant: any
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variant: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgb(244, 244, 244)',
      mixBlendMode: 'difference',
    },
    textwhite: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference',
    },
  }

  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')

  return (
    <div>
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col items-center mt-[200px]  px-[20%] select-none'
      >
        <div>
          <motion.div className='cursor' variants={variant} animate={cursorVariant} />
          <motion.h1
            variants={textVariant(1.1)}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className='md:text-[1rem] text-[1rem]  leading-[1.2] text-gray-500'
          >
            Hi, my name is
          </motion.h1>
          <motion.h1
            variants={textVariant(1.1)}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className='md:text-[4.1rem] text-[3.1rem]  md:leading-[1.2] leading-[1] font-bold'
          >
            Faisal Usman
          </motion.h1>
          <motion.h1
            variants={textVariant(1.1)}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className='md:text-[2rem] text-[2rem]  leading-[1.2] text-gray-500 font-bold'
          >
            I build things for the web.
          </motion.h1>
          <motion.h1
            variants={textVariant(1.1)}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className='md:text-[13px] text-[16px]  leading-[1.2] mt-2 text-gray-500'
          >
            I’m a software engineer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I’m focused on building accessible,
            human-centered products at Upstatement.
          </motion.h1>
        </div>
      </motion.div>
      <div className='flex flex-col ml-12 mt-[80px] fixed bottom-0 md:visible invisible'>
        <Link href='https://twitter.com/faisalusman390'>
          <Image src='/twitter.svg' width={15} height={15} alt='img' />
        </Link>
        <Link href='https://www.instagram.com/faisal__usman/'>
          <Image className='mt-2' src='/insta.svg' width={15} height={15} alt='img' />
        </Link>

        <Image className='mt-2' src='/tumbler.svg' width={15} height={15} alt='img' />
        <Link href='https://www.linkedin.com/in/faisalonweb/'>
          <Image className='mt-2' src='/linkdin.svg' width={15} height={15} alt='img' />
        </Link>

        <div className=' ml-1.5 mt-4 h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50'></div>
      </div>
      <div className='flex flex-col mt-[80px] fixed bottom-0 right-0 md:visible invisible'>
        <div className='h-[57px]'>
          <p className='rotate-90 text-[8px]  text-gray-500'>faisalusman390@gmail.com</p>
        </div>
        <div className='ml-[51px] inline-block mt-4 h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50'></div>
      </div>
    </div>
  )
}
