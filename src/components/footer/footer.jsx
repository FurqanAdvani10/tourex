import React from 'react'
import './footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
// import footerLogo from '../../Assets/logo.jpg'



const Footer = () => {

    return (
        <div>
            {/* <!-- FOOTER START --> */}
            <div class="footer section-top">
                <div class="contain">
                    <div class="col col-md-4 col-hr">  

                        <ul>
                            {/* <div className='footer-logo'>
                            <img src={footerLogo} alt='' />    
                        </div>  */}
                            <li>Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod.</li>
                            <hr className='hr-line' />
                            <li>
                                <div className='foter-icon-content'>
                                    <div className='footer-icon'>
                                        <FaPhone />
                                    </div>
                                    <div className='content'>
                                        +9221 34857005
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='foter-icon-content'>
                                    <div className='footer-icon'>
                                        <IoIosMailOpen />

                                    </div>
                                    <div className='content'>
                                        info@rfqtravel.com
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className='foter-icon-content'>
                                    <div className='footer-icon'>
                                        <FaLocationDot />

                                    </div>
                                    <div className='content'>
                                    office #103 iconic teades center near KBC Resturant Bahudrabad, karachi
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col ">
                        <h1>Links</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Meet the Team</li>
                            <li>Our Project</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="col ">
                        <h1>Explore</h1>
                        <ul>
                            <li>What We Offer</li>
                            <li>Our Story</li>
                            <li>Latest News</li>
                            <li>Help Center</li>
                        </ul>
                    </div>

                    <div class="col  col-social social">
                        <div className='news-letter'>
                            <h1>
                                NEWSLETTER
                            </h1>
                            <div className='news-box'>
                                <div className='news-input'>
                                    <input placeholder='Enter your email' />

                                </div>
                                <div className='news-btn'>
                                    <button>
                                        <i>
                                            <IoIosSend />
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div className='agree'>
                                <div className='agree-icon'>
                                    <i>
                                        <CiCircleCheck />
                                    </i>
                                </div>
                                <div className='agree-content'>
                                    <h4>
                                        I agree to all your terms and policies
                                    </h4>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div className='footer-emd'>

                        <hr className='footer-line' />
                        <div className='container'>
                            <div className='end-content'>

                                <div className='right-side'>
                                    <h4>
                                        © Copyrights, 2005 Travel N Memories
                                    </h4>
                                </div>
                                <div className='left-side'>
                                    <h4>
                                        Terms & Conditions                                     </h4>
                                        •
                                    <h4>
                                        Privacy Policy
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer