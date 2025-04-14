import Image from "next/image";
import BridalParty from "../../bridalParty/bridalParty";
import image01 from "@/app/image/generated/image01.webp"
import image02 from "@/app/image/cabousenjeanine/IMG_20250403_075052.webp"

export default function Part02(){
    return(
        <div>
            <div className="relative font-primary justify-around items-center lg:flex md:flex ">
                    <section className=" flex flex-col columns-1 text-center sm:w-full md:text-left bg-pink-400">
                            <Image className="absolute object-cover w-full h-full top-[0px]"    src={image01} alt="cabous en Jeanine foto" />
                        <div className="mx-auto z-10 bg-green-900 px-[10em] py-20 my-32">
                            <div className="z-10 ">
                                <div className="text-[3rem] pb-10">Wedding Details</div>
                                <div className="text-lg  mx-auto">
                                    <div className="text-2xl font-medium pb-2">DATE</div>
                                    <div>August 2nd, 2025</div>
                                    <div>At 15:00pm</div>
                                </div>
                                <div className="text-lg">
                                    <div className="text-2xl font-medium pb-2 pt-5">RECEPTION LOCATION</div>
                                    <div className="flex-col flex">
                                            <span>Casablanca Manor Wedding,</span>
                                            <span>Function and Conference Venue,</span>
                                            <span>Plot 121 Stamvrug Road</span>
                                            <span>Donkerhoek</span>
                                            <span>Pretoria 1001</span>
                                    </div>
                                </div>
                                <div className="text-lg">
                                    <div className="text-2xl font-medium pb-2 pt-5">DRESS</div>
                                    <div>Formal</div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>

           

            <div className="py-32 flex ">
                    <section className="flex flex-col columns-1 w-5/6 justify-center mx-auto ">
                        <div className="mx-auto md:w-[30rem]">
                            <div className="pb-10 pt-8">
                                <span className="text-2xl ">
                                    Ons Story
                                </span>
                            </div>
                            <div className="pb-32 md:pb-0">
                                <div className="pb-5">
                                    {`Vir drie jaar het ons in dieselfde klas gesit, maar minwetend toe, het ons mekaar net heeltemal gemis - oftewel misgedrink. `}
                                </div>
                                <div className="pb-5"> 
                                    {`Ons het elke dag tussen dieselfde mure gesit, deur dieselfde kosyne gestap en in dieselfde kuierplekke gejol - maar dit sal eers na die eerste erge golf van Covid-lockdowns wees, waar ons sal ontmoet. `}
                                </div>
                                <div className="pb-5"> 
                                    {`'n Eerste date toe by 'n dodgy kuierplek, en n tweede date by Pikkewynstraat - waar die polisie ons mos sou verdink van " suspicious acitivities"  en die bakkie ligtelik met n flitslig deursoek, 11 uur die oggend van alle tye.  `} 
                                </div>
                                <div className="pb-5">
                                    {`Vier jaar later - en ons is verloof... Die verlowing het hoeka gebeur by Pikkewyn straat - gelukkig geen polisie die keur nie."`}
                                </div>
                                <div className="italic font-bold">
                                    Cabous & Jeanine
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col columns-1 w-5/6 justify-center mx-auto ">
                        <div className="px-24">
                            <Image className="" src={image02} alt="cabous en Jeanine foto" />
                        </div>
                    </section>
                    
            </div>
            <div>
                <BridalParty/>
            </div>
        </div>
    )
}