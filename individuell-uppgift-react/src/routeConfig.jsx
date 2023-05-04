import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root'
import ViewItems from './components/viewItems'
import Home from './components/Home'
import Login from './components/Login'
import Surfboards from './components/Surfboards'
import Longboards from './components/Longboards'
import Skateboards from './components/skateboards'
import Kiteboards from './components/Kiteboards'
import ProductDetails from './components/ProductDetails'


export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'allaprodukter',
				element: <ViewItems />
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'surfboards',
				element: <Surfboards />
			},
			{
				path: 'longboards',
				element: <Longboards />
			},
			{
				path: 'skateboards',
				element: <Skateboards />
			},
			{
				path: 'kiteboards',
				element: <Kiteboards />
			},
			{
				path: 'products/:productId',
				element: <ProductDetails />
			},
		]
	}
])