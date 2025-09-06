import { motion } from "motion/react";
import { style } from "motion/react-client";
import { useState } from "react"

function Navigation() {
  return (
    <ul className="nav-ul">

      <li className="nav-ul"><a href="#home" className="nav-link">Home</a></li>
      <li className="nav-ul"><a href="#abour" className="nav-link">About</a></li>
      <li className="nav-ul"><a href="#work" className="nav-link">Work</a></li>
      <li className="nav-ul"><a href="#contact" className="nav-link">Contact</a></li>


    </ul>

  )
}

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="fixed inset-x-0, z-20, w-full backdrop-blur-lg bg-primary/   40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">

          <a className="text-xl font-bold transition-colors, text-neutral-400 hover:text-white">Sourav Nishad</a>

          <button onClick={() => setisOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} className="w-6 h-6" alt="toggle" />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

        </div>
      </div>

      {isOpen && 
      (<motion.div className="block overflow-hidden, text-center sm:hidden"
      initial={{opacity: 0, x:-10}}
      animate= {{opacity: 1, x: 0}}
      style={{maxHeight: "100vh"}}
      transition={{duration: 1}}>
        
        <nav className="pb-5">
          <Navigation />
        </nav>
      </motion.div>)}
    </div>

  )
}

export default Navbar
