
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
import { useState } from "react"
import { resetPassword } from "../../../../service/credentialService"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const router = useRouter();

    const handleReset = async () => {
        if (!email || !password) {
            toast("please fill all the details")
            return
        }

        const resetData = {
            email: email,
            password: password
        }

        const user = await resetPassword(resetData)
        console.log(user)

        toast(user.message)

        setEmail("")
        setPassword("")

        router.push('/log-in')
    }



    return (
        <div className="flex items-center justify-center">
            <Card className="w-[90vw] max-w-sm">
                <CardHeader>
                    <CardTitle>Reset Your Password Now</CardTitle>
                    <CardDescription className="mt-2">
                        You will redirected to log-in after Reset
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
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    placeholder="At least 8 charecter"
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
                            handleReset()
                        }}
                    >
                        Reset Your Password
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )

}

export default ForgotPassword