<template>
	<div class='my_favor_page'>
		<div class='content_inner_width'>
			<Breadcrumb class='breadcrumbs' separator=">">
				<BreadcrumbItem to='/'>我的主页</BreadcrumbItem>
				<BreadcrumbItem v-for='(item, index) in $route.matched' :key='index' :to="item.path">{{item.meta.title || ''}}</BreadcrumbItem>
			</Breadcrumb>
			<tab class='table_tabs' v-model='curIndex'>
				<tab-item class='tab_item' tab-index='0'>我的收藏</tab-item>
			</tab>
			<div class='favor_list'>
				<div class='favor_item' v-for='(item, index) in favorList' :key='index'>
					<div class='left'>
						<Checkbox @on-change='favorItemCheck' label=''></Checkbox>
					</div>
					<div class='right'>
						<div class='col1'>
							<p class='p1'>UI/网页设计</p>
							<p class='p2'>5~7K</p>
						</div>
						<div class="col2">
							<p class='p1'>南京市/本科/3年/2018-03-01</p>
							<p class='p2'>南京中缆有限公司</p>
						</div>
						<div class='col3'>
							<i-circle :percent="80" :size='67'>
								<p class='p1'>匹配度</p>
								<p class='p2'>50<span>%</span></p>
							</i-circle>
						</div>
						<div class='col4'>
							<p><span style='cursor: pointer;'>取消收藏</span><span class='cutter'>|</span><span style='cursor: pointer;'>投个简历</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class='action_area' style='padding-left: 25px;'>
				<div>
					<Checkbox v-model="selectAll">全选</Checkbox>
				</div>
				<div class='right'>
					<x-button class='xbtn xbtn_fill' width='100' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>删除职位</x-button>
					<x-button class='xbtn xbtn_fill' width='100' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>申请职位</x-button>
				</div>
			</div>
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
			selectAll: false,
			favorList: [{}, {}]
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
	},
	methods: {
		favorItemCheck() {}
	}
};

</script>
<style scoped>
@import '@pages/home/my-favor.css';

</style>
