"use client"
import React, { useRef, useState } from "react";
import styles from "../property-listing/syles.module.scss";
import Image from "next/image";
import icon from "../../../../../public/assets/images/icon-park-outline_search.svg";
import money from "../../../../../public/assets/images/healthicons_money-bag-outline.svg";
import { homePageListing } from "../data";
import HouseCard from "@/app/components/house-card";
import Link from "next/link";
import left from "../../../../../public/assets/images/Vector (14).svg";
import right from "../../../../../public/assets/images/Vector (15).svg";

export default function PropertyListing() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState<"left" | "right" | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 600; 
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setActiveButton(direction);
    }
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.property_wrapper}>
        <div className={styles.property_container}>
          <p>Property listing</p>
          <h1>
            Find incredible spaces with <br /> Bricklage and enjoy flexible
            monthly payments.
          </h1>
        </div>
        <div className={styles.btn_listing}>
          <Link href={"/listing-properties"}>
            <button>View all listing</button>
          </Link>
        </div>
      </div>
      <div className={styles.calculate_wrapper}>
        <p>See How Affordable Land Ownership Can Be!</p>
        <div className={styles.calculate_container}>
          <div className={styles.calculate_box}>
            <div className={styles.calculate_calculate}>
              <div className={styles.calculate_input}>
                <input
                  type="text"
                  placeholder="Enter your budget to get an estimate breakdown"
                />
                <Image
                  src={money}
                  alt="icon"
                  width={24}
                  height={24}
                  className={styles.money_icon}
                />
              </div>
              <div className={styles.calculate_button}>
                <Image
                  src={icon}
                  alt="icon"
                  width={18}
                  height={18}
                  className={styles.search_icon}
                />
                <button>Calculate</button>
              </div>
            </div>
          </div>
          <div className={styles.arrow_box_container}>
            <div  className={`${styles.arrow_box} ${
                activeButton === "left" ? styles.active : styles.inactive
              }`}  onClick={() => scroll("left")}>
              <Image src={left} alt="left" width={50} height={30}  className={styles.arrow_left}/>
            </div>
            <div className={`${styles.arrow_box} ${
                activeButton === "right" ? styles.active : styles.inactive
              }`}  onClick={() => scroll("right")}>
              <Image src={right} alt="left" width={50} height={30}  className={styles.arrow_left}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.house_card}  ref={scrollRef}>
        {homePageListing.map((tech, index) => (
          <div key={index} className={styles.house_card_box}>
            <HouseCard
              housePics={tech.housePics}
              field={tech.field}
              location={tech.location}
              apartment={tech.apartment}
              amount={Number(tech.amount)}
              square={String(tech.square)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
