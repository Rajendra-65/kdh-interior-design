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
    try{
      toast.info("Please logIn to start an project")
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    const images = fetchInteriorImage();
    console.log(images)
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
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:py-4 py-2 px-6 lg:pb-0  ">
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
                className="text-3xl md:text-4xl font-bold text-gray-800"
                variants={h1Variants}
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed md:mb-6 mb-0">
            Step into a world where the art of interior design is meticulously crafted to transform spaces into stunning visual narratives. At KHD, we believe that every room tells a story, and our mission is to help you tell yours with elegance and style.
          </p>
          {/* animate-bounce */}
          <Button
            className="animate-bounce mt-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-0 md:mt-0 md:py-2 w-fit rounded-md shadow-lg shadow-cyan-500/50 opacity-75 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
            asChild
          >
            {
              isAuthenticated ? (
                <Link href="/start-project">Start Project</Link>
              ) : (
                <Link 
                  href="#" 
                  onClick = {()=>handleStartProjectClick()}
                >
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
                <h2 className="text-2xl font-semibold text-gray-800">{item.count}</h2>
                <p className="text-xs text-gray-500 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image with border accent */}
        <div className="relative flex-1 max-w-md">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {images.map((_, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        {/* Background image span */}
                        <span
                          className={`w-full h-full block bg-cover bg-center rounded-lg shadow-md`}
                          style={{ backgroundImage: `url(${images[index]})` }}
                        >

                        </span>
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

      </div>


      <div className="flex flex-col items-start ">
        <div className="flex pl-8">
          <div className="h-[2px] w-14 bg-gray-700 justify-center mt-6 "></div>
          <h1 className="text-4xl font-semibold text-gray-700 ml-3">Our Services</h1>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-center place-items-center gap-2  pt-4 w-full md:items-start md:flex md:gap-4 md:flex-wrap md:justify-center pb-4"
          onClick={() => router.push('/service')}
        >
          <div
            className="flex w-[350px] sm:w-[450px] h-[130px] bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors duration-300 cursor-pointer"
          >
            <Zap className="size-28 text-cyan-400 text-center" />
            <div className="flex flex-col pl-3">
              <h1 className="text-2xl">Lightening Design</h1>
              <p className="text-sm">
                Illuminate your spaces with our expert lighting design services, creating ambiance and functionality that enhances every room.
              </p>
            </div>
          </div>
          <div
            className="flex w-[350px] sm:w-[450px] h-[130px]  bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors-duration-300 cursor-pointer"
          >
            <Zap className="size-28 text-cyan-400" />
            <div className="flex flex-col pl-3">
              <h1 className="text-2xl">Interior Design</h1>
              <p className="text-sm">
                Transform your living spaces with our bespoke interior design services, blending aesthetics and functionality to create your dream environment.
              </p>
            </div>
          </div>
          <div
            className="flex w-[350px] sm:w-[450px] h-[130px]  bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors-duration-300 cursor-pointer"
          >
            <Zap className="size-28 text-cyan-400" />
            <div className="flex flex-col pl-3">
              <h1 className="text-2xl">Outro Design</h1>
              <p className="text-sm">
                Elevate your outdoor spaces with our innovative outro design services, merging nature and architecture to create serene and functional exteriors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
