import React from 'react'
import { Adventure, Explore, Gallery, PageWrapper, WhatWeDo } from '../../components'

const AboutUs = () => {
  return (
    <div>
       <PageWrapper
        title={"About Us"}
        moveTo={"Home"}
        className={'about-banner'}
        navigatePath={'/'}
        subtitle={"About"}
      />
      <Explore />
      <WhatWeDo />
      <Gallery />
      <Adventure />
      
    </div>
  )
}

export default AboutUs
