import Image, { StaticImageData } from "next/image";
interface props {
    imageData : StaticImageData,
} 
export default function PartTwo( {imageData} : props){

    return(
        <div className="w-[1440px] h-[619px] bg-orange-50 flex">
            <div className="py-[59px]">
                <Image className="hover:shadow-yellow-400 hover:border-solid hover:border-[2px] border-yellow-400 shadow-xl rounded-r-full ml-[-80px] w-[1000px] h-[500px] object-cover object-left-top" height={500} src={imageData} alt="wine glasses"/>
            </div>
            <div className="flex">
                <div className="content-center">
                    <h2 className="text-yellow-500 font-bold mb-[20px] text">ONS TROU!!!</h2>
                    <div className="text-gray-800 font-bold text-lg w-[440px]">
                        <p>Welkom by Cabous en Janine se trouwebwerf! Ons is opgewonde om hierdie spesiale reis met julle te deel. Hier vind julle al die belangrike inligting oor ons groot dag – van die venue en skedule tot akkommodasie en RSVP-detaljes.</p>
                        <p className="mt-8">Dankie dat julle deel is van ons liefdesverhaal. Ons sien daarna uit om hierdie onvergeetlike oomblik saam met julle te vier!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}