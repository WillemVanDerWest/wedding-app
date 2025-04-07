export default function Part02(){
    return(
        <div className="font-primary bg-green-900 flex justify-evenly w-[100%]">
            <div className="w-[50%] py-32 flex flex-col columns-1 px-[200px]">
                <div className="text-[3rem] pb-10">Wedding Details</div>
                <div className="text-lg">
                    <div className="text-2xl font-medium pb-2">DATE</div>
                    <div>August 2nd, 2025</div>
                    <div>At 15:00pm</div>
                </div>
                <div className="text-lg">
                    <div className="text-2xl font-medium pb-2 pt-5">RECEPTION LOCATION</div>
                    <div><p className="">Casablanca Manor Wedding, Funcion and Conference Venue, Plot 121 Stamvrug Road. Donkerhoek. Pretoria 1001</p></div>
                </div>
                <div className="text-lg">
                    <div className="text-2xl font-medium pb-2 pt-5">DRESS</div>
                    <div>Formal</div>
                </div>
            </div>
            <div className="w-[50%] py-32 flex flex-col columns-1 px-[200px]">
                <div className="pb-10 pt-8"><span className="text-2xl ">A message from the bride & grooom</span></div>
                <div className="w-[70%]">
                    <div className="pb-5">
                        We can't tell you how excited we are to share this important day with all of you. For us we are celebrating so much more than a wedding, but a lifelong commitment we pray will be filled with laughter, adventure & lots of love.
                    </div>
                    <div className="pb-5"> 
                        Please join us in celebration at our reception December 10th, at 5:00pm, following our intimate mountain ceremony.
                    </div>
                    <div className="pb-5"> 
                        Each one of you has played an important role in our story, and we are excited to have you as witnesses as we step into this God journey together. 
                     </div>
                     <div className="italic font-extralight">
                        With Love,
                     </div>
                     <div className="italic font-bold">
                        Cabous & Jeanine
                     </div>
                </div>
                
                
            </div>
        </div>
    )
}