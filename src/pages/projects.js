import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
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
	const webDev = query(colRef, where("categoryId", "==", "1"))	
// get data
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
	}, []);
//buttons	
	const webDevBtn = () => {	
		setShowModal(true)
		onSnapshot(webDev, (snapshot)=>{
			const items = [];
			snapshot.docs.forEach((doc)=>{
			items.push({ ...doc.data(), id: doc.id })
		  })
		  setWorks(items)
		})
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
					{works.map((work)=>{
						return (
						<div key={work.id}>
							<h1>{work.title}</h1>
						</div>)
					})}
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

					<div className='slider'>
						<div className='slider-images'>
							{/* <img src={works.image}></img> */}
						</div>
						<div className='slider-content'>
							{/* <h1>{works.title}</h1> */}
						</div>
			

					</div>

				</aside>

			</div>
			<Footer/>
		</div>
	);
}