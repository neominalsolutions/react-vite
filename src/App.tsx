import { Link } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<>
			<h1>Home Page</h1>
			<Link to="/demo">Demo</Link> {' '}
			<Link to="/layout/dashboard">Dashboard</Link>
		</>
	);
}

export default App;
