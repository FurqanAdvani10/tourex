import React from 'react'
import './process.css'
import { secure, travel, hassle_free, customer_support, mountain } from '../../assets/icons'

const Process = () => {


    const steps = [
        {
            icon: travel,
            title: 'Best Travel Agency',
            desc: 'Are you tired of the typical tourist spots? Discover new horizons with us.',
        },
        {
            icon: mountain,
            title: 'Top Class Places',
            desc: 'Explore beautiful destinations you’ve never dreamed of.',
        },
        {
            icon: secure,
            title: 'Secure Journey With Us',
            desc: 'Travel confidently with our secure, hassle-free services.',
        },
        {
            icon: hassle_free,
            title: 'Hassle-Free Experience',
            desc: 'Smooth, simple, and stress-free service—just for you.',
        },
        {
            icon: travel,
            title: 'Secure Travel',
            desc: 'Safe, reliable, and worry-free journeys.',
        },
        {
            icon: customer_support,
            title: '24/7 Customer Support',
            desc: 'Need help anytime? We’re always here—day or night.',
        },
    ];

    return (
        <div className='process-main section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-with-sub text-center">
                            <h5 className='p-0 m-0'>our Working Process</h5>
                            <h2 className='p-0 m-0'>See how we work step by step</h2>
                            <p className='p-0 m-0'>Are you tired of the typical tourist destinations and area better looking to step out of your comfort zone travel</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-20 justify-content-center">
                    {steps.map((step, idx) => (
                        <div key={idx} className='col-12 col-sm-6 col-lg-4'>
                            <div className='process-box'>
                                <div className='process-icon'>
                                    <img src={step.icon} alt={step.title} />
                                </div>
                                <div className='process-heading'>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Process
