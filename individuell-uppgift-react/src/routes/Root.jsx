import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";

const Root = () => {

	return (
		<>
		<Header />
		<main>
			<Outlet />
		</main>
		</>
	)
}

export default Root