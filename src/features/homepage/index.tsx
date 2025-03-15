// import { LocationIcon, VerifiedIcon } from '@/app/components/icons/icons'
import React from 'react'
import HeroSection from './components/hero-section'
import WhyUs from './components/why-us'
import styles from "../homepage/styles.module.scss"
import AboutUs from './components/about-us'
import PropertyListing from './components/property-listing'
import Faq from './components/faq'
import NavBar from '@/app/components/navbar'

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className={styles.container}>
        <WhyUs />
        <AboutUs />
      </div>
      {/* <HouseCard housePics={house.src}  /> */}
      <PropertyListing />
      <Faq />
        
    </div>
  )
}
