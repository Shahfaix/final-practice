"use server"

import db from '@/lib/db'
import { loremSchema } from '@/schemas/loremSchema'

import { z } from 'zod'



export const Createlorem = async (values:z.infer<typeof loremSchema>)=>{
    const newUser = await db.user.create({data:{
        name:values.name
    },})


}
