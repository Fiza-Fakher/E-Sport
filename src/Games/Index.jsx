import React from 'react'
import Hero from '../Games/components/Hero'
import Games from '../Games/components/Games'
import Banner1 from '../Games/components/Banner1'
import Upcoming from '../Games/components/Upcoming'
import Footer from '../components/Footer'

function Index() {
  return (
    <>
      <Hero/>
       <Games/> <Banner1/><Upcoming/>
      <Footer/>
    </>
  )
}

export default Index
