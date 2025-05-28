import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <div
        className="flex justify-between py-9 "
      >
        <div className="w-[50%] flex flex-col items-start md:w-[30%] mt-[27px] lg:justify-center md:mt-0">
          <h1 className="font-bold text-4xl mb-2">
            Interior Design KHD
          </h1>
          <p className="text-sm text-gray-600 mb-4 mt-2">
            Step into a world where the art of interior design is meticulously crafted to transform spaces into stunning visual narratives. At KHD, we believe that every room tells a story, and our mission is to help you tell yours with elegance and style.
          </p>
        </div>
        <div className="w-[50%] flex items-center justify-center md:w-[25%] border-2">
          <Image
            src="/home-page-1st-right-image.jpg"
            alt="Interior Design"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ objectFit: "cover" }}
            width={600}
            height={400}
          />
        </div>
      </div>

      <div
        className="flex justify-between py-9 "
      >
        <div className = "flex flex-col items-start w-[30%]">
          <Button
            className = "bg-cyan-400 hover:bg-cyan-500 text-black hover:text-white pb-6 "
            asChild
          >
            <Link href="/start-project" >Startproject</Link>
          </Button>
          <div className = "flex items-center justify-between w-[100%] mt-[27%]">
            <div className = "flex flex-col items-center">
              <h1 className = "font-semibold text-2xl ">
                400+
              </h1>
              <h1 className = "font-semibold text-xs">
                project Complete
              </h1>
            </div>
            <div className = "flex flex-col items-center">
              <h1 className = "font-semibold text-2xl ">
                600+
              </h1>
              <h1 className = "font-semibold text-xs">
                Unique Client
              </h1>
            </div>
            <div className = "flex flex-col items-center">
              <h1 className = "font-semibold text-2xl ">
                100+
              </h1>
              <h1 className = "font-semibold text-xs">
                Unique Styles
              </h1>
            </div>
          </div>
        </div>
        <div className = "flex items-center w-[30%] pr-7 ">
          <div className = "border-2 border-black w-[5.83 vw] h-[4.74 vw] ml-[-0.89%] absolute mt-[-8.44%] hidden md:visible">

          </div>
          <Image
            src="/home-page-1st-right-image.jpg"
            alt="Interior Design"
            className="w-full h-auto rounded-lg shadow-lg z-10"
            style={{ objectFit: "cover" }}
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className = "flex flex-col items-start">
        <div className = "flex">
          <div className = "h-[2px] w-14 bg-gray-700 justify-center mt-6 "></div>
          <h1 className="text-4xl font-semibold text-gray-700 ml-3">Our Services</h1>
        </div>
        <div className = "pt-4 w-full flex justify-between pb-4">
          <div className = "flex w-[450px] h-[130px] bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors duration-300 cursor-pointer">
            <Zap className="size-28 text-cyan-400 text-center" />
            <div className = "flex flex-col pl-3">
              <h1 className = "text-2xl">Lightening Design</h1>
              <p className = "text-sm">
                Illuminate your spaces with our expert lighting design services, creating ambiance and functionality that enhances every room.
              </p>
            </div>
          </div>
          <div className = "flex w-[450px] h-[130px]  bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors-duration-300 cursor-pointer">
            <Zap className="size-28 text-cyan-400" />
            <div className = "flex flex-col pl-3">
              <h1 className = "text-2xl">Interior Design</h1>
              <p className = "text-sm">
                Transform your living spaces with our bespoke interior design services, blending aesthetics and functionality to create your dream environment.
              </p>
            </div>
          </div>
          <div className = "flex w-[450px] h-[130px]  bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors-duration-300 cursor-pointer">
            <Zap className="size-28 text-cyan-400" />
            <div className = "flex flex-col pl-3">
              <h1 className = "text-2xl">Outro Design</h1>
              <p className = "text-sm">
                Elevate your outdoor spaces with our innovative outro design services, merging nature and architecture to create serene and functional exteriors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
