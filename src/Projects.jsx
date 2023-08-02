import React from 'react'
import Image from './assets/box1.png'
import Image1 from './assets/box2.png'
import Image2 from './assets/box3.png'
import Image3 from './assets/box4.png'
export const Projects = () => {
    return (
        <div className='sec3' id='projects'>
            <div className="head">
                <h1>
                    Development
                </h1>
            </div>
            <div className="grid">
                <div className="box1">
                <div className="own">
                <h3>
                    Own Projects
                </h3>
            </div>
                    <img src={Image} alt="project1" />
                    <h4><a href="https://ksrct-35e15.web.app/index.html#home" target='_blank' style={{ textDecoration: "none" }}>College Website</a></h4>
                </div>

            </div>
            <div className="industrial">
                <h3>
                    Industrial Project
                </h3>
            </div>
            <div className="grid2">
                <div className="box1">
                    <img src={Image3} alt="project1" />
                    <h4><a href="https://krishtec.co.in/#" style={{ textDecoration: "none" }} target='_blank'>Company Official Website</a></h4>
                </div>
            </div>
            <div className="hackathon">
                <h3>
                    Hackathons
                </h3>
            </div>
            <div className="grid3">
                <div className="box1">
                    <img src={Image1} alt="project1" />
                    <h4><a href="https://dashboard-294b9.web.app/" style={{ textDecoration: "none" }} target='_blank'>Multi-State Co-operative Societies,Ministry of Cooperation</a></h4>
                </div>
            </div>
            <div className="uiux">
                <h1>
                    UI/UX Designing
                </h1>
            </div>
            <div className="grid4">
            <div className="box1">
                    <img src={Image2} alt="project3" />
                    <h4><a href="https://www.figma.com/file/v5oZxndxWiV3JKy1NMXhLJ/Food-Application?type=design&mode=design&t=LgDGHcpl0R9KJlue-1"target='_blank' style={{ textDecoration: "none" }}>Food Application UI/UX</a></h4>
                </div>
            </div>
        </div>
    )
}
