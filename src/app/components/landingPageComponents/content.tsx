import Image, { StaticImageData } from "next/image";

interface props {
    imageData : StaticImageData,
} 

export default function PageOne({imageData} : props){
    return(
        <div className="justify-center relative" >
            <Image alt="nothing" src={imageData} className="w-[1440px] h-[850px] relative" />
            <h1 className="absolute top-[40%] right-[25%]">hello</h1>
                <div className="absolute top-[20%] left-[10%] text-[5vw] w-200 text-yellow-500">
                    <div className="text-center justify-center">Cabous</div>
                    <div className="text-center justify-center text-[8vw] my-[-60px] text-green-200 opacity-70" >&</div>
                    <div className="text-center justify-center">Janine</div>
                </div>
        </div>
    )
}