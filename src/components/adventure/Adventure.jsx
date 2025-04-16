import React from 'react'
import './adventure.css'
import { useNavigate } from 'react-router-dom'

const Adventure = () => {

    const navigate = useNavigate()

    return (
        <div className='adventure-main'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="adventure-heading text-center">
                            <h5 className='p-0 m-0 bg-none'>Next Adventure Destination</h5>
                            <h2 className='p-0 m-0'>Popular Travel Destinations Available Worldwide</h2>
                            <button onClick={navigate('/packages')}>BOOK YOUR TRIP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventure
