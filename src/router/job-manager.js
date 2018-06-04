export default [{
	path: '/job_manager',
	name: 'job_manager',
	component: () =>
		import ('@/views/job-manager/job-manager')
}, {
	path: '/create_job',
	name: 'create_job',
	component: () =>
		import ('@/views/job-manager/create-job')
}];
