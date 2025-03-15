"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../listing-navbar/styles.module.scss";
import Image from "next/image";
import logo from "../../../../public/assets/images/bricklage-logo.svg";
import menu from "../../../../public/assets/images/hmaburger.svg";

const ListingNavbar: React.FC = () => {
  const [mobile, setMobile] = useState<boolean>(true);
  const pathname = usePathname(); 

  const toggleMenu = (): void => {
    setMobile((open) => !open);
  };

   const changeColor = useCallback((): void => {
      // setColor(window.scrollY >= 510);
      if (!mobile) {
        setMobile(true);
      }
    }, [mobile]);

      useEffect(() => {
    
        
        window.addEventListener("scroll", changeColor);
        return () => window.removeEventListener("scroll", changeColor);
      }, [changeColor]);

 

  const handleNavbar = (): void => {
    toggleMenu();
  };


  return (
      <nav className={styles.navbar}>
        <div className={styles.logo_image}>
          <Link href="/">
            <Image src={logo} alt="logo" width={160} className={styles.logo_img} />
          </Link>
        </div>
        <div className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}>
          <ul>
            <span onClick={toggleMenu}>
              <Image className={styles.exx} src={menu} alt="menu" width={30} />
            </span>
            <li className={pathname === "/about" ? styles.active : ""} onClick={handleNavbar}>
              <Link href="/">Property list</Link>
            </li>
            <li className={pathname === "/team" ? styles.active : ""} onClick={handleNavbar}>
              <Link href="/">Services</Link>
            </li>
            <li className={pathname === "/property-listing" ? styles.active : ""} onClick={handleNavbar}>
              <Link href="/">About Us</Link>
            </li>
          </ul>
          <div>
            <button>Contact us</button>
          </div>
        </div>
        <div id={styles.Hamburger}>
          <span className="Hamburger span" onClick={toggleMenu}>
            <div className="Hamburger">
              {mobile ? (
                <Image src={menu} alt="menu" width={25} />
              ) : (
                <Image src={menu} alt="menu" width={20} />
              )}
            </div>
          </span>
        </div>
      </nav>
  );
};

export default ListingNavbar;
