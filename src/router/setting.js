export default {
	path: '/setting',
	name: 'setting',
	meta: {
		title: '用户设置'
	},
	component: () =>
		import ('@/views/setting/setting'),
	children: [{
		path: '',
		redirect: 'company_info'
	}, {
		path: 'company_info',
		name: 'company_info',
		meta: {
			title: '企业信息'
		},
		component: () =>
			import ('@/views/setting/components/company-info'),
	}, {
		path: 'user_manager',
		name: 'user_manager',
		meta: {
			title: '用户管理'
		},
		component: () =>
			import ('@/views/setting/components/user-manager'),
	}, {
		path: 'create_user',
		name: 'create_user',
		meta: {
			title: '新建用户'
		},
		component: () =>
			import ('@/views/setting/components/create-user'),
	}, {
		path: 'account_setting',
		name: 'account_setting',
		meta: {
			title: '账户设置'
		},
		component: () =>
			import ('@/views/setting/components/account-setting'),
	}]
};
