"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Choose from "../../../../public/svgs/choose.svg";
import AddchildImage from "../../../../public/svgs/addchild.svg";
import Congratschild from "../../../../public/svgs/congratsaddchild.svg";
import Child1 from "../../../../public/svgs/child1.svg";
import Child2 from "../../../../public/svgs/child2.svg";
import Child3 from "../../../../public/svgs/child3.svg";
import Child4 from "../../../../public/svgs/child4.svg";
import Planet from "../../../../public/svgs/planet.svg";
import Dino from "../../../../public/svgs/dino.svg";
import Rocket from "../../../../public/svgs/rocket.svg";
import Rainbow from "../../../../public/svgs/rainbow.svg";



const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [congrats, setCongrats] = useState(null)
  const [addChild, setAddchild] = useState(null)


  // useEffect(() => {
  //   setError(params.get("error"));
  //   setSuccess(params.get("success"));
  // }, [params]);

  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (session.status === "authenticated") {
  //   router?.push("/dashboard");
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    router?.push("/dashboard");
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    // signIn("credentials", {
    //   email,
    //   password,
    // });
  };

  return (

    <div className={styles.container}>
      <div className={styles.bodycontainer}>
        <div style={{ backgroundColor: '#F5F5F5' }}>
          <div className={styles.body1}>
            <div className={styles.imgcont}>
              {!addChild && !congrats && (
                <Image
                  src={Choose}
                  height={500}
                  width={300}
                />
              )}
              {addChild && (
                <Image
                  src={AddchildImage}
                  height={500}
                  width={300}
                />
              )}
              {congrats && (
                <Image
                  src={Congratschild}
                  height={500}
                  width={300}
                />
              )}
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#FFF', display: 'flex' }}>
          <div className={styles.body}>
            {!addChild && !congrats && (
              <div>
                <div className={styles.avatarcont}>
                  <Image
                    src={Child1}
                    height={100}
                    width={100}
                  />
                  <Image
                    src={Child2}
                    height={100}
                    width={100}
                  />
                  <Image
                    src={Child3}
                    height={100}
                    width={100}
                  />
                  <Image
                    src={Child4}
                    height={100}
                    width={100}
                  />
                </div>
                <div className={styles.semibody}>
                  <p className={styles.title}>Who is Learning</p>
                  <p className={styles.subtitle}>Create a profile for each child.</p>
                  <button className={styles.button} onClick={() => setAddchild(true)}>Add profile</button>
                </div>
              </div>
            )}

            {addChild && (
              <div className={styles.semibody}>
                <p className={styles.title}>{"Enter the child’s details"}</p>
                <div className={styles.formbodykids}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className={styles.input}
                  />
                  <label htmlFor="password">Date of birth</label>
                  <input
                    type="date"
                    placeholder="01 - 01 - 20012"
                    required
                    className={styles.input}
                  />
                </div>
                <button className={styles.button} onClick={() => {
                  setCongrats(true);
                  setAddchild(false);
                }}>Continue</button>
              </div>
            )}

            {congrats && (
              <div className={styles.semibody}>
                <div className={styles.bigdot}></div>
                <p className={styles.title} style={{ textAlign: 'center' }}>Congratulations</p>
                <p className={styles.subtitle} style={{ textAlign: 'center', width: '50%' }}>{"Your child’s profile has been set up successfully. Click continue and start learning."}</p>
                <button className={styles.button} onClick={() => router?.push("/dashboard")}>Continue</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
