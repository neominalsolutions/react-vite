import { Link, Outlet } from 'react-router-dom';

function SiteLayout() {
	return (
		<>
			<div>
				<h1>Layout</h1>
				<nav>
					<Link to="dashboard">Dashboard</Link>{' '}
					<Link to="profile">Profile</Link>
				</nav>
				<main>
					<Outlet />
				</main>
				<footer>Footer</footer>
			</div>
		</>
	);
}

export default SiteLayout;
