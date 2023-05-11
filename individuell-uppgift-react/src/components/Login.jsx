import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react'
import './styling/login.css'
import { isLoggedInState } from '../data/productsAtom'
import { useRecoilState } from 'recoil'
import { userState } from '../data/productsAtom';
import { url, shopId } from "../data/constants"
import LoaderLogin from './LoaderLogin';


const Login = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errorMessages, setErrorMessages] = useState({})
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
	const [user, setUser] = useRecoilState(userState);

	const navigate = useNavigate();


	const unameRef = useRef(null);
	const passRef = useRef(null);

	const handleUserSubmit = async (event) => {
		event.preventDefault();
		const uname = unameRef.current.value;
		const pass = passRef.current.value;

		const data = {
			action: "login-user",
			shopid: shopId,
			username: uname,
			password: pass,
		};
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};
		setIsSubmitting(true);
		try {
			const response = await fetch(url, options);
			const statusObject = await response.json();

			if (statusObject.status === "success") {
				setUser({ username: uname, password: pass });
				setIsLoggedIn(true);
				setIsSubmitted(true);
				navigate("/admin");
			} else {
				setErrorMessages({ name: "uname", message: "Fel användarnamn eller lösenord" });
			}
		} catch (error) {
			console.error(error);
			setErrorMessages({ name: "other", message: "Något gick fel. Försök igen senare." });
		} finally {
			setIsSubmitting(false);
		}
	};

	const errorMessage =
		errorMessages &&
		((errorMessages.name === "pass" || errorMessages.name === "uname") &&
			errorMessages.message);

	return (
		<form className='login-form'>
			<section className='login-main'>
				<div className="login-container">
					<h1>Logga in</h1>
					<div className='input-container'>
						<label htmlFor="uname" className='login-label'>Användarnamn</label>
						<input type="text" id="uname" className='input-fields' ref={unameRef} />
					</div>
					<div className="input-container">
						<label htmlFor="password" className='login-label'>Lösenord</label>
						<input type="password" id="pass" className='input-fields' ref={passRef} />
						{errorMessage && <p className="error-message">{errorMessage}</p>}
					</div>
					<div className="login-btn-div">
						<button type='submit' className='login-btn' onClick={handleUserSubmit}>
							Logga in
						</button>
					</div>
						{isSubmitting && <LoaderLogin/>}
				</div>
			</section>
		</form>
	)
}

export default Login
