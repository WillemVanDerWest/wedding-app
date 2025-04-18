"use client"

// import { Navbar } from "./components/navbar/navbar";
// import PageOne from "./components/landingPageComponents/content";
// import weddingPhoto from "./image/Her-By-Melli-Shayne-.jpeg"
// import PartTwo from "./components/landingPageComponents/part2";
// import winePhoto from "./image/red-wine-health-benefits-ce3be96b730b41cc82f128abb75c2395.jpg"
import Header from "./components/layout02/pages/header";
import Footer from "./components/layout02/pages/footer";
import Part01 from "./components/layout02/pages/part01";
import Part02 from "./components/layout02/pages/part02";
import RsvpPage from "./components/rsvp/RsvpPage";
import image01 from "@/app/image/cabousenjeanine/0070.webp"
import Image from "next/image";
import { useState } from "react";



export default function Home() {

  
  function Layout02(){


    const [displayRsvp, setDisplayRsvp] = useState<boolean>(false)
    const handleDisplayRsvp = () => {
      setDisplayRsvp(true)
    }
    const handleDisplayRsvpOff = () => {
      setDisplayRsvp(false)
    }
    const isRsvpButtonClicked = ()=>{
      return(
        <div className="rounded-md backdrop-blur-lg p-5 flex fixed  bg-white/20 top-[200px] left-0 right-0">
          <div className="w-full mx-auto my-0 max-w-[900px]">
            <RsvpPage handleDisplayRsvpOff={handleDisplayRsvpOff}/>
          </div>
        </div>
      )
    }
    return(
      <div className="flex flex-col text-white">
         <div className="z-10"><Header/></div>
          <div className="fixed inset-0 z-0 bg-cover bg-center">
            <Image src={image01} alt="wedding photo" className="object-center object-cover  h-[100vh]"></Image>
          </div>
          <div className="relative z-10 justify-center items-center w-100vw">
            <section><Part01 handleDisplayRsvp={handleDisplayRsvp}/></section>
            <section id="details"><Part02/></section> 
            {displayRsvp ? isRsvpButtonClicked(): <div></div>}
          </div>
          <div className="z-10"><Footer/></div>
      </div>
    )
  }

  return (
    <div className="font-bodoni_Moda">
      <Layout02/>
    </div>
  );
}
