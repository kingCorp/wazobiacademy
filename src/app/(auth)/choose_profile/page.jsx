"use client";
import React, { useCallback, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Planet from "../../../../public/svgs/planet.svg";
import Dino from "../../../../public/svgs/dino.svg";
import Rocket from "../../../../public/svgs/rocket.svg";
import Rainbow from "../../../../public/svgs/rainbow.svg";
import Plus from "../../../../public/svgs/Plus.svg";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const children = [];
const ChooseProfile = () => {
  const session = useSession();
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("2018-04-18");
  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (session.status === "unauthenticated") {
  //   router?.push("/dashboard/login");
  // }

  const handleProfile = () => {
    router?.push("/dashboard");
  };

  const handleAddChild = useCallback(() => {
    children.push({
      name,
      dob,
    });
    setOpenModal(false);
    setName("");
    setDob("");
  }, [name, dob]);

  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setDob("");
  }

  console.log(children, name, dob);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-white flex flex-col items-center justify-center lg:shadow lg:w-4/5 lg:h-4/5 p-4">
        <p className="text-3xl font-semibold my-8">Who is Learning</p>
        <p className="text-xl font-medium my-4 text-center">
          Select Who is Learning at the moment
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 my-16">
          {children.map((child, index) => (
            <div onClick={handleProfile} key={index}>
              <div className="rounded-full bg-green-600 w-28 h-28 flex justify-center items-center">
                <p className="text-white text-8xl font-normal">
                  {child.name.charAt(0).toUpperCase()}
                </p>
              </div>
              <p className="text-xl my-2 text-center">{child.name}</p>
            </div>
          ))}
          <div>
            <button
              onClick={() => setOpenModal(true)}
              className={`p-6 rounded-3xl ${styles.myaddbtn}`}
            >
              <Image src={Plus} height={55} width={55} />
            </button>
            <p className="text-xl my-2 text-center">Add profile</p>
          </div>
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        dismissible
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center">
              {"Enter the child’s details"}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                placeholder="Enter child name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="p-3 bg-transparent border border-slate-400 rounded-lg"
              />
              <label htmlFor="password">Date of Birth</label>
              <input
                type="date"
                placeholder="20-04-2018"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                required
                className="p-3 bg-transparent border border-slate-400 rounded-lg"
              />
              <button onClick={handleAddChild} className={styles.button}>
                Continue
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChooseProfile;
