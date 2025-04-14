'use client'
import { useEffect, useState } from "react";


interface props {
    handleDisplayRsvp : ()=> void
}

export default function Part01({handleDisplayRsvp}: props){
    
        const calculateTimeLeft = () => {
          const deadline = new Date("2025-08-02T15:00:00").getTime();
          const now = new Date().getTime();
          const difference = deadline - now;
      
          if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }
      
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        };
      
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      
        useEffect(() => {
          const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
          }, 1000);
      
          return () => clearInterval(interval); // Cleanup on unmount
        }, []);
    return(
        <div className={`py-32 flex flex-col justify-center`}>
            <section>
                <div className="justify-center flex text-[1.6rem]">
                    <div className="flex items-center flex-col columns-1 w-[3em]">
                        <div>{`${timeLeft.days}`}</div>
                        <div className="text-[0.6rem]">Days</div>
                    </div>
                    <div className="flex items-center flex-col columns-1 w-[3em]">
                        <div >{`${timeLeft.hours}`}</div>
                        <div className="text-[0.6rem]">Hours</div>
                    </div>
                    <div className="flex items-center flex-col columns-1 w-[3em]">
                        <div>{`${timeLeft.minutes}`}</div>
                        <div className="text-[0.6rem]">Mins</div>
                    </div>
                    <div className="flex items-center flex-col columns-1 w-[3em]"> 
                        <div>{`${timeLeft.seconds}`}</div>
                        <div className="text-[0.6rem]">Secs</div>
                    </div>
                </div>
                <div className="flex justify-center text-[40px] py-[2em] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
                    Cabous & Jeanine
                </div>
                <div className="flex columns-1 justify-center">
                    <div className="rounded-full bg-gray-100 text-gray-900 flex w-[30em] text-[12px] justify-around py-[15px] md:text-[1.5em]">
                        <div className="font-thin flex text-center flex-col w-[45%]  justify-center">
                            <div >SATURDAY</div>
                            <div >Aug 02. 2025</div>
                        </div>
                        <div className="border-r-[1.2px] border-gray-900"></div>
                        <div className="flex text-center flex-col w-[45%] justify-center">
                            <div>3:00PM</div>
                            <div>Casablanca Manor Wedding</div>
                        </div>
                    </div>
                </div>
                <div className="pt-32 flex justify-center">
                    <button onClick={handleDisplayRsvp} className="items-center border-[2px] py-3 px-8 rounded-full">RSVP</button>
                </div>
            </section>
        </div>
    )
}