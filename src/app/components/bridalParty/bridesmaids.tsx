import Image, { StaticImageData } from "next/image";
import image01 from '@/app/image/bridalparty/IMG-20250409-WA0010.webp'
import image02 from '@/app/image/bridalparty/IMG-20250410-WA0011.webp'
import image03 from '@/app/image/bridalparty/IMG-20250411-WA0013.webp'
import image04 from '@/app/image/extras/IMG-20250412-WA0020.webp'
import image05 from '@/app/image/extras/Screenshot_20250412_165113.webp'

interface IPeople{
   link: StaticImageData,
   name: string,
   message: string,
   classname: string,
   divClass: string,
   key: number
}
export default function BridesMaids(){

    const divClass : string = 'flex-col flex px-[10px] py-[30px] justify-center items-center text-center';
    const wihi : string = 'h-[200px] w-[200px]'
   const bridesmaid: Array<IPeople> = [
      {
         link: image01,
         name: 'Lena Geldenhuys',
         key: 1,
         message: ' ',
         classname: `rounded-full ${wihi} object-cover object-bottom`,
         divClass: divClass
        
      },
      {
         link: image02,
         name: 'Zonah Jansen van Rensburg',
         key: 2,
         message: ' ',
         classname: `rounded-full ${wihi} object-cover object-bottom`,
         divClass: divClass
      },
      {
         link: image03,
         name: 'Lahni Alberts',
         key: 3,
         message: ' ',
         classname: `rounded-full ${wihi} object-cover object-top`,
         divClass: divClass
      },
      {
         link: image04,
         name: 'Juanette Jordaan',
         key: 4,
         message: ' ',
         classname: `rounded-full ${wihi} object-cover object-top`,
         divClass: divClass
      },
      {
         link: image05,
         name: 'Leigh-Zanne Combrinck',
         key: 5,
         message: ' ',
         classname: `rounded-full ${wihi} object-cover object-[0em_-2em]`,
         divClass: divClass
      },
   ]

   const renderImages =  bridesmaid.map((card) => {
      return(
         <div className={card.divClass} key={card.key}>
            <Image className={card.classname} src={card.link} width={500} height={500} alt={`image of ${card.name}`}/>
            <h3 className='pt-4'>{card.name}</h3>
            <p>{card.message}</p>
         </div>
      )
   })
    return(
        <section className="w-full">
                <div className="flex justify-center m-auto">
                    <h2 className="text-[2em]">BRIDESMAIDS</h2>
                </div>
                <div className="flex flex-wrap justify-center">
                  {renderImages}
                </div>
            </section>
    )
}