import image02 from "@/app/image/cabousenjeanine/IMG_20250403_075052.webp"
import Image from "next/image"


export default function BrideMessage(){
    return(
        <div className="py-32 grid-cols-1 grid xl:grid-cols-2 ">
        <section className="flex-col w-5/6 justify-center mx-auto">
            <div className="mx-auto md:w-[30rem]">
                <div className="pb-10 pt-8">
                    <span className="text-[4em] sm:text-[5em]">
                        Ons Storie
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
        <section className="w-5/6 justify-center mx-auto md:pt-32 xl:pt-0 items-center flex">
            <div className="md:px-24">
                <Image className="px-0 object-cover" src={image02} alt="cabous en Jeanine foto" />
            </div>
        </section>
        
</div>
    )
}