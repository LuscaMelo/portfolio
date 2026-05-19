import { AiOutlineCode } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import { motion as m } from "framer-motion"

const Technologies: string[] = ["HTML", "CSS", "Javascript", "Typescript", "React", "NextJS", "Angular", "API REST", "Styled Components", "Tailwind", "ChakraUI", "Git", "GitHub"]

export const About = () => {

    const animateDiv = {
        hidden: {
            opacity: 0,
            x: -500,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.7,
                type: 'spring',
                bounce: 0.3,
            }
        }
    }

    return (
        <m.div
            className="container mx-auto text-white"
            variants={animateDiv}
            initial="hidden"
            animate="show"
        >
            <div className="flex flex-col mx-8 lg:mx-0 md:flex-row gap-20 mt-20 lg:py-20">
                <div className="md:w-[60%] text-sm">
                    <div className="flex items-center mb-12">
                        <h2 className='text-4xl lg:text-5xl font-bold max-w-[400px]'>About Me<span className='text-cyan-800'>.</span></h2>
                    </div>
                    <span className="text-2xl float-left bg-cyan-900 px-4 py-2 rounded-lg mr-2">H</span><p className="pt-6 pb-5">ey, I'm Lucas!</p>
                    <div className='flex flex-col gap-3'>
                        <p>I am a Front-End Developer with over 4 years of experience creating modern, high-performance, and user-centric web applications.</p>
                        <p>Specializing in React, Next.js, Angular, and TypeScript, I work on developing scalable, responsive, and accessible interfaces, always focusing on performance, usability, and visual quality.</p>
                        <p>I also have experience with UX/UI Design using Figma and Adobe, allowing me to combine development and design to create more consistent and intuitive digital experiences.</p>
                        <p>In addition to Front-End, I have been expanding my work to Back-End development with Node.js, Express, Prisma ORM, PostgreSQL, and MongoDB, broadening my vision of architecture and building complete applications.</p>
                        <p>Technology is part of my daily life—not only as a profession but also as a personal interest. I am constantly studying new tools, exploring best practices, and seeking ways to develop increasingly efficient, modern, and impactful digital products.</p>
                    </div>
                </div>
                <div className="md:w-[40%]">
                    <div>
                        <div className="flex items-center mb-10">
                            <AiOutlineCode className='text-4xl p-2 mr-2 bg-cyan-900 rounded-full' />
                            <h2 className='text-2xl lg:text-3xl font-bold max-w-[400px]'>Technologies<span className='text-cyan-900'>:</span></h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {Technologies.map((item, index) => (
                                <div className="bg-gray-800 px-4 py-1 rounded-2xl block text-sm" key={index}>{item}</div>
                            ))}
                            <p className='text-gray-400 text-xl flex gap-1 ml-1 items-baseline'>...<p className='text-xs'> more soon</p></p>
                        </div>
                        <div className="flex items-center mb-7 mt-20">
                            <FaGraduationCap className='text-4xl p-2 mr-2 bg-cyan-900 rounded-full' />
                            <h2 className='text-2xl lg:text-3xl font-bold max-w-[400px]'>Graduation<span className='text-cyan-900'>:</span></h2>
                        </div>
                        <div className='mb-20'>
                            <h3 className='text-xl font-semibold pb-2'>Management Information Technology</h3>
                            <h5 className='text-cyan-600'>Estácio - Carapicuíba</h5>
                            <span className='text-sm text-gray-500'>July 2016 - July 2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    )
}
