import React from 'react';
import './style.css';

export default function CarouselItem({item, width}) {

        
    
    return (
		<div className="carousel-item" style={{ width: width }}>
    		<div className="carousel-img">
				<img className='carousel-picture1' src={item.pictures} alt="projet" />
			</div>
			<div className="carousel-item-text">
				<h1 className='carousel-item-title'>{item.title}</h1>
				<h2 className="carousel-item-subtitle">{item.subtitle}</h2>
				<p className="carousel-item-description">{item.description}</p>
			</div>
    </div>
	);
}


