import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="font-poppins bg-[#0d1b2a]/50 text-[#e0e1dd] backdrop-blur-sm fixed w-full z-20 top-0 border-b-2 border-[#1b263b]">
        <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
        <Link href="/" className="items-center">
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Aryan Garg</span>
        </Link>

        <div className="flex flex-row">
        <Link href="/contact" className="items-center">
            <span className="text-2xl font-semibold whitespace-nowrap">Contact</span>
        </Link>
        </div>
        </div>
        </nav>
    )
}