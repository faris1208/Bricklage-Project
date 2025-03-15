"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../image-gallery/styles.module.scss"; 
import { images } from "@/features/homepage/components/data";


export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
      <Image className={styles.house_image_big} src={selectedImage.image} alt={`House ${selectedImage.id}`} width={500} height={300} />
        <p className={styles.imageNumber}>{selectedImage.id} of {images.length}</p>
      </div>

      <div className={styles.thumbnails}>
        {images.map((image) => (
          <div
            key={image.id}
            className={`${styles.thumbnail} ${selectedImage.id === image.id ? styles.active : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image  className={styles.house_image_small} src={image.image} alt={`Thumbnail ${image.id}`} width={200} height={150} />
          </div>
        ))}
      </div>
    </div>
  );
}
