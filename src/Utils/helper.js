
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const COOKIE_CONSENT_KEY = "cookieConsent";
const COOKIE_DECLINED_KEY = "cookieDeclined";
const COOKIE_NAME = "user";

export const useCookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
        const declined = localStorage.getItem(COOKIE_DECLINED_KEY);

        if (!consentGiven && !declined) {
            setIsVisible(true);
            Cookies.remove(COOKIE_NAME, { path: "/", secure: true, sameSite: "Strict" });
        }
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "true");
        Cookies.set(COOKIE_NAME, "true", { expires: 365, path: "/", secure: true, sameSite: "Strict" });
        setIsVisible(false);
    };

    const decline = () => {
        localStorage.setItem(COOKIE_DECLINED_KEY, "true");
        Cookies.remove(COOKIE_NAME, { path: "/", secure: true, sameSite: "Strict" });
        setIsVisible(false);
    };

    return { isVisible, accept, decline };
};