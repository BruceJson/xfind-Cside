import Vue from 'vue'
import Router from 'vue-router'

import homeRoutes from './home';
import loginRoutes from './login';
import searchResume from './search-resume';
import chat from './chat';
import talentList from './talent-list';
import resumeManager from './resume-manager';
import jobManager from './job-manager';
import setting from './setting';
import companyDesign from './company-design';
import aboutUs from './about-us';

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect: '/home'
	}, homeRoutes, loginRoutes, searchResume, chat, talentList, resumeManager, ...jobManager, setting, ...companyDesign, ...aboutUs]
})
