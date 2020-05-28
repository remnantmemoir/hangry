import React from 'react'
import logo from '../images/hangry-animated.42036c54.gif';
import Bars from '../images/bars.svg';
import '../style/style.css';


const navbar = props => (
	<header className="header-wrapper">
		<nav className="header">
			<div className="header-logo"><a href="/"><img src={logo} alt="logo"/></a></div>
			<div className="header-menus">
				<ul>
					<li><a href="/">Tentang Kami</a></li>
					<li><a href="/">Semua Outlet</a></li>
					<li><a href="/">Promo</a></li>
					<li><a href="/">Karier</a></li>
					<li className="header-menus-red"><a href="/">Download App</a></li>
				</ul>
			</div>
			<div className="sidebar-mobile">
				<img src={Bars} alt="Bars"/>
			</div>
		</nav>
	</header>

);

export default navbar;