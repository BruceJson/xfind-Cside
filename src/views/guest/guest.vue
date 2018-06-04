<template>
	<div class='guest_page'>
		<div class='swiper_box'>
			<div class='swiper_box_inner'></div>
			<div ref='guestSwiper' class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for='(item, index) in swiperDataList' :key='index'>
						<a :href="item.link">
							<img :src="item.url">
						</a>
					</div>
				</div>
				<div ref='swiperPagination' class="swiper-pagination"></div>
			</div>
		</div>
		<login-dialog v-model='showLogin'></login-dialog>
	</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import LoginDialog from './dialogs/login-dialog';
export default {
	name: 'guest_page',
	components: {
		LoginDialog

	},
	data() {
		return {
			swiper: null,
			swiperDataList: [{
				url: require('@imgs/guest/1.png'),
				link: 'http://www.baidu.com'
			}, {
				url: require('@imgs/guest/2.png'),
				link: 'http://www.baidu.com'
			}, {
				url: require('@imgs/guest/3.png'),
				link: 'http://www.baidu.com'
			}]
		};
	},
	computed: {
		showLogin: {
			set(val) {
				if (val) {
					this.$store.dispatch('ShowLogin');
				} else {
					this.$store.dispatch('HideLogin');
				}
			},
			get() {
				console.log(this.$store);
				return this.$store.getters.showLoginDialog
			}
		}
	},
	mounted() {
		this.swiper = new Swiper(this.$refs.guestSwiper, {
			loop: true,
			speed: 1000,

			autoplay: true,
			delay: 3000,

			disableOnInteraction: false,

			effect: 'fade',

			// 如果需要分页器
			pagination: {
				el: this.$refs.swiperPagination,
			}
		})
	},
};

</script>
<style>
@import '@pages/guest/guest.css';

</style>
