import React from 'react'
import { Banner, Destinations, Hero, Packages, Process, Testimonials } from '../../components'

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <Process />
      <Packages forHero={true} />
      <Banner />
      <Testimonials />
    </>
  )
}

export default Home
