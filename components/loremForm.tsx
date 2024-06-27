"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loremSchema } from "@/schemas/loremSchema"
import { Createlorem } from "@/action/createlorem"



export function LoremForm() {
    // ...
    const form = useForm<z.infer<typeof loremSchema>>({
        resolver: zodResolver(loremSchema),
        defaultValues: {
          name: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof loremSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        Createlorem(values)
      }
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-row space-x-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">

          <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    )
  }