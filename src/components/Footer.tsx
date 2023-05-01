import { BsLinkedin, BsGithub } from 'react-icons/bs'

export const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-900 text-gray-200 w-full h-[15vh]'>
            <p className='text-sm'>© 2023 - Lucas Melo</p>
            <div className="flex mt-4 text-xl gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className='hover:scale-110 hover:text-indigo-700 duration-300' />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <BsGithub className='hover:scale-110 hover:text-indigo-700 duration-300' />
                </a>
            </div>
        </div>
    )
}
