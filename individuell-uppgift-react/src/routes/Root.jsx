import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import { useEffect } from "react";
import { url, shopId } from "../data/constants"
import '../components/styling/main.css'


const Root = () => {
	const [products, setProducts] = useRecoilState(productState);

	useEffect(() => {
		async function fetchProducts() {
		  try {
			const response = await fetch(url + '?action=get-products&shopid=' + shopId);
			const data = await response.json();
			setProducts([...data]); // Skapa en kopia av produkterna
			
		  } catch (error) {
			console.error('Error fetching products:', error);
		  }
		}
		fetchProducts();
	  }, [onload]);

	  return (
		<div className="page-container">
			<Header />
			<main className="main-content">
				<Outlet />
			</main>
				<div className="footer-container">
					<Footer />
				</div>
		</div>
	)
}

export default Root