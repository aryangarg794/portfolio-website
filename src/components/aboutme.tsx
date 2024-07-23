import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function About() {
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

    const techDiv = (url: string, name: string) => {
        return (
            <div id={name + '-skill'} className="flex items-center px-5 font-mono">
                <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#778da9" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd"/>
                </svg>
                <a href={url} target="_blank" className="text-sm hover:underline text-[#e0e1dd] p-2">{name}</a>
            </div>
        )
    } 

    return (
        <section id="about" className="flex flex-col gap-16 w-full items-center justify-center pb-52 font-poppins pt-10">
            <div id="titleabout" className="flex flex-col items-center w-full gap-5"> 
                <div className="flex items-center w-2/5">
                    <hr className="flex-grow h-[0.5px] bg-[#415a77]/30 border-0" />
                    <span className="mx-4 text-2xl font-bold text-[#e0e1dd]">About Me</span>
                    <hr className="flex-grow h-[0.5px] bg-[#415a77]/30 border-0" />
                </div>
                <p id="descabout" className="text-base text-wrap w-1/3 text-center text-[#415a77] italic">
                        A little introduction about me.
                </p>
            </div>

            <div id="introduction" ref={ref} className={`flex flex-col gap-5 items-center text-slate-500 px-5`}>
                <p className={`text-base text-wrap w-2/5 opacity-0 ${visible ? 'animate-fadeDown animation-delay-100' : ''}`}>
                    Hi! My name is Aryan and I am an enthusiastic software engineer with an deep interest in ML. 
                    I recently graduated from{" "}
                    <a href="https://www.tue.nl/en/" target="_blank" className="hover:underline text-[#e0e1dd]">Eindhoven University of Technology</a>
                    {" "}with a Bachelor in Computer Science and I&apos;m also about to start my masters in Data Science &#38; AI this fall. 
                </p>

                <p className={`text-base text-wrap w-2/5 opacity-0 ${visible ? 'animate-fadeDown animation-delay-300' : ''}`}>
                    I am a quite driven person, ensuring that even the most miniscule of details are fulfilled to perfection. I also love to learn, I&apos;m 
                    always looking for new things to learn, new ways to challenge myself, and new ways to improve my skills. 
                    I also have experience working in a professional environment, working for{" "}
                    <a href="https://starnustech.com/" target="_blank" className="hover:underline text-[#e0e1dd]">Starnus</a>
                    {" "}&mdash; a robotics and AI company. Through personal and professional experience I&apos;ve gained quite some knowledge in the software domain,
                    and I&apos;m looking to develop myself further particularly in ML.
                    I&apos;ve racked up experience for the following languages/technologies: 
                </p>

                <div id="skills" className={`flex flex-wrap text-left w-2/5 text-slate-500 opacity-0 ${visible ? 'animate-fadeDown animation-delay-500' : ''}`}>
                    {techDiv('https://www.python.org/', 'Python')}
                    {techDiv('https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'Javascript')}
                    {techDiv('https://docs.ros.org/en/foxy/Releases/Release-Humble-Hawksbill.html', 'ROS2 (Humble)')}
                    {techDiv('https://www.typescriptlang.org/', 'Typescript')}
                    {techDiv('https://react.dev/', 'React')}
                    {techDiv('https://www.java.com/en/', 'Java')}
                    {techDiv('https://www.docker.com/', 'Docker')}
                    
                </div>

                <p className={`text-base text-wrap w-2/5 opacity-0 ${visible ? 'animate-fadeDown animation-delay-700' : ''}`}>
                    Apart from working on projects I find interesting, in my free time I often read, draw, or play an instrument &mdash; guitar or keyboard.
                    I&apos;m also an avid{" "} 
                    <a href="https://steamcommunity.com/profiles/76561198118010462/" target="_blank" className="hover:underline text-[#e0e1dd] cursor-galaxy">gamer</a>
                    , specifically story-driven singleplayer or competitive games.  
                </p>
            </div>
        </section>
    )
}