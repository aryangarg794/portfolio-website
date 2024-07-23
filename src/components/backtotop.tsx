import { useEffect, useState } from "react"

export default function ButtonScrollTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const showButton = (event: Event) => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        }

        window.addEventListener('scroll',  showButton);

        return (() => {
            window.removeEventListener('scroll', showButton);
        })
    }, [])

    const handleScrollClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <button
            type="button"
            onClick={handleScrollClick}
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className={`
                group
                !fixed bottom-10 ${show ? `animate-fadeIn` : `animate-fadeOut`} 
                rounded-full bg-[#1b263b] p-3 shadow-md 
                border-2 border-transparent
                transition-all duration-200 ease-in-out 
                hover:bg-[#415a77] hover:shadow-lg
                hover:-translate-y-1
                hover:border-2 hover:border-[#e0e1dd]`}
            id="btn-back-to-top">
            <span className="[&>svg]:w-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="#e0e1dd">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </span>
        </button>
    )
}
