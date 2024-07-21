import Link from "next/link";
import Image from "next/image";
import useActiveLink from "@/hooks/useActiveLink";
import { useCallback, useEffect, useState } from "react";

export default function NavBar() {
    const sectionIds = ['landing', 'about', 'projects', 'contact'];
    const currentSection = useActiveLink(sectionIds);
    const [show, setShow] = useState(true);
    const [lastY, setLastY] = useState(0);

    const handleScroll = useCallback(((event: Event) => {
        if (lastY > window.scrollY) {
            setShow(true);
        } else {
            setShow(false);
        }

        setLastY(window.scrollY);
    }), [lastY]);

    const navLink = (section: string) => {
        return (
            <Link 
                href={"#" + section} 
                className={`group flex items-center justify-center px-5 py-1 rounded-lg ${currentSection === "#" + section ? 
                    `border border-[#415a77] bg-[#1b263b] text-[#778da9]` : 
                    `border border-transparent transition-colors duration-300 hover:border-[#415a77] hover:bg-[#1b263b]` 
                    
                }`}
            >
                <span className="group-hover:text-[#778da9] duration-300 ease-out">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
            </Link>
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
    }, [handleScroll])

    return (
        <nav className={`font-poppins bg-[#0d1b2a]/70 text-[#e0e1dd] backdrop-blur-sm fixed w-full z-20 top-0 duration-500 transition ${show ? `translate-y-0` : `-translate-y-full`}`}>
            <div className="flex flex-row items-center justify-between p-4 mx-16">
                <Link href="/" className="items-center">
                    <Image
                        className="relative rounded-lg border-2 border-[#415a77] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        src="/logo.svg"
                        alt="Logo "
                        width={65}
                        height={50}
                        id="logo"
                        priority
                    />
                </Link>

                <div className="flex flex-row gap-[3rem] text-md font-medium font-mono">
                    {navLink('about')}
                    {navLink('projects')}
                    {navLink('contact')}
                    <a 
                        href="/Aryan_Garg_CV_SPAR.pdf" 
                        target="_blank" 
                        className="group rounded-lg border-2 border-[#415a77] px-6 py-3 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                    >
                        <span className="group-hover:text-[#778da9] duration-300 ease-out">Resume</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}