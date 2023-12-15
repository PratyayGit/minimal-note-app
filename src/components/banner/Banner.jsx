import React from "react";
import styles from "./Banner.module.css";
import banner from "../../assets/images/banner.png";
import Enclock from "../../assets/icons/lock.png";

const Banner = () => {
  return (
    <div className={styles.banner_section}>
      <img src={banner} alt="bannerImage" />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online.
        <br /> 
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={styles.encryption}>
        <img src={Enclock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
};

export default Banner;
