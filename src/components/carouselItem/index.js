import React from 'react';
import './style.css';

export default function CarouselItem({item, width}) {

        
    
    return (
		<div className="carousel-item" style={{ width: width }}>
      <div></div>
      {/* <img className="carousel-img" src={item.icon.default} /> */}
      <div className="carousel-item-text">{item.title}</div>
	  <div className="carousel-item-text">{item.description}</div>
    </div>
	);
}


