export default function RegistrySection(){
    return(
            <div className="flex items-center justify-center">
                <div className="xl:w-1/2"></div>
                <div className="flex-col flex  items-center py-32">
                <h2 className="text-[5em]">
                    Uitgang
                </h2>
                <ul className="flex-col flex items-center text-center xl:text-left">
                    <li className="w-4/5 md:w-[400px] pt-8">{`Baie dankie dat julle hierdie dag saam met ons vier. Ons weet dat 'n hele paar moeite doen om van ver af te kom, en ons waardeer dit ongelooflik baie.`}</li>
                    <li className="w-4/5 md:w-[400px] pt-5">{`Indien jy 'n geskenkie oorweeg, spaar jou voete die loop - ons sal sommer self koop!`}</li>
                    <li className="w-4/5 md:w-[400px] pt-5">{`Ons huisie is reeds geveer, so ons sal eerder 'n geldjie waardeer.`}</li>
                </ul>  
                </div>
            </div>
    )
}