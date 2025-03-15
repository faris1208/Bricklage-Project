"use client";
import React from "react";
import styles from "../house-card/styles.module.scss";
import Image, { StaticImageData } from "next/image";
import check from "../../../../public/assets/images/check.svg";
import { CheckIcon, HouseIcon, LocationIcon } from "../icons/icons";

interface Props {
  // id:string;
  housePics: string | StaticImageData;
  field: string;
  location: string;
  apartment?: string
  amount: number | string;
  square: string | number;
}

const HouseCard: React.FC<Props> = ({ housePics, field, location, apartment, amount,square }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.house_img}>
        <Image
          src={typeof housePics === "string" ? housePics : housePics.src}
          alt="Profile Picture"
          className={styles.listing_card_img}
          width={397}
          height={350}
        />
        <div className={styles.card_box}>
          <div className={styles.card_box_contents}>
            <h4>{field}</h4>
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
              <LocationIcon className={styles.locate} />
              <p>{location}</p>
            </div>
            <div className={styles.location_box}>
              <HouseIcon />
              <p>{apartment}</p>
            </div>
            <div className={styles.location_box}>
              <CheckIcon />
              <p>From <span>{amount}</span></p>
            </div>
            <div className={styles.location_box}>
              <LocationIcon />
              <p>{square}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
