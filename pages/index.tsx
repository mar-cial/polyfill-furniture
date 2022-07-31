import { NextPage } from 'next'
import React from 'react'
import Banner from '@components/Banner'
import FurnitureRibbon from '@components/FurnitureRibbon'
import Footer from '@components/Footer'

const Homepage: NextPage = () => {
  
  return (
    <div className='text-white bg-black'>
      <Banner />
      <FurnitureRibbon />
      <Footer />
    </div>
  )
}

export default Homepage
