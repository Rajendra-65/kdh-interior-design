import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div
        className="flex justify-between py-9"
      >
        <div className="flex flex-col items-start w-[30%] mt-[27px] lg:justify-center md:mt-0">
          <h1 className="font-bold text-4xl mb-2">
            Interior Design KHD
          </h1>
          <p className="text-sm text-gray-600 mb-4 mt-2">
            Step into a world where the art of interior design is meticulously crafted to transform spaces into stunning visual narratives. At KHD, we believe that every room tells a story, and our mission is to help you tell yours with elegance and style.
          </p>
        </div>
        <div className="flex items-center justify-center w-[25%] border-2">
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
          <div className = "border-2 border-black w-[112px] h-[91px] ml-[-17px] absolute mt-[-162px]">

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
    </>
  );
}
