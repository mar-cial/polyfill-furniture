import { NextPage } from 'next'
import { ethers } from 'ethers'

// component imports
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import FurnitureRibbon from '@components/FurnitureRibbon'
import { useState } from 'react'

// component start
const Homepage: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState<undefined|string>()
  const [defaultAccount, setDefaultAccount] = useState<undefined|string>()
  const [userBalance, setUserBalance] = useState<undefined|string>()

  return (
    <div className='text-white bg-black'>
      <Banner />
      <FurnitureRibbon />
      <Footer />
    </div>
  )
}

export default Homepage
