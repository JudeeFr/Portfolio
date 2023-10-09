import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Girl from '../components/illustrations/projects/girl';
import Firstcloud from '../components/illustrations/projects/firstcloud';
import Secondcloud from '../components/illustrations/projects/secondcloud'


export default function Projects() {
	const [showModal, setShowModal] = useState(false);
    
	const works = () => {
		fetch()
	}

	const webDevBtn = () => {	
		setShowModal(true)
		const webDev = works.filter((works) => {
			return works.categoryId === 1;
		});
		works(webDev);
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
							<li><span className='underline' onClick={webDevBtn}>Web developement</span></li>
							<li><span className='underline' >Web design</span></li>
							<li><span className='underline' >Brand</span></li>
							<li><span className='underline' >Illustrations</span></li>
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