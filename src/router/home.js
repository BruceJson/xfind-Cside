export default [{
	path: '/home',
	name: 'home',
	meta: {
		title: '首页'
	},
	component: () =>
		import ('@/views/home/home')
}, {
	path: '/edit_resume',
	name: 'edit_resume',
	meta: {
		title: '简历编辑'
	},
	component: () =>
		import ('@/views/home/edit-resume')
}];
