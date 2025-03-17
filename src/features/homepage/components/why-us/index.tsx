import React from "react";
import styles from "../why-us/styles.module.scss";
import Image from "next/image";
import man from "../../../../../public/assets/images/Frame 1686562112.png";
import three from "../../../../../public/assets/images/three.webp";
import two from "../../../../../public/assets/images/two.webp";

export default function WhyUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.installment}>
        <div className={styles.installment_text}>
          <p>Why Buy Land on Installments?</p>
          <h1>Your dream home, your timeline</h1>
          <p>
            <span>
              trusted guidance, expert advice, and a commitment to helping you
              achieve your goals, while eliminating the stress, uncertainty, and
              delays often associated with real estate transactions
            </span>
          </p>
        </div>
        <div className={styles.man_box}>
          <div className={styles.man_image}>
            <Image
              src={two}
              alt="people"
              width={180}
              height={130}
              className={styles.man_img}
            />
          </div>
          <div className={styles.man_image}>
            <Image
              src={man}
              alt="people"
              width={180}
              height={130}
              className={styles.man_img}
            />
          </div>
          <div className={styles.man_image}>
            <Image
              src={three}
              alt="people"
              width={180}
              height={130}
              className={styles.man_img}
            />
          </div>
        </div>
        <div className={styles.start}>
          <h3>Start with as low as ₦40,000 / month</h3>
        </div>
      </div>
      <div className={styles.affordability}>
          <div className={styles.affordability_box}>
            <h6>Affordability</h6>
            <p>
              Discover the power of installment plans in breaking down financial
              barriers and unlocking the door to property ownership, with expert
              insights and real-world examples
            </p>
          </div>
          <div className={styles.affordability_box_two}>
            <h6>Affordability</h6>
            <p>
              Discover the power of installment plans in breaking down financial
              barriers and unlocking the door to property ownership, with expert
              insights and real-world examples
            </p>
          </div>
          <div className={styles.affordability_box_three}>
            <h6>Affordability</h6>
            <p>
              Discover the power of installment plans in breaking down financial
              barriers and unlocking the door to property ownership, with expert
              insights and real-world examples
            </p>
          </div>
      </div>

      {/* <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={pin} alt="Target Icon" width={30} height={30} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>AFFORDABILITY</h3>
          <p className={styles.description}>
            Discover the power of installment plans in breaking down financial
            barriers and unlocking the door to property ownership, with expert
            insights and real-world examples.
          </p>
        </div>
      </div> */}
    </div>
  );
}
