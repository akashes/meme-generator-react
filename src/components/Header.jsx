import React from 'react'
import { headerImgLink } from '../imageLink'

const Header = () => {
  return (
    <div>
      <div className='flex  items-center justify-center md:justify-normal gap-4  bg-purple-500 py-4 px-8'>
        <img src={headerImgLink} alt="" className='h-20 w-20 ring-3 ring-purple-700 rounded-full' />
        <h1 className='font-bold text-2xl text-white'>Meme Generator</h1>
      </div>
    </div>
  )
}

export default Header
