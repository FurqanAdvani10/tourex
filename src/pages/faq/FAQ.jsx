import React, { useState } from 'react'
import { CFaq, PageWrapper } from '../../components'
import Faqs from '../../components/faqs/Faqs'

const FAQ = () => {

  const [faqs, setFaqs] = useState([
    {
      question: "How Will I Receive My Payment?",
      answer:
        "The best destinations for honeymoon are Kerala, Goa, Uttarakhand, Andaman Islandsarea and Kashmi your sanctuary travel with our curated collection of hotels andThe best destinations for honeymoon aakhand, Andaman slands, and Kashmi your sanctuary curated collection.",
      open: true
    },
    {
      question: "How Much Does It Cost To Do a Private Tour?",
      answer: "The best destinations for honeymoon are Kerala, Goa, Uttarakhand, Andaman Islandsarea and Kashmi your sanctuary travel with our curated collection of hotels andThe best destinations for honeymoon aakhand, Andaman slands, and Kashmi your sanctuary curated collection.",
      open: false
    },
    {
      question: "What Do I Need To Bring?",
      answer: "The best destinations for honeymoon are Kerala, Goa, Uttarakhand, Andaman Islandsarea and Kashmi your sanctuary travel with our curated collection of hotels andThe best destinations for honeymoon aakhand, Andaman slands, and Kashmi your sanctuary curated collection., Andaman slands, and Kashmi your sanctuary curated collection.",
      open: false
    },
    {
      question: "Do You Offer International Packages?",
      answer: "The best destinations for honeymoon are Kerala, Goa, Uttarakhand, Andaman Islandsarea and Kashmi your sanctuary travel with our curated collection of hotels andThe best destinations for honeymoon aakhand, Andaman slands, and Kashmi your sanctuary curated collection., Andaman slands, and Kashmi your sanctuary curated collection.",
      open: false
    },
    {
      question: "Should I Print A Receipt To Show The Tour Guide?",
      answer: "The best destinations for honeymoon are Kerala, Goa, Uttarakhand, Andaman Islandsarea and Kashmi your sanctuary travel with our curated collection of hotels andThe best destinations for honeymoon aakhand, Andaman slands, and Kashmi your sanctuary curated collection., Andaman slands, and Kashmi your sanctuary curated collection.",
      open: false
    },
    {
      question: "Are There Any Extra Fees That I Will Have To Pay On Top Of The Listed Price?",
      answer: "The best destinations for honeymoon are Kerala, Goa, Uttarakhand, Andaman Islandsarea and Kashmi your sanctuary travel with our curated collection of hotels andThe best destinations for honeymoon aakhand, Andaman slands, and Kashmi your sanctuary curated collection., Andaman slands, and Kashmi your sanctuary curated collection.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <PageWrapper
        title={"Frequently Asked Question"}
        moveTo={"Home"}
        navigatePath={'/'}
        subtitle={"Faq's"}
        className={'faqs-banner'}
      />
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-with-sub text-center">
                <h5 className='p-0 m-0'>Have questions you want answers to?</h5>
                <h2 className='p-0 m-0'>Frequently Ask Questions</h2>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-12">
              <div className="faqs">
                {faqs.map((faq, index) => (
                  <CFaq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
