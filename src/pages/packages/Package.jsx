import React from 'react'
import { Packages, PageWrapper, Testimonials } from '../../components'

const PackagePage = () => {
  return (
    <>
       <PageWrapper
        title={"Packages"}
        moveTo={"Home"}
        navigatePath={'/'}
        subtitle={"Packages"}
        className={'packages-banner'}
      />
      <Packages />
      <Testimonials />
    </>
  )
}

export default PackagePage
