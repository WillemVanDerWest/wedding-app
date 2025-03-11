import { Navbar } from "./components/navbar/navbar";
import PageOne from "./components/landingPageComponents/content";
import weddingPhoto from "./image/Her-By-Melli-Shayne-.jpeg"
import PartTwo from "./components/landingPageComponents/part2";
import winePhoto from "./image/red-wine-health-benefits-ce3be96b730b41cc82f128abb75c2395.jpg"
import Header from "./components/layout02/pages/header";
import Footer from "./components/layout02/pages/footer";
import Part01 from "./components/layout02/pages/part01";
import Part02 from "./components/layout02/pages/part02";



export default function Home() {
  function layout02(){
    return(
      <div>
        <header><Header/></header>
        <main>
          <Part01/>
          <Part02/>
       </main>
        <footer><Footer/></footer>
        
      </div>
    )
  }

  function layout01(){
    return(<div className="flex z-10">
    <div className="bg-slate-400 w-[20%] z-0">
      
    </div>
    <div className="mx-auto flex">
        <div className="">
          <div className="">
            <Navbar/>
          </div>
            <PageOne imageData={weddingPhoto}/>
            <PartTwo imageData={winePhoto}/>
        </div>
    </div>
    <div className="bg-slate-400 w-[20%] z-10"></div>
    </div>)}
  return (
    <div>
      {layout02()}
    </div>
  );
}
