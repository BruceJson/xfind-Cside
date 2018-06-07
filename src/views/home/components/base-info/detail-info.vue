<template>
	<div class='content_box'>
		<div class='title'>
			<p>基本信息</p>
			<img class='edit_btn' src="@imgs/home/9.png" alt="" @click='editClick'>
		</div>
		<Row class='row' type='flex' :gutter='30'>
			<Col class='label' span='4'>户&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp籍</Col>
			<Col class='content' span='5'>上海市</Col>
			<Col class='label' span='4'>身&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp高</Col>
			<Col class='content' span='5'>上海市</Col>
			</Col>
		</Row>
		<Row class='row' type='flex' :gutter='30'>
			<Col class='label' span='4'>婚姻状况</Col>
			<Col class='content' span='5'>上海市</Col>
			<Col class='label' span='4'>政治面貌</Col>
			<Col class='content' span='5'>上海市</Col>
			</Col>
		</Row>
		<Row class='row' type='flex' :gutter='30'>
			<Col class='label' span='4'>家庭住址</Col>
			<Col class='content' span='14'>上海市</Col>
		</Row>
		<Row class='row' type='flex' :gutter='30'>
			<Col class='label' span='4'>个人主页</Col>
			<Col class='content' span='14'>上海市</Col>
		</Row>
	</div>
</template>
<script>
export default {
	name: 'baseinfo-defail-info',
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
