"use client";
import React from "react";
import MySidebar from "@/components/sidebar/MySidebar";
import MyHeadernav from "@/components/headernav/MyHeadernav";

const Dashlayout = ({ children }) => {
  return (
    <div className="flex">
      <MySidebar />
      <div className="flex-1 md:flex h-screen relative">
        <MyHeadernav />
        {children}
      </div>
    </div>
  );
};

export default Dashlayout;
