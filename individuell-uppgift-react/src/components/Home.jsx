import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

	return (
		<div className="home">
			<div className="cat-container">
			<img src='https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg' alt="surf image" className="home-img"/>
			<Link to="/surfing" className="cat-text">Surfing</Link>
			</div>
			<div className="cat-container">
			<img src='https://www.aletscharena.ch/fileadmin/_processed_/a/f/csm_gleitschirmfliegen-herbst-aletsch-arena-06_0135cb08b8.jpg' alt="paragliding image" className="home-img"/>
			<Link to="/paragliding" className="cat-text">Paragliding</Link>
			</div>
			<div className="cat-container">
			<img src='https://tribu.co/app/uploads/sites/10/2020/06/191808_Jackalope_DanMathieuPhoto_5639.jpg' alt="skateboarding image" className="home-img"/>
			<Link to="/skateboarding" className="cat-text">Skateboarding</Link>
			</div>
		</div>
	)
}

export default Home