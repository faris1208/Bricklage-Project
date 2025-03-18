"use client"
import React, { useEffect, useState } from "react";
import styles from "../hero-section/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import house from "../../../../../public/assets/images/hero-house.svg"

const images = [
  "/assets/images/background-two.webp",
  "/assets/images/hero-section-img.webp",
  "/assets/images/background-three.webp",
  // "/assets/images/hero-section-img.webp",
];

export default function HeroSection() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.background_image} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
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
