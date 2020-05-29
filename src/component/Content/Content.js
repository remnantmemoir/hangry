import React from 'react'
import { gstore, appstore, arrow, banner, mobile, bannerlg,
		 ayam, koplo, sangyu, logosangyu, budesari, logobude,
		 kopi,daripada } from '../images'


const content = props => (
	<div className="content-wrapper">
		<div className="content">
			<div className="banner">
				<div className="banner-wrapper">
				<div className="banner-content">
					<img className="banner-desktop" src={banner} alt="banner"/>
					<img className="banner-mobile" src={mobile} alt="banner mobile"/>
					<img className="banner-desktop-lg" src={bannerlg} alt="banner mobile"/>
					<div className="banner-content-tagline">
						<div className="banner-content-text_description">Kamu laper atau haus?</div>
						<div className="banner-content-text_title">Tenang... ada Hangry! yang siap mengatasi</div>
						<div className="banner-content-text_download">
							<img className="download-gstore" src={gstore} alt="Google Store"/>
							<img className="download-appstore" src={appstore} alt="App Store"/>
							<div></div>
						</div>
					</div>
				</div>
				</div>
			</div> 
			
			<div className="list-item">
				<div className="list-item-wrapper">
					<h1 className="list-item_title">Hangry! adalah restoran dengan beragam brand</h1>
					<div className="list-item_description">Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</div>
					<div className="list-item_items">

						<div className="items-box-wrapper" id="item1">
							<div className="items-hover">
								<div className="images-wrapper">
									<img className="items-image" src={ayam} alt="Ayam koplo"/>
									<div className="items-logo-wrapper">
										<img className="logo-image" src={koplo} alt="Logo Ayam koplo"/>
									</div>
								</div>
								<div className="items-description">
									<div className="items-description_title">
										<div className="title-title">Ayam Koplo</div>
										<img className="arrow" src={arrow} alt="Arrow"/>
									</div>
									<div className="items-description_desc">Ayam Geprek · Indonesia</div>
								</div>
							</div>
						</div>

						<div className="items-box-wrapper" id="item2">
							<div className="items-hover">
								<div className="images-wrapper">
									<img className="items-image" src={sangyu} alt="SanGyu"/>
									<div className="items-logo-wrapper">
										<img className="logo-image" src={logosangyu} alt="Logo SanGyu"/>
									</div>
								</div>
								<div className="items-description">
									<div className="items-description_title">
										<div className="title-title">San Gyu</div>
										<img className="arrow" src={arrow} alt="Arrow"/>
									</div>
									<div className="items-description_desc">Beef Bowl · Jepang</div>
								</div>
							</div>
						</div>

						<div className="items-box-wrapper" id="item3">
							<div className="items-hover">
								<div className="images-wrapper">
									<img className="items-image" src={budesari} alt="Bude Sari"/>
									<div className="items-logo-wrapper">
										<img className="logo-image" src={logobude} alt="Logo Bude Sari"/>
									</div>
								</div>
								<div className="items-description">
									<div className="items-description_title">
										<div className="title-title">Bude Sari</div>
										<img className="arrow" src={arrow} alt="Arrow"/>
									</div>
									<div className="items-description_desc">Nasi Ayam · Indonesia</div>
								</div>
							</div>
						</div>

						<div className="items-box-wrapper" id="item4">
							<div className="items-hover">
								<div className="images-wrapper">
									<img className="items-image" src={kopi} alt="Kopi"/>
									<div className="items-logo-wrapper">
										<img className="logo-image" src={daripada} alt="Logo Kopi"/>
									</div>
								</div>
								<div className="items-description">
									<div className="items-description_title">
										<div className="title-title">Kopi Dari|Pada</div>
										<img className="arrow" src={arrow} alt="Arrow"/>
									</div>
									<div className="items-description_desc">Minuman · Indonesia</div>
								</div>
							</div>
						</div>		
						
					</div>
				</div>
			</div>
		</div>
	</div>			

);

export default content;