<template>
	<div class='email_list'>
		<Form :model="formData" :label-width="70" style='margin-top:24px;' inline>
			<FormItem label="部门">
				<Select v-model="formData.tip" size="small" style='width: 80px;'>
					<Option value="0">标注</Option>
					<Option value="1">标注1</Option>
					<Option value="2">标注2</Option>
				</Select>
			</FormItem>
			<FormItem label="岗位名称">
				<Select v-model="formData.origin" size="small" style='width: 100px;'>
					<Option value="0">BOSS直聘</Option>
					<Option value="1">2</Option>
					<Option value="2">3</Option>
				</Select>
			</FormItem>
			<FormItem label="性别">
				<Select v-model="formData.time" size="small" style='width: 90px;'>
					<Option value="0">6个月内</Option>
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
			<Select v-model="formData.workname" placeholder='移除内部人员' style='width: 114px;margin-left: 40px;'>
				<Option value="0">1</Option>
				<Option value="1">2</Option>
				<Option value="2">3</Option>
			</Select>
			<Select v-model="formData.workname" placeholder='导出' style='width: 72px;margin-left: 40px;'>
				<Option value="0">1</Option>
				<Option value="1">2</Option>
				<Option value="2">3</Option>
			</Select>
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
				name: '',
				origin: '',
				time: '',
				workname: '',
			},
			tableData: {
				columns: [{
					type: 'selection',
					width: 60,
					align: 'center'
				}, {
					title: '部门',
					key: 'index'
				}, {
					title: '岗位名称',
					key: 'index'
				}, {
					title: '姓名',
					key: 'index'
				}, {
					title: '性别',
					key: 'index'
				}, {
					title: '出生年月',
					key: 'index'
				}, {
					title: '学历',
					key: 'index'
				}, {
					title: '入职时间',
					key: 'index'
				}, {
					title: '备注',
					key: 'index',
					width: 230,
					render(h,params){
						console.log(params);
						var el = h('input', {
							attrs: {
								placeholder: '请填写备注信息',
								value: params.row.index
							},
							style: {
								width: '100%',
								height: '30px',
								lineHeight: '30px',
								paddingLeft: '10px',
								fontSize: '12px',
								borderColor: '#008CEE',
								borderWidth: '1px'
							}
						});
						console.log('eleleleleel', el);
						return el;
					}
				}],
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
				}]
			}
		};
	}
};

</script>
<style scoped>
@import '@pages/talent-list/talent-list.css';

</style>
