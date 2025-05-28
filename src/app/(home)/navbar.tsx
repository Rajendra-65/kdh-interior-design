import { Button } from "@/components/ui/button";
import Link from "next/link"

const Navbar = () => {
    return (
        <div
            className="flex  items-center justify-between"
        >
            <div
                className="flex items-center justify-center"
            >
                <h1 className="text-xl font-bold cursor-pointer">KHD</h1>
            </div>

            <div>
                <ul
                    className=" flex  tiems-center justify-around gap-9"
                >
                    <Link className="hover:underline-offset-1 hover:underline" href="/">
                        <li className="text-lg font-semibold cursor-pointer">Home</li>
                    </Link>
                    <Link className="hover:underline-offset-1 hover:underline" href="/services">
                        <li className="text-lg font-semibold cursor-pointer">Services</li>
                    </Link>
                    <Link className="hover:underline-offset-1 hover:underline" href="/contact">
                        <li className="text-lg font-semibold cursor-pointer">Contact</li>
                    </Link>
                    <Link className="hover:underline-offset-1 hover:underline" href="/support">
                        <li className="text-lg font-semibold cursor-pointer">Support</li>
                    </Link>
                </ul>
            </div>

            <Button
                className="bg-cyan-400 hover:bg-cyan-500 text-black hover:text-white"
                asChild
            >
                <Link href="/sign-up">Sign up</Link>
            </Button>
        </div>
    )
}

export default Navbar;