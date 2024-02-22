import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';
import NewsPage from './NewsPage';
import authRoles from '../../auth/authRoles';

const NewsConfig: FuseRouteConfigType = {
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
			path: 'news',
			element: <NewsPage />
		}
	]
};

export default NewsConfig;
