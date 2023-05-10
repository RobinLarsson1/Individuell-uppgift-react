import React from "react";
import { Link } from "react-router-dom";
import './styling/Home.css'

const Home = () => {

	return (
		<div className="home">
			<div className="desktop-container">
			<div className="home-container">
				<img src='https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg' alt="surf image" className="home-img" />
				<Link to="/surfboards" className="home-text">Surfboards</Link>
			</div>
			<div className="home-container">
				<img src='https://contents.mediadecathlon.com/p1622363/k$13144092cec96de346c024870943bd14/1800x0/2882pt1920/5764xcr3842/longboard_skateboard_decathlon_skateboarding_cruising_skate_carve_540_carver_carving_carve.jpg?format=auto' alt="longboarding image" className="home-img" />
				<Link to="/longboards" className="home-text">Longboards / Cruisers</Link>
			</div>
			</div>
			<div className="desktop-container">
			<div className="home-container">
				<img src='https://tribu.co/app/uploads/sites/10/2020/06/191808_Jackalope_DanMathieuPhoto_5639.jpg' alt="skateboarding image" className="home-img" />
				<Link to="/skateboarding" className="home-text">Skateboards</Link>
			</div>
			<div className="home-container">
				<img src='https://www.thekiteboarder.com/wp-content/uploads/2009/11/21-LOAD-POP-VINCENT-BERGERON-4055-scaled.jpg' alt="kiteboarding image" className="home-img" />
				<Link to="/kiteboards" className="home-text">Kiteboards</Link>
			</div>
			</div>
		</div>
	)
}

export default Home