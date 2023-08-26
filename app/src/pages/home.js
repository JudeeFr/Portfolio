import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


export default function Home() {
	return (
		<div>
			<Header/>
			<div className='main'>
				<div className='main-img'>
					<img src="./images/home.jpg" alt="Judee Portfolio"/>
				</div>
				<div className='content content-home'>
					<h1>Hi ! I'm Judee </h1>
					<p>J'ai deux passions, le développement web et la philosophie. 
					<br/>
						Mélangez les deux et vous obtenez : 
						<br/><br/>
						Une autre vision de la programmation🍃
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	);
}