"use client"

import React from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {z} from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
}

from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { createReview } from "../../../../service/ReviewService"
import { toast } from "sonner"

const formSchema = z.object({
    username: z.string().min(2,{
        message: "Username must be at least 2 charecters long!"
    }).max(8,{
        message: "Username must be within 8 charecters !"
    }),
    email: z.string().email(),
    message: z.string().min(20,{
        message: "Your message should be at least 20 charecters long!"
    }).max(200,{
        message:"Your message must be within 200 charecters"
    })
})

const Review = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username : "",
            email : "",
            message : ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>){
        const response = await createReview(values)
        if(response.success){
            toast.success(response.message)
        }
        else{
            toast.error(response.message)
        }
        
        form.reset()
    }

    return(
        <>
            <div className = "flex w-full md:w-[60%] items-center m-auto h-auto px-4 py-4">
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className = "space-y-8 w-full"
                    >
                        <FormField
                            control = {form.control}
                            name = "username"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder = "Enter Your Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is Your public Display Name
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control = {form.control}
                            name = "email"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder = "Enter Your Email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Email must be Unique
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control = {form.control}
                            name = "message"
                            render = {({field}) => (
                                <FormItem>
                                    <FormLabel>Opinion</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder = "Enter Your Opinion"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        write your opinion here
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button 
                            type = "submit"
                            className = "w-full px-2 text-center items-center"
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    )
}

export default Review