<template>
	<div class='email_list'>
		<Table stripe class='table_list' :columns="tableData.columns" :data="tableData.data"></Table>
		<div class='action_area'>
			<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>删除用户</x-button>
			<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;' @click.native='createUser'>新增用户</x-button>
		</div>
		<Page class='align_center margin_top_30 margin_bottom_40' :total="100"></Page>
	</div>
</template>
<script>
export default {
	name: 'user-manager',
	data() {
		var self = this;
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
					title: '用户名',
					key: 'index'
				}, {
					title: '创建时间',
					key: 'index'
				}, {
					title: '用户属性',
					key: 'index'
				}, {
					title: '职位管理',
					key: 'index'
				}, {
					title: '简历管理',
					key: 'index'
				}, {
					title: '企业人才库',
					key: 'index'
				}, {
					title: '消息',
					key: 'index'
				}, {
					title: '收藏夹',
					key: 'index'
				}, {
					title: '账户信息',
					key: 'index'
				}, {
					title: '操作',
					key: 'index',
					render(h, params) {
						return h('span', {
							style: {
								color: '#01467E',
								cursor: 'pointer'
							},
							domProps: {
								innerHTML: '编辑'
							},
							on: {
								click(){
									alert(1);
								}
							}
						});
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
	},
	methods: {
		createUser(){
			this.$router.push({
				path: './create_user'
			});
		}
	}
};

</script>
<style scoped>
@import '@pages/setting/company-info.css';

</style>
