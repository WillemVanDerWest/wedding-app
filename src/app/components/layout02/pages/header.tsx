export default function Header(){
    return(
        <div className="flex w-full justify-between h-[8rem] bg-orange-100 text-gray-500 items-center">
            <div className="ml-[10rem] text-[50px]">
                <div className="mb-[-50px]">C</div>
                <div className="mt-[-60px] pl-[20px]">J</div>
            </div>
            <div className="mr-[10rem] flex">
                <div className="px-5 py-3 border-solid border-5"><a className="border-solid border-gray-800 border-2 px-12 py-4 text-2xl rounded-full">Details</a></div>
                <div>
                    <button className="border-solid border-gray-800 border-2 px-4 py-3 text-2xl ">More</button>
                </div>
            </div>
        </div>
    )
}