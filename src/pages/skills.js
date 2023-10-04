import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import tiger from '../assets/img/tiger.svg';
import html from '../assets/icons/html-50.svg'

export default function skills( ) {
    return (
        <div>
            <Header/>
			<div className='main'>
				
                
                    <div className='content-skills'>
                        <h1>Skills</h1>
                        <div className="skills-grid">
                            <div className="box">
                                <h3>Programming</h3>
                                <div className="skills-icons">
                                    <img src={html} alt="HTML" width={35} height={35}></img>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Graphic Design</h3>
                                <div className="skills-icons">
                                   
                                </div>
                            </div>
                            <div className="box">
                                <h3>Librairies / Frameworks</h3>
                                <div className="skills-icons">
                                   
                                </div>
                            </div>
                            <div className="box">
                                <h3>Project Management</h3>
                                <div className="skills-icons">
                                    
                                </div>
                            </div>
                            <div className="box">
                                <h3>Tools / Plateforms</h3>
                                <div className="skills-icons">
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='content-softskills'>
                        <h1>Softs Skills</h1>
                        <p className='text'>
                        Analytical skills, versatility, 
                        rigour, 
                        organisation,
                        listening, responsiveness, curiosity, 
                        creativity, 
                        critical thinking, autonomy.
                        </p>
                        <img className="skills-illu" src={tiger} alt="tiger" width={350} height={250} ></img>
                    </div>
                
			</div>
			<Footer/>
        </div>
    )
}