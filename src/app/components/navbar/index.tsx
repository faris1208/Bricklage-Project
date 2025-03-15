"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../navbar/styles.module.scss";
import Image from "next/image";
import logo from "../../../../public/assets/images/bricklage-logo.svg";
import menu from "../../../../public/assets/images/heroicons-outline_menu-alt-3.svg";
import exit from "../../../../public/assets/images/hmaburger.svg";
import ListingNavbar from "../listing-navbar";

const NavBar: React.FC = () => {
  const [color, setColor] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(true);
  const pathname = usePathname(); 

  const toggleMenu = (): void => {
    setMobile((open) => !open);
  };

  const changeColor = useCallback((): void => {
    setColor(window.scrollY >= 510);
    if (!mobile) {
      setMobile(true);
    }
  }, [mobile]);

  useEffect(() => {

    
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, [changeColor]);

  // const handleNavbar = (): void => {
  //   toggleMenu();
  // };

  if (pathname === "/listing-properties") {
    return <ListingNavbar />;
  }

  return (
    <div className={styles.wrapper}>
      <nav className={color ? styles.navbar_bg : styles.navbar}>
        <div className={styles.logo_image}>
          <Link href="/">
            <Image src={logo} alt="logo" width={160} className={styles.logo_img} />
          </Link>
        </div>
        <div className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}>
          <ul>
            <span onClick={toggleMenu}>
              <Image className={styles.exx} src={exit} alt="menu" width={30} />
            </span>
            {/* <li className={pathname === "/about" ? styles.active : ""} onClick={handleNavbar}>
              <Link href="/about">Why Us</Link>
            </li> */}
            <li>Why Us</li>
            <li>About Us</li>
            <li>Property Listing</li>
            <li>FAQs</li>
            {/* <li className={pathname === "/team" ? styles.active : ""} onClick={handleNavbar}>
              <Link href="/team">About Us</Link>
            </li>
            <li className={pathname === "/property-listing" ? styles.active : ""} onClick={handleNavbar}>
              <Link href="/property-listing">Property Listing</Link>
            </li>
            <li className={pathname === "/faqs" ? styles.active : ""} onClick={handleNavbar}>
              <Link href="/faqs">FAQs</Link>
            </li> */}
          </ul>
        </div>
        <div id={styles.Hamburger}>
          <span className="Hamburger span" onClick={toggleMenu}>
            <div className="Hamburger">
              {mobile ? (
                <Image src={menu} alt="menu" width={25} />
              ) : (
                <Image src={exit} alt="menu" width={20} />
              )}
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
