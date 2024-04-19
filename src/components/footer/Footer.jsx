import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Logowhite from "../../../public/svgs/logowhite.svg"

const Footer = () => {
  return (
    <footer className={`${styles.container} flex items-center justify-between p-6 text-white`}>
      <Image src={Logowhite} alt="" className="h-8 w-auto" />
      <div className="flex items-center">
        <Link href="#" className="text-white font-semibold mx-4">Privacy</Link>
        <Link href="#" className="text-white font-semibold mx-4">Contact</Link>
        <Link href="#" className="text-white font-semibold">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
