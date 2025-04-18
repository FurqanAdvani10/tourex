import React from 'react'
import { Adventure, Explore, Gallery, PageWrapper, WhatWeDo } from '../../components'

const AboutUs = () => {
  return (
    <div>
       <PageWrapper
        className={'about-banner'}
      />
      <Explore />
      <WhatWeDo />
      <Gallery />
      <Adventure />
      
    </div>
  )
}

export default AboutUs
