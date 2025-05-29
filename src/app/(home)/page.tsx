import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-10 px-6">
        {/* Left: Text Section */}
        <div className="flex flex-col max-w-xl flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Interior Design KHD
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Step into a world where the art of interior design is meticulously crafted to transform spaces into stunning visual narratives. At KHD, we believe that every room tells a story, and our mission is to help you tell yours with elegance and style.
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 w-fit rounded-md">
            <Link href="/start-project">Start Project</Link>
          </Button>

          {/* Stats */}
          <div className="flex justify-between gap-6 mt-10">
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
          <Image
            src="/home-page-1st-right-image.jpg"
            alt="Interior Design"
            className="w-full h-auto rounded-lg shadow-xl relative z-10 object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>


      <div className="flex flex-col items-start">
        <div className="flex">
          <div className="h-[2px] w-14 bg-gray-700 justify-center mt-6 "></div>
          <h1 className="text-4xl font-semibold text-gray-700 ml-3">Our Services</h1>
        </div>
        <div className="pt-4 w-full flex justify-between pb-4">
          <div className="flex w-[450px] h-[130px] bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors duration-300 cursor-pointer">
            <Zap className="size-28 text-cyan-400 text-center" />
            <div className="flex flex-col pl-3">
              <h1 className="text-2xl">Lightening Design</h1>
              <p className="text-sm">
                Illuminate your spaces with our expert lighting design services, creating ambiance and functionality that enhances every room.
              </p>
            </div>
          </div>
          <div className="flex w-[450px] h-[130px]  bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors-duration-300 cursor-pointer">
            <Zap className="size-28 text-cyan-400" />
            <div className="flex flex-col pl-3">
              <h1 className="text-2xl">Interior Design</h1>
              <p className="text-sm">
                Transform your living spaces with our bespoke interior design services, blending aesthetics and functionality to create your dream environment.
              </p>
            </div>
          </div>
          <div className="flex w-[450px] h-[130px]  bg-gray-800 text-white border rounded-sm hover:bg-gray-950 transition-colors-duration-300 cursor-pointer">
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
