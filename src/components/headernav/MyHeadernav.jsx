"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Notification from "../../../public/svgs/notification.svg";
import Settings from "../../../public/svgs/setting.svg";
import Searchicon from "../../../public/svgs/search-icon.svg";

import React from "react";
import Image from "next/image";

const MyHeadernav = () => {
  const session = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-100 absolute h-20 w-full flex justify-between items-center p-4">
    <div className="relative">
      <div className="relative flex items-center justify-between bg-white rounded-3xl w-96">
        <input
          type="text"
          placeholder="search"
          className="rounded-3xl text-base border-none"
        />
        <Image
          src={Searchicon}
          height={24}
          width={24}
          style={{ paddingRight: "10px" }}
        />
      </div>
    </div>
    <div className="flex justify-center items-center gap-4">
      <Image src={Notification} height={24} width={24} />
      <Image src={Settings} height={24} width={24} />
    </div>
  </div>
  );
};

export default MyHeadernav;
