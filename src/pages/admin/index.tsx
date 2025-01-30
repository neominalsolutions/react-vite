import { Link, Outlet } from 'react-router-dom';
import AuthGuard from '../../guards/auth.guard';

function Admin() {
	return (
		<>
			<AuthGuard>
				<div>Admin Page</div>
				<Link to="/admin/users">Users</Link>
				<Outlet />
			</AuthGuard>
		</>
	);
}

export default Admin;
