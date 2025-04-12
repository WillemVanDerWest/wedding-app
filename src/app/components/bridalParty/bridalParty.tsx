import Image from "next/image";
import image01 from '@/app/image/bridalparty/IMG-20250409-WA0010.webp'
import image02 from '@/app/image/bridalparty/IMG-20250410-WA0011.webp'
import image03 from '@/app/image/bridalparty/IMG-20250411-WA0013.webp'
import image04 from '@/app/image/bridalparty/IMG-20250412-WA0008.webp'
import image05 from '@/app/image/bridalparty/IMG-20250412-WA0009.webp'
import image06 from '@/app/image/bridalparty/IMG-20250412-WA0010.webp'
import image07 from '@/app/image/bridalparty/IMG-20250412-WA0011.webp'
export default function BridalParty(){
    return(
        <div className="bg-white text-gray-800">
            <section className="w-full">
                <div className="flex justify-center m-auto">
                    <h2 className=" text-xl">BRIDESMAIDS</h2>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="flex-col flex px-[10px] py-[30px] justify-center items-center text-center">
                        <Image className="rounded-full h-[300px] w-[300px] object-cover object-bottom" src={image01} alt="bridesmade-1"/>
                        <h3>Name and Surname</h3>
                        <p>Message</p>
                     </div>
                     <div className="flex-col flex px-[10px] py-[30px] justify-center items-center text-center">
                        <Image className="rounded-full h-[300px] w-[300px] object-cover object-bottom" src={image02} alt="bridesmade-1"/>
                        <h3>Name and Surname</h3>
                        <p>Message</p>
                     </div>
                     <div className="flex-col flex px-[10px] py-[30px] justify-center items-center text-center">
                        <Image className="rounded-full h-[300px] w-[300px] object-cover object-top" src={image03} alt="bridesmade-1"/>
                        <h3>Name and Surname</h3>
                        <p>Message</p>
                     </div>
                </div>
            </section>
            <section className="w-full">
                <div className="text-xl flex justify-center m-auto">
                    <h2>GROOMSMEN</h2>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="flex-col flex px-[10px] py-[30px] justify-center items-center text-center">
                        <Image className="rounded-full h-[300px] w-[300px] object-cover object-top" src={image04} alt="bridesmade-1"/>
                        <h3>Name and Surname</h3>
                        <p>Message</p>
                     </div>
                     <div className="flex-col flex px-[10px] py-[30px] justify-center items-center text-center">
                        <Image className="rounded-full h-[300px] w-[300px] object-cover object-top" src={image05} alt="bridesmade-1"/>
                        <h3>Name and Surname</h3>
                        <p>Message</p>
                     </div>
                     <div className="flex-col flex px-[10px] py-[30px] justify-center items-center text-center">
                        <Image className="rounded-full h-[300px] w-[300px] object-cover " src={image06} alt="bridesmade-1"/>
                        <h3>Name and Surname</h3>
                        <p>Message</p>
                     </div>
                     <div className=" flex-col flex px-[10px] py-[30px] justify-center items-center text-center">
                        <Image className="rounded-full h-[300px] w-[300px] object-cover object-[0em_-50px]" src={image07} alt="bridesmade-1"/>
                        <h3>Name and Surname</h3>
                        <p>Message</p>
                     </div>
                </div>
            </section>
        </div>
    )
}