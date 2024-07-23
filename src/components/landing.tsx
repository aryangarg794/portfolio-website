import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";


export default function Landing() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
      const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        if (inView) {
          setVisible(true);
        }
      }, [inView]);

    return (
        <section id="landing" className="flex w-full h-screen items-center justify-center" >
            <div className="flex flex-col gap-5 font-poppins w-fit">
                <TypeAnimation
                    sequence={[
                        'Hi, my name is'
                    ]}
                    speed={35}
                    cursor={false}
                    className="text-2xl w-fit min-h-8 font-mono text-[#778da9]"
                    repeat={0}
                    wrapper="div"
                />
                <Link href="/" ref={ref} className={`text-8xl font-bold text-[#e0e1dd] tracking-tight transition duration-300 hover:text-[#778da9] opacity-0 ${visible ? 'animate-fadeDown animation-delay-100' : ''}`}>Aryan Garg</Link>
                <h2 className="text-4xl font-bold text-[#e0e1dd]/75 opacity-0 animate-fadeDown animation-delay-300">Software Engineer and Student.</h2>
                <p className="text-base text-wrap w-2/3  text-slate-500 opacity-0 animate-fadeDown animation-delay-500">
                    I&apos;m a software engineer and a recent graduate from the{" "} 
                    <a href="https://www.tue.nl/en/" target="_blank" className="hover:underline text-[#e0e1dd]">Eindhoven University of Technology</a>{" "}{" "} in Bachelor of Computer Science. 
                </p>
                <div className="flex opacity-0 animate-fadeDown animation-delay-700">
                    <Link
                        href="#about"
                        className="w-fit group rounded-lg border-2 border-[#415a77] px-6 py-3 transition duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
                    >
                        <span className="flex flex-row gap-2 items-center group-hover:text-[#778da9] transition-all font-bold duration-300 ease-out">
                            Find out more <svg className="h-5 w-5 text-[#e0e1dd] transition-all ease-out duration-300 group-hover:text-[#778da9]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}