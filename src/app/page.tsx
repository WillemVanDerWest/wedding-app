"use client"

import { Navbar } from "./components/navbar/navbar";
import PageOne from "./components/landingPageComponents/content";
import weddingPhoto from "./image/Her-By-Melli-Shayne-.jpeg"
import PartTwo from "./components/landingPageComponents/part2";
import winePhoto from "./image/red-wine-health-benefits-ce3be96b730b41cc82f128abb75c2395.jpg"
import Header from "./components/layout02/pages/header";
import Footer from "./components/layout02/pages/footer";
import Part01 from "./components/layout02/pages/part01";
import Part02 from "./components/layout02/pages/part02";
import RsvpPage from "./components/rsvp/page";
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
        <div className="rounded-md backdrop-blur-lg vis p-5 flex fixed  bg-white/20 top-[200px] left-0 right-0">
          <div className="w-full mx-auto my-0 max-w-[900px]">
            <RsvpPage handleDisplayRsvpOff={handleDisplayRsvpOff}/>
          </div>
        </div>
      )
    }
    return(
      <div className="flex flex-col">
        <header><Header/></header>
        <main>
          <Part01 handleDisplayRsvp={handleDisplayRsvp}/>
          <Part02/>
          {displayRsvp ? isRsvpButtonClicked(): <div></div>}
       </main>
        <footer><Footer/></footer>
      </div>
    )
  }

  function Layout01(){
    return(
    <div className="flex z-10">
    <div className="bg-slate-400 w-[20%] z-0">
      
    </div>
    <div className="mx-auto flex">
        <div className="">
          <div className="">
            <Navbar/>
          </div>
            <PageOne imageData={weddingPhoto}/>
            <PartTwo imageData={winePhoto}/>
        </div>
    </div>
    <div className="bg-slate-400 w-[20%] z-10"></div>
    </div>)}
  return (
    <div>
      <Layout02/>
    </div>
  );
}
