"use client";
import React from "react";
import styles from "../available-listing/styles.module.scss";
import { availableListing } from "@/features/homepage/components/data";
import HouseCard from "@/app/components/house-card";
import Pagination from "../pagination";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import ListingNavbar from "@/app/components/listing-navbar";

interface AvailableListingProps {
  selectedLocation: string;
  selectedProperty: string;
  selectedPrice: string;
}

const convertPriceToNumber = (price: string) => {
  if (!price) return 0; 

  const cleanedPrice = price.replace(/\D/g, ""); 

  if (price.includes("Million")) {
    return parseInt(cleanedPrice, 10) * 1000000;
  }
  return parseInt(cleanedPrice, 10);
};

export default function AvailableListing({ selectedLocation, selectedProperty, selectedPrice }: AvailableListingProps) {
  const pathname = usePathname();
  const { id } = useParams();

  if (pathname === `/listing-properties/${id}`) {
    return <ListingNavbar />;
  }

  const selectedPriceNum = convertPriceToNumber(selectedPrice);

  const filteredListings = availableListing.filter((house) => {
    const housePriceNum = Number(house.amount);

    return (
      (!selectedLocation || house.location === selectedLocation) &&
      (!selectedProperty || house.apartment === selectedProperty) &&
      (!selectedPrice || housePriceNum <= selectedPriceNum || selectedPrice === "Above")
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.house_card}>
        {filteredListings.length > 0 ? (
          filteredListings.map((house) => (
            <div key={house.id} className={styles.house_card_box} style={{ cursor: "pointer" }}>
              <Link href={`/listing-properties/${house.id}`}>
                <HouseCard
                  housePics={house.housePics}
                  field={house.field}
                  location={house.location}
                  apartment={house.apartment}
                  amount={house.amount}
                  square={String(house.square)}
                />
              </Link>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No listings match your criteria.</p>
        )}
      </div>
      <div>
        <Pagination totalPages={2} />
      </div>
    </div>
  );
}
