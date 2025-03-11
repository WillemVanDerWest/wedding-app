import Footer from "./footer";
import Header from "./header";
import Part01 from "./part01";
import Part02 from "./part02";

export default function LayoutPages(){
    return(
        <div>
            <Header/>
            <Part01/>
            <Part02/>
            <Footer/>
        </div>
    )
}