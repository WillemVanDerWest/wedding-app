"use client"
import { useState } from "react"

export default function rsvpPage(){
    const [formData, setFormData] = useState<string>('')

    const handleFormData = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const eventValue:string = e.target.value
        setFormData(eventValue)
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="name" id="name" onChange={handleFormData}/>
            </form>

            <div>
                Value:
                <h1>{formData}</h1>
            </div>
        </div>
    )
}