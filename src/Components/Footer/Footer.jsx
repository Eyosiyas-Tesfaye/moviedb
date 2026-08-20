import React from "react";
import styles from "./Footer.module.css";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const footerLinks = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Media */}
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialLink} aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" className={styles.socialLink} aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" className={styles.socialLink} aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="#" className={styles.socialLink} aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linksContainer}>
          {footerLinks.map((column, index) => (
            <div className={styles.linkColumn} key={index}>
              {column.map((link) => (
                <a href="#" className={styles.footerLink} key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
