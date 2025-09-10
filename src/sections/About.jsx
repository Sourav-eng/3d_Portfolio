

import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Framework } from "../components/Framework";


const About = () => {
    const gridContainer2 = useRef();
    return (
        <section id="about" className="c-space section-spacing">
            <h2 className="text-heading">
                About Me
            </h2>
            <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 md:auto-rows-[18rem]">


                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rerm] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" alt="" />
                    <div className="z-10">
                        <p className="headtext">   Hi, I'm Sourav</p>
                        <p className="subtext">

                            Showing case my portfolio and skills of delivering dynameic and software ans web applications.
                        </p>
                    </div>

                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>

                <div className="grid-default-color grid-2">
                    <div ref={gridContainer2} className="flex items-center justify-center w-ful h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500">CODE IS LIFE</p>
                        <Card style={{ rotate: "75deg", top: '30%', left: "20%" }} text="Node.js" containerRef={gridContainer2} />
                        <Card style={{ rotate: "-30deg", top: '60%', left: "45%" }} text="MongoDb" containerRef={gridContainer2} />
                        <Card style={{ rotate: "90deg", bottom: '30%', left: "70%" }} text="Design Patterns" containerRef={gridContainer2} />
                        <Card style={{ rotate: "-45deg", top: '55%', left: "0%" }} text="Desing Principles" containerRef={gridContainer2} />
                        <Card style={{ rotate: "-45deg", top: '70%', left: "25%" }} image="assets/logos/javalogo.webp" containerRef={gridContainer2} />
                        <Card style={{ rotate: "-45deg", top: '5%', left: "10%" }} image="assets/logos/pythonlogo.png" containerRef={gridContainer2} />
                        <Card style={{ rotate: "30deg", top: '70%', left: "78%" }} image="assets/logos/clogo.png" containerRef={gridContainer2} />
                    </div>
                </div>

                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%[">
                        <p className="heatext">Time Zone</p>
                        <p
                            className="subtext">I'm based in India, and open to remote work worldwide.</p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]"><Globe /></figure>
                </div>
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">\<p className="headtext text-center">
                        Lets start building together XD
                    </p>
                        <CopyEmailButton />
                    </div>
                </div>
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext">I have a good knowlege of java language, framework and tools that allow me to build robust and scalable applications</p>
                    </div>

                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start=[50%] md:scale-125">
                        <Framework />

                    </div>


                </div>

            </div>
        </section>
    )
}

export default About
