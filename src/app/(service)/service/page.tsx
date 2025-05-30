"use client"
import { LampFloor, TableCellsMerge, Wand } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react"

const Service = () => {

    interface ServiceProps {
        icon: LucideIcon;
        title: string;
        description: string;
        shortQuote: string;
        image: string;
        alt: string
    }

    const services: ServiceProps[] = [
        {
            icon: Wand,
            title: "Interior Design",
            description: "Transform your space into a blend of functionality and elegance with our custom interior design solutions.",
            shortQuote: "“Designs that reflect who you are — our promise is beauty with purpose.”",
            image: "/home-page-1st-right-image.jpg",
            alt: "Interior Design"
        },
        {
            icon: TableCellsMerge,
            title: "Outro Design",
            description: "Transform your space into a blend of functionality and elegance with our custom outro design solutions.",
            shortQuote: "“Designs that reflect who you are — our promise is beauty with purpose.”",
            image: "/home-page-1st-right-image.jpg",
            alt: "Outro Design"
        },
        {
            icon: LampFloor,
            title: "Lightening Design",
            description: "Illuminate your spaces with our expert lighting design services, creating ambiance and functionality that enhances every room.",
            shortQuote: "“Designs that reflect who you are — our promise is beauty with purpose.”",
            image: "/home-page-1st-right-image.jpg",
            alt: "Lightening Design",
        }
    ]

    const divVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                ease: "easeInOut",
            },
        },
    };

    const serviceVariants = {
        hidden: { y: -80, opacity: 0, delay: 2 },
        show: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };

    return (
        <>
            <motion.div
                className="flex flex-col sm:flex-row md:gap-2 sm:flex-wrap items-center place-content-center lg:place-content-evenly  lg:items-start "
                variants={divVariants}
                initial="hidden"
                animate="show"

            >
                {
                    services.map((service: ServiceProps, index: number) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start w-full max-w-md border border-gray-300 rounded-xl shadow-sm p-6 mt-8 bg-white hover:shadow-md transition-shadow duration-300 h-[440px]"
                            variants={serviceVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div>
                                <div className="flex items-center mb-4">
                                    <service.icon className="text-cyan-500 size-8" />
                                    <h2 className="ml-3 text-xl font-semibold text-gray-800">{service.title}</h2>
                                </div>

                                <p className="text-gray-600 text-sm mb-3">
                                    {service.description}
                                </p>

                                <p className="text-gray-500 italic text-xs">
                                    {service.shortQuote}
                                </p>
                                <div className="flex items-center w-full h-[100px] pb-2 relative bottom-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto rounded-lg shadow-lg z-10 mt-[193px]"
                                        style={{ objectFit: "cover" }}
                                        width={600}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </>
    )
}

export default Service;