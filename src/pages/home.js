import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeIllu from '../components/illustrations/home/homeIllu';
import { Link } from 'react-router-dom';

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
					I'm a junior front-end developer. <br/> 
					I'm also a graphic designer & illustrator student. 
					<br/> 
					<br/><br/>
					<span className='underline '><Link to="/works">View my work</Link></span>
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	);
}