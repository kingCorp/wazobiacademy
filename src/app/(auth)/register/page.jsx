"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SignupImage from "../../../../public/images/signup@3x.png";
import Googleicon from "../../../../public/svgs/googleicon.svg";
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
          <button onClick={() => {
            signIn("google");
          }} className={styles.button2}>
            <Image
              src={Googleicon}
              style={{ width: 25, height: 25, marginRight: '20px' }}
            />

            Sign in with Google</button>
          <p className={styles.or}>- or -</p>
        </div>
        <Link className={styles.loginlink} href="/login">
          Already have an account <span style={{ color: '#009B77' }}>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
