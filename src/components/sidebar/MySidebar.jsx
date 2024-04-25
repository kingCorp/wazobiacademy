"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Logo from "../../../public/svgs/logo.svg";
import Homeicon from "../../../public/svgs/Home.svg";
import Languageicon from "../../../public/svgs/LanguageSkill.svg";
import Reporticon from "../../../public/svgs/report.svg";

import React from "react";
import Image from "next/image";

const MySidebar = () => {
  const session = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex-none w-1/4 h-screen mx-4">
      <div className="flex">
        <Image
          src={Logo}
          alt=""
          className="h-12 w-auto self-center mb-8 mt-4"
        />
      </div>
      <Link href="/dashboard">
        <div className="flex items-center my-8">
          <Image src={Homeicon} width={36} height={36} />
          <p className="text-xl pl-4">Home</p>
        </div>
      </Link>
      <Link href="#">
        <div className="flex items-center my-8">
          <Image src={Languageicon} width={36} height={36} />
          <p className="text-xl pl-4">Language</p>
        </div>
      </Link>
      <Link href="#">
        <div className="flex items-center my-8">
          <Image src={Reporticon} width={36} height={36} />
          <p className="text-xl pl-4">Reports</p>
        </div>
      </Link>
    </div>
  );
};

export default MySidebar;
