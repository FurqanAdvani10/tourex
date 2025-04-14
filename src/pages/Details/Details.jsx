import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './details.css';
import { CLoader, PageWrapper, Testimonials } from '../../components';
import { data } from '../../components/packages/data';
import { Tabs } from 'antd';
import { MdOutlinePermDeviceInformation } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Information from './Information';
import Location from './Location';
import Plane from './Plane';

function Details() {

    const [activeTab, setActiveTab] = useState("1");

    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const images = import.meta.glob('../../assets/**/*', { eager: true });

    const getImg = (path) => {
        if (!path) return ""; // Prevent errors for undefined/null paths
        return images[`../../assets/${path}`]?.default || "";
    };

    const Item = data?.find(item => item.id === parseInt(id));

    console.log(data.packages)
    const map = data?.categories?.filter(item => item.id === id)

    console.log(data?.categories)
    const onChange = (key) => {
        setActiveTab(key);
    };

    const tabsContent = {
        "1": <Information data={Item} />,
        "2": <Plane data={Item} />,
        "3": <Location data={Item?.location} />,
    };

    const items = [
        {
            key: "1",
            label: (
                <div className='label-with-icon'>
                    <i><MdOutlinePermDeviceInformation /></i>
                    <h5 className='p-0 m-0'>Information</h5>
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className='label-with-icon'>
                    <i><FaRegCalendarAlt /></i>
                    <h5 className='p-0 m-0'>Tour Plan</h5>
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div className='label-with-icon'>
                    <i><IoLocationOutline /></i>
                    <h5 className='p-0 m-0'>Location</h5>
                </div>
            ),
        },
    ];

    if (!Item) return <div><CLoader /></div>;

    return (
        <>
            {/* Page Wrapper Component */}
            <PageWrapper
                title={Item.name}
                moveTo="packages"
                subtitle="Details"
                navigatePath="home"
            />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Tabs defaul/*  */ tActiveKey="1" items={items} onChange={onChange} tabPane={false} />
                    </div>
                </div>
            </div>





            <div className="details-container section-padding">
                <div className='container'>

                    <div className="row align-items-start">

                        <div className="col-md-9 col-sm-12 col-12">
                            {tabsContent[activeTab]}
                        </div>



                        <div className="col-md-3 col-sm-12 col-12">
                            <div className="booking-form-main">
                                <div className="booking-form-heading">
                                    <h3>Book This Tour</h3>
                                </div>

                                <div className="booking-form">
                                    <div class="fst-lst col-12 mt-20">

                                        <input
                                            // onChange={handleChange}
                                            // value={values.phone}
                                            // onBlur={() => setFieldTouched('phone', true, true)}
                                            name='Name'
                                            type="text"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Name *" />
                                    </div>
                                    <div class="fst-lst col-12 mt-20">

                                        <input
                                            // onChange={handleChange}
                                            // value={values.phone}
                                            // onBlur={() => setFieldTouched('phone', true, true)}
                                            name='email'
                                            type="email"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Email *" />
                                    </div>

                                    <div class="fst-lst col-12 mt-20">

                                        <input
                                            // onChange={handleChange}
                                            // value={values.phone}
                                            // onBlur={() => setFieldTouched('phone', true, true)}
                                            name='phone'
                                            type="phone"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Phone Number *" />
                                    </div>

                                    <div class="text-section mt-30">
                                        <textarea class="form-control"
                                            name='message'
                                            // value={values.message}
                                            // onChange={handleChange}
                                            // onBlur={() => setFieldTouched('message', true, true)}
                                            placeholder="Your Message"
                                            id="exampleFormControlTextarea1" rows="3"></textarea>
                                        {/* {errors.message && touched.message ? (
                                        <p className='p_msg msg p-0 m-0'>
                                            {errors.message}
                                        </p>
                                    ) : null} */}

                                    </div>
                                    <div className="booking-btn mt-20">
                                        <button>BOOK NOW</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <Testimonials />
        </>
    );
}

export default Details;
