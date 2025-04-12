



export default function Header(){

    return(
        <div className="flex w-[100%] justify-between h-[3rem] bg-orange-100 text-gray-500 items-center md:h-[5rem]">
            <section className="flex justify-between w-[80%] md:w-[60%] items-center m-auto">
                <div className="text-[2em]">
                    <div className="mb-[-50px]">C</div>
                    <div className="mt-[-60px] ">J</div>
                </div>
                <div className=" flex">
                    <div  className="px-5 py-3 border-solid border-5">
                        <a className="border-solid border-gray-800 border-2 px-2 py-3 text-[12px] rounded-full">Details</a>
                    </div>
                    
                    <div>
                        <div  className="m-0 flex-col">
                            <div className="border-b-[1px] w-[2em] border-black pt-3"/>
                            <div className="border-b-[1px] w-[2em] border-black pt-3"/>
                            <div className="border-b-[1px] w-[2em] border-black pt-3"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}