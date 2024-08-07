import Link from "next/link";
import Image from "next/image";
import "./not-found.css"

export default function notFound() {
    return (
            <div id="not-found" className="flex min-h-screen font-poppins flex-col items-center justify-between p-36 bg-[#0d1b2a]">
                <div id="404icon" className="flex flex-col items-center gap-[5vh]">
                    <Image
                        className="relative"
                        src="/notfound-svg.svg"
                        alt="Page Not Found"
                        width={300}
                        height={100}
                        priority
                    />
                <h2 id="notfoundtext" className={`text-6xl font-semibold text-[#e0e1dd] transition-all duration-300 ease-in-out`}>
                    <span className="rounded-lg bg-bottom bg-gradient-to-r from-[#778da9] to-[#778da9] bg-[length:0%_5px] bg-no-repeat underline-animate">
                        Page Not Found
                    </span>
                </h2>
                
                <Link 
                    href="/"
                    id="returnhomebutton"
                    className="group rounded-lg text-[#e0e1dd] items-center border border-transparent px-5 py-4 transition-colors hover:border-[#415a77] hover:bg-[#1b263b]"
                >
                    <h2 className={`text-2xl font-semibold items-center`}>
                        Return Home{" "}
                        <span className="inline-block transition-transform group-hover:rotate-[-360deg] duration-500 ease-out motion-reduce:transform-none">
                        &#8634;
                        </span>
                    </h2>
                </Link>
                </div>
            </div>
    )
}