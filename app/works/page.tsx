'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import WorksComponent from './WorksCardComponent'
import { card } from '../constants/item'

export default function Page() {
  const router = useRouter()

  return (
    <div>
      <div className='flex gap-3 justify-center py-12 flex-wrap cursor-default'>
        {card.map((item) => (
          <div key={item.name}>
            <WorksComponent
              image={item.image}
              ImgTitle={item.ImgTitle}
              name={item.name}
              description={item.description}
              onClick={() => router.push(item.onClick)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
