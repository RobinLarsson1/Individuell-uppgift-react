import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root'
import ViewItems from './components/viewItems'
import Home from './components/Home'
import Login from './components/Login'


export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
	    children: [
			{
				path: '',
				element: <Login />
			}
		]
	}
])