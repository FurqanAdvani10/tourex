import { useEffect } from 'react'
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './contactUsMap.css'
import { useFormik } from 'formik';
import { contactForm } from './validation';

const ContactUsMap = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const infoCards = [
        { title: "Head Office", address: "Central Plaza Opp Gul Plaza Marston Road Saddar karachi ", icon: <FaMapMarkerAlt /> },
        { title: "Phone Number", address: "+92 332 9773747", icon: <FaPhoneAlt /> },
        { title: "Send Email", address: "info@travelnmemories.com", icon: <FaEnvelope /> },
        { title: "Our Website", address: "www.travelnmemories.com", icon: <FaGlobe /> },
    ];

    const initialValues = {
        name: "",
        email: "",
        message: "",
        service: "",
        phone: ""
    };


    const sendEmail = async (formDataToSend) => {


        const response = await fetch("https://travelnmemories.com/send-email.php", {
            method: "POST",
            body: formDataToSend,
        });

        const result = await response.text();
        console.log(result , "result")
        // result === "" ? action.resetForm() : 'error'
        // window.location.href = mailtoLink;

    };

    const { values, errors, touched, handleChange, handleSubmit, setFieldTouched } = useFormik({
        initialValues: initialValues,
        validationSchema: contactForm,
        onSubmit: (values, action) => {
            const formDataToSend = new FormData();
            formDataToSend.append("name", values.name);
            formDataToSend.append("email", values.email);
            formDataToSend.append("phone", values.phone);
            formDataToSend.append("service", values.service);
            formDataToSend.append("message", values.message);
            sendEmail(formDataToSend)
        },
    });

    return (
        <>

            <div className='contact-us-form section-padding'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact-us-form-heading text-center heading-with-sub">
                                <h5 className="p-0 m-0">Get in touch with Contact us</h5>
                                <h2 className="p-0 m-0">Let's Connect And Get To Know
                                    Each Other</h2>
                            </div>
                        </div>
                    </div>
                    <div className='contact-us-form-container'>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12 col-sm-12 col-xl-8 col-lg-8">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="fst-lst col-md-6 col-12">
                                            <input type="name"
                                                name='name'
                                                class="form-control"
                                                id="John"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={() => setFieldTouched('name', true, true)}
                                                placeholder="Your Name *" />
                                            {errors.name && touched.name ? (
                                                <p className="p_msg p-0 m-0">
                                                    {errors.name}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div class="col-6 col-md-6 col-12 email">
                                            <input
                                                type="eamil"
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={() => setFieldTouched('email', true, true)}
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Your Email *" />
                                            {errors.email && touched.email ? (
                                                <p className="p_msg p-0 m-0">
                                                    {errors.email}
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="row mt-30-inp">
                                        <div class="fst-lst col-md-6 col-12">
                                            <input
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={() => setFieldTouched('phone', true, true)}
                                                name='phone'
                                                type="phone"
                                                class="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Phone Number *" />
                                            {errors.phone && touched.phone ? (
                                                <p className='p_msg p-0 m-0'>{errors.phone}</p>
                                            ) : null}
                                        </div>

                                        <div class="col-6 col-md-6 col-12 email">
                                            <select class="form-select"
                                                name='service'
                                                value={values.service}
                                                onChange={handleChange}
                                                onBlur={() => setFieldTouched('service', true, true)}
                                                aria-label="Default select example">
                                                <option selected>Services</option>
                                                <option value="Tour">Tour</option>
                                                <option value="Hotel Booking">Hotel Booking</option>
                                                <option value="Car">Car</option>
                                            </select>
                                            {errors.service && touched.service ? (
                                                <p className='p_msg p-0 m-0'>
                                                    {errors.service}
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>


                                <div class="text-section mt-30-inp">
                                    <textarea class="form-control"
                                        name='message'
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={() => setFieldTouched('message', true, true)}
                                        placeholder="Your Message"
                                        id="exampleFormControlTextarea1" rows="8"></textarea>
                                    {errors.message && touched.message ? (
                                        <p className='p_msg msg p-0 m-0'>
                                            {errors.message}
                                        </p>
                                    ) : null}

                                </div>
                                <div class="contact-btn ">
                                    {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
                                    <button type="Submit" onClick={handleSubmit}>Send Your Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-us section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
                            <div className="contact-us-heading text-center heading-with-sub">
                                <h5 className="p-0 m-0">Get in Touch with Us</h5>
                                <h2 className="p-0 m-0">We're Always Eager To Hear From You!</h2>
                            </div>
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="row">
                            <div className="col-md-6 col-xl-8 col-lg-8 col-sm-12">
                                <div className="map-section">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4048.89023221218!2d67.01919221127096!3d24.865130244977898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1358629bf7%3A0x57ab3d0f80a8c4e!2zVGhlIENlbnRyYWwgTWFsbCAmIFBsYXphINiv24wg2LPbjNmG2bnYsdmEINmF2KfZhCDYp9uM2YbaiCDZvtmE2KfYstuB!5e1!3m2!1sen!2sus!4v1744799625135!5m2!1sen!2sus"
                                        style={{
                                            border: "0",
                                            width: "100%", // Make the width responsive
                                            height: "390px", // Fixed height
                                        }}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    >
                                    </iframe>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12">
                                <div className="info-cards-container">
                                    <div className="info-cards">
                                        {infoCards.map((card, index) => (
                                            <div className="info-card" key={index}>
                                                <div className="info-card-icon">
                                                    {card.icon}
                                                </div>
                                                <div className="info-card-content">
                                                    <h4>{card.title}</h4>
                                                    <p>{card.address}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ContactUsMap
