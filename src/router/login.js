export default [{
    path: '/login',
    name: 'login',
    component: () =>
        import ('@/views/login/login'),
    children: [{
        path: '',
        redirect: 'password'
    }, {
        path: 'password',
        name: 'login-password',
        component: () =>
            import ('@/views/login/components/password-login'),
    }, {
        path: 'regist',
        name: 'login-regist',
        component: () =>
            import ('@/views/login/components/regist'),
    }, {
        path: 'identify',
        name: 'login-identify',
        component: () =>
            import ('@/views/login/components/identify-login'),
    }]
}];
