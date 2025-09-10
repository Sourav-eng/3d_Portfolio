import { OrbitingCircles } from "./OribitingCircles";


export function Framework() {
    const skills = [
        
     
       "java",
       "mongodb",
        "css3",
        "git",
        "html5",
        "javascript",
        "react",
        "tailwindcss",
        "vitejs",
        "nodejs",
        
    ]
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (<Icons key={index} src={`assets/logos/${skill}.svg`} />

                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                  {skills.reverse().map((skill, index) => (<Icons key={index} src={`assets/logos/${skill}.svg`} />

                ))}
                
            </OrbitingCircles>
        </div>
    );
}

const Icons = ({ src }) => {
    return(<img src={src} className="duration-200 rounded-sm hover:scale-110" alt="" />)
    
}


