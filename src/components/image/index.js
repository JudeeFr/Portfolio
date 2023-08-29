import React from 'react';
import './style.css';


export default function Image(src) {
	return (
		<div className='image'>
			<img src={src} alt="Judee Portfolio"></img>   
		</div>
	);
}