import React from 'react';
import './style.css';
import logo from '../../assets/etc/logo.png'

export default function Header() {
	return (
		<div className='header'>
            <div className='logo'>
			<img src={logo} alt="logo"></img>
            </div>
            <div className='header-btns'>
                <button className='hire-btn'>Hire me</button>
                <button className='menu-btn'>Menu</button>
            </div>
		</div>
	);
}