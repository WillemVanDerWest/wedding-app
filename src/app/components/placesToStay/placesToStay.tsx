interface ILocations{
    name: string,
    mapLink: string,
    distance: string,
    contact: string,
    email: string
}

export default function PlacesToStay(){

    const locations: Array<ILocations> = [
        {
            name: 'Skaapkraal Guest House',
            distance: '400m',
            mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7186.2530081653285!2d28.48274824480841!3d-25.7663847765036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9551d2365b69b3%3A0xe7203fb38b363297!2sDie%20skaap%20kraal!5e0!3m2!1sen!2sza!4v1744983656397!5m2!1sen!2sza',
            contact: '082 929 4977',
            email: 'bookings@dieskaapkraal.co.za'
        },
        {
            name: 'Kuungana Bush Lodge',
            distance: '400m',
            mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.058756353387!2d28.481615576325193!3d-25.768622746377787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955b6dc80dd5eb%3A0x4c6e22db5f2d91e6!2sKuungana%20Bush%20Lodge!5e0!3m2!1sen!2sza!4v1744984370397!5m2!1sen!2sza',
            contact: '082 929 4977',
            email: 'reservations@kuunganabushlodge.co.za'
        },
        {
            name: 'Glenaarden Farm Stay',
            distance: '3.5km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.675331394074!2d28.50469327632564!3d-25.781285346885333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955145baba440f%3A0x924302b89388624d!2sGlenaarden%20Farm%20Stay!5e0!3m2!1sen!2sza!4v1744984420805!5m2!1sen!2sza",
            contact: '071 887 9872',
            email: ''
        }
    ]


    const renderLocations = locations.map((location, index)=>{
        return(
            <div key={index} className="bg-orange-200  h-[500px] m-3">
                <div className="flex-col flex">
                    <div className="flex-col flex items-center">
                    <iframe src={location.mapLink} width="350" height="300" loading="lazy"/>
                    </div>
                    <div className="pl-4 pt-2">
                        <h2 className=" text-[1.8em]">{location.name}</h2>
                        <h2>{location.contact}</h2>
                        <h2>{location.distance}</h2>
                        <h2>{location.email}</h2>
                    </div>
                    
                </div>
            </div>
        )
    })
    return(
        <div className="pt-32 text-gray-700 ">
            <div className=" flex flex-col items-center justify-center ">
                <div className="justify-center items-center flex-col flex">
                    <h2 className="pb-10 text-[3em] sm:text-[5em] text-gray-50">Where to Stay</h2>
                </div>
                
                    <div className=" flex flex-wrap justify-center items-center w-[400px] md:w-[850px] xl:w-[1350px]">
                        {renderLocations}
                    </div>
                    <div className="text-[2em] text-gray-700 hover:text-gray-400 bg-orange-200 w-[350px] h-20 md:w-[720px] xl:w-[1100px] flex flex-col items-center justify-center">
                        <a href="/wheretostay" >
                            Load More Locations...
                        </a>
                    </div>
                
                
            </div>
        </div>
    )
}