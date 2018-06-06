<template>
	<div class='has_resume_box'>
		<div class='col1'>
			<img src="@imgs/test.png" alt="">
			<p>林晓光</p>
		</div>
		<div class='col2'>
			<div class='line line1'>
				<p>UI设计</p>
				<Select class='resume_type_selector' size='small' v-model="resumeType" style="width:80px">
					<Option v-for='(item, index) in resumeTypeList' :key='index' :value="item.key">{{item.value}}</Option>
				</Select>
			</div>
			<div class='line line2'>更新：
				<span>2018-01-15</span>
			</div>
			<div class='line line3'>男
				<span class='cutter'>|</span>26岁(1992-09-06)
				<span class='cutter'>|</span>三年工作经验
				<span class='cutter'>|</span>南京
				<span class='cutter'>|</span>目前正在找工作</div>
			<div class='line line4'>
				<span class='span1'>邮箱：55555555@qq.com</span>
				<span class='span2'>手机：13333333333</span>
			</div>
			<div class='line line5'>既然选择了对方，就要风雨兼程！</div>
		</div>
		<x-button type='xbtn-primary' width='105' height='40' :padding='[0,0]' :is-link='true' to='/edit_resume'>编辑</x-button>
	</div>
</template>
<script>
export default {
	name: 'has_resume',
	data() {
		return {
			resumeType: '0',
			resumeTypeList: [{
				key: '0',
				value: '不公开'
			}, {
				key: '1',
				value: '公开'
			}]
		};
	}
};

</script>
<style scoped>
@import '@pages/home/home.css';

</style>
