import { useNavigate } from 'react-router-dom'
import { data } from './data'
import './packages.css'
import { FaRegStar } from 'react-icons/fa6'
import { Button, Divider } from 'antd'

const Packages = ({ forHero }) => {


    const images = import.meta.glob('../../assets/**/*', { eager: true });

    const getImg = (path) => {
        if (!path) return ""; // Prevent errors for undefined/null paths
        return images[`../../assets/${path}`]?.default || "";
    };


    const truncateText = (text, wordLimit = 9) => {
        if (!text) return ""; // Agar text undefined ya empty ho toh return ""

        const words = text.split(" "); // Text ko words mein split karo
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "..."; // Pehle 99 words le kar "..." add karo
        }

        return text; // Agar words 99 se kam hain toh original text return karo
    };

    const navigate = useNavigate()

    return (
        <>
            <div className='courses-card-container section-padding'>
                <div className='container'>
                    {forHero ? (
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-with-sub text-center mb-40">
                                    <h5 className='m-0 p-0'>Explore The Pakistan</h5>
                                    <h2 className='m-0 p-0'>Our Amazing Featured Tour Package</h2>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <div className='row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1'>
                        {(forHero ? data?.slice(0, 3) : data)?.map((program, index) => (
                            <div className='col' key={index}>
                                <div className='course-card' onClick={() => navigate(`/details/${program?.id}`)}>
                                    <div className='course-card-body'>
                                        <div className='course-card-img'>
                                            {/* <span class="badge">New</span> */}
                                            <img src={getImg(program?.image)} alt={program.name} className="img-fluid" />
                                        </div>
                                        <div className='course-content'>
                                            <div className='course-card-title'>
                                                <h3 className='m-0 p-0'>{program.name}</h3>
                                                <p className='m-0 p-0'>{truncateText(program.description)}</p>

                                            </div>
                                            <div className='card-price'>
                                                <h4 className='p-0 m-0'>{program?.Group_tour}</h4>
                                            </div>
                                            <div class="course-footer">
                                                <div class="course-btn">
                                                    <a class="lab-btn-text" onClick={() => navigate(`/program-details/${program?.id}`)}>View More <i class="icofont-external-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {forHero ? (
                    <div className="row mt-30">
                        <div className="col-12 col-md-12 col-sm-12">
                            <div className="package-btn text-center">
                                <Button onClick={() => navigate('/packages')}>View More</Button>
                            </div>
                        </div>
                    </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Packages
