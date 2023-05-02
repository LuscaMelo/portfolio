import { HiMenuAlt3 } from 'react-icons/hi'
import { FaUserAstronaut } from 'react-icons/fa'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

import { motion as m } from "framer-motion"

import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function openMenu() {
        setMobileMenuOpen(true)
    }

    function closeMenu() {
        setMobileMenuOpen(false)
    }

    const menuAnimation = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0.3, x: "100%" },
    }

    return (
        <div className="h-[10vh] min-h-[70px] bg-glass w-full flex items-center fixed top-0 px-8 z-50 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between">
                <Link className="flex items-center" to={"/"}>
                    <FaUserAstronaut className='text-gray-100 text-2xl' />
                    <h1 className="font-bold text-gray-300 mt-3"><span className='text-cyan-700'>._</span>LucasMelo<span className='text-cyan-700'></span></h1>
                </Link>
                <div>
                    <ul className="gap-7 font-bold text-md text-gray-300 hidden md:flex mt-2">
                        <li className='cursor-pointer hover:text-cyan-600 duration-300 text-sm'>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className='cursor-pointer hover:text-cyan-600 duration-300 text-sm'>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className='cursor-pointer hover:text-cyan-600 duration-300 text-sm'>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li className='cursor-pointer hover:text-cyan-600 duration-300 text-sm'>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='md:hidden cursor-pointer hover:scale-110 duration-300 text-sm'>
                    <HiMenuAlt3 className="text-3xl text-gray-100 mt-2" onClick={openMenu} />
                </div>
                <div className='hidden md:flex gap-3'>
                    <a href="https://www.linkedin.com/in/lucasmelodesenvolvedor/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="text-xl text-gray-100 cursor-pointer hover:text-cyan-700 duration-300 mt-2" />
                    </a>
                    <a href="http://github.com/LuscaMelo" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="text-xl text-gray-100 cursor-pointer hover:text-cyan-700 duration-300 mt-2" />
                    </a>
                </div>

                {/* Overlay */}
                <div className={mobileMenuOpen ? "absolute top-0 left-0 h-[100vh] w-[100vw] md:hidden bg-black opacity-30" : "hidden"} onClick={closeMenu}></div>

                {/* Mobile Menu */}
                <m.div
                    className={mobileMenuOpen ? "absolute top-0 right-0 h-[100vh] w-[75vw] bg-secondary p-7 md:hidden" : "hidden"}
                    variants={menuAnimation}
                    animate={mobileMenuOpen ? "open" : "closed"}
                >
                    <m.div>
                        <IoMdClose
                            className="text-4xl text-gray-100 ml-auto cursor-pointer" onClick={closeMenu}
                        />
                    </m.div>
                    <ul className="flex flex-col gap-10 h-full items-center font-bold text-gray-300 text-2xl mt-16">
                        <li className='cursor-pointer hover:text-cyan-600 duration-300' onClick={closeMenu}>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className='cursor-pointer hover:text-cyan-600 duration-300' onClick={closeMenu}>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className='cursor-pointer hover:text-cyan-600 duration-300' onClick={closeMenu}>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li className='cursor-pointer hover:text-cyan-600 duration-300 mb-36' onClick={closeMenu}>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <div className='flex gap-5'>
                            <a href="https://www.linkedin.com/in/lucasmelodesenvolvedor/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="text-3xl text-gray-100 cursor-pointer hover:text-cyan-700 duration-300" />
                            </a>
                            <a href="http://github.com/LuscaMelo" target="_blank" rel="noopener noreferrer">
                                <BsGithub className="text-3xl text-gray-100 cursor-pointer hover:text-cyan-700 duration-300" />
                            </a>
                        </div>
                    </ul>
                </m.div>
            </div>
        </div >
    )
}
