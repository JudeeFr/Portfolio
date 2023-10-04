import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Girl from '../components/illustrations/projects/girl';
import Firstcloud from '../components/illustrations/projects/firstcloud';
import Secondcloud from '../components/illustrations/projects/secondcloud'


export default function Projects() {
	const [showModal, setShowModal] = useState(false);
    
	const modal = () => {	
		setShowModal(true)
		
	  }
	return (
		<div>
			<Header/>
			<div className='projects-main'>
				<div className='projects-illus'>				
					<Girl/>					
					<Firstcloud/>	
					<Secondcloud/>								
				</div>
				<div className='projects-content'>
					<h1>Here is my work !</h1>
					<p className='text'>
						Choose a category
						</p>
					<div className='projects-menu'>
						
						<div className='projects-menu-category'>
							<li><span className='underline' onClick={modal}>Web developement</span></li>
							<li><span className='underline' onClick={modal}>Web design</span></li>
							<li><span className='underline' onClick={modal}>Brand</span></li>
							<li><span className='underline' onClick={modal}>Illustrations</span></li>
						</div>	
					</div>			
				</div>

				<aside className='modal' style={{ display: !showModal ? 'none' : '' }}>

					

				</aside>

			</div>
			<Footer/>
		</div>
	);
}