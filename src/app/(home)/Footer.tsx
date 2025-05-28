
import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-between py-4 border-t bg-black text-white p-0 w-full bottom-0 fixed z-50">
                <div className="p-4">
                    <h1 className="text-lg font-bold cursor-pointer">KHD</h1>
                    <p className="text-sm w-[40%]">
                        KHD Interior Design crafts elegant, functional spaces with a focus on personalized aesthetics and high-quality materials, transforming homes and offices into timeless expressions of style and comfort.
                    </p>
                    <div className="flex gap-4 w-full">
                        <Link className="hover:underline-offset-1 hover:underline text-sm" href="">
                            <Mail className="size-3 mt-2" />
                        </Link>
                    </div>
                </div>
                <div className="w-[80%] md:w-[60%] flex  gap-10">
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
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">info@kdh.com</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Chandrashekar Pur Bhubaneswar</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer">Lightning Design</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;