export function Navbar(){

    const liClass: string = "px-10";

    return(
        <div className="flex justify-between top-0 z-50 fixed w-full">
            <div className="ml-[40px] mt-[10px]">
                <h1 className="w-[95px] h-[64px] bg-white text-black">LOGO</h1>
            </div>
            <div className="flex items-center uppercase">
                <ul className="flex items-center mr-[40px] text-[1.5vw]">
                    <li className={liClass}><span>Home</span></li>
                    <li className={liClass}><span>About</span></li>
                    <li className={liClass}><span>Location</span></li>
                    <li className={liClass}><span>Contact Us</span></li>
                    <li className={liClass}><span>Freqeuntly Asked</span></li>
                    <li><button className="bg-green-950 px-4 py-2 rounded-full ml-[40px]">RSVP</button></li>
                </ul>
            </div>
        </div>
    )
}