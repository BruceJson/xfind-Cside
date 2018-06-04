<template>
	<div class='email_list'>
		<Form :model="formData" :label-width="70" style='margin-top:24px;' inline>
			<FormItem label="收藏时间">
				<Select v-model="formData.time" size="small" style='width: 80px;'>
					<Option value="0">标注</Option>
					<Option value="1">标注1</Option>
					<Option value="2">标注2</Option>
				</Select>
			</FormItem>
			<FormItem label="岗位名称">
				<Select v-model="formData.workname" size="small" style='width: 100px;'>
					<Option value="0">1</Option>
					<Option value="1">2</Option>
					<Option value="2">3</Option>
				</Select>
			</FormItem>
			<FormItem :label-width='1'>
				<flexbox align-items='center' style='height: 32px;'>
					<x-button type="xbtn-primary" :padding='[5, 17]' height='24' style='margin-top: 3px'>查询</x-button>
				</flexbox>
			</FormItem>
		</Form>
		<Table stripe class='table_list' :columns="tableData.columns" :data="tableData.data"></Table>
		<div class='action_area'>
			<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>下载简历</x-button>
			<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>取消收藏</x-button>
		</div>
		<Page class='align_center margin_top_30 margin_bottom_40' :total="100"></Page>
	</div>
</template>
<script>
export default {
	name: 'email-list',
	data() {
		return {
			formData: {
				time: '',
				workname: '',
			},
			tableData: {
				columns: [{
					type: 'selection',
					width: 60,
					align: 'center'
				}, {
					title: 'ID',
					key: 'index'
				}, {
					title: '性别',
					key: 'index'
				}, {
					title: '年龄',
					key: 'index'
				}, {
					title: '期望工作地',
					key: 'index'
				}, {
					title: '工作年限',
					key: 'index'
				}, {
					title: '学历',
					key: 'index'
				}, {
					title: '收藏时间',
					key: 'index'
				}, {
					title: '简历匹配度',
					key: 'index'
				}, {
					title: '岗位名称',
					key: 'index'
				}, ],
				data: [{
					index: '2',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '1',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}]
			}
		};
	}
};

</script>
<style scoped>
@import '@pages/talent-list/talent-list.css';

</style>
