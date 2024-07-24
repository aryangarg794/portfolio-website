import Link from "next/link";
import Image from "next/image";
import useActiveLink from "@/hooks/useActiveLink";
import { useCallback, useEffect, useState } from "react";

export default function NavBar() {
    const sectionIds = ['landing', 'about', 'projects'];
    const currentSection = useActiveLink(sectionIds);
    const [show, setShow] = useState(true);
    const [lastY, setLastY] = useState(0);
    const [mobileActive, setMobileActive] = useState(false);


    const handleScroll = useCallback(((event: Event) => {
        if (lastY > window.scrollY) {
            setShow(true);
        } else {
            setShow(false);
        }

        setLastY(window.scrollY);
    }), [lastY]);

    useEffect(() => {
        const changeScroll = async () => {
            if (mobileActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        changeScroll();
    
    }, [mobileActive])

    const navLink = (section: string) => {
        return (
            <Link 
                href={"#" + section} 
                id={section + "navbutton"}
                className={`group flex items-center justify-center px-5 py-1 rounded-lg ${currentSection === "#" + section ? 
                    `border border-[#415a77] bg-[#1b263b] text-[#778da9]` : 
                    `border border-transparent transition-colors duration-300 hover:border-[#415a77] hover:bg-[#1b263b]` 
                    
                }`}
            >
                <span className="group-hover:text-[#778da9] font-light duration-300 ease-out">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
            </Link>
        )
    }

    const navLinkPhone = (section: string, delay:string) => {
        return (
            <Link 
                href={"#" + section} 
                onClick={() => {
                    setMobileActive(false);
                }}
                id={section + "navbuttonphone"}
                className={`group flex text-4xl items-center  justify-center 
                    py-1 rounded-lg ${currentSection === ("#" + section) ? 
                    `text-[#778da9]` : 
                    `text-[#e0e1dd]`}
                    text-start
                    ${mobileActive  ? 'opacity-100 transition duration-300 ' + delay : 'opacity-0'}
                `}
            >
                <span className="group-hover:text-[#778da9] font-bold duration-300 ease-out">
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
        <>
        <nav 
            id="navbar" 
            className={`
                font-poppins text-[#e0e1dd] backdrop-blur-sm fixed w-full z-20 top-0 duration-500 pb-2
                transition ${show ? `translate-y-0` : `-translate-y-full`}
                ${mobileActive ? 'bg-[#0d1b2a] h-[10%]' : 'bg-[#0d1b2a]/70'}
            `}
        >
            <div id="navbar-1" className="flex flex-row items-center justify-between p-4 mx-16 max-lg:mx-2">
                <Link id="logo" href="/" className="items-center">
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

                <div id="navlinks" className="flex flex-row gap-[3rem] text-md font-medium font-mono max-md:hidden">
                    {navLink('about')}
                    {navLink('projects')}
                    <a 
                        href="/Aryan_Garg_CV_SPAR.pdf" 
                        id="resume"
                        target="_blank" 
                        className="group rounded-lg border-2 border-[#415a77] px-6 py-3 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
                    >
                        <span className="group-hover:text-[#778da9] transition duration-300 ease-out">Resume</span>
                    </a>
                </div>
                <a 
                    id="navbar-phone" 
                    onClick={() => setMobileActive((val) => !val) } 
                    className={`
                        hidden rounded-lg border-2 border-[#415a77] px-1 transition-all duration-300 
                        max-md:flex max-md:cursor-pointer 
                        ${mobileActive ? 'translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_#415a77] overflow-hidden' : ''}
                    `}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className={`size-12 text-[#778da9] transition-all duration-300 ${mobileActive ? 'opacity-0 collapse rotate-90' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className={`absolute size-12 text-[#778da9] transition-all duration-300 opacity-0 ${mobileActive ? 'visible opacity-100 rotate-90' : 'collapse'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </a>
            </div>
        </nav>
        <div 
            id="navlinks-phone" 
            className={`
                fixed left-0 md:hidden h-[90%] w-screen flex flex-col gap-8 items-start transition-all duration-500 bg-[#0d1b2a]
                top-[10%] z-10 p-14 font-poppins
                ${mobileActive ? 'translate-x-0' : '-translate-x-full'}
            `}
        > 
            {navLinkPhone('about', 'delay-[300ms]')}
            {navLinkPhone('projects', 'delay-[400ms]')}
            <a 
                href="/Aryan_Garg_CV_SPAR.pdf" 
                id="resumephone"
                target="_blank" 
                className={`group text-[#e0e1dd] text-4xl font-semibold rounded-lg border-4 border-[#415a77] px-6 py-3 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77]
                    ${mobileActive  ? 'opacity-100 transition duration-300 delay-500'  : 'opacity-0'}
                    `}
            >
                <span className="group-hover:text-[#778da9] transition duration-300 ease-out">Resume</span>
            </a>
            <hr className={`
                fixed h-[86%] w-[4px] inset-y-0 left-8  z-30 bg-[#415a77]/30 border-0 
                top-[7%]
                ${mobileActive  ? 'opacity-100 delay-300 transition duration-300' : 'opacity-0'}
            `} 
            />
            <div id="nav-phone-socials" className={`absolute flex flex-row gap-6 bottom-14 left-14
                ${mobileActive  ? 'opacity-100 transition duration-300 delay-[600ms]'  : 'opacity-0'}
                `}>
                <a href="https://www.linkedin.com/in/aryan-garg-/" target="_blank">
                    <Image 
                        src="/linkedin.svg"
                        className="relative rounded-lg border border-transparent border-[#415a77] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        width={35}
                        height={35}
                        alt="Linkedin"
                    />
                </a>
                <a href="https://github.com/aryangarg794" target="_blank">
                    <Image 
                        src="/github.svg"
                        className="relative rounded-lg border border-transparent border-[#415a77] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        width={35}
                        height={35}
                        alt="Github"
                    />
                </a>
                <a href="mailto: aryangarg794@gmail.com">
                    <Image 
                        src="/mail.svg"
                        className="relative rounded-lg border border-transparent border-[#415a77] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        width={35}
                        height={35}
                        alt="Mail"
                    />
                </a>
            </div>
        </div>
        </>
    )
}
