<template>
	<div class='model_list'>
		<Table stripe class='table_list' :columns="tableData.columns" :data="tableData.data"></Table>
		<Page class='align_center margin_top_30 margin_bottom_40' :total="100"></Page>
	</div>
</template>
<script>
import HandleBox from './handle-box';
export default {
	name: 'email-list',
	component: { HandleBox },
	data() {
		var self = this;
		return {
			formData: {
				time: '',
				workname: '',
			},
			tableData: {
				columns: [{
					title: '模板名称',
					key: 'index'
				}, {
					title: '职位名称',
					key: 'index'
				}, {
					title: '创建时间',
					key: 'index'
				}, {
					title: '创建者',
					key: 'index'
				}, {
					title: '操作',
					key: 'index',
					render(h, params) {
						var divEl = h(HandleBox, {
							on: {
								handleClick(type) {
									// type '0' 编辑 '1' 删除 '2' 复制
									switch (type) {
										case '0':
											self.edit(params.index);
											break;
										case '1':
											self.delete(params.index);
											break;
										case '2':
											self.copy(params.index);
											break;
										default:
											break;
									}
								}
							}
						});
						return divEl;
					}
				}],
				data: [{
					index: '0',
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
					index: '2',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '3',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '4',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '5',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '6',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '7',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '8',
					time: '2017-11-30  12:12:12',
					event: '下载简历',
					money: '-10',
					remain: '400',
					receipt: '--'
				}, {
					index: '9',
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
		edit(index) {

		},
		delete(index) {
			this.tableData.data.splice(index, 1);
		},
		copy(index) {

		}
	}
};

</script>
<style scoped>
@import '@pages/talent-list/talent-list.css';

</style>
