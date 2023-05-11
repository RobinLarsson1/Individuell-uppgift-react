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
import Cart from './components/Cart'
import AddProduct from './components/addProdukt'
import AddUsers from './components/AddUsers'
import Admin from './components/Admin'
import AdminProducts from './components/AdminProducts'
import UserList from './components/UserList'
import LoaderLogin from './components/LoaderLogin'


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
				path: 'products',
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
			{
				path: 'cart',
				element: <Cart />
			},
			{
				path: 'addproduct',
				element: <AddProduct />
			},
			{
				path: 'admin/users',
				element: <UserList />
			},
			{
				path: 'admin',
				element: <Admin />
			},
			{
				path: 'admin/products',
				element: <AdminProducts />
			},
			{
				path: 'admin/addusers',
				element: <AddUsers />
			},
			{
				path: '*',
				element: <Home />
			},
		]
	}
])