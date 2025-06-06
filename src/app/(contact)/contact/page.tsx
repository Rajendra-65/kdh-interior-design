"use client";
import { motion } from "motion/react";
import React from "react";
import { sendMessage } from "../../../../service/sendEmailService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// import Link from "next/link";

const Contact = () => {
    const str: string = "Contact KHD Interior Design";
    const headArray: string[] = str.split(" ");
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");    
    const [message, setMessage] = React.useState<string>("");
    const router = useRouter()
    const DivVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                ease: "easeOut"
            }
        }
    }

    const h1Variants = {
        hidden: { y: -80, opacity: 0, delay: 2 },
        show: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        if (!name || !email || !message) {
            toast("fill all the details correctly")
            return;
        }
        e.preventDefault();
        const res = await sendMessage(name,email,message)
        setName("");
        setEmail("");
        setMessage("");
        if (res.success) {

            toast("message Sent");
        } else {
            toast("Error sending Message");
        }
    };


    return (
        <div className="bg-gray-50 min-h-screen p-6">

            <motion.div
                className="text-center mb-10"
                variants={DivVariant}
                initial="hidden"
                animate="show"
            >
                <div className="flex justify-center flex-wrap gap-x-2">
                    {headArray.map((word, index) => (
                        <motion.h1
                            key={index}
                            className="text-3xl md:text-4xl font-bold text-gray-800"
                            variants={h1Variants}
                        >
                            {word}
                        </motion.h1>
                    ))}
                </div>

                <p className="text-gray-500 mt-2">We’d love to hear about your project</p>
            </motion.div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-md">
                <div>
                    <h2 className="text-2xl font-semibold mb-6 animate-pulse">Send Us a Message</h2>
                    <form className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-khd"
                                value = {name}
                                onChange ={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-khd"
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                placeholder="Tell us about your interior project..."
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-khd"
                                value = {message}
                                onChange = {(e)=>setMessage(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            
                            className="cursor-pointer inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>

                        <h1 className="mx-2">or</h1>

                        <button
                            type="button" 
                            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                            onClick = {() => router.push("/call-back")}
                        >
                            Request a call back
                        </button>
                    </form>
                </div>



                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Visit or Contact Us</h2>
                    <div>
                        <p className="text-gray-700"><strong>Address:</strong>2nd floor, Kanheilal Complex, Plot No. - 42, District Center, Chandrasekharpur, Bhubaneswar, Odisha 751016</p>
                        <p className="text-gray-700"><strong>Phone:</strong> +91 90400902333</p>
                        <p className="text-gray-700"><strong>Email:</strong> khdarchprojects@gmail.com</p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps?q=KHD%20Interior%20Projects%20(opc)%20Pvt.Ltd.District%20Center,Chandrasekharpur,Bhubaneswar&output=embed"
                        width="100%"
                        height="300"
                        loading="lazy"

                    >
                    </iframe>

                </div>
            </div>
        </div>
    );
};

export default Contact;
