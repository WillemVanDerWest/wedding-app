import BridesMaids from "./bridesmaids";
import Groomsmen from "./groomsmen";
export default function BridalParty(){
    return(
        <div className="bg-orange-200 text-gray-800 py-32 relative flex-col justify-center items-center">
            <div className="relative z-10">
                <BridesMaids/>
                <Groomsmen/>
            </div>
        </div>
    )
}