
"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import Link from "next/link"
import { useState } from "react"
// import { useRouter } from "next/navigation"
import { callbackRequest } from "../../../../service/sendEmailService"
import { toast } from "sonner"

const LogIn = () => {

    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("")
    

    const handlecallBack = async () => {
        if (!email || !phone) {
            toast("Please fill all the fields")
            return
        }

        const res = await callbackRequest(email,phone)
        setEmail("")
        setPhone("")
        if (res.success) {
            toast('Thank you for your request! We will get back to you soon.');
        } else {
           toast('Error sending message.');
        }

    }

    return (
        <div className="flex items-center justify-center">
            <Card className="w-[90vw] max-w-sm">
                <CardHeader>
                    <CardTitle>Get an call back from team</CardTitle>
                    <CardDescription className="mt-2">
                        Fill this form to get a call back from our team. we will get back to you as soon as possible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                    >
                        <div className="flex flex-col gap-6">

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                    placeholder="exactly 10 digits"
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={() => {
                            handlecallBack()
                        }}
                    >
                        request call back
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LogIn