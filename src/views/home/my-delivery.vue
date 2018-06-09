<template>
	<div class='my_delivery_page'>
		<div class='content_inner_width'>
			<Breadcrumb class='breadcrumbs' separator=">">
				<BreadcrumbItem to='/'>我的主页</BreadcrumbItem>
				<BreadcrumbItem v-for='(item, index) in $route.matched' :key='index' :to="item.path">{{item.meta.title || ''}}</BreadcrumbItem>
			</Breadcrumb>
			<tab class='table_tabs' v-model='curIndex'>
				<tab-item class='tab_item' tab-index='0'>全部投递</tab-item>
				<tab-item class='tab_item' tab-index='1'>未被查看</tab-item>
				<tab-item class='tab_item' tab-index='2'>被查看</tab-item>
				<tab-item class='tab_item' tab-index='3'>感兴趣</tab-item>
				<tab-item class='tab_item' tab-index='4'>不感兴趣</tab-item>
			</tab>
			<Table stripe class='table_list' :columns="tableData.columns" :data="tableData.data"></Table>
			<Page class='align_center margin_top_30 margin_bottom_40' :total="100"></Page>
		</div>
	</div>
</template>
<script>
export default {
	name: 'resume-manager',
	data() {
		return {
			curIndex: '0',
			curPage: 1,
			totalPage: 10,
			tableData: {
				columns: [{
					title: '职位名称',
					key: 'index'
				}, {
					title: '公司名称',
					key: 'index'
				}, {
					title: '时间',
					key: 'index'
				}, {
					title: '薪资',
					key: 'index',
					render: (h, obj) => {
						return h('span', {
							style: {
								color: '#FF7676'
							},
							domProps: {
								innerHTML: obj.row.index
							}
						});
					}
				}, {
					title: '状态',
					key: 'index'
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
	computed: {
		currentComp() {
			if (this.curIndex === '0') {
				return GetResume;
			} else if (this.curIndex === '1') {
				return DownloadResume;
			} else {
				return CollectionResume;
			}
		}
	}
};

</script>
<style scoped>


</style>
