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
import { useRouter } from "next/navigation"

// 1. Define your Zod schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters long!"
  }).max(8, {
    message: "Username must be within 8 characters!"
  }),
  email: z.string().email(),
  message: z.string().min(20, {
    message: "Your message should be at least 20 characters long!"
  }).max(200, {
    message: "Your message must be within 200 characters"
  }),
  rate: z.coerce.number().min(1,{
    message:"Number must not be less than 1"
  }).max(5,{
    message:"Number must not be greater than 5"
  }),

})

// 2. Infer the TypeScript type
type FormSchemaType = z.infer<typeof formSchema>

const WriteReview = () => {
  const router = useRouter()

  // 3. Hook up useForm with correct type
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      rate: 1
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
      <Button
        className="w-[50%] items-center text-center justify-center text-black bg-cyan-400 animate-bounce"
        onClick={() => router.push("/reviews")}
      >
        See all Reviews
      </Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name
                </FormDescription>
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
                  <Input placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormDescription>Email must be unique</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opinion</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Opinion" {...field} />
                </FormControl>
                <FormDescription>Write your opinion here</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rate Us</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>Rate out of 5</FormDescription>
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
