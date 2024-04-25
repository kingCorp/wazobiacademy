"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SignupImage from "../../../../public/images/signup@3x.png";
import Googleicon from "../../../../public/svgs/googleicon.svg";
import Logo from "../../../../public/svgs/logo.svg"
import { useRouter } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState(null);
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    router.push("/login?success=Account has been created");
    // try {
    //   const res = await fetch("/api/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       password,
    //     }),
    //   });
    //   res.status === 201 &&
    //     router.push("/login?success=Account has been created");
    // } catch (err) {
    //   setError(err);
    //   console.log(err);
    // }
  };

  return (
    <div className="block lg:flex xl:flex 2xl:flex justify-center items-center h-screen">
      <div className="h-screen w-screen hidden lg:block xl:block">
        <Image
          src={SignupImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.signupimg}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-screen">
         <Image src={Logo} alt="" className="h-12 w-auto lg:hidden self-center my-8" />
        <div className="mx-4">
          <p className="text-3xl font-bold">Sign up</p>
          <p className="text-lg font-normal my-8">
            Create an account to get access to unlimited learning resources
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="p-3 bg-transparent border border-slate-400 rounded-lg"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 bg-transparent border border-slate-400 rounded-lg"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 bg-transparent border border-slate-400 rounded-lg"
            />
            <button className={styles.button}>Get Started</button>
            {error && "Something went wrong!"}
          </form>
          {/* <button
            onClick={() => {
              signIn("google");
            }}
            className={styles.button2}
          >
            <Image
              src={Googleicon}
              style={{ width: 25, height: 25, marginRight: "20px" }}
            />
            Sign in with Google
          </button> */}
        </div>
        <Link className="text-base items-center py-8" href="/login">
          Already have an account{" "}
          <span style={{ color: "#009B77" }}>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
