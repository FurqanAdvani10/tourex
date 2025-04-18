import React from 'react'
import { Packages, PageWrapper, Testimonials } from '../../components'

const PackagePage = () => {
  return (
    <>
       <PageWrapper
        className={'packages-banner'}
      />
      <Packages />
      <Testimonials />
    </>
  )
}

export default PackagePage
