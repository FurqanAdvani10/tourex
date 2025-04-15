import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './details.css';
import { CLoader, PageWrapper, Testimonials } from '../../components';
import { data } from '../../components/packages/data';
import { Button, Tabs } from 'antd';
import { MdOutlinePermDeviceInformation } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Information from './Information';
import Location from './Location';
import Plane from './Plane';

function Details() {

    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("1");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const Item = data?.find(item => item.id === parseInt(id));

    const sendWhatsAppMessage = (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, email, phone, message } = formData;

        const textMessage = `New Enquiry From Website:
    package Detail : ${Item?.name}
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}`;

        const whatsappNumber = "+923329773747"; 

        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(textMessage)}`;

        window.open(whatsappURL, "_blank");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
        setLoading(false);
    };

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
                navigatePath={"/packages"}
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
                                <form
                                    onSubmit={sendWhatsAppMessage}
                                >
                                    <div className="booking-form">
                                        <div class="fst-lst col-12 mt-20">

                                            <input
                                                name='name'
                                                type="text"
                                                class="form-control"
                                                value={formData?.name}
                                                onChange={handleChange}
                                                required
                                                id="exampleFormControlInput1"
                                                placeholder="Name *" />
                                        </div>
                                        <div class="fst-lst col-12 mt-20">

                                            <input
                                                name='email'
                                                type="email"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                value={formData?.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Email *" />
                                        </div>

                                        <div class="fst-lst col-12 mt-20">

                                            <input
                                                name='phone'
                                                type="phone"
                                                class="form-control"
                                                value={formData?.phone}
                                                onChange={handleChange}
                                                required
                                                id="exampleFormControlInput1"
                                                placeholder="Phone Number *" />
                                        </div>

                                        <div class="text-section mt-30">
                                            <textarea class="form-control"
                                                name='message'
                                                placeholder="Your Message"
                                                id="exampleFormControlTextarea1"
                                                value={formData?.message}
                                                onChange={handleChange}
                                                required
                                                rows="3"></textarea>

                                        </div>
                                        <div className="booking-btn mt-20">
                                            <Button htmlType="submit" loading={loading} disabled={loading}>
                                                {loading ? "Sending..." : "Book now"}
                                            </Button>
                                        </div>

                                    </div>
                                </form>
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
