import React from 'react'
import Hero from '../About/components/Hero'
import Banner1 from '../About/components/Banner1'
import Banner2 from '../About/components/Banner2'
import Team from '../About/components/Team'
import Review from './components/Review'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Hero/>
      <Banner1/> <Banner2/> <Team/>
      <Review/><Footer/> 
    </>
  )
}

export default About
