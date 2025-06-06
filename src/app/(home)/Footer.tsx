"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface cn{
    cn?: string;
}

const Footer = (cn:cn) => {
    const Router = useRouter();
    return (
        <>
            <div className={`md:flex items-center justify-between border-t bg-black text-white p-0 w-full bottom-0 fixed z-50 ${cn} hidden md:visible`}>
                <div className="p-4 w-[50%] hidden lg:flex lg:flex-col ">
                    <h1 className="text-lg font-bold cursor-pointer">KHD</h1>
                    <p className="text-sm w-[100%]">
                        KHD Interior Design crafts elegant, functional spaces with a focus on personalized aesthetics and high-quality materials, transforming homes and offices into timeless expressions of style and comfort.
                    </p>
                    <div className="flex gap-4 w-full">
                        <Link href="mailto:khdarchprojects@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." className="hover:underline-offset-1 hover:underline text-sm">
                            <Mail  className="size-3 mt-2" />
                        </Link>
                        <Image src="/insta-logo.png" alt="Facebook" width={18} height={18} className="cursor-pointer mt-1" onClick={() => window.open("https://www.facebook.com", "_blank")} />
                        <Image src="/fb-color.png" alt="Insta" width={18} height={18} className="cursor-pointer mt-1" onClick={() => window.open("https://www.twitter.com", "_blank")} />
                    </div>
                </div>
                <div className="w-[100%] lg:w-[60%] flex  gap-10 justify-around items-center lg:justify-normal">
                    <div className="flex flex-col items-center justify-center p-2">
                        <h1 className="font-bold mb-2 cursor-pointer" onClick={()=>Router.push('/service')}>Our Services</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer" onClick={()=>Router.push('/service')}>Interior Design</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer" onClick={()=>Router.push('/service')}>Outro Design</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer" onClick={()=>Router.push('/service')}>Lightning Design</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 ">
                        <h1 className="font-bold mb-2 cursor-pointer">Company</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer" onClick = {()=>Router.push('/reviews')}>Review</h1>
            
                    </div>
                    <div 
                        className="flex flex-col items-center justify-center p-2 cursor-pointer"
                        onClick = {() => Router.push('/contact')}
                    >
                        <h1 className="font-bold mb-2 cursor-pointer" onClick = {()=>Router.push('/contact')}>Contact Us</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer" onClick = {()=>Router.push('/contact')}>khdarchprojects@gmail.com</h1>
                        <h1 className="text-sm font-semibold mb-1 cursor-pointer" onClick = {()=>Router.push('/contact')}>ChandrasekharPur Bhubaneswar</h1>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;