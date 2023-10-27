import React from 'react';
import './style.css';
import logo from '../../assets/etc/logo.svg';
import { Link } from 'react-router-dom'
import Menu from '../../components/menu'

export default function Header() {
	return (
		<div className='header'>
            <div className='logo'>
                <Link to="/">
			        <img src={logo} alt="logo" width={250} height={100}></img>
                </Link>
            </div>
            <div className='header-btns'>
                <Link to="/contact">
                    <button className='hire-btn'>Hire me</button>
                </Link>
                <Menu/>
            </div>
		</div>
	);
}