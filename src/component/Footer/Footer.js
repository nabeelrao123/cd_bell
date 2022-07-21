import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (<>

        <footer className="site-footer">
            <div className="container">
                <ul className="site-footer__primary-nav">
                    <li>
                        <Link to="/"  >Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/" >Cookies</Link>
                    </li>
                </ul>
                <ul className="social-nav footer-right-nav">
                    <li className="crm-form">
                        <Link to="/"
                            className="use-ajax1 feed-crm-pop_open footer-connect">
                            Subscribe</Link>
                    </li>
                    <li className="social-list">
                        <Link to="/" >
                            Connect</Link>
                    </li>
                    <li className="country-list">
                        <Link to="/"   >
                            Location</Link>
                    </li>
                </ul>

            </div>
        </footer>

    </>)
}

export default Footer