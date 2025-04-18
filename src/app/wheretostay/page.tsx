import Footer from "../components/layout02/pages/footer";
import Header from "../components/layout02/pages/header";
import WhereToGoStay from "./components/whereToGoStay";

export default function WhereToStay(){
    return(
        <div className="font-bodoni_Moda">
            <Header/>
                <WhereToGoStay/>
            <Footer/>
        </div>
    )
}