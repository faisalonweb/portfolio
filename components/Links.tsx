'use client'

// import Link from 'next/link'
import { Link } from 'react-scroll'

import { BsArrowUpRight } from 'react-icons/bs'

interface LinkProps {
  name: string
  last?: boolean
}

export default function Links({ name, last }: LinkProps) {
  return (
    <Link
      to={name.toLocaleLowerCase()}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className={`pseudo cursor-pointer pb-4 min-h-[100%] w-full justify-center flex relative items-end hover:text-pink-400 ${
        last ? ' before:w-0 before:hidden' : ''
      }`}
    >
      <div className='flex items-center gap-6 last hover:last-of-type:-rotate-12'>
        <div className=''>{name}</div>
        <BsArrowUpRight className='' />
      </div>
    </Link>
  )
}
