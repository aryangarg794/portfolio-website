import Image from "next/image"

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#1b263b] text-[#e0e1dd] rounded-lg shadow mx-4 w-full font-mono">
            <div className="w-full mx-auto py-2 px-4 md:flex md:items-center md:justify-between">
            <span id="built" className="text-md sm:text-center">2024 | Built by{" "} 
            <a href="https://github.com/aryangarg794/portfolio-website" target="_blank" className="hover:underline">Aryan Garg</a>{" "}using{" "}
            <a href="https://nextjs.org/" className="hover:underline" target="_blank">NextJS</a>.
            </span>
            <ul id="socials" className="flex flex-wrap items-center justify-center mt-3 gap-[1.5rem] text-sm font-medium sm:mt-0">
                <li>
                    <a href="https://github.com/aryangarg794" target="_blank">
                    <Image 
                        src="/github.svg"
                        className="relative rounded-lg border border-transparent border-[#415a77] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        width={35}
                        height={35}
                        alt="Github"
                    />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aryan-garg-/" target="_blank">
                    <Image 
                        src="/linkedin.svg"
                        className="relative rounded-lg border border-transparent border-[#415a77] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        width={35}
                        height={35}
                        alt="Linkedin"
                    />
                    </a>
                </li>
                <li>
                    <a href="mailto: aryangarg794@gmail.com">
                    <Image 
                        src="/mail.svg"
                        className="relative rounded-lg border border-transparent border-[#415a77] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        width={35}
                        height={35}
                        alt="Mail"
                    />
                    </a>
                </li>
            </ul>
            </div>
        </footer>
    )
}
