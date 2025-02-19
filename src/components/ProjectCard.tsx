import { BsGithub } from 'react-icons/bs'
import { VscVmRunning } from 'react-icons/vsc'
import { motion as m } from "framer-motion"

interface Props {
    img: string
    name: string
    description: string
    linkTry: string
    linkGit: string
    techs: string[]
}


export const ProjectCard = (props: Props) => {

    return (
        <div>
            <div className='w-full object-cover'>
                <m.img className="h-full w-full object-cover object-top" src={props.img} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} />
            </div>
            <div className="p-4 flex flex-col justify-between min-h-[180px] h-full">
                <h3 className="text-lg font-semibold mb-3">{props.name}</h3>
                <p className="text-sm text-gray-500">{props.description}</p>
                <div className='flex flex-wrap gap-2 mt-4 mb-1'>
                    {props.techs.map((item, index) => (
                        <div className='flex items-center bg-gray-800 rounded-2xl px-3 py-1 text-xs' key={index}>{item}</div>
                    ))}
                </div>
                <div className="flex gap-5 mt-5">
                    <button className="w-[50%] bg-primary hover:bg-cyan-700 duration-300 hover:bg-opacity-30">
                        <a className='flex items-center justify-center gap-3 p-2' href={props.linkTry} target="_blank" rel="noopener noreferrer">
                            <VscVmRunning />Try it
                        </a>
                    </button>
                    <button className="w-[50%] bg-primary hover:bg-cyan-700 duration-300 hover:bg-opacity-30">
                        <a className='flex items-center justify-center gap-3 p-2' href={props.linkGit} target="_blank" rel="noopener noreferrer">
                            <BsGithub />Code
                        </a>
                    </button>
                </div>
            </div>
        </div >
    )
}
