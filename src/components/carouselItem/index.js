import React from 'react';
import './style.css';


export default function CarouselItem({item, width}) {

    return (
		<div className="carousel-item" key={item.id} style={{ width: width }}>
    		<div className="carousel-pictures">		 
				{item.pictures?.map((pictures, idx)=>(<img src={pictures} alt='projets' key={idx} className='picture'/>))} 	
			</div>
			<div className="carousel-item-content">
				<div className='carousel-item-text'>
					<h1 className='carousel-item-title'>{item.title}</h1>
					<h2 className="carousel-item-subtitle">{item.subtitle}</h2>
					<div className='carousel-item-tech'>
						{item.technos?.map((tech, idx)=>(<img src={tech} alt='technology' key={idx} className='technology'/>))} 							
					</div>
					<p className="carousel-item-description">{item.description}</p>
				</div>
				<div className='carousel-tiem-btn'>
					<button><a href={item.github} rel="noopener noreferrer" target='_blank'>Code</a></button>
					<button><a href={item.live} rel="noopener noreferrer" target='_blank'>Live</a></button>
				</div>
			</div>
    </div>
	);
}


