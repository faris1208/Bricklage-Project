import React from "react";
import styles from "../footer/styles.module.scss";
import Image from "next/image";
import facebook from "../../../../public/assets/images/faceboks.svg";
import twitter from "../../../../public/assets/images/twitter (2).svg";
import insta from "../../../../public/assets/images/ig.svg";
import linke from "../../../../public/assets/images/linkidin.svg";
import logo from "../../../../public/assets/images/bricklage-logo.svg";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_list}>
          <div className={styles.facebook_icon}>
            <Image
              src={logo}
              alt="facebook"
              width={120}
              height={0}
              className={styles.facebook}
            />
          </div>
          <p>
            <strong>Follow us on</strong>
          </p>
          <div className={styles.footer_list_icon}>
            <div className={styles.facebook_icon}>
              <Image
                src={facebook}
                alt="facebook"
                width={30}
                height={20}
                className={styles.facebook}
              />
            </div>
            <div className={styles.facebook_icon}>
              <Image
                src={twitter}
                alt="facebook"
                width={50}
                height={25}
                className={styles.facebook}
              />
            </div>
            <div className={styles.facebook_icon}>
              <Image
                src={insta}
                alt="facebook"
                width={50}
                height={25}
                className={styles.facebook}
              />
            </div>
            <div className={styles.facebook_icon}>
              <Image
                src={linke}
                alt="facebook"
                width={50}
                height={25}
                className={styles.facebook}
              />
            </div>
          </div>
        </div>
        <div className={styles.footer_footer}>
          <div className={styles.footer_list}>
            <h4>Quick Links</h4>
            <p>Property Listing</p>
            <p>Services</p>
            <p>About Us</p>
          </div>
          <div className={styles.footer_list}>
            <h4>Legal</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQs</p>
          </div>
          <div className={styles.footer_list}>
            <h4>Contact Us</h4>
            <p>pw@gmail.com</p>
            <p>+2249106891234</p>
            <p>+2249106891234</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className={styles.footer_last}>
        <p>Copyright Bricklage 2022. All right reserved</p>
      </div>
    </div>
  );
}
