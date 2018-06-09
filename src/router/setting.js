export default [{
	path: '/setting',
	name: 'setting',
	meta: {
		title: '用户设置'
	},
	component: () =>
		import ('@/views/setting/setting')
}];
