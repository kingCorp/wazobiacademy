import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerbody}>
        <div>
          <span style={{ color: '#fff', fontSize: '18px', }}>©2024 </span>
          <Link href="/" className={styles.logo}>
            WazobiAcademy
          </Link><span style={{ color: '#fff', fontSize: '18px', }}> All rights reserved.</span>
        </div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
