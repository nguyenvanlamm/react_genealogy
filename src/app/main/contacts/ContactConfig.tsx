import { lazy } from 'react';
import Contact from './Contact';

const Home = lazy(() => import('./Contact'));

const ContactConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'Contact',
			element: <Contact />
		}
	]
};

export default ContactConfig;
