import { BsGithub } from 'react-icons/bs'
import { VscVmRunning } from 'react-icons/vsc'

export const ProjectCard = () => {
    return (
        <div>
            <div>
                <img className="object-cover" src="shopping-cart.png" alt="" />
            </div>
            <div className="p-4">
                <h3 className="text-lg mb-3">Shopping Cart</h3>
                <p className="text-sm text-gray-500">Page of a fictitious product, being able to add it to the shopping cart.</p>
                <div className="flex gap-5 mt-5 h-[40px]">
                    <button className="flex items-center justify-center gap-3 w-[50%] bg-primary"><VscVmRunning />Try it</button>
                    <button className="flex items-center justify-center gap-3 w-[50%] bg-primary"><BsGithub />Code</button>
                </div>
            </div>
        </div >
    )
}
