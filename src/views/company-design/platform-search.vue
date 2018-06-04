<template>
	<div class='talent_list_page'>
		<div class='content_inner_width'>
			<Breadcrumb class='breadcrumbs' separator=">">
				<BreadcrumbItem>企业定制</BreadcrumbItem>
				<BreadcrumbItem v-for='(item, index) in $route.matched' :key='index' :to="item.path">{{item.meta.title || ''}}</BreadcrumbItem>
			</Breadcrumb>
			<flexbox align-items='center' justify-content='space-between' style='margin: 20px 0;'>
				<p style='color: #999;'>岗位匹配：</p>
				<Select v-model="jobType" style="width:200px">
					<Option value="0">发布中职位</Option>
					<Option value="1">发布中职位</Option>
					<Option value="2">发布中职位</Option>
				</Select>
				<DatePicker type="date" placeholder="简历更新时间" style="width: 200px" v-model='time'></DatePicker>
				<x-button type='xbtn-primary' height='40'>搜索</x-button>
				<Checkbox v-model="check1" style='color: #999;'>不显示删除过的简历</Checkbox>
				<Checkbox v-model="check2" style='color: #999;'>不显示下载过的简历</Checkbox>
				<Checkbox v-model="check3" style='color: #999;'>不显示查看过的简历</Checkbox>
			</flexbox>
			<tab class='table_tabs' v-model='curIndex'>
				<tab-item class='tab_item' tab-index='0'>搜索智联简历库</tab-item>
				<tab-item class='tab_item' tab-index='1'>搜索51job简历库</tab-item>
				<tab-item class='tab_item' tab-index='2'>已下载的简历</tab-item>
			</tab>
			<tab class='platform_search_tabs' v-model='curTypeIndex'>
				<tab-item class='tab_item' tab-index='0'>网络工程师</tab-item>
				<tab-item class='tab_item' tab-index='1'>产品经理</tab-item>
			</tab>
			<Form :model="formData" :label-width="70" style='margin-top:24px;' inline>
				<FormItem label="标注">
					<Select v-model="formData.tip" size="small" style='width: 80px;'>
						<Option value="0">标注</Option>
						<Option value="1">标注1</Option>
						<Option value="2">标注2</Option>
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
				<Select v-model='delTag' placeholder='标注/删除' style='width: 90px;'>
					<Option value="0">标注/删除</Option>
					<Option value="1">2</Option>
					<Option value="2">3</Option>
				</Select>
				<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>下载</x-button>
				<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>删除</x-button>
			</div>
			<Page class='align_center margin_top_30 margin_bottom_40' :total="100"></Page>
			<div class='margin_bottom_40'>
				<p style='padding: 16px 60px;background-color:#F9F9F9;font-size: 16px;color: #666666;'>为您快速筛选简历的神器操作步骤： </p>
				<div style='padding: 16px 60px;background-color:#F9F9F9;font-size: 14px;color: #999999;margin-top: 6px;'>
					<p>1.选择您要配比的岗位；</p>
					<p style='margin-top: 20px;'>2.用企业账号登录智联或51，点击智联简历库搜索或51简历库搜索。</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import TableHandler from './components/table-handler';
export default {
	name: 'platform-search',
	data() {
		var self = this;
		return {
			curIndex: '0',
			curTypeIndex: '0',
			curPage: 1,
			totalPage: 10,
			jobType: '0',
			time: '',
			check1: false,
			check2: false,
			check3: false,
			formData: {
				tip: '',
				name: '',
				time: ''
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
					title: '姓名/ID',
					key: 'index'
				}, {
					title: '性别',
					key: 'index'
				}, {
					title: '年龄',
					key: 'index'
				}, {
					title: '工作年限',
					key: 'index'
				}, {
					title: '学历',
					key: 'index'
				}, {
					title: '简历更新时间',
					key: 'index'
				}, {
					title: '简历匹配度',
					key: 'index'
				}, {
					title: '操作',
					key: 'index',
					width: 300,
					render(h, params) {
						var divEl = h(TableHandler, {
							on: {
								handleClick(type) {
									// type '0' 查看 '1' 下载 '2' 删除
									switch (type) {
										case '0':
											self.view(params.index);
											break;
										case '1':
											self.download(params.index);
											break;
										case '2':
											self.delete(params.index);
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
				}],
			},
			delTag: '0'
		};
	},
	methods: {
		view(index) {},
		download(index) {},
		delete(index) {
			this.tableData.data.splice(index, 1);
		},
	}
};

</script>
<style scoped>
@import '@pages/talent-list/talent-list.css';
.platform_search_tabs {
	display: flex;
	margin-top: 20px;
	& .tab_item {
		width: 121px;
		height: 40px;
		border: 1px solid var(--mainColor);
		text-align: center;
		line-height: 38px;
		color: var(--mainColor);
		transition: all linear .3s;
		border-radius: 4px;
		margin-right: 20px;
		&.active,
		&:hover {
			background-color: var(--mainColor);
			color: #fff;
		}
	}
}

</style>
