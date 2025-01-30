// <A><B /> <C /></A>

import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
	children: React.ReactNode;
};

function AuthGuard({ children }: Props) {
	const location = useLocation();
	console.log(location);

	// Check if user is authenticated
	// if user has JWT Token
	console.log('AuthGuard');

	useEffect(() => {
		// api call check user is authenticated
	}, []);

	const token = localStorage.getItem('token');

	if (token) {
		const decode = jwtDecode(token);
		console.log(decode);
		return <>{children}</>;
	}

	return <Navigate to="/login" />;
}

export default AuthGuard;
