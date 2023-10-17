import React from 'react';
import { Link } from 'react-router-dom';
import Eye from '../components/illustrations/notfound/eye';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Notfound() {
	return (
		<div>
			<Header/>
			<div className='main'>
				<div className='main-img'>
						<Eye/>			
				</div>
				<div className='content content-notfound'>
					<h1>This page doesn't exist</h1>
					<p className='text'>
					You seem lost ?<br/>
					Be aware to follow the right path.<br/> 
					<br/><br/>
					</p>
					<span className='underline'><Link to="/">Home</Link></span>
				</div>
			</div>
			<Footer/>
		</div>
	);
}