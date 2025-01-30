import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import SiteLayout from './layouts/site.layout.tsx';
import Profile from './pages/site/profile/index.tsx';
import AboutMe from './pages/site/profile/pages/about-me.tsx';

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
		path: '/layout', // nested routes
		Component: SiteLayout,
		children: [
			{
				path: 'dashboard', // /layout/dashboard
				element: <div>Dashboard Page</div>,
			},
			{
				path: 'profile', // /layout/profile
				Component: Profile,
				children: [
					{
						path: 'me/:username', // /layout/profile/me/mert
						Component: AboutMe,
					},
					{
						path: 'me/settings', // /layout/profile/me/settings
						element: <div>User Settings</div>,
						children: [],
					},
				],
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
