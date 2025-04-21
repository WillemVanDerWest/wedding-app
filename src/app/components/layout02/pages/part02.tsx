import BridalParty from "../../bridalParty/bridalParty";
import RegistrySection from "./registry";
import BrideMessage from "./BrideMessage";
import WeddingDetails from "./weddingDetails";
import PlacesToStay from "../../placesToStay/placesToStay";

export default function Part02(){
    return(
        <div>
            <WeddingDetails/>
            <BrideMessage/>
            <BridalParty/>
            <PlacesToStay/>
            <RegistrySection/>
        </div>
    )
}