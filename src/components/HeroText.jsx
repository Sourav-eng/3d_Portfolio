import { FlipWords } from "./FlipWord"
import { motion } from "motion/react"



const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"]
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>

            <div className='flex-col hidden md:flex c-space'>
                <motion.h1 className="text-4xl font-medium"
                    variants={variants}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}>Hi I am Sourav</motion.h1>
                <motion.p className="text-5xl font-medium text-neutral-300"
                    variants={variants}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}>A Developer <br />Dedicated to Coding</motion.p>

                <motion.div variants={variants}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}><FlipWords words={["Secure", "Modern", "Scalable"]} className="font-black text-white text-8xl" /></motion.div>

                <motion.p className="text-4xl font-medium text-neutral-300"
                    variants={variants}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}>Web Solutions</motion.p>
            </div>

            {/* Mobile ke liye */}
            <div className="flex flex-col space-y-6 md:hidden mb-88">
                <motion.p className="text-4xl font-medium" variants={variants}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}>Hello I'm Sourav</motion.p>
                <div>
                    <motion.p className="text-5xl font-black text-neutral-300" variants={variants}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}>Building</motion.p>
                    <motion.div variants={variants}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}><FlipWords words={words} className="font-bold text-white text-7xl" /></motion.div>
                    <motion.p className="text-4xl font-black text-neutral-300" variants={variants}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}>Web Applications</motion.p>
                </div>
            </div>

        </div>
    )
}

export default HeroText
