<template>
	<!-- 验证码登录 -->
	<div class='content_login_box identify_login_box'>
		<div class='line line1'>
			<x-link class='a1' to='./regist' :show-arrow='true' color='#333333' @click.native='goRegist'>没有账号？立即注册</x-link>
		</div>
		<div class='line line2 input_box'>
			<input type="text" placeholder='邮箱或手机' name="">
		</div>
		<flexbox class='line line3'>
			<div class='input_box'>
				<input type="password" placeholder='图形码' name="">
			</div>
			<div class='identify_code_box'>
				<div class='refresh_code' @click='refreshCode'></div>
				<identify-code :identifyCode="identifyCode" @click='refreshCode' :contentHeight='48' :contentWidth='122'></identify-code>
			</div>
		</flexbox>
		<flexbox align-items='center' class='line line4'>
			<flex-item class='input_box' :full='true'>
				<input type='text' placeholder='请输入验证码'>
			</flex-item>
			<x-button class='xbtn xbtn_fill xbtn_bradius' :padding='[0,0]' height='48' width='122'>获取验证码</x-button>
		</flexbox>
		<div class='line line5'>
			<x-button class='xbtn_bradius btn_login' fontsize='14' color='#fff' width='100%' @click.native='xalert'>登录</x-button>
		</div>
		<flexbox class='line line6' align-items='center'>
			<p>快速登录</p>
			<img src="@imgs/login/5.png">
			<img src="@imgs/login/6.png">
			<flex-item :full='true'></flex-item>
			<x-link class='a1' to='' :show-arrow='true' @click.native='goLogin'>密码登录</x-link>
		</flexbox>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'identify-login',
	data() {
		return {
			identifyCodes: "1234567890",
			identifyCode: ""
		};
	},
	mounted() {
		this.identifyCode = "";
		this.makeCode(this.identifyCodes, 4);
	},
	methods: {
		goRegist() {
			this.$emit('on-goto', '1');
		},
		goLogin() {
			this.$emit('on-goto', '0');
		},
		randomNum(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},
		refreshCode() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
		},
		makeCode(o, l) {
			for (let i = 0; i < l; i++) {
				this.identifyCode += this.identifyCodes[
					this.randomNum(0, this.identifyCodes.length)
				];
			}
			console.log(this.identifyCode);
		}
	}
};

</script>
<style type="text/css" scoped>
@import '@pages/guest/login-dialog.css';

</style>
