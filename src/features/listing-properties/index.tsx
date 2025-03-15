"use client";
import React, { useState } from "react";
import styles from "../listing-properties/styles.module.scss";
import ListingNavbar from "@/app/components/listing-navbar";
import AvailableListing from "./available-listing";

const locations = [
  "Lekki",
  "Ikoyi",
  "Victoria Island",
  "Ajah",
  "Surulere",
  "Yaba",
  "Magodo",
  "Maryland",
];
const propertyTypes = ["Apartment", "Land"];
const priceRanges = [
  "N250,000",
  "N500,000",
  "N750,000",
  "N1 Million",
  "N2 Million",
  "N5 Million",
  "N10 Million",
  "N20 Million",
  "N30 Million",
  "Above",
];

export default function ListingProperties() {
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <ListingNavbar />
      <div className={styles.listing_container}>
        <p>
          EXPLORE <span>BRICKLAGE</span>
        </p>
        <h2>Available Listings</h2>

        <div className={styles.dropdownContainer}>
          <div
            className={styles.dropdown}
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            <div className={styles.selected}>
              {selectedLocation || "Select Location"}
            </div>
            {isLocationOpen && (
              <ul className={styles.options}>
                {locations.map((loc, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setIsLocationOpen(false);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className={styles.dropdown}
            onClick={() => setIsPropertyOpen(!isPropertyOpen)}
          >
            <div className={styles.selected}>
              {selectedProperty || "Select property type"}
            </div>
            {isPropertyOpen && (
              <ul className={styles.options}>
                {propertyTypes.map((property, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedProperty(property);
                      setIsPropertyOpen(false);
                    }}
                  >
                    {property}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className={styles.dropdown}
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <div className={styles.selected}>
              {selectedPrice || "Select price range"}
            </div>
            {isPriceOpen && (
              <ul className={styles.options}>
                {priceRanges.map((price, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedPrice(price);
                      setIsPriceOpen(false);
                    }}
                  >
                    {price}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <AvailableListing
        selectedLocation={selectedLocation}
        selectedProperty={selectedProperty}
        selectedPrice={selectedPrice}
      />
    </div>
  );
}
