import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Tree from '../components/illustrations/contact/tree'

export default function Contact() {
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
					But you can say hello and I'll be happy to get back to you !
					</p>
					<form className='contact-form'>
						<div className='form-content'>
							<label for="Name" className='label'>Name</label>
							<input type="text" class="input" name="name" id="name" placeholder="Your Name"/>
						</div>
						<div className='form-content'>
							<label for="Name" className='label'>Email</label>
							<input type="email" class="input" name="email" id="email" placeholder="Your Email"/>
						</div>
						<div className='form-content'>
							<label for="Name" className='label'>Message</label>
							<textarea name="message" class="input" id="message" cols="50" rows="4" placeholder="Let your creativity flow..."/>
						</div>
						<div className='form-content'>
							<input type="submit" value="Send" class="submit-btn"/>
						</div>
							
					</form>
					
				</div>
			</div>
			<Footer/>
		</div>
	);
}