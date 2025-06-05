"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { createReview } from "../../../../service/ReviewService"
import { toast } from "sonner"

// 1. Define your Zod schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters long!"
  }).max(8, {
    message: "Username must be within 8 characters!"
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters long!"
  }).max(8, {
    message: "Username must be within 8 characters!"
  }),
  email: z.string().email(),
  phone: z.string().min(10,{
    message:"phone number must be of 10 digits"
  }).max(10,{
    message:"phone number must be of 10 digits"
  })

})

// 2. Infer the TypeScript type
type FormSchemaType = z.infer<typeof formSchema>

const WriteReview = () => {

  // 3. Hook up useForm with correct type
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName:"",
      email: "",
      phone: ""
    }
  })

  // 4. Correctly type your submit handler
  const onSubmit: SubmitHandler<FormSchemaType> = async (values) => {
    const response = await createReview(values)
    if (response.success) {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }

    form.reset()
  }

  return (
    <div className="flex flex-col w-full md:w-[60%] items-center m-auto h-auto px-4 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>firstName</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your lastName" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opinion</FormLabel>
                <FormControl>
                  <Input type = "email" placeholder="Enter Your email" {...field} />
                </FormControl>
                <FormDescription>Write your opinion here</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rate Us</FormLabel>
                <FormControl>
                  <Input placeholder = "Enter your Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full px-2 text-center items-center">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default WriteReview
