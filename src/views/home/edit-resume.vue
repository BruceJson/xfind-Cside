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
							<img :src='baseInfo.detail ? activeImg:emptyImg' alt="">
						</a>
						<div class='item'>
							<span>求职意向</span>
							<img :src='careerMind.detail ? activeImg:emptyImg' alt="">
						</div>
						<div class='item'>
							<span>工作经验</span>
							<img :src='wordExps.details.length>0 ? activeImg:emptyImg' alt="">
						</div>
						<div class='item'>
							<span>项目经历</span>
							<img :src='projectExps.details.length>0 ? activeImg:emptyImg' alt="">
						</div>
						<div class='item'>
							<span>教育经历</span>
							<img :src='educationExps.details.length>0 ? activeImg:emptyImg' alt="">
						</div>
						<div class='item'>
							<span>证书培训</span>
							<img :src='training.details.length === 0 && certificate.details.length === 0 && lang.details.length === 0  ? emptyImg : activeImg' alt="">
						</div>
						<div class='item'>
							<span>附加信息</span>
							<img :src='other.details.length === 0 && enclosure.details.length === 0 ? emptyImg : activeImg' alt="">
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
					<!-- 工作经验 -->
					<div class='part4'>
						<!-- 详情列表 -->
						<workexps-detail-info-list :details='wordExps.details' v-show='wordExps.details.length > 0' @edit='workExpsEdit' @delete='deleteWorkExp'></workexps-detail-info-list>
						<!-- 无数据 -->
						<workexps-no-data v-show='!wordExps.editMode && wordExps.details.length === 0' @edit='workExpsEdit'></workexps-no-data>
						<!-- 编辑 -->
						<workexps-edit-info v-show='wordExps.editMode' @on-submit='workExpsSubmit'></workexps-edit-info>
					</div>
					<!-- 项目经历 -->
					<div class='part5'>
						<!-- 详情列表 -->
						<projectexps-detail-info-list :details='projectExps.details' v-show='projectExps.details.length > 0' @edit='projectExpsEdit' @delete='deleteProjectExp'></projectexps-detail-info-list>
						<!-- 无数据 -->
						<projectexps-no-data v-show='!projectExps.editMode && projectExps.details.length === 0' @edit='projectExpsEdit'></projectexps-no-data>
						<!-- 编辑 -->
						<projectexps-edit-info v-show='projectExps.editMode' @on-submit='projectExpsSubmit'></projectexps-edit-info>
					</div>
					<!-- 教育经历 -->
					<div class='part6'>
						<!-- 详情列表 -->
						<educationexps-detail-info-list :details='educationExps.details' v-show='educationExps.details.length > 0' @edit='educationExpsEdit' @delete='deleteEducationExp'></educationexps-detail-info-list>
						<!-- 无数据 -->
						<educationexps-no-data v-show='!educationExps.editMode && educationExps.details.length === 0' @edit='educationExpsEdit'></educationexps-no-data>
						<!-- 编辑 -->
						<educationexps-edit-info v-show='educationExps.editMode' @on-submit='educationExpsSubmit'></educationexps-edit-info>
					</div>
					<!-- 培训证书 -->
					<div class='part_title'>
						<p>培训证书</p>
					</div>
					<!-- 培训 -->
					<div class='part7'>
						<div class='subtitle'>
							<p style='color: #666;'>培训</p>
							<span style='color: #b8b8b8;cursor: pointer;' @click='trainingEdit'>+添加</span>
						</div>
						<!-- 详情列表 -->
						<training-detail-info-list :details='training.details' v-show='training.details.length > 0' @delete='deleteTraining'></training-detail-info-list>
						<!-- 无数据 -->
						<training-no-data v-show='!training.editMode && training.details.length === 0'></training-no-data>
						<!-- 编辑 -->
						<training-edit-info v-show='training.editMode' @on-submit='trainingSubmit'></training-edit-info>
					</div>
					<!-- 证书 -->
					<div class='part7'>
						<div class='subtitle'>
							<p style='color: #666;'>证书</p>
							<span style='color: #b8b8b8;cursor: pointer;' @click='certificateEdit'>+添加</span>
						</div>
						<!-- 详情列表 -->
						<certificate-detail-info-list :details='certificate.details' v-show='certificate.details.length > 0' @delete='deleteCertificate'></certificate-detail-info-list>
						<!-- 无数据 -->
						<certificate-no-data v-show='!certificate.editMode && certificate.details.length === 0'></certificate-no-data>
						<!-- 编辑 -->
						<certificate-edit-info v-show='certificate.editMode' @on-submit='certificateSubmit'></certificate-edit-info>
					</div>
					<!-- 语言 -->
					<div class='part7'>
						<div class='subtitle'>
							<p style='color: #666;'>语言</p>
							<span style='color: #b8b8b8;cursor: pointer;' @click='langEdit'>+添加</span>
						</div>
						<!-- 详情列表 -->
						<lang-detail-info-list :details='lang.details' v-show='lang.details.length > 0' @delete='deleteLang'></lang-detail-info-list>
						<!-- 无数据 -->
						<lang-no-data v-show='!lang.editMode && lang.details.length === 0'></lang-no-data>
						<!-- 编辑 -->
						<lang-edit-info v-show='lang.editMode' @on-submit='langSubmit'></lang-edit-info>
					</div>
					<!-- 附加信息 -->
					<div class='part_title'>
						<p>附加信息</p>
					</div>
					<!-- 其他 -->
					<div class='part7'>
						<div class='subtitle'>
							<p style='color: #666;'>其他</p>
							<span style='color: #b8b8b8;cursor: pointer;' @click='otherEdit'>+添加</span>
						</div>
						<!-- 详情列表 -->
						<other-detail-info-list :details='other.details' v-show='other.details.length > 0' @delete='deleteOther'></other-detail-info-list>
						<!-- 无数据 -->
						<other-no-data v-show='!other.editMode && other.details.length === 0'></other-no-data>
						<!-- 编辑 -->
						<other-edit-info v-show='other.editMode' @on-submit='otherSubmit'></other-edit-info>
					</div>
					<!-- 附件 -->
					<div class='part7'>
						<div class='subtitle'>
							<p style='color: #666;'>附件</p>
							<span style='color: #b8b8b8;cursor: pointer;' @click='enclosureEdit'>+添加</span>
						</div>
						<!-- 详情列表 -->
						<enclosure-detail-info-list :details='enclosure.details' v-show='enclosure.details.length > 0' @delete='deleteEnclosure'></enclosure-detail-info-list>
						<!-- 无数据 -->
						<enclosure-no-data v-show='!enclosure.editMode && enclosure.details.length === 0'></enclosure-no-data>
						<!-- 编辑 -->
						<enclosure-edit-info v-show='enclosure.editMode' @on-submit='enclosureSubmit'></enclosure-edit-info>
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
// 工作经验
import workexpsDetailInfoList from './components/work-exps/detail-info-list';
import workexpsDetailInfo from './components/work-exps/detail-info';
import workexpsEditInfo from './components/work-exps/edit-info';
import workexpsNoData from './components/work-exps/no-data';
// 项目经历
import ProjectexpsDetailInfoList from './components/project-exps/detail-info-list';
import ProjectexpsDetailInfo from './components/project-exps/detail-info';
import ProjectexpsEditInfo from './components/project-exps/edit-info';
import ProjectexpsNoData from './components/project-exps/no-data';
// 教育经历
import EducationexpsDetailInfoList from './components/education-exps/detail-info-list';
import EducationexpsDetailInfo from './components/education-exps/detail-info';
import EducationexpsEditInfo from './components/education-exps/edit-info';
import EducationexpsNoData from './components/education-exps/no-data';
// 培训
import TrainingDetailInfoList from './components/training/detail-info-list';
import TrainingDetailInfo from './components/training/detail-info';
import TrainingEditInfo from './components/training/edit-info';
import TrainingNoData from './components/training/no-data';
// 证书
import CertificateDetailInfoList from './components/certificate/detail-info-list';
import CertificateDetailInfo from './components/certificate/detail-info';
import CertificateEditInfo from './components/certificate/edit-info';
import CertificateNoData from './components/certificate/no-data';
// 语言
import LangDetailInfoList from './components/lang/detail-info-list';
import LangDetailInfo from './components/lang/detail-info';
import LangEditInfo from './components/lang/edit-info';
import LangNoData from './components/lang/no-data';
// 其他
import OtherDetailInfoList from './components/other/detail-info-list';
import OtherDetailInfo from './components/other/detail-info';
import OtherEditInfo from './components/other/edit-info';
import OtherNoData from './components/other/no-data';
// 附件
import EnclosureDetailInfoList from './components/enclosure/detail-info-list';
import EnclosureDetailInfo from './components/enclosure/detail-info';
import EnclosureEditInfo from './components/enclosure/edit-info';
import EnclosureNoData from './components/enclosure/no-data';
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
		CareermindNoData,
		workexpsDetailInfoList,
		workexpsDetailInfo,
		workexpsEditInfo,
		workexpsNoData,
		ProjectexpsDetailInfoList,
		ProjectexpsDetailInfo,
		ProjectexpsEditInfo,
		ProjectexpsNoData,
		EducationexpsDetailInfoList,
		EducationexpsDetailInfo,
		EducationexpsEditInfo,
		EducationexpsNoData,
		TrainingDetailInfoList,
		TrainingDetailInfo,
		TrainingEditInfo,
		TrainingNoData,
		CertificateDetailInfoList,
		CertificateDetailInfo,
		CertificateEditInfo,
		CertificateNoData,
		LangDetailInfoList,
		LangDetailInfo,
		LangEditInfo,
		LangNoData,
		OtherDetailInfoList,
		OtherDetailInfo,
		OtherEditInfo,
		OtherNoData,
		EnclosureDetailInfoList,
		EnclosureDetailInfo,
		EnclosureEditInfo,
		EnclosureNoData
	},
	data() {
		return {
			activeImg: require('@imgs/home/7.png'),
			emptyImg: require('@imgs/home/8.png'),
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
			},
			// 工作经验
			wordExps: {
				details: [],
				editMode: false
			},
			// 项目经历
			projectExps: {
				details: [],
				editMode: false
			},
			// 教育经历
			educationExps: {
				details: [],
				editMode: false
			},
			// 培训
			training: {
				details: [],
				editMode: false
			},
			// 证书
			certificate: {
				details: [],
				editMode: false
			},
			// 语言
			lang: {
				details: [],
				editMode: false
			},
			// 其他
			other: {
				details: [],
				editMode: false
			},
			// 附件
			enclosure: {
				details: [],
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
		// 工作经验
		workExpsEdit() {
			this.wordExps.editMode = true;
		},
		workExpsSubmit(wordExp) {
			this.wordExps.details.push(wordExp);
			this.wordExps.editMode = false;
		},
		deleteWorkExp(index) {
			this.wordExps.details.splice(index, 1);
		},
		// 项目经历
		projectExpsEdit() {
			this.projectExps.editMode = true;
		},
		projectExpsSubmit(prjectExp) {
			this.projectExps.details.push(prjectExp);
			this.projectExps.editMode = false;
		},
		deleteProjectExp(index) {
			this.projectExps.details.splice(index, 1);
		},
		// 教育经历
		educationExpsEdit() {
			this.educationExps.editMode = true;
		},
		educationExpsSubmit(educationExp) {
			this.educationExps.details.push(educationExp);
			this.educationExps.editMode = false;
		},
		deleteEducationExp(index) {
			this.educationExps.details.splice(index, 1);
		},
		// 培训
		trainingEdit() {
			this.training.editMode = true;
		},
		trainingSubmit(training) {
			this.training.details.push(training);
			this.training.editMode = false;
		},
		deleteTraining(index) {
			this.training.details.splice(index, 1);
		},
		// 证书
		certificateEdit() {
			this.certificate.editMode = true;
		},
		certificateSubmit(certificate) {
			this.certificate.details.push(certificate);
			this.certificate.editMode = false;
		},
		deleteCertificate(index) {
			this.certificate.details.splice(index, 1);
		},
		// 语言
		langEdit() {
			this.lang.editMode = true;
		},
		langSubmit(lang) {
			this.lang.details.push(lang);
			this.lang.editMode = false;
		},
		deleteLang(index) {
			this.lang.details.splice(index, 1);
		},
		// 其他
		otherEdit() {
			this.other.editMode = true;
		},
		otherSubmit(other) {
			this.other.details.push(other);
			this.other.editMode = false;
		},
		deleteOther(index) {
			this.other.details.splice(index, 1);
		},
		// 附件
		enclosureEdit() {
			this.enclosure.editMode = true;
		},
		enclosureSubmit(enclosure) {
			this.enclosure.details.push(enclosure);
			this.enclosure.editMode = false;
		},
		deleteEnclosure(index) {
			this.enclosure.details.splice(index, 1);
		}
	}
};

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
