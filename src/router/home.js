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
}, {
	path: '/my_delivery',
	name: 'my_delivery',
	meta: {
		title: '我的投递'
	},
	component: () =>
		import ('@/views/home/my-delivery')
}, {
	path: '/my_favor',
	name: 'my_favor',
	meta: {
		title: '我的收藏'
	},
	component: () =>
		import ('@/views/home/my-favor')
}];
