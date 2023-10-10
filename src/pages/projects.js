import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
// import Slider from '../components/slider';
import arrowLeft from '../assets/img/arrowleft.png';
import arrowRight from '../assets/img/arrowright.png';
import Girl from '../components/illustrations/projects/girl';
import Firstcloud from '../components/illustrations/projects/firstcloud';
import Secondcloud from '../components/illustrations/projects/secondcloud'
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore"
import { app } from '../database/firebase.config';



export default function Projects() {
	const [showModal, setShowModal] = useState(false);
	const [ works, setWorks ] = useState([])
	
// init services: used to reach out to get data
	const db = getFirestore(app);
// collection reference 
	const colRef = collection(db, 'works')
// queries
	const webDev = query(colRef, where("categoryId", "==", 1))	
// get data in real time
	function getWorks() {
		onSnapshot(colRef, (snapshot)=>{
			const items = [];
			snapshot.docs.forEach((doc)=>{
			items.push({ ...doc.data(), id: doc.id })
		  })
		  setWorks(items)
		})
	}	
	useEffect(()=>{
		getWorks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
// Show Web developement category
function getWebDev() {
	onSnapshot(webDev, (snapshot)=>{
		const items = [];
		snapshot.docs.forEach((doc)=>{
		items.push({ ...doc.data(), id: doc.id })
	  })
	  setWorks(items)
	})
}	
//buttons	
	const webDevBtn = () => {	
		setShowModal(true)
		getWebDev()
	  }
//slider
const [slide, setSlide] = useState(0);	
const next = (data) => {	
	setSlide(slide === data.length - 1 ? 0 : slide + 1);
};
const previous = (data) => {
	setSlide(slide === 0 ? data.length - 1 : slide - 1);
};

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
							<li><span>Web design</span></li>
							<li><span>Brand</span></li>
							<li><span>Illustrations</span></li>
						</div>	
					</div>			
				</div>

				<aside className='modal' style={{ display: !showModal ? 'none' : '' }}>
					<div className="js-stop-modal">
						<div className="modal-wrapper ">								
							<svg className="btn-close icon" fill="#000000" width="40px" height="40px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
							<path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#1C274C"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C"/>
							</svg>
								<div className='content'>
									
									<div className='slider'>  
										{works.map((work, idx)=>{
											return (
											<div key={idx}>
												<div key={work.id[slide]}>
													<img
													src={arrowLeft}
													alt="arrow left"
													className="arrow-left"								
													onClick={previous}
													/>
													<div className='slider-images'>
														
													</div>
													<div className='slider-content'>
														<p>{work.title}</p>
													</div>
													<img
														src={arrowRight}
														alt="arrow right"
														className="arrow-right"
														onClick={next}
													/>														
												</div>	
																				
											</div>
											)
											})} 

									</div>	
								</div>														
						</div>
					</div>			
				</aside>

			</div>
			<Footer/>
		</div>
	);
}