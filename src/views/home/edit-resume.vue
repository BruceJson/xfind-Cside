<template>
	<div class='edit_resume_page'>
		<div class='content_inner_width'>
			<Breadcrumb class='breadcrumbs' separator=">">
				<BreadcrumbItem to='/'>我的主页</BreadcrumbItem>
				<BreadcrumbItem v-for='(item, index) in $route.matched' :key='index' :to="item.path">{{item.meta.title || ''}}</BreadcrumbItem>
			</Breadcrumb>
			<div class='edit_body'>
				<div class='left'>
					<div class='resume_info'>
						<div class='l1'>UI设计</div>
						<div class='l2'>
							<p>更新：2018-12-12</p>
							<p>公开度：不公开</p>
						</div>
						<div class='l3'>
							<span>修改名称</span>
							<span>刷新</span>
							<span>预览</span>
						</div>
					</div>
					<div class='part_list'>
						<a class='item' href='#position'>
							<span>基本信息</span>
							<img src="@imgs/home/7.png" alt="">
						</a>
						<div class='item'>
							<span>求职意向</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>工作经验</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>项目经历</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>教育经历</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>培训技能</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>附加信息</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
					</div>
				</div>
				<div class='right'>
					<!-- 个人信息 -->
					<div class='part1'>
						<!-- 详情 -->
						<userdata-detail-info :detail='userData.detail' v-show='!userData.editMode' @edit='userDataEdit'></userdata-detail-info>
						<!-- 编辑 -->
						<userdata-edit-info v-show='userData.editMode' @on-submit='userDataSubmit'></userdata-edit-info>
					</div>
					<!-- 基本信息 -->
					<div class='part2'>
						<!-- 详情 -->
						<baseinfo-detail-info :detail='baseInfo.detail' v-show='!baseInfo.editMode && baseInfo.detail' @edit='baseInfoEdit'></baseinfo-detail-info>
						<!-- 编辑 -->
						<baseinfo-edit-info v-show='baseInfo.editMode' @on-submit='baseInfoSubmit'></baseinfo-edit-info>
						<!-- 无数据 -->
						<baseinfo-no-data v-show='!baseInfo.editMode && !baseInfo.detail' @edit='baseInfoEdit'></baseinfo-no-data>
					</div>
					<!-- 求职意向 -->
					<div class='part3'>
						<!-- 详情 -->
						<careermind-detail-info :detail='careerMind.detail' v-show='!careerMind.editMode && careerMind.detail' @edit='careerMindEdit'></careermind-detail-info>
						<!-- 编辑 -->
						<careermind-edit-info v-show='careerMind.editMode' @on-submit='careerMindSubmit'></careermind-edit-info>
						<!-- 无数据 -->
						<careermind-no-data v-show='!careerMind.editMode && !careerMind.detail' @edit='careerMindEdit'></careermind-no-data>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// 个人信息
import UserdataDetailInfo from './components/user-data/detail-info';
import UserdataEditInfo from './components/user-data/edit-info';
// 基本信息
import BaseinfoDetailInfo from './components/base-info/detail-info';
import BaseinfoEditInfo from './components/base-info/edit-info';
import BaseinfoNoData from './components/base-info/no-data';
// 求职意向
import CareermindDetailInfo from './components/career-mind/detail-info';
import CareermindEditInfo from './components/career-mind/edit-info';
import CareermindNoData from './components/career-mind/no-data';
export default {
	name: 'edit-resume',
	components: {
		UserdataDetailInfo,
		UserdataEditInfo,
		BaseinfoDetailInfo,
		BaseinfoEditInfo,
		BaseinfoNoData,
		CareermindDetailInfo,
		CareermindEditInfo,
		CareermindNoData
	},
	data() {
		return {
			// 个人信息
			userData: {
				detail: null,
				editMode: true
			},
			// 基本信息
			baseInfo: {
				detail: null,
				editMode: false
			},
			// 求职意向
			careerMind: {
				detail: null,
				editMode: false
			}
		};
	},
	methods: {
		// 个人信息
		userDataEdit() {
			this.userData.editMode = true;
		},
		userDataSubmit(userData) {
			this.userData.detail = userData;
			this.userData.editMode = false;
		},
		// 基本信息
		baseInfoEdit() {
			this.baseInfo.editMode = true;
		},
		baseInfoSubmit(baseInfo) {
			this.baseInfo.detail = baseInfo;
			this.baseInfo.editMode = false;
		},
		// 求职意向
		careerMindEdit() {
			this.careerMind.editMode = true;
		},
		careerMindSubmit(careerMind) {
			this.careerMind.detail = careerMind;
			this.careerMind.editMode = false;
		},
	}
};

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
