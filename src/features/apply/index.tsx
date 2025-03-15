"use client";
import React from "react";
import styles from "../apply/styles.module.scss";
import {
  CheckIcon,
  HouseIcon,
  LocationIcon,
} from "@/app/components/icons/icons";
import Image from "next/image";
import check from "../../../public/assets/images/check.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import ListingNavbar from "@/app/components/listing-navbar";

export default function Apply() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <ListingNavbar />
      <div className={styles.apply_apply}>
        <div className={styles.backButton} onClick={() => router.back()}>
          <FaArrowLeft className={styles.icon} />
          <p>Apply</p>
        </div>
        <h1>Installment Plan Application Form</h1>
      </div>
      <div className={styles.apply_now}>
        <div className={styles.apply_now_form}>
          <p>Apply Now</p>
          <p>
            <span>
              Fill in your details to get started with a flexible installment
              plan that suits your budget. Our team will guide you through your
              financing options.
            </span>
          </p>
          <form className={styles.form}>
            <div className={styles.form_form}>
              <div className={styles.form_label}>
                <label htmlFor="">
                  First Name<span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className={styles.form_label}>
                <label htmlFor="">
                  Last Name<span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className={styles.form_label}>
                <label htmlFor="">
                  Phone Number<span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className={styles.form_label}>
                <label htmlFor="">
                  Email Address<span>*</span>
                </label>
                <input type="email" />
              </div>
              <div className={styles.form_label}>
                <label htmlFor="">
                  Preferred Down Payment<span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className={styles.form_label}>
                <label htmlFor="">
                  Preferred Installmental Duration<span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.submit_btn}>
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className={styles.props_details}>
          <div className={styles.props_details_box}>
            <div className={styles.props_text}>
              <p>Property Details</p>
            </div>
            <div className={styles.card_box}>
              <div className={styles.card_box_contents}>
                <h4>GBAGADA - PHASE 1</h4>
                <div className={styles.check_box}>
                  <div className={styles.check_image}>
                    <Image
                      src={check}
                      alt="check"
                      width={14}
                      height={14}
                      className={styles.check_img}
                    />
                  </div>
                  <p>Legally Approved</p>
                </div>
              </div>
              <div className={styles.location_container}>
                <div className={styles.location_box}>
                  <LocationIcon />
                  <p>Lekki Penninsula II</p>
                </div>
                <div className={styles.location_box}>
                  <HouseIcon />
                  <p>3 Bedroom Duplex</p>
                </div>
                <div className={styles.location_box}>
                  <CheckIcon />
                  <p>
                    From <span>NGN 512,347 </span>
                  </p>
                </div>
                <div className={styles.location_box}>
                  <LocationIcon />
                  <p>3 bed(s) </p>
                </div>
              </div>
            </div>
            <div className={styles.featured_available}>
              <p>Features Available</p>
              <ul>
                <li>Power supply</li>
                <li>Parking Space</li>
                <li>Security & 24/7 Support</li>
                <li>Estate Services</li>
                <li>Water Supply</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
