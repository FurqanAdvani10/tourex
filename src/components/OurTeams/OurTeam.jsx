import React from 'react'
import './ourTeams.css'
import { useNavigate } from 'react-router-dom'
import { data } from './data'

const OurTeam = () => {

    const navigate = useNavigate()

    const images = import.meta.glob('../../assets/**/*', { eager: true });

    const getImg = (path) => {
        if (!path) return ""; // Prevent errors for undefined/null paths
        return images[`../../assets/${path}`]?.default || "";
    };

    return (
        <div className='our-team-main section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-with-sub text-center">
                            <h5 className='p-0 m-0'>TEAM</h5>
                            <h2 className='p-0 m-0'>Meet The Team</h2>
                        </div>
                    </div>
                </div>
                <div className="our-team-card-container">
                    <div className="row g-4 justify-content-center align-items-center">
                        {data.map((team, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <div className="team-item">
                                    <div className="team-inner">
                                        <div className="team-thumb">
                                            <img
                                                src={getImg(team?.src)}
                                                alt={team.name}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="team-content">
                                            <a href={team.profileLink} target="_blank" rel="noopener noreferrer">
                                                <h4>{team.name}</h4>
                                            </a>
                                            <p>{team.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurTeam
