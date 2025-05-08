import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import { FuseRouteConfigsType, FuseRoutesType } from '@fuse/utils/FuseUtils';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import ExampleConfig from '../main/example/ExampleConfig';
import AboutConfig from '../main/about/AboutConfig';
import HomeConfig from '../main/home/HomeConfig';
import ContactConfig from '../../app/main/contacts/ContactConfig';
import NewsConfig from '../main/news/NewsConfig';
import NewsPostConfig from '../main/news-post/NewsPostConfig';
import TemplateConfig from '../main/template/template';
import GenealogyConfig from '../main/genealogy/GenealogyConfig';

const routeConfigs: FuseRouteConfigsType = [NewsPostConfig, TemplateConfig, NewsConfig ,AboutConfig, ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig, HomeConfig, ContactConfig, GenealogyConfig];

/**
 * The routes of the application.
 */
const routes: FuseRoutesType = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
	{
		path: '/',
		element: <Navigate to="/genealogy" />,
		auth: settingsConfig.defaultAuth
	},
	{
		path: 'contact',
		element: <Navigate to="/contact" />
	},{
		path: 'genealogy',
		element: <Navigate to="/genealogy" />
	},
	{
		path: 'loading',
		element: <FuseLoading />
	},
	{
		path: '404',
		element: <Error404Page />
	},
	{
		path: '*',
		element: <Navigate to="404" />
	}
];

export default routes;
