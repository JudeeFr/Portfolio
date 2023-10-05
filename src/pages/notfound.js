import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Notfound() {
	return (
		<div>
			<Header/>
			<div className='main'>
				<div className='main-img'>
										
				</div>
				<div className='content'>
					<h1>404</h1>
					<p className='text'>
					You seem lost ?
					Be aware to follow the right path.
					</p>
					
				</div>
			</div>
			<Footer/>
		</div>
	);
}