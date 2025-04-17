import "./cookieConsent.css";
import { RxCookie } from "react-icons/rx";
import { useCookieConsent } from "./helper";

const CookieConsent = () => {
    const { isVisible, accept, decline } = useCookieConsent();

    if (!isVisible) return null;



    return (
        <div className="cookieContainer">
            <div className="cookie-icon-parent">
                <RxCookie />
            </div>
            <p className="cookie-text">
                By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run efficiently.
            </p>
            <div className="cookie-btn-container">
                <button onClick={decline} className="declineBtn">Decline</button>
                <button onClick={accept} className="acceptBtn">Accept</button>
            </div>
        </div>
    );
};

export default CookieConsent;