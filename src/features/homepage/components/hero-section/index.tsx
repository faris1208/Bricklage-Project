import React from "react";
import styles from "../hero-section/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import house from "../../../../../public/assets/images/hero-house.svg"

export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background_image}>
        <div className={styles.background_overlay}>
          <div  className={styles.hero_wrapper}>
            <div className={styles.hero_text}>
              <h1>Own Your Dream Land with Flexible Installments</h1>
              <p>
                Bricklage is making land ownership accessible with easy,
                structured installment payments.
              </p>
              <div className={styles.hero_buttons}>
                <Link href={"/listing-properties"}>
                  <button>
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.hero_image}>
                <Image
                src={house}
                alt="house"
                width={100}
                height={100}
                className={styles.hero_img}
                 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
