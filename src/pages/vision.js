import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import VisionIllu from '../components/illustrations/vision/visionIllu';

export default function Vision() {
	return (
		<div>
			<Header/>
			<div className='main'>
				<div className='main-img'>
					<VisionIllu/>					
				</div>
				<div className='content content-about'>
					<h1>My Vision</h1>
					<p className='text'>
					
					</p>
					
				</div>
			</div>
			<Footer/>
		</div>
	);
}