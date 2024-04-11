import Image from "next/image";
import styles from "./page.module.css";
import Landing from "../../public/landing.png";
import Learn from "../../public/learn@3x.png";
import Interact from "../../public/interact@3x.png";
import Dance from "../../public/dance@3x.png";
import PlayRead from "../../public/PlayRead@3x.png";
import Guide from "../../public/Guide@3x.png";
import Jungle from "../../public/jungle@3x.png";
import Bookstar from "../../public/bookstar@3x.png";
import Animal from "../../public/animalpet@3x.png";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar />
      <div className={styles.frame1container}>
        <div className={styles.frame1body}>
          <div className={styles.frame1item}>
            <h1 className={styles.frame1title}>
              A Wonderland of Learning
            </h1>
            <p className={styles.frame1desc}>
              Welcome to WazobiAcademy where Every Lesson is an Adventure
            </p>
            <Link className={styles.explore} href="/dashboard/login">Start Exploring</Link>
          </div>
          <div className={styles.frame1item}>
            <Image src={Landing} alt="" className={styles.img} />
          </div>
        </div>
      </div>

      <div className={styles.frame2container}>
        <div className={styles.frame2body}>
          <h1 className={styles.frame2title}>
            Unlock a Universe of Learning
          </h1>
          <p className={styles.frame2desc}>
            Where learning meets fun
          </p>
          <div className={styles.frame2cardcontainer}>
            <div className={styles.frame2cardbody}>
              <Image src={Interact} alt="" className={styles.frame2cardimg} />
              <p className={styles.frame2cardtitle}>Interactive Learning</p>
              <p className={styles.frame2carddesc}>Discover the beauty of Nigerian languages.</p>
            </div>
            <div>
              <Image src={Dance} alt="" className={styles.frame2cardimg} />
              <p className={styles.frame2cardtitle}>Musical Journey</p>
              <p className={styles.frame2carddesc}>Experience the rhythmic beats and melodies of Nigerian music.</p>
            </div>
            <div>
              <Image src={Learn} alt="" className={styles.frame2cardimg} />
              <p className={styles.frame2cardtitle}>Cultural Understanding</p>
              <p className={styles.frame2carddesc}>Immerse yourself in the enchanting world of Nigerian folklore.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.frame3container}>
        <Image src={PlayRead} alt="" className={styles.frame3img} />
      </div>

      <div className={styles.frame4container}>
        <div className={styles.frame4body}>
          <div className={styles.frame4item}>
            <h1 className={styles.frame4title}>
              Join the Excelling Child
            </h1>
            <p className={styles.frame4desc}>
              Create a free account on WazobiAcademy
            </p>
            <p className={styles.frame4desc}>
              Add a profile or multiple profiles for your child or children
            </p>
            <p className={styles.frame4desc}>
              Dive into our interactive lessons, videos, and cultural resources
            </p>
            <p className={styles.frame4desc}>Monitor your child's learning journey and track their Progress </p>
          </div>
          <div className={styles.frame4item}>
            <Image src={Guide} alt="" className={styles.frame4img} />
          </div>
        </div>
      </div>


      <div className={styles.frame5container}>
        <div className={styles.frame5body}>
          <div className={styles.frame5item}>
            <Image src={Jungle} alt="" className={styles.frame5img} />
          </div>
          <div className={styles.frame5item}>
            <p className={styles.frame5title}>
              Our Vision
            </p>
            <p className={styles.frame5desc}>
              Our vision is to empower Nigerian children worldwide with the knowledge that define our diverse and dynamic nation.
              Through engaging lessons, and immersive experiences,
              we aim to instill a sense of pride and belonging in every young learner.
            </p>
          </div>
        </div>
      </div>


      <div className={styles.frame4container}>
        <div className={styles.frame6body}>
          <div className={styles.frame6item}>
            <Image src={Animal} alt="" className={styles.frame6img} />
          </div>
          <div className={styles.frame6itemtext}>
            <p className={styles.frame6title}>
              Start Your Adventure Today
            </p>
            <p className={styles.frame6desc}>
              Join us at WazobiAcademy and unlock the door to a world of endless possibilities, where learning is fun, and every child has the opportunity to shine
            </p>
            <Link className={styles.explore2} href="/dashboard/login">Start Exploring</Link>
          </div>
          <div className={styles.frame6item}>
            <Image src={Bookstar} alt="" className={styles.frame6img} />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
