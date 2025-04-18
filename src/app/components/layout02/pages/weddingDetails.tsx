
import image01 from "@/app/image/generated/image01.webp"
import Image from "next/image"

export default function WeddingDetails(){
    return(
        <div className="relative font-primary justify-around items-center lg:flex md:flex ">
                <section className=" flex flex-col columns-1 text-center sm:w-full md:text-left bg-pink-400">
                            <Image className="absolute object-cover w-full h-full top-[0px] "    src={image01} alt="cabous en Jeanine foto" />
                    <div className="mx-auto z-10 bg-green-900 px-[2em] sm:px-[10em] py-20 my-32 ">
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
                                    <div>Semi - Formal</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}