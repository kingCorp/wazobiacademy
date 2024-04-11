"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
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
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>


      <div className={styles.body1}>
        {/* <p>Welcome to WazobiAcademy</p> */}
        {/* <Image
          src={SignupImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.signupimg}
        /> */}
      </div>
      <div className={styles.body}>
        <div>
          <p className={styles.title}>{success ? success : "Welcome Back"}</p>
          <p className={styles.subtitle}>Please sign in to see the dashboard.</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              className={styles.input}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              className={styles.input}
            />
            <button className={styles.button}>Sign in</button>
            {error && "Something went wrong!"}
          </form>
          <p className={styles.or}>- or -</p>

          {/* <button
            onClick={() => {
              signIn("google");
            }}
            className={styles.button + " " + styles.google}
          >
            Login with Google
          </button> */}
          <Link className={styles.loginlink} href="/dashboard/register">
            Create a account <span style={{ color: '#009B77' }}>Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
