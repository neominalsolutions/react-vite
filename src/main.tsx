import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import SiteLayout from './layouts/site.layout.tsx';

// root oluşturuldu
const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
	},
	{
		path: '/demo',
		element: <div>demo</div>,
	},
	{
		path: '/layout',
		Component: SiteLayout,
		children: [
			{
				path: 'dashboard', // /layout/dashboard
				element: <div>Dashboard Page</div>,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
