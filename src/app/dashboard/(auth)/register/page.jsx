"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SignupImage from "../../../../../public/signup@3x.png";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.body1}>
        <p>Welcome to WazobiAcademy</p>
      <Image
            src={SignupImage}
            layout="fill"
            objectFit="cover"
            quality={100}
            className={styles.signupimg}
        />
      </div>
      <div className={styles.body}>
        <div>
          <p className={styles.title}>Sign up</p>
          <p className={styles.subtitle}>Create an account to get access to unlimited learning resources</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className={styles.input}
            />
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
            <button className={styles.button}>Get Started</button>
            {error && "Something went wrong!"}
          </form>
          <p className={styles.or}>- or -</p>
          <Link className={styles.loginlink} href="/dashboard/login">
            Already have an account <span style={{color: '#009B77'}}>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
