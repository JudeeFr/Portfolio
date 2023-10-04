import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutIllu from '../components/illustrations/about/aboutIllu';

export default function About() {
	return (
		<div>
			<Header/>
			<div className='main'>
				<div className='main-img'>
					<AboutIllu/>					
				</div>
				<div className='content content-about'>
					<h1>About me</h1>
					<p className='text'>
					I'm a junior front-end developer and I want to develop my skills on design and illustration to complete the power of web developement.
					<br></br><br></br>
					I am 42 years old and I live in Aix Les Bains from France, between lac and montains.<br></br><br></br>
					I'm a self-taught person with high potential and a hypersensitive profile. My personality is reserved and discreet. My values are integrity and freedom. I'm also rather dynamic and positive. My darker side is that I'm often too perfectionist and anxious.<br></br><br></br>
					My ambition is to be a freelance and offer creative web design and coaching services.<br></br> 
					I document my learning on Linkedin, Instagram and my blog.<br></br><br></br> 		
					I like to spend my free time reading and writing, studying psychology, philosophy and the human sciences. I also like to enjoy nature.<br></br> 
					
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	);
}