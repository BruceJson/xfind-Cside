<template>
	<div class='content_box'>
		<img class='col1' src="@imgs/test.png" alt="">
		<div class='col2'>
			<p class='line line1'>林晓光</p>
			<div class='line line2'>男
				<span class='cutter'>|</span>26岁(1992-09-06)
				<span class='cutter'>|</span>三年工作经验
				<span class='cutter'>|</span>南京
				<span class='cutter'>|</span>目前正在找工作</div>
			<div class='line line3'>
				<span class='span1'>邮箱：55555555@qq.com</span>
				<span class='span2'>手机：13333333333</span>
			</div>
		</div>
		<img class='edit_btn' src="@imgs/home/9.png" alt="" @click='editClick'>
	</div>
</template>
<script>
export default {
	name: 'userdata-defail-info',
	props: {
		detail: {
			type: Object,
			default () {
				return {};
			}
		}
	},
	methods: {
		editClick() {
			this.$emit('edit');
		}
	}
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
