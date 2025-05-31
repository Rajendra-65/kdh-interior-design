"use client";
import { motion } from "motion/react";

const Support = () => {
    const str: string = "Support & Help Center";
    const headArray: string[] = str.split(" ");

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

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-12">
            <motion.div
                className="flex gap-1 justify-center"
                variants={DivVariant}
                initial="hidden"
                animate="show"
            >
                {
                    headArray.map((word, index) => (
                        <motion.h1
                            key={index}
                            className="text-3xl font-bold text-gray-800"
                            variants={h1Variants}
                        >
                            {word}
                        </motion.h1>
                    ))
                }
            </motion.div>

            <p className="mt-2 text-gray-600">
                We`&apos;`re here to assist you with anything related to your interior design journey with KHD.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className=" border-2 rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-1 text-cyan-600">Email Us</h2>
                    <p className="text-gray-700">khdarchprojects@gmail.com</p>
                </div>
                <div className="border-2 rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-1 text-cyan-600">Call Us</h2>
                    <p className="text-gray-700">+91 90400902333</p>
                </div>
                <div className="border-2 rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-1 text-cyan-600">Visit Us</h2>
                    <p className="text-gray-700">2nd floor, Kanheilal Complex, Plot No. - 42, District Center, Chandrasekharpur, Bhubaneswar, Odisha 751016</p>
                </div>
            </div>


            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 animate-caret-blink">Send a Message</h2>
                <form className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <textarea
                        placeholder="How can we help you?"
                        rows={4}
                        className="border border-gray-300 rounded-md p-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-cyan-600 text-white rounded-md py-2 hover:bg-cyan-700"
                    >
                        Submit
                    </button>
                </form>
            </div>


            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="font-medium cursor-pointer">How do I book a consultation?</summary>
                        <p className="mt-2 text-sm text-gray-600">
                            You can use the contact form above or email us directly at support@khd.design.
                        </p>
                    </details>
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="font-medium cursor-pointer">Do you work outside Bhubaneswar?</summary>
                        <p className="mt-2 text-sm text-gray-600">
                            Yes, we handle select projects across Odisha and nearby states. Reach out with your location.
                        </p>
                    </details>
                </div>
            </div>


        </div>
    )
}

export default Support;
