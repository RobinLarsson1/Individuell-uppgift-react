import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root'
import ViewItems from './components/viewItems'


export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
	    children: [
			{
				path: '',
				element: <ViewItems />
			}
		]
	}
])