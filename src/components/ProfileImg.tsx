import { motion as m } from "framer-motion"

export const ProfileImg = () => {

    const animateImage = {
        hidden: {
            opacity: 0,
            y: -500,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.7,
                type: 'spring',
                bounce: 0.4,
            }
        },
        focus: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 1,
                type: 'spring',
                bounce: 0.7,
            },
        },

    }

    return (
        <m.div
            className='relative mt-4 object-cover'
            variants={animateImage}
            initial="hidden"
            animate="show"
            whileHover="focus"
        >
            <m.div
                className="absolute top-0 w-full h-full border-2 border-cyan-800 z-10" style={{ borderRadius: "67% 33% 19% 81% / 62% 47% 53% 38%" }}
                animate={{ rotate: 1460, transition: { duration: "100" } }}
            ></m.div>
            <m.div
                className="absolute top-0 w-full h-full border-2 border-gray-600 z-10" style={{ borderRadius: "24% 76% 62% 38% / 74% 19% 81% 26%" }}
                animate={{ rotate: 1360, transition: { duration: "120" } }}
            ></m.div>
            <img src="lucas.jpg" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }} className='relative w-[280px] md:w-[350px] lg:w-[500px] mb-4 z-20' alt=""></img>
            <div className='w-[25%] h-[25%] bg-cyan-900 absolute top-[0%] right-[2%] rounded-full z-20'>
                <img src="coding.svg" className='lg:p-5 p-2' alt="" />
            </div>
        </m.div>
    )
}
