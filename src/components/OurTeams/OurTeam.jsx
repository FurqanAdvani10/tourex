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
                <div className="our-team-card-container mt-20 d-flex justify-content-center align-items-center" >
                    <div className="row g-4 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {data.map((team, index) => (
                            <div className="col" key={index}>
                                <div className="team-item ">
                                    <div className="team-inner">
                                        <div className="team-thumb">
                                             <img src={getImg(team?.src)} alt={team.name} />
                                        </div>
                                        <div className="team-content">
                                            <a href={team.profileLink}>
                                                <h4 className="p-0 m-0">{team.name}</h4>
                                            </a>
                                            <p className="p-0 m-0">{team.designation}</p>
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
