import * as Yup from "yup"

export const contactForm = Yup.object().shape({
    name: Yup.string().required("Please enter name !"),
    phone: Yup.string().required("Please enter phone !"),
    email: Yup.string().email().required("Please enter your emailAdress !"),
    message: Yup.string().required("Please Enter Your Message !"),
    service : Yup.string().required("service is required !"),
});