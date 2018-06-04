// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import iview from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iview);

import baiduMap from 'vue-baidu-map';
Vue.use(baiduMap, {
	ak: 'ZUONbpqGBsYGXNIYHicvbAbM'
});

import comps from '@/x-elements';
Vue.use(comps);

// css
import '@/assets/style/main.css';

import router from './router'

import store from '@/store';

console.log('#############store', store);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
