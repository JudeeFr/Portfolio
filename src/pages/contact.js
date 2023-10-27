import React, {useState, useRef} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Tree from '../components/illustrations/contact/tree'
// import {db} from '../database/firebase.config'
// import {addDoc, collection} from 'firebase/firestore'
import emailjs from '@emailjs/browser';

export default function Contact() {
	const [hideForm, setHideForm] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage]=useState(false)
	const form = useRef();

	//stocker les données sur firebase
	// const [name, setName] = useState();
	// const [email, setEmail] = useState();
	// const [message, setMessage] = useState();
	// const userCollectionRef = collection(db, 'contactformData')
	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	setHideForm(true)
	// 	setShowSuccessMessage(true)
	// 	addDoc(userCollectionRef, {
	// 		name: name,
	// 		email: email,
	// 		message: message,
	// 	}).then((result) => {
	// 		console.log(result.text);
	// 	}, (error) => {
	// 		console.log(error.text);
	// 	})
	// }
	// onChange={(e)=>{setMessage(e.target.value)}} 
	
	// envoie du formulaire sur mon adresse email via emailjs
	const sendEmail= (e)=> {
		e.preventDefault()
		setHideForm(true)
		setShowSuccessMessage(true)
		emailjs.sendForm('service_5clckm9', 'template_6cbmr8q', form.current, 'aioEpSgYKylV1qQTm')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	}
	
	return (
		<div>
			<Header/>
			<div className='main'>
				<div className='main-img'>
						<Tree/>				
				</div>
				<div className='content'>
					<h1>Hire me</h1>
					<p className='text'>
					Sorry, I'm not I'm not available to work at the moment. <br></br>
					But you can say hello and I'll be happy to get back to you 
					<span role="img" aria-label="smiling face">😊</span>
					</p>
					<form className='contact-form'style={{ display: !hideForm ? '' : 'none' }}
					ref={form} onSubmit={sendEmail}>
						<div className='form-content'>
							<label htmlFor="user_name" className='label'>Name</label>
							<input type="text" className="input" name="user_name" id="user_name" placeholder="Enter your full Name" />
						</div>
						<div className='form-content'>
							<label htmlFor="user_email" className='label'>Email</label>
							<input type="email" className="input" name="user_email" id="user_email" placeholder="Enter your Email"/>
						</div>
						<div className='form-content'>
							<label htmlFor="message" className='label'>Message</label>
							<textarea name="message" className="input" id="message" cols="50" rows="4" placeholder="Let your creativity flow..." />
						</div>
						<div className='form-content'>
							<input type="submit" value="Send" className="submit-btn" />
						</div>
							
					</form>
					<div className="success-message" style={{ display: !showSuccessMessage ? 'none' : '' }}>
						<h3>Message submitted successfully</h3>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}