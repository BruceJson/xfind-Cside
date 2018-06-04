export default [{
	path: '/company_design',
	name: 'company_design',
	component: () =>
		import ('@/views/company-design/company-design')
}, {
	path: '/platform_search',
	name: 'platform_search',
	meta: {
		title: '跨平台搜索'
	},
	component: () =>
		import ('@/views/company-design/platform-search')
}];
