import { AiOutlineCode } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'

const Technologies: string[] = ["HTML", "CSS", "Javascript", "Typescript", "React", "NextJS", "Angular", "API REST", "Styled Components", "Tailwind", "ChakraUI", "Git", "GitHub"]

export const About = () => {
    return (
        <div className="container mx-auto text-white">
            <div className="flex flex-col mx-8 lg:mx-0 md:flex-row gap-20 mt-20 lg:py-20">
                <div className="md:w-[60%]">
                    <div className="flex items-center mb-12">
                        <h2 className='text-4xl lg:text-5xl font-bold max-w-[400px]'>About Me<span className='text-cyan-800'>.</span></h2>
                    </div>
                    <span className="text-2xl float-left bg-cyan-900 px-4 py-2 rounded-lg mr-2">H</span><p className="pt-6 pb-5">ey, I'm Lucas!</p>
                    <p>I am extremely passionate about technology and its entire ecosystem, with the main objective of facilitating interaction between the user and the system/software interface.</p>
                    <p className="mt-5">I currently live in the city of Carapicuiba, which is located in the west zone of São Paulo.</p>
                    <p className="mt-5">My first contact with web development started in 2018 during my college graduation, where I studied a little about HTML, CSS and Javascript. Already in 2019, I decided to dedicate all my time to the development of web applications, tools and its entire ecosystem.</p>
                    <p className="mt-5">My last experience as a front-end developer was in 2022, where I was present in the development of online courses on the SENAI platform, being responsible for the functioning of the resources used and fluidity in use, ensuring a good experience for students.</p>
                    <p className="mt-5">Today technology is part of my daily life, from work to my hobbies.</p>
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
        </div>
    )
}
