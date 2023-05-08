import { ProjectCard } from "../components/ProjectCard"
import { motion as m } from "framer-motion"

export const Projects = () => {

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
            <div className="flex flex-col mx-8 2xl:mx-0 md:flex-row gap-20 mt-20 lg:py-20">
                <div className="w-full mb-20">
                    <div className="flex items-center mb-12">
                        <h2 className='text-4xl lg:text-5xl font-bold max-w-[400px]'>My Projects<span className='text-cyan-800'>.</span></h2>
                    </div>
                    <div className="relative w-full md:max-w-md">
                        <span className="text-2xl float-left bg-cyan-900 px-4 py-2 rounded-lg mr-2">Y</span><p className="pt-6 pb-5">ou can do anything you set your mind to.</p>
                        <span className="absolute top-[0px] left-[60px] text-xs mt-1 text-cyan-700"> - Benjamin Franklin</span>
                    </div>
                    <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
                        <div className="bg-secondary w-[1fr]">
                            <ProjectCard
                                img="blog.png"
                                name="The Blog"
                                description="Simple blog about cars."
                                linkTry="https://angular-blog-two.vercel.app/"
                                linkGit="https://github.com/LuscaMelo/angular-blog"
                                techs={["Angular", "Typescript", "Tailwind"]}
                            />
                        </div>
                        <div className="bg-secondary w-[1fr]">
                            <ProjectCard
                                img="quiz.png"
                                name="Harry Potter Quiz"
                                description="Dynamic quiz about the Harry Potter series."
                                linkTry="https://angular-quiz-woad.vercel.app/"
                                linkGit="https://github.com/LuscaMelo/angular-quiz"
                                techs={["Angular", "Typescript", "Tailwind"]}
                            />
                        </div>
                        <div className="bg-secondary w-[1fr]">
                            <ProjectCard
                                img="shopping-cart.png"
                                name="Shopping Cart"
                                description="Page of a fictitious product, being able to add it to the shopping cart."
                                linkTry="https://shopping-cart-luscamelo.vercel.app/"
                                linkGit="https://github.com/LuscaMelo/shopping-cart"
                                techs={["React", "Javascript", "Tailwind"]}
                            />
                        </div>
                        <div className="bg-secondary w-[1fr]">
                            <ProjectCard
                                img="pokedex.png"
                                name="Pokedex"
                                description="Listing of pokemons, where the data is consumed in an API (PokeAPI)."
                                linkTry="https://lucasmelo-pokedex-dio.surge.sh/"
                                linkGit="https://github.com/LuscaMelo/js-developer-pokedex"
                                techs={["HTML", "CSS", "Javascript", "API"]}
                            />
                        </div>
                        <div className="bg-secondary w-[1fr]">
                            <ProjectCard
                                img="music-production.png"
                                name="Music Production Website"
                                description="Simple website about a music production course."
                                linkTry="https://music-production-gamma.vercel.app/"
                                linkGit="https://github.com/LuscaMelo/music-production"
                                techs={["React", "Javascript", "Tailwind"]}
                            />
                        </div>
                        <div className="bg-secondary w-[1fr]">
                            <ProjectCard
                                img="gym.png"
                                name="Gym Website"
                                description="Simple website about a gym."
                                linkTry="https://gym-luscamelo.vercel.app/"
                                linkGit="https://github.com/LuscaMelo/gym"
                                techs={["React", "Javascript", "ChakraUI"]}
                            />
                        </div>
                        <div className="flex justify-center items-center p-5 bg-glass w-[1fr]">
                            <p className='text-white text-xl flex gap-1 ml-1 items-baseline'>...<p className='text-xs'> more soon</p></p>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    )
}
