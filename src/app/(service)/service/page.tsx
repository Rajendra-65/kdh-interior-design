import Image from "next/image";

const Service = () => {
    return(
        <div className = "flex items-center justify-center w-full h-screen">
            <div className = "flex flex-col items-center justify-center w-[40%] h-[250px]">    
                <h1 className = "text-2xl font-bold text-center">Interior Lightening</h1>
                <p className = "text-sm text center">
                    KHD Interior Design crafts elegant, functional spaces with a focus on personalized aesthetics and high-quality materials, transforming homes and offices into timeless expressions of style and comfort.
                </p>    
            </div>
            <div className = "w-[40%]">
                <Image
                    src="/interior-lightening.png" 
                    alt="Interior Design" 
                    className="w-full h-auto rounded-lg shadow-lg"
                    style={{ objectFit: "cover" }}
                    width = {600}
                    height = {600}
                />
            </div>
        </div>
    )
}

export default Service;