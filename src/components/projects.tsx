import { projectinfos } from "@/constants/projectdescs"
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Projects() {
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

    function createProjects(): React.JSX.Element  {
        return (
            <div className="grid w-fit grid-cols-3 gap-4">
                {projectinfos.map((element, index:number): React.JSX.Element => (
                    <div className={`flex flex-col justify-between group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 h-[21rem] w-[21rem] p-6 bg-[#1b263b]/85 rounded 
                        hover:-translate-y-3`} key={index}>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between items-center  ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#778da9" className="size-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                                </svg>
                                <a href={element.gitLink} className="group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e0e1dd" className="size-6 group-hover:text-[#778da9]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </div>
                            <div id="textinfo" className="flex flex-col gap-2">
                                <a href="" className="text-[#e0e1dd] font-bold text-lg pt-2 transition duration-300 group-hover:text-[#778da9]">{element.title}</a>
                                <p className="text-sm text-slate-500">{element.description}</p>
                            </div>
                        </div>

                        
                        <div className="font-mono content-end text-xs text-[#e0e1dd] flex flex-wrap gap-2 bottom-8">
                            {element.skills.map((skill, skillIndex): React.JSX.Element => (
                                <p key={skillIndex} className="bg-[#415a77]/30 rounded-xl p-1.5 transition-all duration-200 cursor-default hover:text-[#778da9] hover:bg-[#0d1b2a]">{skill}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <section id="projects" className="flex flex-col gap-16 w-full items-center justify-center pb-52 font-poppins pt-10">
            <div className="flex flex-col items-center w-full gap-5"> 
                <div className="flex items-center w-2/5">
                    <hr className="flex-grow h-[0.5px] bg-[#415a77]/30 border-0" />
                    <span className="mx-4 text-2xl font-bold text-[#e0e1dd]">Projects I&apos;ve Worked On</span>
                    <hr className="flex-grow h-[0.5px] bg-[#415a77]/30 border-0" />
                </div>
                <p className="text-base text-wrap w-1/3 text-center text-[#415a77] italic">
                        Some of the personal projects that I&apos;ve found interesting and worked on in my spare time.
                </p>
            </div>

            {createProjects()}

            <div className="flex flex-col items-center w-full gap-5">
                <p className="text-base text-slate-500 text-wrap w-1/3 text-center">
                    Most of these and some other side-projects which I have not listed here (some of which are still in progress) can be found on my Github page:
                </p>
                <a 
                    href="https://github.com/aryangarg794?tab=repositories" 
                    target="_blank" 
                    className="group whitespace-nowrap w-fit rounded-lg border-2 border-[#415a77] px-6 py-3 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#415a77] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
                >
                    <span className="group-hover:text-[#778da9] duration-300 ease-out font-bold">
                        See More 
                    </span>
                </a>
            </div>
        </section>
    )
}