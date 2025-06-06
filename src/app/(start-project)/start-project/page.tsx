"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { startProject } from "../../../../service/ReviewService"
import { toast } from "sonner"
import { checkAuth } from "../../../../service/tokenService"
import { useState } from "react"
import Link from "next/link"

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
  phone: z.string().min(10, {
    message: "phone number must be of 10 digits"
  }).max(10, {
    message: "phone number must be of 10 digits"
  })

})

// 2. Infer the TypeScript type
type FormSchemaType = z.infer<typeof formSchema>

const StartProject = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // 3. Hook up useForm with correct type
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }
  })

  // 4. Correctly type your submit handler
  const onSubmit: SubmitHandler<FormSchemaType> = async (values) => {
    const response = await startProject(values)
    if (response.success) {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }

    form.reset()
  }

  useEffect(() => {
    const authenicated = checkAuth()
    setIsAuthenticated(authenicated)
  }, [])

  return (
    <>
      {
        isAuthenticated ? (
          <div className="flex flex-col w-full md:w-[60%] items-center m-auto h-auto px-4 py-4" >
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
                      <FormLabel>lastName</FormLabel>
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Phone" {...field} />
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
        ) : (
          <div
            className="flex items-center justify-center"
          >
            <div className="border border-b-2 border-r-2 border-cyan-400 px-2 py-2 w-full md:w-[50%] ">
              <h1 className="text-lg flex m-auto items-center justify-center">
                please&nbsp;<Link href="/log-in" className="underline underline-offset-1 text-cyan-400">logIn</Link>&nbsp; to start start an project
              </h1>
            </div>
          </div>
        )
      }
    </>

  )
}

export default StartProject
