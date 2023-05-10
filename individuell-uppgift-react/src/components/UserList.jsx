import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userListState } from '../data/productsAtom';
import { url, shopId } from '../data/constants';
import './styling/userList.css'



const UserList = () => {
	const [userList, setUserList] = useRecoilState(userListState);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(`${url}?action=get-users&shopid=${shopId}`);
				const data = await response.json();
				setUserList(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchUsers();
	}, []);

	async function handleDeleteUser(user) {

		const data = {
			shopid: shopId,
			userid: user.id
		}

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}

		let response = await fetch((url + '?action=delete-user'), options)
		console.log(response)

		const newArray = [...userList]
		const filteredArray = newArray.filter(selectedUser => selectedUser.id !== user.id)
		setUserList(filteredArray)
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='userlist-container'>
			<h1>User List</h1>
			<ul className='userlist-ul'>
				{userList.map(user => (
					<li key={user.id} className='userlist-card'>
						<p> <span className='user-span'> Username: </span>{user.username}</p>
						<p><span className='user-span'> ID: </span>{user.id}</p>
						<div>
							{user.id === 30 ?
								<p className='admin-user'></p>
								:
								<div>
									<button onClick={() => handleDeleteUser(user)}>Delete</button>
								</div>
							}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
