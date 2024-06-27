"use server"
import prisma from "@/lib/db"

export const delteLorem=async(userId:string)=>{
    await prisma.user.delete({
        where:{id:userId}
    })
}