import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import tiger from '../assets/img/tiger.svg';
import html from '../assets/icons/html-50.svg'
import css from '../assets/icons/css3-50.svg'
import js from '../assets/icons/javascript-50.svg'
import react from '../assets/icons/react-50.svg'
import redux from '../assets/icons/redux-50.svg'
import sass from '../assets/icons/sass-50.svg'
import wordpress from '../assets/icons/wordpress-50.svg'
import seo from '../assets/icons/seo-50.svg'
import git from '../assets/icons/github-50.svg'
import vscode from '../assets/icons/visual-studio-code-50.svg'
import firebase from '../assets/icons/firebase.png'
import xd from '../assets/icons/adobe-xd-50.svg'
import photoshop from '../assets/icons/adobe-photoshop-50.svg'
import illustrator from '../assets/icons/adobe-illustrator-50.svg'
import figma from '../assets/icons/figma-50.svg'
import word from '../assets/icons/word-50.svg'
import excel from '../assets/icons/excel-50.svg'
import jira from '../assets/icons/jira-50.svg'
import notion from '../assets/icons/notion-50.svg'
import analytics from '../assets/icons/google-analytics-50.svg'
import procreate from '../assets/icons/procreate.svg'
import mongo from '../assets/icons/mongo.png'

export default function skills( ) {
    return (
        <div>
            <Header/>
			<div className='main'>
				
                
                    <div className='content-skills'>
                        <h1>My Skills</h1>
                        <p className="under-title">
                        I develop websites/applications that are functional, responsive and efficient.
                        </p>
                        <div className="skills-grid">
                            <div className="box">
                                <h3>Programming</h3>
                                <div className="skills-icons">
                                    <img src={html} title="HTML" alt="HTML" width={35} height={35}></img>
                                    <img src={css} title="CSS" alt="CSS" width={35} height={35}></img>
                                    <img src={js} title="Javascript" alt="Javascript" width={35} height={35}></img>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Graphic Design</h3>
                                <div className="skills-icons">
                                    <img src={photoshop} title="Photoshop" alt="Photoshop" width={35} height={35}></img>
                                    <img src={illustrator} title="Illustrator" alt="Illustrator" width={35} height={35}></img>
                                    <img src={xd} title="Adobe XD" alt="Adobe XD" width={35} height={35}></img>
                                    <img src={figma} title="Figma" alt="Figma" width={35} height={35}></img>
                                    <img src={procreate} title="Procreate" alt="Procreate" width={35} height={35}></img>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Librairies / Frameworks</h3>
                                <div className="skills-icons">
                                    <img src={react} title="React" alt="React" width={35} height={35}></img>
                                    <img src={redux} title="Redux" alt="Redux" width={35} height={35}></img>
                                    <img src={sass} title="Sass" alt="Sass" width={35} height={35}></img>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Project Management</h3>
                                <div className="skills-icons">
                                    <img src={word} title="Word" alt="Word" width={35} height={35}></img>
                                    <img src={excel} title="Excel" alt="Excel" width={35} height={35}></img>
                                    <img src={jira} title="Jira" alt="Jira" width={35} height={35}></img>
                                    <img src={notion} title="Notion" alt="Notion" width={35} height={35}></img>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Tools / Plateforms</h3>
                                <div className="skills-icons">
                                    <img src={wordpress} title="Wordpress" alt="Wordpress" width={35} height={35}></img>
                                    <img src={git} title="Git" alt="Git" width={35} height={35}></img>
                                    <img src={vscode} title="Vs Code" alt="Vs Code" width={35} height={35}></img>
                                    <img src={firebase} title="Firebase" alt="Firebase" width={35} height={35}></img>
                                    <img src={mongo} title="MongoDB" alt="MongoDB" width={35} height={35}></img>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Marketing Digital</h3>
                                <div className="skills-icons">                                 
                                    <img src={seo} title="SEO" alt="SEO" width={35} height={35}></img>
                                    <img src={analytics} title="Google Analytics" alt="Google Analytics" width={35} height={35}></img>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='content-softskills'>
                        <h1>My Softs Skills</h1>
                        <p className='text'>
                        Analytical skills, versatility, 
                        rigour, 
                        organisation,
                        listening, empathy, responsiveness, curiosity, 
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