import React from 'react'
import { Adventure, PageWrapper, WhatWeDo } from '../../components'

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
      <WhatWeDo />
      <Adventure />
      
    </div>
  )
}

export default AboutUs
