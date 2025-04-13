import React from 'react'
import './location.css'

const Location = ({ data }) => {
    return (
        <div className='location-main'>
            <div className="location-heading">
                <h3>Location</h3>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=..."
                style={{
                    border: "0",
                    width: "100%",
                    height: "430px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default Location
