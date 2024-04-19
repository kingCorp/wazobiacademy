'use client';
import React from 'react'
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from 'next/link';
import Image from 'next/image';
import Landing from "@/assets/svgs/land1.svg";
import Learn from "@/assets/svgs/learn.svg";
import Interact from "@/assets/svgs/interact.svg";
import Dance from "@/assets/svgs/dance.svg";
import PlayRead from "@/assets/svgs/playread.svg";
import Guide from "@/assets/svgs/guide.svg";
import Jungle from "@/assets/svgs/jungle.svg";
import Lottie from "lottie-react";
import rabbitani from "@/assets/lottie/Rabbit.json"
import booksani from "@/assets/lottie/Book.json";
import saanuani from "@/assets/lottie/Saanu.json"
import ekaroani from "@/assets/lottie/Ekaaro.json"



export default function Home() {

  return (
    <div>
      <Navbar />
      <div className={`${styles.frame1container}`}>
        <div className='max-w-screen-xl mx-auto relative flex justify-between isolate px-6 py-8 lg:px-2 lg:px-8'>
          <div className="flex flex-col justify-center gap-6 items-center text-center lg:text-left lg:items-stretch">
            <p className="lg:text-5xl text-3xl text-white font-bold">
              A Wonderland of Learning
            </p>
            <p className="text-xl lg:text2xl text-white font-medium">
              Welcome to WazobiAcademy where Every Lesson is an Adventure
            </p>
            <div className='mt-4'>
              <Link style={{ color: '#009B77' }} className="text-xl font-medium rounded-xl p-4 px-12 bg-white " href="/login">Start Exploring</Link>
            </div>
          </div>
          <div>
            <Image className={`${styles.img} hidden lg:block`} src={Landing} alt="" />
            <div className='flex gap-x-4 justify-evenly'>
              <Lottie animationData={ekaroani} loop={true} style={{ width: '100px', height: '100px' }} className='hidden lg:flex' />
              <Lottie animationData={saanuani} loop={true} style={{ width: '100px', height: '100px' }} className='hidden lg:flex' />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto relative bg-white flex justify-between isolate px-6 py-8 lg:py-16'>
        <div className="flex flex-col items-center">
          <h1 className="text-center lg:text-5xl text-3xlfont-bold">
            Unlock a Universe of Knowledge
          </h1>
          <p className="text-center text-2xl mt-4">
            Where learning meets fun
          </p>
          <div className="flex flex-col justify-between items-center gap-x-8 mt-12 lg:flex-row">
            <div className="items-center justify-center py-2">
              <Image src={Interact} alt="" className="object-cover w-full h-72 rounded-2xl" />
              <p className={styles.frame2cardtitle}>Interactive Learning</p>
              <p className={styles.frame2carddesc}>Discover the beauty of Nigerian languages.</p>
            </div>
            <div className="items-center justify-center py-2">
              <Image src={Dance} alt="" className="object-cover w-full h-72 rounded-2xl" />
              <p className={styles.frame2cardtitle}>Musical Journey</p>
              <p className={styles.frame2carddesc}>Experience the rhythmic beats and melodies of Nigerian music.</p>
            </div>
            <div className="items-center justify-center py-2">
              <Image src={Learn} alt="" className="object-cover w-full h-72 rounded-2xl" />
              <p className={styles.frame2cardtitle}>Cultural Understanding</p>
              <p className={styles.frame2carddesc}>Immerse yourself in the enchanting world of Nigerian folklore.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative isolate my-12'>
        <Image src={PlayRead} alt="" className="object-cover h-40 w-full" />
      </div>

      <div className='max-w-screen-xl mx-auto relative bg-white flex justify-between isolate px-6 py-8 gap-x-6 lg:py-16'>
        <div className="flex flex-col justify-around">
          <p className="lg:text-5xl text-3xl font-bold mb-8">
            Join the Excelling Child
          </p>
          <p className="text-2xl mb-6">
            Create a free account on WazobiAcademy
          </p>
          <p className="text-2xl mb-6">
            Add a profile or multiple profiles for your child or children
          </p>
          <p className="text-2xl mb-6">
            Dive into our interactive lessons, videos, and cultural resources
          </p>
          <p className="text-2xl mb-6">Monitor your child&apos;s learning journey and track their Progress </p>
        </div>
        <div className="hidden lg:block">
          <Image src={Guide} alt="" className={styles.frame4img} />
        </div>
      </div>

      <div style={{ backgroundColor: '#009B77' }}>
        <div className='max-w-screen-xl mx-auto relative flex justify-between isolate px-6 py-8 gap-x-6 lg:py-24'>
          <Image src={Jungle} alt="" width={550} height={300} className="hidden lg:flex" />
          <div className="flex flex-col justify-center">
            <p className="lg:text-4xl text-3xl text-white font-bold mb-8">
              Our Vision
            </p>
            <p className="lg:text-2xl text-lg text-white">
              Our vision is to empower Nigerian children worldwide with the knowledge that define our diverse and dynamic nation.
              Through engaging lessons, and immersive experiences,
              we aim to instill a sense of pride and belonging in every young learner.
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto relative flex justify-between items-center isolate px-6 py-8 gap-x-6 lg:py-24'>
        <Lottie animationData={rabbitani} loop={true} style={{ width: '30%', height: '30%' }} className='hidden lg:flex' />
        <div className="flex flex-col items-center">
          <p className="lg:text-4xl text-2xl font-bold mb-4 text-center">
            Start Your Adventure Today
          </p>
          <p className="text-lg mb-8 text-center">
            Join us at WazobiAcademy and unlock the door to a world of endless possibilities, where learning is fun, and every child has the opportunity to shine
          </p>
          <Link style={{ backgroundColor: '#009B77' }} className="text-white text-lg rounded-xl py-2 px-12 font-semibold" href="/login">Start Exploring</Link>
        </div>
        <Lottie animationData={booksani} loop={true} style={{ width: '30%', height: '30%' }} className='hidden lg:flex' />
      </div>
      <Footer />
    </div>
  )
}
