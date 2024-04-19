"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Notification from "../../../public/svgs/notification.svg";
import Settings from "../../../public/svgs/setting.svg"
import Searchicon from "../../../public/svgs/search-icon.svg"
import Trend from "../../../public/svgs/trend.svg"
import Homeicon from "../../../public/svgs/Home.svg"
import Languageicon from "../../../public/svgs/LanguageSkill.svg"
import Reporticon from "../../../public/svgs/report.svg"

const Dashboard = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const session = useSession();

  const router = useRouter();

  // //NEW WAY TO FETCH DATA
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, mutate, error, isLoading } = useSWR(
  //   `/api/posts?username=${session?.data?.user.name}`,
  //   fetcher
  // );

  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (session.status === "unauthenticated") {
  //   router?.push("/dashboard/login");
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const title = e.target[0].value;
  //   const desc = e.target[1].value;
  //   const img = e.target[2].value;
  //   const content = e.target[3].value;

  //   try {
  //     await fetch("/api/posts", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title,
  //         desc,
  //         img,
  //         content,
  //         username: session.data.user.name,
  //       }),
  //     });
  //     mutate();
  //     e.target.reset()
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await fetch(`/api/posts/${id}`, {
  //       method: "DELETE",
  //     });
  //     mutate();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // if (session.status === "authenticated") {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.posts}>
  //         {isLoading
  //           ? "loading"
  //           : data?.map((post) => (
  //               <div className={styles.post} key={post._id}>
  //                 <div className={styles.imgContainer}>
  //                   <Image src={post.img} alt="" width={200} height={100} />
  //                 </div>
  //                 <h2 className={styles.postTitle}>{post.title}</h2>
  //                 <span
  //                   className={styles.delete}
  //                   onClick={() => handleDelete(post._id)}
  //                 >
  //                   X
  //                 </span>
  //               </div>
  //             ))}
  //       </div>
  //       <form className={styles.new} onSubmit={handleSubmit}>
  //         <h1>Add New Post</h1>
  //         <input type="text" placeholder="Title" className={styles.input} />
  //         <input type="text" placeholder="Desc" className={styles.input} />
  //         <input type="text" placeholder="Image" className={styles.input} />
  //         <textarea
  //           placeholder="Content"
  //           className={styles.textArea}
  //           cols="30"
  //           rows="10"
  //         ></textarea>
  //         <button className={styles.button}>Send</button>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    // <div className={styles.container}>
    //   <div className={styles.sidebar}>
    //     <h3>WazobiAcademy</h3>
    //     <div className={styles.sidediv}>
    //       <div className={styles.sidelinkdiv}>
    //         <Image
    //           src={Homeicon}
    //           width={36}
    //           height={36}
    //         />
    //         <p className={styles.sidelink}>Home</p>
    //       </div>
    //       <div className={styles.sidelinkdiv}>
    //         <Image
    //           src={Languageicon}
    //           width={36}
    //           height={36}
    //         />
    //         <p className={styles.sidelink}>Language</p>
    //       </div>
    //       <div className={styles.sidelinkdiv}>
    //         <Image
    //           src={Reporticon}
    //           width={36}
    //           height={36}
    //         />
    //         <p className={styles.sidelink}>Progress report</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.mainbody}>
    //     <div className={styles.navbar}>
    //       <div className={styles.searchbar}>
    //         <input type="text" placeholder="search" className={styles.search} />
    //         <Image
    //           src={Searchicon}
    //           height={24}
    //           width={24}
    //           style={{ paddingRight: '10px' }}
    //         />
    //       </div>
    //       <div className={styles.rightnav}>
    //         <Image
    //           src={Notification}
    //           height={24}
    //           width={24}
    //         />
    //         <Image
    //           src={Settings}
    //           height={24}
    //           width={24}
    //         />
    //         <div>
    //           <p>profile</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div style={{ paddingLeft: '20px', paddingBottom: '40px' }}>
    //       <h4 className={styles.nametitle}>Hi, Zikora</h4>

    //       <div style={{ marginTop: '30px' }}>
    //         <div style={{ marginRight: '20px', display: 'flex', justifyContent: 'space-between' }}>
    //           <p className={styles.contenttitle}>Trending stories</p>
    //           <p className={styles.contentlink}>See all</p>
    //         </div>
    //         <div className={styles.content}>
    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={400}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={400}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={400}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={400}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //         </div>
    //       </div>

    //       <div style={{ marginTop: '30px' }}>
    //         <h4 style={{ margin: '20px 0px' }}>Recommended for you</h4>
    //         <div className={styles.content}>
    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //               height={150}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //         </div>
    //       </div>

    //       <div style={{ marginTop: '30px', paddingBottom: '30px' }}>
    //         <div style={{ marginRight: '20px', display: 'flex', justifyContent: 'space-between' }}>
    //           <h4 style={{ fontWeight: 'bold', fontSize: '24px' }}>Whats New</h4>
    //           <h4 style={{ cursor: 'pointer', color: '#53c28b', fontWeight: 'bold', fontSize: '18px' }}>See all</h4>
    //         </div>
    //         <div className={styles.content}>
    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //             // height={150}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //           <div className={styles.card}>
    //             <Image
    //               src={Trend}
    //               className={styles.cardimg}
    //               width={200}
    //             />
    //             <p style={{ margin: '20px 0px' }}>My little trouble</p>
    //           </div>

    //         </div>
    //       </div>



    //     </div>
    //   </div>
    // </div>
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3 className={styles.logotitle}>WazobiAcademy</h3>
        <div className={styles.sidediv}>
          <div className={styles.sidelinkdiv}>
            <Image
              src={Homeicon}
              width={36}
              height={36}
            />
            <p className={styles.sidelink}>Home</p>
          </div>
          <div className={styles.sidelinkdiv}>
            <Image
              src={Languageicon}
              width={36}
              height={36}
            />
            <p className={styles.sidelink}>Language</p>
          </div>
          <div className={styles.sidelinkdiv}>
            <Image
              src={Reporticon}
              width={36}
              height={36}
            />
            <p className={styles.sidelink}>Progress report</p>
          </div>
        </div>
      </div>
      <div className={styles.topbar}>
        <div className={styles.navbar}>
          <div className={styles.searchbar}>
            <input type="text" placeholder="search" className={styles.search} />
            <Image
              src={Searchicon}
              height={24}
              width={24}
              style={{ paddingRight: '10px' }}
            />
          </div>
          <div className={styles.rightnav}>
            <Image
              src={Notification}
              height={24}
              width={24}
            />
            <Image
              src={Settings}
              height={24}
              width={24}
            />
            <div>
              <p>profile</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollablecontent}>
       
      </div>
    </div>
  )
};

export default Dashboard;
