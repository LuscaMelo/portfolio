import { BsGithub } from 'react-icons/bs'
import { VscVmRunning } from 'react-icons/vsc'

interface Props {
    img: string
    name: string
    description: string
    linkTry: string
    linkGit: string
}

export const ProjectCard = (props: Props) => {
    return (
        <div>
            <div className='w-full object-cover'>
                <img className="h-full w-full object-cover object-top" src={props.img} alt="" />
            </div>
            <div className="p-4 flex flex-col justify-between min-h-[180px] h-full">
                <h3 className="text-lg font-semibold mb-3">{props.name}</h3>
                <p className="text-sm text-gray-500">{props.description}</p>
                <div className="flex gap-5 mt-5">
                    <button className="w-[50%] bg-primary">
                        <a className='flex items-center justify-center gap-3 p-2' href={props.linkTry} target="_blank" rel="noopener noreferrer">
                            <VscVmRunning />Try it
                        </a>
                    </button>
                    <button className="flex items-center justify-center gap-3 w-[50%] bg-primary">
                        <a className='flex items-center justify-center gap-3 p-2' href={props.linkGit} target="_blank" rel="noopener noreferrer">
                            <BsGithub />Code
                        </a>
                    </button>
                </div>
            </div>
        </div >
    )
}
