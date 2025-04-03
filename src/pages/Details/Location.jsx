import React from 'react'
import './location.css'

const Location = ({ data }) => {
    return (
        <div className='location-main'>
            <div className="location-heading">
                <h3>Location</h3>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0!2d67.0585244!3d24.8820308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0131f9c6c5%3A0xe57eacee2fe6169c!2sIconic%20Trade%20Center%20(ICT)!5e0!3m2!1sen!2s!4v1699986456985!5m2!1sen!2s"
                style={{
                    border: "0",
                    width: "100%", // Make the width responsive
                    height: "430px", // Fixed height
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default Location
