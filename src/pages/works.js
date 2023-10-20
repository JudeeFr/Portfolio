import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CarouselItem from '../components/carouselItem';
import arrowLeft from '../assets/img/arrowleft.png';
import arrowRight from '../assets/img/arrowright.png';
import Girl from '../components/illustrations/projects/girl';
import Firstcloud from '../components/illustrations/projects/firstcloud';
import Secondcloud from '../components/illustrations/projects/secondcloud'
import { onSnapshot } from "firebase/firestore"
import { webDev } from '../database/firebase.config';



export default function Works() {
	const [showModal, setShowModal] = useState(false);
	const [ works, setWorks ] = useState([])
	
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
useEffect(()=>{
	getWebDev();
	
// 	// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
//buttons	
	const webDevBtn = () => {	
		setShowModal(true)
		getWebDev()
	  }
	const closeModal = (e) => {
		e.preventDefault()
		setShowModal(false)
	} 
//slider
const [activeIndex, setActiveIndex] = useState(0);
const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= works.length) {
      newIndex = works.length - 1;
    }
    setActiveIndex(newIndex);
  };

	return (
		<div>
			<Header/>
			<div className='projects-main'style={{ display: !showModal ? '' : 'none' }}>
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
				
				{/* <aside className='modal' style={{ display: !showModal ? 'none' : '' }}>
					<div className="js-stop-modal">
						<div className="modal-wrapper carousel">								
							<svg className="btn-close icon" 
								onClick={closeModal} fill="#000000" width="40px" height="40px" x="20" y="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
								<path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#1C274C"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C"/>
							</svg>
							<div className="inner"style={{ transform: `translate(-${activeIndex * 100}%)`}}>
								{works.map((item, idx) => {
									return <CarouselItem key={idx} item={item} width={"100%"} />;
								})}
							</div>
							<div className="carousel-buttons">										
								<span className="btn-arrow"onClick={() => {updateIndex(activeIndex - 1)}}>
									<img src={arrowLeft} className='arrow-left'title='Previous' alt="arrow left"/>											
								</span>{" "}
											
								<div className="indicators">
									{works.map((item, index) => {
										return (
											<span onClick={() => {updateIndex(index);}}
												className={`material-symbols-outlined ${index === activeIndex
												? "indicator-symbol-active"
												: "indicator-symbol-unactive"}`}>
													radio_button_unchecked
											</span>)
										})}
									</div>
								<span className="btn-arrow" onClick={() => {updateIndex(activeIndex + 1)}}>
									<img src={arrowRight} className='arrow-right' title="Next" alt="arrow right"/>
								</span>			
							</div>
						</div>		
					</div>			
				</aside> */}
			</div>
			<div className='gallery main' style={{ display: !showModal ? 'none' : '' }}>
				<div className="carousel">								
							<svg className="btn-close icon" 
								onClick={closeModal} fill="#000000" width="40px" height="40px" x="20" y="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
								<path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#1C274C"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C"/>
							</svg>
							<div className="inner"style={{ transform: `translate(-${activeIndex * 100}%)`}}>
								{works.map((item, idx) => {
									return <CarouselItem key={idx} item={item} width={"100%"} />;
								})}
							</div>
							<div className="carousel-buttons">										
								<span className="btn-arrow"onClick={() => {updateIndex(activeIndex - 1)}}>
									<img src={arrowLeft} className='arrow-left'title='Previous' alt="arrow left"/>											
								</span>{" "}
											
								<div className="indicators">
									{works.map((item, index) => {
										return (
											<span onClick={() => {updateIndex(index);}}
												className={`material-symbols-outlined ${index === activeIndex
												? "indicator-symbol-active"
												: "indicator-symbol-unactive"}`}>
													radio_button_unchecked
											</span>)
										})}
									</div>
								<span className="btn-arrow" onClick={() => {updateIndex(activeIndex + 1)}}>
									<img src={arrowRight} className='arrow-right' title="Next" alt="arrow right"/>
								</span>			
							</div>
						</div>		
				</div>
			<Footer/>
		</div>
	);
}