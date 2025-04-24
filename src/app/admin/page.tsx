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

    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [users, setUsers] = useState<Array<IRsvpUsers>>([rsvpUser]);
    const [nonDeletedUsers, setNonDeletedUsers] = useState<Array<IRsvpUsers>>([]);
    useEffect(()=>{
        async function getUsers(){
            await axios.get(`${url}/getAllData`, {
                headers:{ "Access-Control-Allow-Origin": "*"}
            })
                                                    .then((res) => {
                                                        const dbUser: Array<IRsvpUsers> = res.data
                                                        setUsers(dbUser)
                                                    })
        }

        getUsers();
    },[url])

    useEffect(()=> {
        if (users) {
            const filtered = users.filter(user => !user.deleted);
            setNonDeletedUsers(filtered);
        }
    }, [users])
    async function deleteUser(user: IRsvpUsers){
        await axios.put(`${url}/deleteUser`,user);
        async function getUsers(){
            await axios.get(`${url}getAllData`, {
                headers:{ "Access-Control-Allow-Origin": "*"}
            })
                                                    .then((res) => {
                                                        const dbUser: Array<IRsvpUsers> = res.data
                                                        setUsers(dbUser)
                                                    })
        }
        getUsers();
    }
    const CUser = ({user}:forUserComp)=>{
        return(
        <div className="flex hover:bg-slate-600 hover:text-white text-yellow-900 font-bold border-yellow-500 border-[1px] rounded-full mt-2" key={`${user.date?.getMilliseconds ? user.date?.getMilliseconds : "undefined"}`}>
            <div className="pl-2 w-40 border-r-[2px] border-yellow-500">{user.name}</div>
            <div className="w-40 border-r-[2px] border-yellow-500">{user.surname}</div>
            <div className="w-40 border-r-[2px] border-yellow-500">{`${user.date?.getDay ? user.date.getDay: "undefined"}`}</div>
            <div className="w-60 border-r-[2px] border-yellow-500">{user.email}</div>
            <div className="w-60 border-r-[2px] border-yellow-500">{user.allergens}</div>
            <div className={user.attending === true ? `text-green-500 border-r-[2px] w-40 border-yellow-500` :` text-red-600 border-r-[2px] w-40 border-yellow-500`}>{user.attending? `Yes`: `No`}</div>
            <div className="w-20  text-red-600"><button className="flex justify-center items-center bg-gray-300 hover:bg-black" onClick={()=>deleteUser(user)}>Delete</button></div>                
        </div>
        )
    }

    const CUserTop = ({user}:forUserComp)=>{
        return(
        <div className="flex hover:bg-slate-600 text-yellow-500 border-yellow-500 border-b-[2px]" key={`${user.date?.getMilliseconds ? user.date?.getMilliseconds : "undefined"}`}>
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

    const mapOutRsvpUsers = nonDeletedUsers?.map(user => {
        return(
            <CUser user={user} key={user.name} />
        )
    })




    return(
        <div className="flex bg-slate-100">
            <div className="flex-col w-[200px] h-screen bg-gray-600">
            </div>
            <div>
                <div className="font-semibold bg-slate-600 text-2xl">
                    <CUserTop user={topLabels}/>
                </div>
                {mapOutRsvpUsers}
            </div>
            <div>
                <DownloadCSV fileName="Rsvp Users" data={nonDeletedUsers} key={1}/>
            </div>
        </div>
    )
}