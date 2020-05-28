import React from 'react'
import gstore from '../images/gplay.svg'
import appstore from '../images/appstore.svg'

const content = props => (
	<div className="content-wrapper">
		<div className="content">
			<div className="banner">
				<div className="banner-wrapper">
				<div className="banner-content">
					<img src={require('../images/hero-banner-desktop-sm.jpg')} alt="banner"/>
					<div className="banner-content-tagline">
						<div className="banner-content-text_description">Kamu laper atau haus?</div>
						<div className="banner-content-text_title">Tenang... ada Hangry! yang siap mengatasi</div>
						<div className="banner-content-text_download">
							<img src={gstore} alt="Google Store"/>
							<img src={appstore} alt="App Store"/>
						</div>
					</div>
				</div>
				</div>
			</div> 
			
			<div className="list-item">
				<div className="list-item-wrapper">
					<h1 className="list-item_title">Hangry! adalah restoran dengan beragam brand</h1>
					<div className="list-item_description">Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
					</div>
				</div>
			</div>
		</div>
	</div>			

);

export default content;