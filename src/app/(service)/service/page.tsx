import Image from "next/image";

const Service = () => {
    return (
        <div
            className="flex justify-between py-9 "
        >
            <div className="w-[50%] flex flex-col items-start md:w-[40%] mt-[27px] lg:justify-center md:mt-0">
                <h1 className="font-bold text-4xl mb-2">
                    Light Up Your Interiors with Elegance & Purpose
                </h1>
                <p className="text-sm text-gray-600 mb-4 mt-2">
                    Step into a world where the art of interior design is meticulously crafted to transform spaces into stunning visual narratives. At KHD, we believe that every room tells a story, and our mission is to help you tell yours with elegance and style.
                </p>
            </div>
            <div className="w-[50%] flex items-center justify-center md:w-[25%] border-2">
                <Image
                    src="/interior-lightening1.png"
                    alt="Interior Design"
                    className="w-full h-auto rounded-lg shadow-lg"
                    style={{ objectFit: "cover" }}
                    width={600}
                    height={400}
                />
            </div>
        </div>
    )
}

export default Service;