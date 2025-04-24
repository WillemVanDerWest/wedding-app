"use client"

import Header from "./components/layout02/pages/header";
import Footer from "./components/layout02/pages/footer";
import Part01 from "./components/layout02/pages/part01";
import Part02 from "./components/layout02/pages/part02";
import RsvpPage from "./components/rsvp/RsvpPage";
import image01 from "@/app/image/cabousenjeanine/0070.webp"
import Image from "next/image";
import { useRef, useState } from "react";
// import { useRouter } from "next/compat/router";



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
        <div className="rounded-md   flex flex-col fixed left-0 right-0 z-50 top-[100px]">
          <div className="mx-auto my-0 backdrop-blur-lg justify-center items-center  bg-white/20 rounded-lg p-5 w-5/6 sm:w-5/6 md:w-3/5 lg:px-20 lg:w-4/5 xl:w-2/5">
            <RsvpPage handleDisplayRsvpOff={handleDisplayRsvpOff}/>
          </div>
        </div>
      )
    }

    //handle target ref
    // interface IScrollVoid{
    //   scrollToSection: ()=> void
    // }

    const targetRef = useRef<HTMLDivElement>(null);

    const scrollToSection = () => {
      targetRef.current?.scrollIntoView({behavior:"smooth"})
    }

    // const router = useRouter();

    // const logPath = ()=> {
    //   console.log(router?.pathname)
    // }




    //handle target ref
    return(
      <div className="flex flex-col text-white font-fraunces font-semibold">
          <div className="z-10">
            <Header scrollToSection={scrollToSection} showDetailsButton={true}/>
          </div>
          <div className="fixed inset-0 z-0 bg-cover bg-center">
            <Image src={image01} alt="wedding photo" className="object-center object-cover  h-[100vh]"></Image>
          </div>
          <div className="relative z-10 justify-center items-center w-100vw">
            <section>
              <Part01 handleDisplayRsvp={handleDisplayRsvp}/>
            </section>
            <section ref={targetRef} id="details">
              <Part02/>
            </section> 
            {displayRsvp ? isRsvpButtonClicked(): <div></div>}
          </div>
          <div className="z-10">
            <Footer showDetailsButton={true}/>
          </div>
      </div>
    )
  }

  return (
    <div className="">
      <Layout02/>
    </div>
  );
}
