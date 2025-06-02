
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

const LogIn = () => {
    return (
        <div className="flex items-center justify-center">
            <Card className="w-[90vw] max-w-sm">
                <CardHeader>
                    <CardTitle>Enter the details to LogIn</CardTitle>
                    <CardDescription className="mt-2">
                        New to KHD ?&nbsp;
                        <Link
                            className="text-sm text-cyan-400 underline underline-offset-1"
                            href="/sign-up"
                        >
                            Create an account
                        </Link>
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
                                    required
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
                    >
                        logIn
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LogIn