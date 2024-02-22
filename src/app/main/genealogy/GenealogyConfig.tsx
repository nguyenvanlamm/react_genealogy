import { lazy } from 'react';

const Genealogy = lazy(() => import('./Genealogy'));

const ContactConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/genealogy',
			element: <Genealogy />
		}
	]
};

export default ContactConfig;
