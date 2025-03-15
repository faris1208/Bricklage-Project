"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../property-details/styles.module.scss";
import {
  availableListing,
  recommendedListing,
} from "@/features/homepage/components/data";
import ImageGallery from "../image-gallery";
import { LocationIcon } from "@/app/components/icons/icons";
import HouseCard from "@/app/components/house-card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import ListingNavbar from "@/app/components/listing-navbar";

export default function HouseDetails() {
  const router = useRouter();
  const { id } = useParams() as { id: string }; 
  const house = availableListing.find((item) => item.id === id);

  if (!house) {
    return <h2>House not found</h2>;
  }
  

  return (
    <div className={styles.detailsContainer}>
      <ListingNavbar />
        <div  className={styles.backButton} onClick={() => router.back()}>
        <FaArrowLeft />
            <p>Property detail</p>
        </div>
      <ImageGallery />
      <div className={styles.details_wrapper}>
        <div className={styles.box_one}>
          <div className={styles.lekki}>
            <h2>{house.field}</h2>
            <div className={styles.location_box}>
              <LocationIcon />
              <p>{house.location} Nigeria</p>
            </div>
          </div>
          <div className={styles.descripton}>
            <h2>Descriptions</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl aliquet arcu cursus
              vitae in. Maecenas lacinia lorem laoreet eu sed morbi risus
              ultrices. Lacinia pellentesque neque velit est turpis at. Arcu
              vulputate quisque{" "}
            </p>
          </div>
          <div className={styles.safety_wrapper}>
            <div className={styles.safety_text}>
              <h3>Safety Tips</h3>
            </div>
            <ol>
              <li>
                Do not make any upfront payment without seeing the property.
              </li>
              <li>Ensure you meet the agent in an open location.</li>
              <li>
                Only pay sale fees or any upfront payment after verifying with
                the agent.
              </li>
              <li>
                Bricklage is not liable for any monetary transaction between you
                and the agent.
              </li>
            </ol>
          </div>
          <div className={styles.features}>
            <h2>All Features Available</h2>
            <ul>
              <li>Power supply</li>
              <li>Water Supply</li>
              <li>Security & 24/7 Support</li>
              <li>Parking Space</li>
              <li>Estate Services</li>
              <li>All Room Ensuite</li>
            </ul>
          </div>
        </div>
        <div className={styles.property_prices}>
          <div className={styles.property_wrapper}>
            <div className={styles.property_prices_text}>
              <p>Property Price</p>
              <h3>NGN {house.amount}</h3>
            </div>
            <div className={styles.property_prices_payment}>
              <p>
                <span>Down Payment required</span>
              </p>
              <p>NGN 5,000,000</p>
            </div>
            <div className={styles.property_prices_payment}>
              <p>
                <span>Monthly Installment Breakdown</span>
              </p>
              <p>NGN 32,000 per month</p>
            </div>
            <div className={styles.property_prices_payment}>
              <p>
                <span>Financing Options </span>
              </p>
              <p>NGN 9,937.5</p>
            </div>
            <div className={styles.apply_btn}>
                <Link href={"/apply"}>
              <button>Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recommended}>
        <h2>Recommended Properties</h2>
        <div className={styles.house_card}>
          {recommendedListing.map((house,) => (
            <div
              key={house.id}
              className={styles.house_card_box}
              style={{ cursor: "pointer" }}
            >
              <Link href={`/listing-properties/${house.id}`}>
                <HouseCard
                  housePics={house.housePics}
                  field={house.field}
                  location={house.location}
                  apartment={house.apartment}
                  amount={Number(house.amount)}
                  square={String(house.square)}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.view_all_btn}>
          <Link href={"/listing-properties"}>
            <button>View all properties</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
