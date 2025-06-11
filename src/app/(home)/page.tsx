"use client"
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getInteriorImage } from "../../../service/getImage";
import { useEffect, useState } from "react";
import { checkAuth } from "../../../service/tokenService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

export default function Home() {
  const [images, setImages] = useState<string[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const str: string = "KHD Interior Projects [OPC] pvt. LTD."
  const headArray: string[] = str.split(" ");

  const router = useRouter()

  const fetchInteriorImage = async () => {
    try {
      const images = await getInteriorImage();
      setImages(images)
    } catch (error) {
      console.error("Error fetching interior images:", error);
      return [];
    }
  }

  const handleStartProjectClick = async () => {
    try {
      toast.info("Please logIn to start an project")
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchInteriorImage();
  }, [])

  useEffect(() => {
    const value = checkAuth();
    setIsAuthenticated(value)
  }, [images])



  const divVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const h1Variants = {
    hidden: { y: -80, opacity: 0, delay: 2 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-fill"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/homepage-bg-video/bg-video1.mp4" type="video/mp4" />
        </video>

        {/* Overlay (optional, for better readability) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

        {/* Main Content over video */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 md:py-4 py-2 px-6 lg:pb-0 h-full top-[200px] md:top-0">
          {/* Left: Text Section */}
          <div className="flex flex-col max-w-xl flex-1">
            <motion.div
              variants={divVariants}
              initial="hidden"
              animate="show"
              className="flex gap-1 mb-1 flex-wrap"
            >
              {headArray.map((word, index) => (
                <motion.h1
                  key={index}
                  className="text-3xl md:text-4xl font-bold text-white"
                  variants={h1Variants}
                >
                  {word}
                </motion.h1>
              ))}
            </motion.div>
            <p className="text-white text-sm md:text-base leading-relaxed md:mb-6 mb-0">
              Step into a world where the art of interior design is meticulously crafted to transform spaces into stunning visual narratives. At KHD, we believe that every room tells a story, and our mission is to help you tell yours with elegance and style.
            </p>

            <Button
              className="animate-bounce mt-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-0 md:mt-0 md:py-2 w-fit rounded-md shadow-lg shadow-cyan-500/50 opacity-75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              asChild
            >
              {
                isAuthenticated ? (
                  <Link href="/start-project">Start Project</Link>
                ) : (
                  <Link href="/sign-up" onClick={() => handleStartProjectClick()}>
                    Start Project
                  </Link>
                )
              }
            </Button>

            {/* Stats */}
            <div className="flex justify-between gap-6 mt-2 md:mt-10">
              {[
                { count: "400+", label: "Projects Complete" },
                { count: "600+", label: "Unique Clients" },
                { count: "100+", label: "Unique Styles" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold text-white">{item.count}</h2>
                  <p className="text-xs text-white/80 text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* You can optionally add a right-side image or content here */}
        </div>
      </div>

      {/* The image right after the Video */}

      <div className="flex justify-center items-center w-full px-4 py-8 bg-gray-50">
        <Carousel className="w-full max-w-4xl">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="px-2 md:basis-1/3">
                <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <CardContent className="flex items-center justify-center p-0 overflow-hidden rounded-xl">
                    <span
                      className="w-full h-64 block bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>


      {/* Services Section - Separate from video */}
      <div className="flex flex-col items-start bg-white">
        <div className="flex pl-8">
          <div className="h-[2px] w-14 bg-gray-700 justify-center mt-6"></div>
          <h1 className="text-4xl font-semibold text-gray-700 ml-3">Our Services</h1>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-center place-items-center gap-2 pt-4 w-full md:items-start md:flex md:gap-4 md:flex-wrap md:justify-center pb-4"
          onClick={() => router.push('/service')}
        >
          {[
            {
              title: "Lightening Design",
              desc: "Illuminate your spaces with our expert lighting design services, creating ambiance and functionality that enhances every room.",
            },
            {
              title: "Interior Design",
              desc: "Transform your living spaces with our bespoke interior design services, blending aesthetics and functionality to create your dream environment.",
            },
            {
              title: "Outro Design",
              desc: "Elevate your outdoor spaces with our innovative outro design services, merging nature and architecture to create serene and functional exteriors.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex w-[350px] sm:w-[450px] h-[130px] bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors duration-300 cursor-pointer"
            >
              <Zap className="size-28 text-cyan-400" />
              <div className="flex flex-col pl-3">
                <h1 className="text-2xl">{item.title}</h1>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className = "pt-2 flex flex-col">
        <div className="flex pl-8">
          <div className="h-[2px] w-14 bg-gray-700 justify-center mt-6"></div>
          <h1 className="text-4xl font-semibold text-gray-700 ml-3">Our Happy Clients</h1>
        </div>
        <div className = " w-full pl-2 h-auto py-2 border flex items-center justify-center pt-3 flex-wrap gap-5">
          <div>
            <Image
              src="/client-logo/kfc-logo.png"
              width = {60}
              height = {60}
              alt= "KFC logo"
            />
          </div>
          <div>
            <Image
              src="/client-logo/dash-plastic-surgery-dasthetics-logo.png"
              width = {60}
              height = {60}
              alt= "KFC logo"
            />
          </div>
          <div>
            <Image
              src="/client-logo/ilex-logo.png"
              width = {60}
              height = {60}
              alt= "KFC logo"
            />
          </div>
          <div>
            <Image
              src="/client-logo/IREL-logo.jpg"
              width = {60}
              height = {60}
              alt = "KFC logo"
              className = "z-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
