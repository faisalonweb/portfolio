'use client'

// import Link from "next/link";
import { RxHamburgerMenu } from 'react-icons/rx'
// import Button from './Button'
import { useState } from 'react'
import DropMenu from './DropMenu'
import { GrFormClose } from 'react-icons/gr'
// import { motion, useCycle } from 'framer-motion'
import { Link } from 'react-scroll'

// import { slideIn } from '@/app/utils/motion'
import { AnimatePresence } from 'framer-motion'
// import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [drop, setDrop] = useState(false)
  // const containerRef = useRef(null)
  // const [isOpen, toggleOpen] = useCycle(false, true)
  // const router = useRouter()

  return (
    <header>
      <div className='flex items-center justify-between px-6 py-6 cursor-default'>
        <Image src='/logo.png' width={50} height={50} alt='img' />

        <div className='flex items-center gap-4'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='md:block hidden'
          >
            <span className='text-xs'>01. </span>
            <span className='text-gray-500 text-xs'>About</span>
          </Link>

          <Link
            to='experience'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='md:block hidden'
          >
            <span className='text-xs'>02. </span>
            <span className='text-gray-500 text-xs'>Experience</span>
          </Link>
          <Link
            to='work'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='md:block hidden'
          >
            <span className='text-xs'>03. </span>
            <span className='text-gray-500 text-xs'>Work</span>
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='md:block hidden'
          >
            <span className='text-xs'>04. </span>
            <span className='text-gray-500 text-xs'>Contact</span>
          </Link>
          <button className='px-1 py-1 text-xs rounded border border-gray-600'>Resume</button>

          <div className='md:hidden  rounded-full bg-gray-300 p-2 z-[999999]'>
            {drop ? (
              <GrFormClose
                className='text-[1.5rem] cursor-pointer'
                onClick={() => setDrop(!drop)}
              />
            ) : (
              <RxHamburgerMenu
                className='text-[1.5rem] cursor-pointer'
                onClick={() => setDrop(!drop)}
              />
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>{drop && <DropMenu drop={drop} setDrop={setDrop} />}</AnimatePresence>
    </header>
  )
}
