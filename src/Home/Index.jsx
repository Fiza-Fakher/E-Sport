import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Carosal from '../components/Carosal'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'
import Gallery from '../components/Gallery'
import Product from '../components/Product'
import Banner3 from '../components/Banner3'
import Blog from '../components/Blog'
import Form from '../components/Form'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
<Carosal/> <Banner1/> <Banner2/> 
<Gallery/><Product/> <Banner3/><Blog/><Form/><Footer/>
    </>
  )
}

export default Home
