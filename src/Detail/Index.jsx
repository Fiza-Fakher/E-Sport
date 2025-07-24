import React from 'react'
import Hero from '../Detail/components/Hero'
import Tournament from './components/Tournament'
import Team from '../About/components/Team'
import Footer from '../components/Footer'

function Detail() {
  return (
    <>
      <Hero/><Tournament/>
      <Team/><Footer/>
    </>
  )
}

export default Detail