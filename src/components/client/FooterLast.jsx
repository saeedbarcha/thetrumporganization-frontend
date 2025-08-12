import React from 'react';
import "./FooterLast.css";

const FooterLast = () => {
    return (
        <div className="footer-last-container">
            <p className="text-center text-sm text-white py-4">
                © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
        </div>
    );
}

export default FooterLast;