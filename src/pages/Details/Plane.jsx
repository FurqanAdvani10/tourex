import React, { useState } from 'react'
import { CFaq } from '../../components'
import './plane.css'


const Plane = ({ data }) => {
  const [planFaqs, setPlanFaqs] = useState(
    data?.plan?.map((item, index) => ({
      ...item,
      open: index === 0 // sirf first item open by default
    })) || []
  );

  const toggleFAQ = (index) => {
    setPlanFaqs(
      planFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      })
    );
  };

  {/* <div className="faqs">
          {planFaqs.map((faq, index) => (
            <CFaq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div> */}

  return (
    <div className="tour">
      <div className="plan-container">
        {data?.plan?.map((item, index) => (
          <div className="plan-item" key={index}>
            <div className="plan_no">
              <h4>{index + 1}</h4> {/* +1 because indexing starts from 0 */}
            </div>
            <div className="plan_item-content">
              <h3>{item?.question}</h3>
              <p>{item?.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default Plane;
