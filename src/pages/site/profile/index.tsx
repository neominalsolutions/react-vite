import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Profile() {
	// useNavigate hook'u ile sayfa yönlendirme yapılabilir
	const navigate = useNavigate();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onProfileSelect = (e: any) => {
		// username'e göre sayfa yönlendirme
		const username = e.target.value;
		// js üzerinden yönlendirme varsa useNavigate hook'u kullanılmalı
		navigate('/layout/profile/me/' + username);
	};

	return (
		<>
			<h1>Profile Page</h1>
			<hr></hr>
			<select onChange={onProfileSelect}>
				<option value={'ali'}>Ali</option>
				<option value={'mehmet'}>Mehmet</option>
			</select>{' '}
			<NavLink to="/layout/profile/settings">Settings</NavLink>
			<NavLink to="/layout/profile/change-password">Change Password</NavLink>
			<hr></hr>
			{/* child sayfaların açılması için geçerli */}
			<Outlet />
		</>
	);
}

export default Profile;
