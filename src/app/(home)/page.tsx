import Image from "next/image";

export default function Home() {
  return (
    <div
      className = "flex justify-between py-9"
    >
      <div className = "flex flex-col items-start w-[30%] mt-[27px] lg:justify-center md:mt-0">
        <h1 className = "font-bold text-4xl mb-2">
          Interior Design KHD
        </h1>
        <p className = "text-sm text-gray-600 mb-4 mt-2">
          Step into a world where the art of interior design is meticulously crafted to transform spaces into stunning visual narratives. At KHD, we believe that every room tells a story, and our mission is to help you tell yours with elegance and style.
        </p>
      </div>
      <div className = "flex items-center justify-center w-[25%] border-2">
        <Image
          src = "/home-page-1st-right-image.jpg"
          alt = "Interior Design"
          className = "w-full h-auto rounded-lg shadow-lg"
          style={{ objectFit: "cover" }}
          width={600}
          height={400}
        />
      </div>
    </div>

  );
}
