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
            <img src="lucas.jpg" className='rounded-full w-[220px] md:w-[350px] lg:w-[500px] mb-3' alt=""></img>
            <div className='w-[25%] h-[25%] bg-cyan-900 absolute top-[0%] right-[2%] rounded-full'>
                <img src="coding.svg" className='lg:p-5 p-2' alt="" />
            </div>
            <div className=' flex items-center justify-center w-[12%] h-[12%] bg-gray-500 opacity-70 absolute top-[21%] right-[0%] rounded-full'></div>
        </m.div>
    )
}
