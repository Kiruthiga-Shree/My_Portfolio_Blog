import React from 'react'
import Image from './assets/animation.png'
export const Hero = () => {
  return (
    <>
    <section className='sec1' id='hero'>
                <div className="hero-section">
                    <img src={Image} alt="animation img" />
                </div>
                <div className="intro">
                    <h1>Hi,I'm Kiruthiga Shree</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, perspiciatis.</p>
                    <button><a href="#contact">Hire Me</a></button>
                </div>
            </section>
    </>
  )
}
