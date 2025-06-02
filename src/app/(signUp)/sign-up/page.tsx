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
import Link from "next/link"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const SignUp = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const HandleSignUp = () => {
        if (firstName === '' || email === '' || password === '' || password.length < 8) {
            alert("Please fill all the required fields");
            <Alert>
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                    Please fill all the required field in correct format
                </AlertDescription>
            </Alert>
            return;
        }

        const signUpData = {
            firstName,
            lastName,
            email,
            password
        }

        console.log("Sign up Data:",signUpData);

        // Reset the form fields after successful sign-up
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className="flex items-center justify-center">
            <Card className="w-[90vw] max-w-sm">
                <CardHeader>
                    <CardTitle>Create an New account</CardTitle>
                    <CardDescription className="mt-2">
                        Already have an account ?&nbsp;
                        <Link
                            className="text-sm text-cyan-400 underline underline-offset-1"
                            href="/log-in"
                        >
                            login to your account
                        </Link>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="text">First Name</Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="john"
                                    required
                                    value ={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="text">Last Name</Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    value = {lastName}
                                    onChange={
                                        (e) => {
                                            setLastName(e.target.value)
                                        }
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    required
                                    onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="At least 8 characters"
                                    value = {password}
                                    onChange={
                                        (e) => {
                                            setPassword(e.target.value)
                                        }
                                    }
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
                            HandleSignUp()
                        }}>
                        Signup
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignUp