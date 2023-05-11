import React from "react"
import './styling/loaderLogin.css'

const LoaderLogin = () => {
	return (
		<div className="loader-login">
			<div class="lds-ring-login">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				</div>
		</div>
	)
}

export default LoaderLogin;