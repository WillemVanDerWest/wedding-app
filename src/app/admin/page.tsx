"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { DownloadCSV } from "../components/downloadCsv/downloadCsv"

export default function AdminPage(){
    interface IRsvpUsers{
        name? : string,
        surname? : string,
        date? : Date,
        attending? : boolean,
        email? : string,
        allergens? : string,
        deleted?:boolean
    }

    interface forUserComp{
        user: IRsvpUsers
    }

    const rsvpUser: IRsvpUsers = {
        name : '',
        allergens : '',
        attending : false,
        date : undefined
    }

    const topLabels: IRsvpUsers = {
        name : 'NAME',
        allergens : 'ALLERGENS',
        attending : false,
        date : undefined,
        email: 'EMAIL',
        surname: 'SURNAME',
        deleted: false
    }

    const [users, setUsers] = useState<Array<IRsvpUsers>>([rsvpUser]);
    useEffect(()=>{
        async function getUsers(){
            await axios.get("http://localhost:8080/getAllData", {
                headers:{ "Access-Control-Allow-Origin": "*"}
            })
                                                    .then((res) => {
                                                        const dbUser: Array<IRsvpUsers> = res.data
                                                        setUsers(dbUser)
                                                    })
        }

        getUsers();
    },[])

    async function deleteUser(user: IRsvpUsers){
        await axios.put("http://localhost:8080/deleteUser",user);
        async function getUsers(){
            await axios.get("http://localhost:8080/getAllData", {
                headers:{ "Access-Control-Allow-Origin": "*"}
            })
                                                    .then((res) => {
                                                        const dbUser: Array<IRsvpUsers> = res.data
                                                        setUsers(dbUser)
                                                    })
        }

        getUsers();

        // axios({
        //     method: 'get',
        //     url: "http://localhost:8080/deleteUser",
        //     data: user
        // })

    }

    const CUser = ({user}:forUserComp)=>{
        return(
        <div className="flex hover:bg-slate-600 hover:text-white text-yellow-900 font-bold border-yellow-500 border-b-[2px] " key={`${user.date?.getMilliseconds ? user.date?.getMilliseconds : "undefined"}`}>
            <div className="w-40 border-r-[2px] border-yellow-500">{user.name}</div>
            <div className="w-40 border-r-[2px] border-yellow-500">{user.surname}</div>
            <div className="w-40 border-r-[2px] border-yellow-500">{`${user.date?.getDay ? user.date.getDay: "undefined"}`}</div>
            <div className="w-60 border-r-[2px] border-yellow-500">{user.email}</div>
            <div className="w-60 border-r-[2px] border-yellow-500">{user.allergens}</div>
            <div className={user.attending === true ? `text-green-500 border-r-[2px] w-40 border-yellow-500` :` text-red-600 border-r-[2px] w-40 border-yellow-500`}>{user.attending? `Yes`: `No`}</div>
            <div className="w-20 border-r-[2px] border-yellow-500 text-red-600"><button className="bg-gray-300 hover:bg-black" onClick={()=>deleteUser(user)}>Delete</button></div>                
        </div>
        )
    }

    const CUserTop = ({user}:forUserComp)=>{
        return(
        <div className="flex hover:bg-slate-600 text-yellow-500 border-yellow-500 border-b-[2px] " key={`${user.date?.getMilliseconds ? user.date?.getMilliseconds : "undefined"}`}>
            <div className="w-40 border-r-[2px] border-yellow-500">{user.name}</div>
            <div className="w-40 border-r-[2px] border-yellow-500">{user.surname}</div>
            <div className="w-40 border-r-[2px] border-yellow-500">DATE</div>
            <div className="w-60 border-r-[2px] border-yellow-500">{user.email}</div>
            <div className="w-60 border-r-[2px] border-yellow-500">{user.allergens}</div>
            <div className={`text-yellow-500 border-r-[2px] w-40 border-yellow-500`}>ATTENDING</div>
            <div className="w-20 border-r-[2px] border-yellow-500 text-red-600"></div>                
        </div>
        )
    }

    const mapOutRsvpUsers = users?.map(user => {
        if (!user.deleted){
            return(
                <CUser user={user} key={user.name} />
            )
        }
        
    })

    const navbarItems= ["Dashboard", "Home Page", "Users"];
    const sideNavbar = navbarItems.map((item)=>{
        return(
            <div  className="hover:bg-slate-500 py-2 pl-3 font-bold" key={item}>{item}</div>
        )
    })


    return(
        <div className="flex bg-slate-100">
            <div className="flex-col w-[200px] h-screen bg-gray-600">
                {sideNavbar}
            </div>
            <div>
                <div className="font-semibold bg-slate-600 text-2xl">
                    <CUserTop user={topLabels}/>
                </div>
                {mapOutRsvpUsers}
            </div>
            <div>
                <DownloadCSV fileName="Rsvp Users" data={users} key={1}/>
            </div>
        </div>
    )
}