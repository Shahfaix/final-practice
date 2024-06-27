"use client"
import React, { useCallback } from "react";

import { LoremForm } from "@/components/loremForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useEffect, useState } from "react";
import { Getuser } from "@/action/getUser";
import { MdDeleteForever } from "react-icons/md";
import { delteLorem } from "@/action/deletelorem";
import { useRouter } from "next/navigation";


export default function Home() {
  const [info, setInfo]=useState<any>();
useEffect(()=>{
Getuser().then((data)=>{
setInfo(data);
})
},[info])
const router =useRouter()

const handleDelete = useCallback((userId: string)=> {
  delteLorem(userId).then(()=>{
    router.refresh
  })

},[])
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col" >

      <div className="max-w-5xl  pt-10 grid grid-cols-3 gap-4">
        <div className="bg-green-200 p-8 rounded-md flex flex-col items-center">
          <p className="text-black font-semibold">lorem ipsum</p>
          <p className="text-black font-bold text-3xl">03</p>
        </div>
        <div className="bg-pink-200 p-8 rounded-md flex flex-col items-center">
          <p className="text-black font-semibold">lorem ipsum</p>
          <p className="text-black font-bold text-3xl">11</p>
        </div>
        <div className="bg-orange-200 p-8 rounded-md flex flex-col items-center">
          <p className="text-black font-semibold">lorem ipsum</p>
          <p className="text-black font-bold text-3xl">52</p>
        </div>
      

        
      </div>
      <div className="mt-4 flex items-center  justify-center">

<LoremForm/>
</div>

<div className="mt-4 flex flex-col space-y-1 justify-center items-center ">
 {info?.map((userinfo:any)=>{
  return(
    <Card className=" flex flex-row justify-between" key={info.id}>

  <CardContent className=" ">
  {userinfo.name} 
  </CardContent>
  <MdDeleteForever  className="mt-2" onClick={()=> handleDelete(userinfo.id)}/>
</Card>

  );
 })}
 
</div>
    </div>
    
  );
}
