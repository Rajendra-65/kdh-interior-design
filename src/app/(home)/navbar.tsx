"use client"
import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link"
import { useRouter } from "next/navigation";
const Navbar = () => {
    const router = useRouter()
    return (
        <div
            className="flex  items-center justify-between"
        >
            <div
                className="flex items-center justify-center"
            >
                <h1 className="text-xl font-bold cursor-pointer" onClick={()=>router.push("/")}>KHD</h1>
            </div>

            <div>
                <ul
                    className=" flex  tiems-center justify-around gap-9"
                >
                    <Link className="hover:underline-offset-1 hover:underline" href="/">
                        <li className="text-lg font-semibold cursor-pointer text-shadow-lg ">Home</li>
                    </Link>
                    <Link className="hover:underline-offset-1 hover:underline" href="/service">
                        <li className="text-lg font-semibold cursor-pointer text-shadow-lg ">Services</li>
                    </Link>
                    <Link className="hover:underline-offset-1 hover:underline" href="/contact">
                        <li className="text-lg font-semibold cursor-pointer text-shadow-lg ">Contact</li>
                    </Link>
                    <Link className="hover:underline-offset-1 hover:underline" href="/support">
                        <li className="text-lg font-semibold cursor-pointer text-shadow-lg">Support</li>
                    </Link>
                </ul>
            </div>

            <Button
                className="bg-cyan-400 hover:bg-cyan-500 text-black hover:text-white shadow-lg shadow-cyan-500/50 opacity-75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
                asChild
            >
                <Link href="/sign-up">Sign up</Link>
            </Button>
        </div>
    )
}

export default Navbar;