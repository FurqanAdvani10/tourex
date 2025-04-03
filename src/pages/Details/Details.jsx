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

function Details() {

    const [activeTab, setActiveTab] = useState("1");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const images = import.meta.glob('../../assets/**/*', { eager: true });

    const getImg = (path) => {
        if (!path) return ""; // Prevent errors for undefined/null paths
        return images[`../../assets/${path}`]?.default || "";
    };

    const Item = data.find(item => item.id === parseInt(id));


    const onChange = (key) => {
        setActiveTab(key);
    };

    const tabsContent = {
        "1": <Information  data={Item}/>,
        "2": <Location  data={Item.location}/>,
        "3": <Location  data={Item}/>,
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
            // children: tabs("1"),
        },
        {
            key: "2",
            label: (
                <div className='label-with-icon'>
                    <i><FaRegCalendarAlt /></i>
                    <h5 className='p-0 m-0'>Tour Plan</h5>
                </div>
            ),
            // children: tabs("2"),
        },
        {
            key: "3",
            label: (
                <div className='label-with-icon'>
                    <i><IoLocationOutline /></i>
                    <h5 className='p-0 m-0'>Location</h5>
                </div>
            ),
            // children: tabs("3"),
        },
    ];

    if (!Item) return <div><CLoader /></div>;

    return (
        <>
            {/* Page Wrapper Component */}
            <PageWrapper
                title={Item.name}
                moveTo="Hajj Packages"
                subtitle="Details"
                navigatePath="/hajj"
            />
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabPane={false} />





            <div className="details-container section-padding">
                <div className='container'>

                    <div className="row align-items-center">
                        {/* Image Section */}
                        {/* <div className="col-md-6 mb-4"> */}

                        {/* <img src={getImg(program?.image)} alt={program.name} className="img-fluid rounded shadow-lg border border-primary" /> */}
                        {/* <img
                                src={require(`../../Assets/${program.package}`)}
                                alt={program.name}
                                className="img-fluid rounded shadow-lg border border-primary"
                            /> */}
                        {/* </div> */}

                        {/* <div className="col-md-6">
                            <h2 className="mb-3 program-title">{program.name}</h2>
                            <p className="text-muted">{program.description}</p>

                            <h4 className="mt-4 mb-3 text-secondary">Package Details:</h4>
                            <ul className="list-unstyled">
                                <li><strong>Days:</strong> {program.days}</li>
                                <li><strong>Maktab:</strong> {program.maktab}</li>
                                <li><strong>Airline:</strong> {program.airline}</li>
                                <li><strong>Sharing Price:</strong> {program.sharing_price}</li>
                                <li><strong>Triple Bed Price:</strong> {program.triple_bed_price}</li>
                                <li><strong>Double Bed Price:</strong> {program.double_bed_price}</li>
                                <li><strong>Payment Schedule:</strong> {program.payment_schedule}</li>
                                <li><strong>Food Included:</strong> {program.food_included}</li>
                            </ul>

                            {program.features?.length > 0 && (
                                <>
                                    <h4 className="mt-4 text-secondary">Features:</h4>
                                    <ul className="list-unstyled feature-list">
                                        {program.features.map((feature, index) => (
                                            <li key={index} className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span className="text-dark">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {program.note?.length > 0 && (
                                <>
                                    <h4 className="mt-4 text-secondary">Important Notes:</h4>
                                    <ul className="list-unstyled note-list">
                                        {program.note.map((note, index) => (
                                            <li key={index} className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-info-circle-fill text-warning me-2"></i>
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div> */}

                        <div className="col-md-9">
                            {tabsContent[activeTab]}
                        </div>



                        <div className="col-md-3">
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

                    {/* {program.modules && (
                        <div className="row mt-5">
                            <h3 className="mb-4 module-title">Modules</h3>
                            {program.modules.map((module, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card module-card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">{module.name}</h5>
                                            <p className="card-text">
                                                <strong>Duration:</strong> {module.duration}
                                            </p>
                                            <p className="card-text text-muted">{module.description}</p>
                                            <ul className="list-unstyled mt-3">
                                                {module.topics.map((topic, i) => (
                                                    <li key={i} className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-arrow-right-circle-fill text-info me-2"></i>
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )} */}
                </div>

            </div>


            <Testimonials />
        </>
    );
}

export default Details;
