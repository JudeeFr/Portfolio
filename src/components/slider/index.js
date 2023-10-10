import React, { useState } from 'react';
// import './style.css';
import arrowLeft from '../../assets/img/arrowleft.png';
import arrowRight from '../../assets/img/arrowright.png';

export default function Slider({title}) {
    const [slide, setSlide] = useState(0);	
    const next = () => {	
        setSlide(slide === title.length - 1 ? 0 : slide + 1);
    };
    const previous = () => {
        setSlide(slide === 0 ? title.length - 1 : slide - 1);
    };
        
    
    return (
		<div className='slider'>  

        {works.map((work, idx)=>{
			return (
                <div>
                <img
                src={arrowLeft}
                alt="arrow left"
                className="arrow-left"								
                onClick={previous}
            />
            <div className='slider-images'>
                <p>{title[slide]}</p>
            </div>
            <div className='slider-content'>
               
            </div>
            <img
                src={arrowRight}
                alt="arrow right"
                className="arrow-right"
                onClick={next}
            />							
										
										
			</div>									
			)
			})} 
                

		</div>
	);
}


