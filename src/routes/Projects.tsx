import { ProjectCard } from "../components/ProjectCard"


export const Projects = () => {
    return (
        <div className="container mx-auto text-white">
            <div className="flex flex-col mx-8 lg:mx-0 md:flex-row gap-20 mt-20 lg:py-20">
                <div className="w-full mb-20">
                    <div className="flex items-center mb-12">
                        <h2 className='text-4xl lg:text-5xl font-bold max-w-[400px]'>My Projects<span className='text-cyan-800'>.</span></h2>
                    </div>
                    <div className="relative w-full md:max-w-md">
                        <span className="text-2xl float-left bg-cyan-900 px-4 py-2 rounded-lg mr-2">Y</span><p className="pt-6 pb-5">ou can do anything you set your mind to.</p>
                        <span className="absolute top-[0px] left-[60px] text-xs mt-1 text-cyan-700"> - Benjamin Franklin</span>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
                        <div className="bg-glass w-[1fr]">
                            <ProjectCard />
                        </div>
                        <div className="bg-glass w-[1fr]">
                            <ProjectCard />
                        </div>
                        <div className="bg-glass w-[1fr]">
                            <ProjectCard />
                        </div>
                        <div className="bg-glass w-[1fr]">
                            <ProjectCard />
                        </div>
                        <div className="flex justify-center items-center p-5 bg-glass w-[1fr]">
                            <p className='text-white text-xl flex gap-1 ml-1 items-baseline'>...<p className='text-xs'> more soon</p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
