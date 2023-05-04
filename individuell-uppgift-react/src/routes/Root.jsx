import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";


const Root = () => {

	return (
		<>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer />
		</>
	)
}

export default Root