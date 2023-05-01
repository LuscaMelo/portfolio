import { Link } from 'react-router-dom'
import { motion as m } from "framer-motion"

export const Hero = () => {

    const animateImage = {
        hidden: {
            opacity: 0,
            x: -1000,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.3,
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
        <div className='flex flex-col-reverse gap-8 lg:flex-row items-center justify-center container mx-auto mt-2 px-7'>
            <div className='lg:max-w-md text-center lg:text-start'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold max-w-[400px]'>Front End React Developer<span className='text-cyan-700'>.</span></h2>
                <div className='mt-5 mb-8 flex justify-center items-center lg:justify-start'>
                    <div className='flex justify-center gap-2 h-[22px]'>
                        <img src="html.png" alt="html image" />
                        <img src="css.png" alt="css image" />
                        <img src="javascript.png" alt="javascript image" />
                        <img src="react.png" alt="react image" />
                        <img src="typescript.png" alt="typescript image" />
                        <img src="tailwind.png" alt="tailwind image" />
                    </div>
                </div>
                <p className='mt-6 text-sm ms:text-md max-w-[300px] mx-auto lg:mx-0'>Hi, I'm <span className="underline underline-offset-2">Lucas Melo</span>. A passionate Front-end React Developer based in São Paulo, Brazil.</p>
                <div className='mt-5 w-8 h-1 bg-cyan-800 rounded-md mx-auto lg:hidden' />
                <div className="flex justify-center lg:justify-start gap-2 mt-7">
                    <Link to={"/about"} className="border-2 border-gray-400 rounded-3xl text-gray-400 font-bold text-sm px-5 py-3 mt-6 hover:bg-cyan-900 hover:border-cyan-900 hover:text-white scale-95 hover:scale-100 duration-300">About me</Link>
                    <Link to={"/projects"} className="bg-cyan-900 rounded-3xl text-white text-sm px-5 py-3 mt-6 font-semibold hover:bg-cyan-800 scale-95 hover:scale-100 duration-30">See my Projects</Link>
                </div>
            </div>
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
        </div>
    )
}
