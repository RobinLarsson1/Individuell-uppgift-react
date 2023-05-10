import './styling/footer.css'
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer>
			<div className='footer-container'>
				<Link to="/"><img src={logo} alt="Logo" className="logo-footer" /></Link>
				<div className="about-me">
					<p className='footer-p'>Made by: Robin Larsson, find me here! </p>
					<a href="https://www.linkedin.com/in/robin-larsson-b782b0203/" target="_blank">
						<AiOutlineLinkedin className='linked-in' />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer