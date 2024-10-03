import Gallery from '@/components/gallery/gallery'
import Hero from '@/components/hero/hero'
import RestaurantMenu from '@/components/menu/menu'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-white w-full'>
      <Hero />
      <RestaurantMenu />
      <Gallery />
    </div>
  )
}

export default Home