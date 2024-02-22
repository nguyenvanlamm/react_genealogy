import { lazy } from 'react';

const Home = lazy(() => import('./Home'));

const HomeConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'home',
			element: <Home />
		}
	]
};

export default HomeConfig;
