<template>
	<div class='email_list'>
		<Form :model="formData" :label-width="70" style='margin-top:24px;' inline>
			<FormItem label="标注">
				<Select v-model="formData.tip" size="small" style='width: 80px;'>
					<Option value="0">标注</Option>
					<Option value="1">标注1</Option>
					<Option value="2">标注2</Option>
				</Select>
			</FormItem>
			<FormItem label="下载时间">
				<Select v-model="formData.time" size="small" style='width: 80px;'>
					<Option value="0">下载时间</Option>
					<Option value="1">ID</Option>
				</Select>
			</FormItem>
			<FormItem label="岗位名称">
				<Select v-model="formData.jobname" size="small" style='width: 100px;'>
					<Option value="0">岗位名称</Option>
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
			<Select v-model="formData.workname" placeholder='标注/删除' style='width: 100px;'>
				<Option value="0">1</Option>
				<Option value="1">2</Option>
				<Option value="2">3</Option>
			</Select>
			<Select v-model="formData.workname" placeholder='移动简历' style='width: 114px;margin-left: 40px;'>
				<Option value="0">1</Option>
				<Option value="1">2</Option>
				<Option value="2">3</Option>
			</Select>
			<Select v-model="formData.workname" placeholder='导出简历' style='width: 72px;margin-left: 40px;'>
				<Option value="0">1</Option>
				<Option value="1">2</Option>
				<Option value="2">3</Option>
			</Select>
			<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>发送简历</x-button>
			<x-button class='xbtn xbtn_fill' width='52' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>删除</x-button>
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
				tip: '',
				time: '',
				jobname: '',
			},
			tableData: {
				columns: [{
					type: 'selection',
					width: 60,
					align: 'center'
				}, {
					title: '标注',
					key: 'index'
				}, {
					title: '姓名',
					key: 'index'
				}, {
					title: '性别',
					key: 'index'
				}, {
					title: '年龄',
					key: 'index'
				}, {
					title: '居住地',
					key: 'index'
				}, {
					title: '工作年限',
					key: 'index'
				}, {
					title: '学历',
					key: 'index'
				}, {
					title: '下载时间',
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
