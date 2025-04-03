import React from 'react'
import './ourTeams.css'
import { useNavigate } from 'react-router-dom'
import { data } from './data'

const OurTeam = () => {

    const navigate = useNavigate()

    return (
        <div className='our-team-main section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="our-team-heading heading-with-sub">
                            <h6 className="p-0 m-0">Our Team</h6>
                            <h3 className="p-0 m-0">Classes Taught By Real Creators</h3>
                            <p className="p-0 m-0">At Sunlight Tuition and Language Center, our dedicated instructors are vital to our success. Selected for their expertise and passion, they create personalized lessons that inspire students and cater to diverse learning styles. Committed to ongoing professional development, our team ensures high-quality instruction, empowering students with the skills they need to thrive in a changing world</p>
                        </div>
                    </div>
                </div>
                <div className="our-team-card-container d-flex justify-content-center align-items-center" >
                    <div className="row g-4 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {Array.isArray(data) && data.slice(0, 4).map((instructor, index) => (
                            <div className="col" key={index}>
                                <div className="instructor-item ">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img
                                                 src={
                                                    instructor?.src.startsWith("http")
                                                      ? instructor?.src // Use the absolute URL as-is
                                                      : require(`../../Assets/${instructor?.src}`) // Use require for local images
                                                  }
                                                alt={instructor.name}
                                            />
                                        </div>
                                        <div className="instructor-content">
                                            <a href={instructor.profileLink}>
                                                <h4 className="p-0 m-0">{instructor.name}</h4>
                                            </a>
                                            <p className="p-0 m-0">{instructor.degree}</p>
                                            <span className="ratting">
                                                {[...Array(instructor.rating)].map((_, i) => (
                                                    <i key={i} className="icofont-ui-rating"></i>
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="instructor-footer">
                                        <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                            <li>
                                                <i className="icofont-book-alt"></i>
                                                <p className="p-0 m-0">{instructor.courses} courses</p>
                                            </li>
                                            <li>
                                                <i className="icofont-users-alt-3"></i>
                                                <p className="p-0 m-0">{instructor.students} students</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row text-center mt-4">
                    <div className="col-md-12">
                        <div className="our-team-link">
                            <p className="p-0 m-0">Want to help people learn, grow and achieve more in life? <a onClick={() => navigate('/ourTeam')}>View our team</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
