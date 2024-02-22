import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';
import AboutPage from './AboutPage';
import authRoles from '../../auth/authRoles';

const AboutConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: true
				},
				footer: {
					display: true
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.user,
	routes: [
		{
			path: 'about',
			element: <AboutPage />
		}
	]
};

export default AboutConfig;
