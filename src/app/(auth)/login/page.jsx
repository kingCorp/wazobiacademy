"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SignupImage from "../../../../public/images/signup@3x.png";
import Logo from "../../../../public/svgs/logo.svg";
import Googleicon from "../../../../public/svgs/googleicon.svg";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    router?.push("/choose_profile");
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    // signIn("credentials", {
    //   email,
    //   password,
    // });
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
        <Image
          src={Logo}
          alt=""
          className="h-12 w-auto lg:hidden self-center my-8"
        />
        <div className="mx-4 px-8">
          <p className="text-3xl font-bold">
            {success ? success : "Welcome Back"}
          </p>
          <p className="text-lg font-normal my-8">
            Please sign in to see the dashboard.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
        <Link className="text-base items-center py-8" href="/register">
          {"Don't have an account? "}  <span style={{ color: "#009B77" }}>Signup</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
