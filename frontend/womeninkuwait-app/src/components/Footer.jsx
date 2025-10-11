import React from "react";
import { Link } from 'react-router-dom'; 
import "../Footer.css"; 
import logo from "../assets/logo1.png"; 
import qayu from '../assets/qayu-logo.png';

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Group 1: Logo, email link, and social icons */}
        <div className="footer-info">
          <img
            src={logo}
            alt="Women in Kuwait Logo"
            className="footer-logo-img"
          />
          <a
            href="mailto:Info@womenkuwait.com"
            className="footer-email-link"
          >
            Email Us
          </a>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/women.kuwait?igsh=MXcyNWcyOWRjaDNtcw=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/*
            <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a> */}
            <a
              href="https://www.facebook.com/profile.php?id=61581669475386"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Group 2: All navigation links */}
        <div className="footer-navigation">
          <div className="footer-links-column">
            <h3>Get Involved</h3>
            <ul>
              <li>
                <Link to="/join">Join the Network</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/GyFp4URw9m6WLnZX6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-getdirection"
                >
                  Get direction <span className="arrow" ></span>
                </a>
              </li>
                
        
            </ul>
          </div>
          <div className="footer-links-column">
            <h3>Support</h3>
            <ul>
              <li>
                <Link to="/partner">Partner With Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <a href="tel:+971526260940" className="footer-phone">
                  Talk to Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Women Kuwait. All rights reserved.</p>
        <div className="footer-managed-by">
        <span>Created & Managed by</span>
        <a href="https://qayudigital.com/" target="_blank" rel="noopener noreferrer">
          <img src={qayu} alt="QAYU Digital Logo" className="qayu-logo" />
        </a>
      </div>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to ="/policy">Privacy Policy</Link>
        </div>
      </div>
      
    </footer>
  );
}