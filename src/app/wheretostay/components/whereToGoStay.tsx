interface ILocations{
    name: string,
    mapLink: string,
    distance: string,
    contact: string,
    email: string
}

export default function WhereToGoStay(){

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
        },
        {
            name: 'Mbokoto Lodge',
            distance: '1.5km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.675331394074!2d28.50469327632564!3d-25.781285346885333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955a0cfe745aff%3A0xb88f003d6d5c3a54!2sMbokoto%20Country%20Lodge%20%26%20Spa!5e0!3m2!1sen!2sza!4v1744984455957!5m2!1sen!2sza",
            contact: '082 332 1199',
            email: 'info@mbokoto.co.za'
        },
        {
            name: 'Silver Fig Guest House',
            distance: '7.3km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.7232034958092!2d28.429043387473893!3d-25.779704688381322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955bd202d2dd2d%3A0x4ecbed68ac23075c!2sSilver%20Fig%20Guest%20House!5e0!3m2!1sen!2sza!4v1744984491633!5m2!1sen!2sza",
            contact: '',
            email: 'silverfig@mweb.co.za'
        },
        {
            name: 'Tree Tops Accommodation',
            distance: '10.2km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d898.0260304656822!2d28.4284972696288!3d-25.80013879116243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDQ4JzAwLjUiUyAyOMKwMjUnNDQuOSJF!5e0!3m2!1sen!2sza!4v1744986051478!5m2!1sen!2sza",
            contact: '083 268 5519',
            email: ''
        },
        {
            name: 'At The Rocks',
            distance: '3km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.6041568519904!2d28.497030576325688!3d-25.78363524697952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955a13e9e2661b%3A0x8d7938fc3fca48f4!2sAt%20The%20Rocks%20Country%20Estate!5e0!3m2!1sen!2sza!4v1744984693574!5m2!1sen!2sza",
            contact: '082 881 5554',
            email: 'info@attherocks.co.za'
        },
        {
            name: 'Guesthouse@56',
            distance: '12km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3825348094624!2d28.40147137632582!3d-25.790951047272827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955b92d5461f57%3A0x993b32825b297e9b!2sGuesthouse%20%40%2056!5e0!3m2!1sen!2sza!4v1744984755314!5m2!1sen!2sza",
            contact: '072 486 8877',
            email: 'info@guesthouse56.com'
        },
        {
            name: 'Amber & Grace Guest Farm',
            distance: '12.2km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.7525654488786!2d28.48398007632661!3d-25.81173594810688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9551c104ae07c1%3A0xd1f880bb946f6309!2sAmber%20%26%20Grace%20Guest%20Farm!5e0!3m2!1sen!2sza!4v1744984789478!5m2!1sen!2sza",
            contact: '082 589 0847',
            email: 'info@amberandgrace.co.za'
        },
        {
            name: 'Liebencharm Guest House',
            distance: '6km',
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.060860893815!2d28.49780507632619!3d-25.801566147698935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955062d8aedf7f%3A0x9c19e29d23f43d1f!2sLiebencharm%20Guest%20House%20Cullinan!5e0!3m2!1sen!2sza!4v1744984832188!5m2!1sen!2sza",
            contact: '083 417 5873',
            email: 'elsabe.liebencharm@gmail.com'
        },

    ]


    const renderLocations = locations.map((location, index)=>{
        return(
            <div key={index} className="bg-orange-100  h-[500px] m-3">
                <div className="flex-col flex">
                    <div className="flex-col flex items-center">
                    <iframe src={location.mapLink} width="350" height="300" loading="lazy"/>
                    </div>
                    <div className="pl-4 pt-2 font-semibold">
                        <h2 className=" text-[25px] font-bold">{location.name}</h2>
                        <h2>{location.contact}</h2>
                        <h2>{location.distance}</h2>
                        <h2>{location.email}</h2>
                    </div>
                    
                </div>
            </div>
        )
    })
    return(
        <div className="py-32 bg-orange-200 text-gray-700 ">
            <div className=" flex flex-col items-center justify-center">
                <div className="justify-center items-center flex-col flex">
                    <h2 className="pb-10 text-[3em] sm:text-[5em] text-gray-700">Where to Stay</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center w-[400px] md:w-[850px] xl:w-[1350px]">
                    {renderLocations}
                </div>
            </div>
        </div>
    )
}