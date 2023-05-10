import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react'
import './styling/login.css'
import { isLoggedInState } from '../data/productsAtom'
import { useRecoilState } from 'recoil'
import { userState } from '../data/productsAtom';
import { url, shopId } from "../data/constants"


const Login = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
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
		const response = await fetch(url, options);
		const statusObject = await response.json();

		if (statusObject.status === "success") {
			setUser({username: uname, password: pass});
			setIsLoggedIn(true);
			setIsSubmitted(true);
			navigate("/admin");
		} else {
			setErrorMessages({ name: "uname", message: "Invalid username or password" });
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
						<label htmlFor="uname" className='login-label'>Email</label>
						<input type="text" name="uname" className='input-fields' ref={unameRef} />
					</div>
					<div className="input-container">
						<label htmlFor="password" className='login-label'>Password</label>
						<input type="password" name="pass" className='input-fields' ref={passRef} />
						{errorMessage && <p className="error-message">{errorMessage}</p>}
					</div>
					<div className="login-btn-div">
						<button type='submit' className='login-btn' onClick={handleUserSubmit}>Logga in</button>
					</div>
				</div>
			</section>
		</form>
	)
}

export default Login
