import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';
import TemplatePage from './TemplatePage';
import authRoles from '../../auth/authRoles';

const TemplateConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
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
			path: 'template',
			element: <TemplatePage />
		}
	]
};

export default TemplateConfig;
