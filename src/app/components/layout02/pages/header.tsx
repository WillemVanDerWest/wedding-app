import Link from "next/link"

interface IScrollVoid{
    scrollToSection?: ()=> void
    showDetailsButton: boolean
  }

export default function Header({scrollToSection, showDetailsButton} : IScrollVoid){



    return(
        <div className=" flex w-[100%] justify-between h-[3rem] bg-orange-100 text-gray-500 items-center md:h-[5rem]">
            <section className="flex justify-between w-[80%] items-center m-auto md:w-[800px] xl:w-[1200px]">
                <div className="text-[2em] relative items-center flex justify-center">
                        <div className="text-orange-100">E</div>
                        <div className="absolute ">C</div>
                        <div className="absolute left-4 top-2">J</div>
                </div>
                <div className=" flex">
                    <div  className="px-5 py-3 border-solid border-5">
                        {showDetailsButton ? 
                        <a className="border-solid border-gray-800 border-2 px-2 py-3 text-[12px] rounded-full" onClick={scrollToSection}>Details</a> 
                        :  <Link className="border-solid border-gray-800 border-2 px-2 py-3 text-[12px] rounded-full" href="/">Home</Link>}
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