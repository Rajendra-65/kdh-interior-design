import { LampFloor, TableCellsMerge, Wand } from "lucide-react";
import Image from "next/image";

const Service = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row md:gap-2 sm:flex-wrap items-center place-content-center lg:place-content-evenly  lg:items-start ">
                <div className="flex flex-col items-start w-full max-w-md border border-gray-300 rounded-xl shadow-sm p-6 mt-8 bg-white hover:shadow-md transition-shadow duration-300 h-[440px]">
                    <div>
                        <div className="flex items-center mb-4">
                            <Wand className="text-cyan-500 size-8" />
                            <h2 className="ml-3 text-xl font-semibold text-gray-800">Interior Design</h2>
                        </div>

                        <p className="text-gray-600 text-sm mb-3">
                            Transform your space into a blend of functionality and elegance with our custom interior design solutions.
                        </p>

                        <p className="text-gray-500 italic text-xs">
                            “Designs that reflect who you are — our promise is beauty with purpose.”
                        </p>
                        <div className="flex items-center w-full h-[100px] pb-2 relative bottom-0">
                            <Image
                                src="/home-page-1st-right-image.jpg"
                                alt="Interior Design"
                                className="w-full h-auto rounded-lg shadow-lg z-10 mt-[193px]"
                                style={{ objectFit: "cover" }}
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full max-w-md border border-gray-300 rounded-xl shadow-sm p-6 mt-8 bg-white hover:shadow-md transition-shadow duration-300 h-[440px]">
                    <div>
                        <div className="flex items-center mb-4">
                            <TableCellsMerge className="text-cyan-500 size-8" />
                            <h2 className="ml-3 text-xl font-semibold text-gray-800">Outro Design</h2>
                        </div>

                        <p className="text-gray-600 text-sm mb-3">
                            Transform your space into a blend of functionality and elegance with our custom interior design solutions.
                        </p>

                        <p className="text-gray-500 italic text-xs">
                            “Designs that reflect who you are — our promise is beauty with purpose.”
                        </p>
                        <div className="flex items-center w-full h-[100px] pb-2 relative bottom-0">
                            <Image
                                src="/home-page-1st-right-image.jpg"
                                alt="Interior Design"
                                className="w-full h-auto rounded-lg shadow-lg z-10 mt-[193px]"
                                style={{ objectFit: "cover" }}
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full max-w-md border border-gray-300 rounded-xl shadow-sm p-6 mt-8 bg-white hover:shadow-md transition-shadow duration-300 h-[440px]">
                    <div>
                        <div className="flex items-center mb-4">
                            <LampFloor className="text-cyan-500 size-8" />
                            <h2 className="ml-3 text-xl font-semibold text-gray-800">Lightening Design</h2>
                        </div>

                        <p className="text-gray-600 text-sm mb-3">
                            Transform your space into a blend of functionality and elegance with our custom interior design solutions.
                        </p>

                        <p className="text-gray-500 italic text-xs">
                            “Designs that reflect who you are — our promise is beauty with purpose.”
                        </p>
                        <div className="flex items-center w-full h-[100px] pb-2 relative bottom-0">
                            <Image
                                src="/home-page-1st-right-image.jpg"
                                alt="Interior Design"
                                className="w-full h-auto rounded-lg shadow-lg z-10 mt-[193px]"
                                style={{ objectFit: "cover" }}
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;