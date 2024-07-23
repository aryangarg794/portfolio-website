export default function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-16 w-full items-center justify-center pb-52 font-poppins pt-10">
            <div className="flex items-center w-2/5">
                <hr className="flex-grow h-[0.5px] bg-[#415a77]/30 border-0" />
                <span className="mx-4 text-2xl font-bold text-[#e0e1dd]">Projects I&apos;ve Worked On</span>
                <hr className="flex-grow h-[0.5px] bg-[#415a77]/30 border-0" />
            </div>

            <p className="text-base text-slate-500 text-wrap w-1/3 text-center">
                Most of these and some other side-projects which I have not listed here (some of which are still in progress) can be found on my github page.
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
        </section>
    )
}