<template>
	<div id="app" class='page_layout fixed_header'>
		<div class='layout_content'>
			<x-header v-if='$route.name && ($route.name.indexOf("login") === -1)'></x-header>
			<x-body :class='{margin_top_0: $route.name && ($route.name.indexOf("login") > -1) }'></x-body>
			<x-footer v-if='$route.name && ($route.name.indexOf("login") === -1)'></x-footer>
		</div>
	</div>
</template>
<script>
import XHeader from '@/views/layout/xheader';
import XBody from '@/views/layout/xbody';
import XFooter from '@/views/layout/xfooter';
export default {
	name: 'App',
	components: {
		XHeader,
		XBody,
		XFooter
	},
	data() {
		console.log(this.$router, this.$route);
		return {};
	},
	watch: {
		$route(val) {
			console.log(val, this.$router)
		}
	}
}

</script>
<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */

{
	opacity: 0;
}

.slide-fade-enter-active {
	transition: all .3s ease;
}

.slide-fade-leave-active {
	transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
	transform: translateX(5px);
	opacity: 0;
}

</style>
