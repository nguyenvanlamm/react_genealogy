import i18next from 'i18next';
import { lazy } from 'react';

const ComponentsDemo = lazy(() => import('./ComponentsDemo'));

/**
 * The Example page config.
 */
const ComponentsDemoConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'components',
			element: <ComponentsDemo />
		}
	]
};

export default ComponentsDemoConfig;
