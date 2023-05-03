import './login.css'

const Login = () => {
	return (
		<section className='login-main'>
		<div className="login-container">
			<h1>Logga in</h1>
			<div className='input-container'>
			<label htmlFor="email">Email</label>
			<input type="email" className='input-fields'/>
			</div>
			<div className="input-container">
			<label htmlFor="password">Password</label>
			<input type="password" className='input-fields' />
			</div>
			<button type='submit' className='login-btn'>Logga in</button>
		</div>
		</section>
	)
}

export default Login