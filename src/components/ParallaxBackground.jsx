import React from 'react'

const ParallaxBackground = () => {
    return (
        <section className='absolute inset-0 bg-black/40'>

            <div className='relative h-screen overflow-y-hidden'>
                <div className='absolute inset-0 w-full h-screen -z-50' style={{ background: "url(/assets/sky.jpg)", backgroundPosition: "bottom", backgroundSize: "conver" }}></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>
            </div>
        </section>

    )
}

export default ParallaxBackground
