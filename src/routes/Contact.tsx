import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { motion as m } from "framer-motion"

export const Contact = () => {

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
            className="mx-8"
            variants={animateDiv}
            initial="hidden"
            animate="show"
        >
            <div className="container mx-auto text-white my-20 pb-5">
                <div className="flex flex-col items-center gap-10 lg:flex-row">
                    <div className="flex-1">
                        <div className="flex items-center mb-12">
                            <h2 className='text-4xl lg:text-5xl font-bold max-w-[400px]'>Contact Me<span className='text-cyan-800'>.</span></h2>
                        </div>
                        <span className="text-2xl float-left bg-cyan-900 px-4 py-2 rounded-lg mr-2">W</span><p className="pt-6 pb-5">hat's the next challenge?</p>
                        <div className="text-sm">
                            <p>Since I started my career, I've always looked for challenges that would lead me to grow professionally. I believe that it is through these challenges that one has the opportunity to learn new skills and competencies, which not only improve performance in the current job, but also open doors to new career opportunities.</p>
                            <p className="mt-5">I'm excited and ready to take on the next challenge in my career. I have been constantly working on developing new skills and competencies, and I feel that I am prepared to face the challenges that come my way. In addition, I am motivated by new learning and growth opportunities, and I am always looking for feedback that can help me improve my professional performance. I am confident that, with my previous experience and my determined attitude, I will be able to face the challenges that arise, and grow further in my career.</p>
                            <p className="mt-5">Shall we talk about it?</p>
                        </div>

                        <div className="flex flex-col mt-10">
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center text-sm'>
                                    <HiOutlineLocationMarker className="text-lg mr-3 text-cyan-700" />
                                    <p>Carapicuíba, São Paulo - Brazil</p>
                                </div>
                                <div className='flex items-center text-sm'>
                                    <BsPhone className="text-lg mr-3 text-cyan-700" />
                                    <p>+55 11 95193-3818</p>
                                </div>
                                <div className='flex items-center text-sm'>
                                    <AiOutlineMail className="text-lg mr-3 text-cyan-700" />
                                    <p>lucasmelo.desenvolvedor@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="hidden justify-center lg:flex">
                            <img style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }} className="p-8" src="contact.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='lg:hidden flex justify-center md:justify-start gap-4'>
                    <a href="https://www.linkedin.com/in/lucasmelodesenvolvedor/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="text-3xl text-gray-100 cursor-pointer hover:text-cyan-700 duration-300" />
                    </a>
                    <a href="http://github.com/LuscaMelo" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="text-3xl text-gray-100 cursor-pointer hover:text-cyan-700 duration-300" />
                    </a>
                </div>
            </div>
        </m.div >
    )
}
