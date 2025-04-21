import React from 'react'
import { Banner, Destinations, Hero, Packages, Process, Testimonials } from '../../components'
import FAQ from '../faq/FAQ'

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <Process />
      <Packages forHero={true} />
      {/* <Banner /> */}
      <Testimonials />
      <FAQ />
    </>
  )
}

export default Home
