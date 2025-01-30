import { NavLink } from 'react-router-dom';

function Profile() {
	return (
		<>
			<select>
				<option value={'ali'}>
					<NavLink to="/site/profile/me/ali">Ali</NavLink>
				</option>
				<option value={'mehmet'}>
					<NavLink to="/site/profile/me/mehmet">Mehmet</NavLink>
				</option>
			</select>

			<NavLink to="/site/profile/settings">Settings</NavLink>
		</>
	);
}

export default Profile;
