'use client'
import { useEffect, useState } from "react";

export default function Part01(){
    
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
        <div>
            <div className="flex justify-center text-[1.6rem] mt-[15%]">
                <div className="flex items-center flex-col columns-1 w-[4%]">
                    <div>{`${timeLeft.days}`}</div>
                    <div className="text-[0.6rem]">Days</div>
                </div>
                <div className="flex items-center flex-col columns-1 w-[4%]">
                    <div >{`${timeLeft.hours}`}</div>
                    <div className="text-[0.6rem]">Hours</div>
                </div>
                <div className="flex items-center flex-col columns-1 w-[4%]">
                    <div>{`${timeLeft.minutes}`}</div>
                    <div className="text-[0.6rem]">Mins</div>
                </div>
                <div className="flex items-center flex-col columns-1 w-[4%]"> 
                    <div>{`${timeLeft.seconds}`}</div>
                    <div className="text-[0.6rem]">Secs</div>
                </div>
                
            </div>
            <div className="flex justify-center text-[6rem] py-[2%]"> Cabous & Jeanine</div>
            <div className="flex columns-1 justify-center">
                <div className="rounded-full bg-gray-100 text-gray-900 flex w-[30%] justify-around py-[15px]">
                    <div className="flex text-center flex-col w-[45%]">
                        <div >SATURDAY</div>
                        <div >Aug 02. 2025</div>
                    </div>
                    <div className="border-r-[1.2px] border-gray-900"></div>
                    <div className="flex text-center flex-col w-[45%]">
                        <div>3:00PM</div>
                        <div>Casablanca Manor Wedding</div>
                    </div>
                </div>
            </div>
            <div className="my-[10%] flex justify-center">
                <a className="items-center border-[2px] py-3 px-8 rounded-full ">RSVP</a>
            </div>
            <div></div>
        </div>
    )
}