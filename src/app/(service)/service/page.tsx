"use client"
import {
    AlignVerticalSpaceBetween,
    Box,
    Construction,
    LampFloor,
    MapPinHouse,
    NotebookPen,
    Projector,
    Proportions,
    Rotate3D,
    Signature,
    TableCellsMerge,
    Telescope,
    Wand
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react"
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import {
    getLighteningImage,
    getOutroImage,
    getInteriorImage,
    getAnimationImage,
    getArchitectureImage,
    getConsultationImage,
    getDesignImage,
    getEstmiationImage,
    getElevationImage,
    getSupervisionImage,
    getThreed,
    getPlanningImage,
    getApprovalImage
} from "../../../../service/getImage";
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
    const [animationImage, setAnimationImage] = useState<string[]>([])
    const [architectureImage, setArchitectureImage] = useState<string[]>([])
    const [consultationImage, setConsultationImage] = useState<string[]>([])
    const [designImage, setDesignImage] = useState<string[]>([])
    const [estimationImage, setEstimationImage] = useState<string[]>([])
    const [elevationImage, setElevationImage] = useState<string[]>([])
    const [supervisionImage, setSupervisionImage] = useState<string[]>([])
    const [threedImage, setThreedImage] = useState<string[]>([])
    const [planningImage, setPlanningImage] = useState<string[]>([])
    const [approvalImage, setApprovalImage] = useState<string[]>([])

    const fetchImages = async () => {
        const interior = await getInteriorImage();
        setInteriorImage(interior)
        const outro = await getOutroImage();
        setOutroImage(outro)
        const lightening = await getLighteningImage();
        setLighteningImage(lightening)
        const animation = await getAnimationImage();
        setAnimationImage(animation)
        const architecture = await getArchitectureImage();
        setArchitectureImage(architecture)
        const consultation = await getConsultationImage();
        setConsultationImage(consultation)
        const elivation = await getElevationImage()
        setElevationImage(elivation)
        const estimation = await getEstmiationImage()
        setEstimationImage(estimation)
        const superVision = await getSupervisionImage()
        setSupervisionImage(superVision)
        const threed = await getThreed()
        setThreedImage(threed)
        const planning = await getPlanningImage()
        setPlanningImage(planning)
        const design = await getDesignImage()
        setDesignImage(design)
        const approval = await getApprovalImage()
        setApprovalImage(approval)
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
            icon: Projector,
            title: "Consultation",
            description: "Get expert guidance at every step of your construction or design project with our personalized consultation services.",
            shortQuote: "Your vision, our expert advice.",
            image: consultationImage,
            alt: "Consultation with client and architect"
        },
        {
            icon: NotebookPen,
            title: "Planning",
            description: "We carefully plan each stage of your project to ensure timely delivery and flawless execution.",
            shortQuote: "Great projects begin with great planning.",
            image: planningImage,
            alt: "Blueprint planning documents"
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
            icon: Construction,
            title: "Architecture",
            description: "We create innovative architectural designs that blend functionality with aesthetics, tailored to your needs.",
            shortQuote: "Designing spaces that inspire.",
            image: architectureImage,
            alt: "Modern architectural design"
        },
        {
            icon: Proportions,
            title: "Design",
            description: "Transform your ideas into beautiful, functional spaces with our expert design services.",
            shortQuote: "Designs that reflect your dreams.",
            image: designImage,
            alt: "Interior and exterior design sketch"
        },
        {
            icon: LampFloor,
            title: "Lightening Design",
            description: "Illuminate your spaces with our expert lighting design services, creating ambiance and functionality that enhances every room.",
            shortQuote: "“Designs that reflect who you are — our promise is beauty with purpose.”",
            image: LighteningImage,
            alt: "Lightening Design",
        },
        {
            icon: Signature,
            title: "Plan Approval",
            description: "We assist in getting your building plans approved by the authorities smoothly and efficiently.",
            shortQuote: "Navigating paperwork, made easy.",
            image: approvalImage,
            alt: "Plan approval document with signature"
        },
        {
            icon: AlignVerticalSpaceBetween,
            title: "2D Elivation",
            description: "Get accurate 2D elevations that represent the structure's true dimensions and appearance.",
            shortQuote: "Precision on paper.",
            image: elevationImage,
            alt: "2D elevation drawing of a building"
        },
        {
            icon: Box,
            title: "3D View",
            description: "Visualize your space in 3D before it’s built, helping you make confident design decisions.",
            shortQuote: "See it before it’s real.",
            image: threedImage,
            alt: "3D architectural render"
        },
        {
            icon: MapPinHouse,
            title: "Estimation",
            description: "We provide detailed cost estimation to help you plan your budget and avoid surprises.",
            shortQuote: "Clarity in cost, peace of mind.",
            image: estimationImage,
            alt: "Cost estimation chart and house model"
        },
        {
            icon: Telescope,
            title: "Supervision",
            description: "Our experts monitor your project on-site to ensure quality and timeline adherence.",
            shortQuote: "Eyes on your site, always.",
            image: supervisionImage,
            alt: "Engineer supervising a construction site"
        },
        {
            icon: Rotate3D,
            title: "animation",
            description: "Experience lifelike animated walkthroughs that bring your designs to life.",
            shortQuote: "Animating your imagination.",
            image: animationImage,
            alt: "3D animation of building walkthrough"
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
                                    {
                                        service.image && service.image.length > 0 ? (
                                            service.image.map((image, index) => (
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
                                            ))
                                        ) : (
                                            <div className="flex items-center space-x-4 m-auto">
                                                <Skeleton className="h-12 w-12 rounded-full bg-gray-400" />
                                                <div className="space-y-2 ">
                                                    <Skeleton className="h-4 w-[250px] bg-gray-400" />
                                                    <Skeleton className="h-4 w-[200px] bg-gray-400" />
                                                </div>
                                            </div>
                                        )
                                    }

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