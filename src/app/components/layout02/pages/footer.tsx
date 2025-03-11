import Image from "next/image";

export default function Footer(){
    return(
        <div className="w-full min-h-[400px] flex flex-col mt-auto bg-[#332D2B] justify-center">
            <div className="flex justify-evenly">
                <div className="justify-center items-center text-left self-start w-1/3 flex flex-col"><h2 className="text-3xl">Give Us a call</h2><a>Cabous | 076 201 4078</a><a>Jeanine | 076 018 6629</a></div>
                <div className=" w-1/3flex flex-col items-center "><Image alt="nothing" src={''} width={20} height={20}/> <button className="border-solid border-gray-800 border-2 px-12 py-4 text-2xl rounded-full">Details</button></div>
                <div className="justify-center flex w-1/3"> <h2 className="text-3xl">Menu</h2></div>
            </div>
        </div>
    )
}