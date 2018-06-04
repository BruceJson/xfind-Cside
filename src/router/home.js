export default {
    path: '/home',
    name: 'home',
    component: () =>
        import ('@/views/home/home'),
    children: [{
        path: '',
        redirect: 'info'
    }, {
        path: 'info',
        name: 'info',
        component: () =>
            import ('@/views/home/components/info-content'),
    }, {
        path: 'paylist',
        name: 'paylist',
        component: () =>
            import ('@/views/home/components/pay-list'),
    }, {
        path: 'recharge',
        name: 'recharge',
        component: () =>
            import ('@/views/home/components/recharge'),
    }]
};
