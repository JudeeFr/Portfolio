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
					A software engineer's mission is to design and build software that is easy to use, accessible, reliable, efficient and secure. To achieve this, they analyze user needs and requirements. They also optimize the code to maximize performance, quality, speed and scalability.
					<br></br><br></br>
					How can we try to design and create without working on our thinking, learning to think for ourselves? In my opinion, the result of such an act will never be truly aligned, and therefore won't have the desired power. The power and magic of the result lies first and foremost in the thought that gives rise to it. 
					<br></br><br></br>
					If this thought is not conscious, worked on and evolved, the result will never correspond to what was undertaken in the first place. 
					I therefore invite designers, developers and creators of all kinds, but particularly those working in technology, to explore the universe of their thought with me.
					</p>
					<br/><br/><a href='https://judeefr.medium.com/about'className='underline'target='_blank' rel="noreferrer">Read more on Medium</a>
				</div>
			</div>
			<Footer/>
		</div>
	);
}