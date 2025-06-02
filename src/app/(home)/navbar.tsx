"use client"
import React from "react";
import { motion } from "motion/react"

// import { Button } from "@/components/ui/button";
import Link from "next/link"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/service" },
        { name: "Contact", href: "/contact" },
        { name: "Support", href: "/support" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                ease: "easeOut",
            },
        },
    };

    const itemVariants = {
        hidden: { y: -80, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };

    const LogoVariant = {
        hidden: { x: -80, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 20 }
        }
    }

    const ButtonVariant = {
        hidden: { x: 80, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 20 }
        }
    }

    return (
        <div
            className="flex  items-center justify-between p-8"
        >
            <div
                className="flex items-center justify-center"
            >
                <motion.h1
                    variants={LogoVariant}
                    initial="hidden"
                    animate="show"
                    className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}
                >
                    <Image
                        src="/KHD-logo.png"
                        width={80}
                        height={80}
                        alt="KHD Logo"
                        className="z-10"
                    />
                </motion.h1>
            </div>

            <div>
                <motion.ul
                    variants={containerVariants}
                    className=" md:flex  tiems-center justify-around gap-9 hidden md:visible"
                    initial="hidden"
                    animate="show"
                >
                    {navItems.map((item, idx) => (
                        <motion.li
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            className="text-lg font-semibold cursor-pointer text-shadow-lg"
                        >
                            <Link
                                href={item.href}
                                className={`hover:underline-offset-1 hover:underline ${pathName === item.href ? "underline-offset-1 underline" : ""}`}
                            >
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            <motion.button
                className="md:flex md:visible md:animate-bounce hidden  bg-cyan-400 hover:bg-cyan-500 text-black hover:text-white shadow-lg shadow-cyan-500/50 opacity-75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-2 rounded-md"
                variants={ButtonVariant}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.1 }}
            >
                <Link href="/sign-up">Sign up</Link>
            </motion.button>
            <div className="visible md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Menu />
                    </SheetTrigger>

                    <SheetContent>
                        <ul className="flex flex-col gap-4 p-6">
                            {navItems.map((item, idx) => (
                                <li key={idx} className="text-lg font-semibold cursor-pointer">
                                    <Link
                                        href={item.href}
                                        className={`hover:underline-offset-1 hover:underline ${pathName === item.href ? "underline-offset-1 underline" : ""}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <Button
                                className="bg-cyan-400 hover:bg-cyan-500 text-black hover:text-white shadow-lg shadow-cyan-500/50 opacity-75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-2 rounded-md"
                                onClick={() => router.push('/sign-up')}
                            >
                                Sign-up
                            </Button>
                        </ul>
                        <SheetFooter>
                            <div className="flex flex-col justify-center">
                                <h1 className="font-bold">Follow us on</h1>
                                <div className="flex gap-2">
                                    <Image src="/facebook-icon.png" alt="Facebook" width={30} height={30} className="cursor-pointer bg-transparent" onClick={() => window.open("https://www.facebook.com", "_blank")} />
                                    <Image src="/insta-logo.png" alt="Twitter" width={30} height={30} className="cursor-pointer bg-transparent" onClick={() => window.open("https://www.twitter.com", "_blank")} />
                                </div>
                            </div>
                            <SheetClose asChild>
                                <Button variant="destructive" className = "cursor-pointer">Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>

                </Sheet>
            </div>
        </div>
    )
}

export default Navbar;