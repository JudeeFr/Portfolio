import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeIllu from '../components/illustrations/home/homeIllu';

export default function Home() {
	return (
		<div>
			<Header/>
			<div className='main'>
				<div className='main-img'>
					<HomeIllu/>					
				</div>
				<div className='content content-home'>
					<h1 className='title'>Hi ! I'm Judee </h1>
					<p className='text'>
					I have two passions, web development and philosophy.  
					<br/>Mix the two and you get : 
					<br/><br/>
					<span className='underline'>Another vision of programming.</span>
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	);
}