import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';
import NewsPostPage from './NewsPostPage';
import authRoles from '../../auth/authRoles';

const NewsPostConfig: FuseRouteConfigType = {
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
			path: 'news/:newId',
			element: <NewsPostPage />
		}
	]
};

export default NewsPostConfig;
