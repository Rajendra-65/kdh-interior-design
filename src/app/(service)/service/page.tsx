"use client"
import { LampFloor, TableCellsMerge, Wand } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react"
import { useState } from "react";
import { getInteriorImage } from "../../../../service/getImage";
import { getOutroImage } from "../../../../service/getImage";
import { getLighteningImage } from "../../../../service/getImage";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Service = () => {

    const [interiorImage, setInteriorImage] = useState<string[]>([])
    const [outroImage, setOutroImage] = useState<string[]>([])
    const [LighteningImage, setLighteningImage] = useState<string[]>([])

    const fetchImages = async () => {
        const interior = await getInteriorImage();
        setInteriorImage(interior)
        const outro = await getOutroImage();
        setOutroImage(outro)
        const lightening = await getLighteningImage();
        setLighteningImage(lightening)
    }

    useEffect(() => {
        fetchImages();
    }, [])

    interface ServiceProps {
        icon: LucideIcon;
        title: string;
        description: string;
        shortQuote: string;
        image: string[];
        alt: string
    }

    const services: ServiceProps[] = [
        {
            icon: Wand,
            title: "Interior Design",
            description: "Transform your space into a blend of functionality and elegance with our custom interior design solutions.",
            shortQuote: "“Designs that reflect who you are — our promise is beauty with purpose.”",
            image: interiorImage,
            alt: "Interior Design"
        },
        {
            icon: TableCellsMerge,
            title: "Outro Design",
            description: "Transform your space into a blend of functionality and elegance with our custom outro design solutions.",
            shortQuote: "“Designs that reflect who you are — our promise is beauty with purpose.”",
            image: outroImage,
            alt: "Outro Design"
        },
        {
            icon: LampFloor,
            title: "Lightening Design",
            description: "Illuminate your spaces with our expert lighting design services, creating ambiance and functionality that enhances every room.",
            shortQuote: "“Designs that reflect who you are — our promise is beauty with purpose.”",
            image: LighteningImage,
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
                {services.map((service: ServiceProps, index: number) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-start w-full max-w-md border border-gray-300 rounded-xl shadow-sm p-6 mt-8 bg-white hover:shadow-md transition-shadow duration-300"
                        variants={serviceVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Header */}
                        <div className="flex items-center mb-4">
                            <service.icon className="text-cyan-500 size-8" />
                            <h2 className="ml-3 text-xl font-semibold text-gray-800">{service.title}</h2>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                        <p className="text-gray-500 italic text-xs mb-4">{service.shortQuote}</p>

                        {/* Carousel Section */}
                        <div className="w-full relative">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {service.image.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-2">
                                                <Card className="w-full">
                                                    <CardContent className="p-0 w-full h-48">
                                                        <span
                                                            className="block w-full h-full bg-cover bg-center rounded-lg shadow-md"
                                                            style={{ backgroundImage: `url(${image})` }}
                                                        ></span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </motion.div>
                ))}

            </motion.div>
        </>
    )
}

export default Service;