import React from 'react'
import { ContactUsMap, PageWrapper } from '../../components'

const ContactPage = () => {
  return (
    <div>
      <PageWrapper
        // moveTo={"Home"}
        // navigatePath={'/'}
        // subtitle={"Contact"}
        className={'contact-banner'}
      />
      <ContactUsMap />
    </div>
  )
}

export default ContactPage
