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
					I'm a web developer student and I want to become a Java software engineer.
					<br></br><br></br>
					I live in Aix Les Bains from France, between lac and montains.<br></br><br></br>
					I am a self-taught woman with a high-potential and a hypersensitive profile.
					My personality is reserved and discreet. I carry the values of integrity and freedom. 
					My dark side is that I am also a rather dynamic and positive temperament and I love to play with the words.<br></br><br></br>
					I like to spend my free time reading and writing, studying psychology, philosophy and the human science.<br></br> 		
					I'd also like to learn how to draw digitally on Procreate to do science fiction illustrations and character design.<br></br> <br></br>
					I like to cook Thai, Japanese and Italian food to please my family and friends. 
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	);
}