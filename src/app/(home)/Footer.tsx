
import { Mail } from "lucide-react";
import Link from "next/link";

interface cn{
    cn?: string;
}

const Footer = (cn:cn) => {
    return (
        <>
            <div className={`flex items-center justify-between border-t bg-black text-white p-0 w-full bottom-0 fixed z-50 ${cn}`}>
                <div className="p-4 w-[50%] hidden md:flex md:flex-col ">
                    <h1 className="text-lg font-bold cursor-pointer">KHD</h1>
                    <p className="text-sm w-[100%]">
                        KHD Interior Design crafts elegant, functional spaces with a focus on personalized aesthetics and high-quality materials, transforming homes and offices into timeless expressions of style and comfort.
                    </p>
                    <div className="flex gap-4 w-full">
                        <Link href="mailto:khdarchprojects@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." className="hover:underline-offset-1 hover:underline text-sm">
                            <Mail  className="size-3 mt-2" />
                        </Link>
                    </div>
                </div>
                <div className="w-[100%] md:w-[60%] flex  gap-10">
                    <div className="flex flex-col items-center justify-center p-2">
                        <h1 className="font-bold mb-2">Our Services</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Interior Design</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Outro Design</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Lightning Design</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 ">
                        <h1 className="font-bold mb-2 cursor-pointer">Company</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Review</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Carrers</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Pricing</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 ">
                        <h1 className="font-bold mb-2 cursor-pointer">Contact Us</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">khdarchprojects@gmail.com</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">ChandrasekharPur Bhubaneswar</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Lightning Design</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;