"use client"

import axios from "axios";
import { useForm } from "react-hook-form";



interface props {
  handleDisplayRsvpOff: () => void;
}
interface formData {
  name: string,
  surname: string,
  attending: string,
  email: string,
  allergens: string
}
interface correctFormData {
  name: string,
  surname: string,
  attending: boolean,
  email: string,
  allergens: string
}


export default function RsvpPage({ handleDisplayRsvpOff }: props) {

  const url: string = process.env.NEXT_PUBLIC_BACKEND_URL ? process.env.NEXT_PUBLIC_BACKEND_URL : '';
  const { register, handleSubmit } = useForm<formData>();
  const postUser = (prop : formData)=> {
    const correctFormData: correctFormData = {
      name: prop.name,
      surname: prop.surname,
      attending: prop.attending === "Yes"? true : false,
      email: prop.email,
      allergens: prop.allergens
    }
        axios.post(`${url}/addUser`, correctFormData)
            .then(()=>{
                alert(`Baie dankie dat jy die tyd gevat het om te RSVP.`)
            })
  }
  return (
    <div className="h-full">
      <button
        className="bg-white text-black px-5 py-2 rounded-sm h-[30px] text-sm mb-[20px] hover:bg-gray-300 hover:text-white"
        onClick={handleDisplayRsvpOff}
      >
        Close
      </button>
      <form className="flex-col flex gap-1 text-xl font-normal" onSubmit={handleSubmit(postUser)}>
        <div className="flex gap-5">
          <div className="w-[50%]">
            <h2>Naam</h2>
            <input className="rounded-sm h-[30px] text-sm py-3 pl-4 w-[100%] text-black" placeholder="First Name" {...register("name")} />
          </div>
          <div className="w-[50%]">
            <h2>Van</h2>
            <input className="rounded-sm h-[30px] text-sm py-3 pl-4 w-[100%] text-black" placeholder="Last Name" {...register("surname")} />
          </div>
        </div>
        
        
        <h2>Attending</h2>
        <select className="rounded-sm h-[40px] text-sm py-3 pl-4 w-[100%] text-black" {...register("attending")}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
      </select>
        <h2>Email</h2>
        <input className="rounded-sm h-[30px] text-sm py-3 pl-4 w-[100%] text-black" placeholder="example@mail.com" {...register("email")} />
        <h2>Allergens</h2>
        <textarea className="rounded-sm h-[100px] text-sm py-3 pl-4 w-[100%]  text-black" rows={2} cols={50} placeholder="Leave empty if you have no food allergens" {...register("allergens")} />
        <div className="flex">
          <input className="justify-center items-center hover:transform[translate-x-5] w-24 py-2 mt-5 rounded-sm h-[30px] text-sm bg-white hover:bg-gray-400 text-black hover:text-white" type="submit" />
        </div>
      </form>
    </div>
  );
}
