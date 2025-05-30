"use client"
import React from "react";
import { motion } from "motion/react"

// import { Button } from "@/components/ui/button";
import Link from "next/link"
import { useRouter } from "next/navigation";
const Navbar = () => {
    const router = useRouter()

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
        hidden: { x: -80 , opacity:0},
        show:{
            x:0,
            opacity:1,
            transition:{type:"spring", stiffness:80, damping:20}
        }
    }

    const ButtonVariant = {
        hidden: {x:80 , opacity:0},
        show:{
            x:0,
            opacity:1,
            transition:{type:"spring", stiffness:80, damping:20}
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
                    initial = "hidden"
                    animate = "show"
                    className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}
                >
                    KHD
                </motion.h1>
            </div>

            <div>
                <motion.ul
                    variants={containerVariants}
                    className=" flex  tiems-center justify-around gap-9"
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
                                className="hover:underline-offset-1 hover:underline"
                            >
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            <motion.button
                className="animate-bounce bg-cyan-400 hover:bg-cyan-500 text-black hover:text-white shadow-lg shadow-cyan-500/50 opacity-75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 p-2 rounded-md"
                variants = {ButtonVariant}
                initial = "hidden"
                animate = "show"
                whileHover={{ scale: 1.1 }}
            >
                <Link href="/sign-up">Sign up</Link>
            </motion.button>
        </div>
    )
}

export default Navbar;