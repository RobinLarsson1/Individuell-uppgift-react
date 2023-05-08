import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react'
import './styling/login.css'
import { isLoggedInState } from '../data/productsAtom'
import { useRecoilState } from 'recoil'


const Login = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [errorMessages, setErrorMessages] = useState({})
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
	const navigate = useNavigate();


	const unameRef = useRef(null);
	const passRef = useRef(null);

	const loginInfo = [
		{
			username: "admin",
			password: "password"
		}
	]

	const error = {
		err: "Invalid username or password"
	}

	const handleUserSubmit = (event) => {
		event.preventDefault();
		const uname = unameRef.current.value;
		const pass = passRef.current.value;

		const userLoginData = loginInfo.find((user) => user.username === uname);

		if (userLoginData) {
			if (userLoginData.password !== pass) {
				// Fel Lösen
				setErrorMessages({ name: "pass", message: error.err });
			} else {
				setIsLoggedIn(true);
				setIsSubmitted(true);
				navigate("/");
			}
		} else if (uname !== "" && pass !== "") {
			// Både användarnamn och lösenord är felaktiga
			setErrorMessages({ name: "uname", message: error.err });
		}
	};

	const errorMessage =
		errorMessages &&
		((errorMessages.name === "pass" || errorMessages.name === "uname") &&
			errorMessages.message);

	return (
		<form>
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
