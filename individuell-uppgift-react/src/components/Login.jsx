import { useState } from 'react'
import './styling/login.css'

const Login = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [errorMessages, setErrorMessages] = useState({})
	const [isLoggedIn, setIsLoggedIn] = useState(false)

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

        const { uname, pass } = document.forms[0];

		const userLoginData = loginInfo.find((user.username === uname.value))

		if (userData) {
            if (userData.password !== pass.value) {
                // Fel Lösen
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // User finns ej
            setErrorMessages({ name: "uname", message: errors.uname });
        }
	}

	return (
		<section className='login-main'>
			<div className="login-container">
				<h1>Logga in</h1>
				<div className='input-container'>
					<label htmlFor="email">Email</label>
					<input type="text" name="uname" className='input-fields' />
				</div>
				<div className="input-container">
					<label htmlFor="password">Password</label>
					<input type="password" name="pass" className='input-fields' />
				</div>
				<button type='submit' className='login-btn'>Logga in</button>
			</div>
		</section>
	)
}

export default Login