import BridalParty from "../../bridalParty/bridalParty";
import RegistrySection from "./registry";
import BrideMessage from "./BrideMessage";
import WeddingDetails from "./weddingDetails";

export default function Part02(){
    return(
        <div>
            <WeddingDetails/>
            <BrideMessage/>
            <BridalParty/>
            <RegistrySection/>
        </div>
    )
}