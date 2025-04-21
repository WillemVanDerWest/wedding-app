import Link from "next/link"

interface IShowDetails{
    showDetailsButton: boolean
}


export default function Footer({showDetailsButton}: IShowDetails){
    return(
        <div className="w-full min-h-[400px] flex flex-col mt-auto bg-[#332D2B] justify-center">
            <div className="flex justify-evenly">
                <div className="justify-center items-center text-left w-1/3 flex flex-col">
                    <div className="flex-col">
                        <h2 className="text-3xl">
                            Give Us a call
                        </h2>
                            <a>
                                <h2>
                                Cabous | 076 201 4078
                                </h2>
                            </a>
                            <a>
                                <h2>
                                Jeanine | 076 018 6629
                                </h2>
                            </a>
                    </div>
                </div>
                <div className=" w-1/3 flex flex-col items-center justify-center ">

                {showDetailsButton? 
                    <Link href="" className="border-solid border-gray-100 border-2 px-12 py-4 text-2xl rounded-full">
                        Details
                    </Link>  
                    :
                    <Link href="/" className="border-solid border-gray-100 border-2 px-12 py-4 text-2xl rounded-full">
                        Home
                    </Link>}
                </div>
                {/* <div className="justify-center items-center flex flex-col w-1/3">
                    <div className="object-left">
                        <h2 className="text-3xl">
                            Menu
                        </h2>
                        <ul className="list-none flex-col flex underline">
                            <li><button className="underline">Wedding Details</button></li>
                            <li><button className="underline">Registry</button></li>
                        </ul>
                    </div> 
                </div> */}
            </div>
        </div>
    )
}