"use server"
import prisma from "@/lib/db"
export const Getuser = async ()=>{
return await prisma.user.findMany()
}