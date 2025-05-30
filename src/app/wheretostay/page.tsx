import Footer from "../components/layout02/pages/footer";
import Header from "../components/layout02/pages/header";
import WhereToGoStay from "./components/whereToGoStay";

export default function WhereToStay(){
    return(
        <div className="font-fraunces font-semibold">
            <Header showDetailsButton={false}/>
                <WhereToGoStay/>
            <Footer showDetailsButton={false}/>
        </div>
    )
}