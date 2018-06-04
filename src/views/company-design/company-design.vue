<template>
	<div class='company_design_page'>
		<div class='content_inner_width'>
			<div class='list'>
				<div class='item' v-for='(item, index) in list' :key='index' :style='{ backgroundImage : "url("+item.bg+ ")"}'>
					<p class='part1'>{{item.title}}</p>
					<div class='part2' :html='item.content'>一键导入新职员数据，让人才档案一目了然。
						<br>求职简历职能生成入职表，让人才档案管理轻松快捷</div>
					<x-button class='btn' :is-link='true' :to='item.link' width='70' height='35' :padding='[0,0]'>进入</x-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'company-design',
	data() {
		return {
			list: [{
				title: '表格定制',
				content: '一键导入新职员数据，让人才档案一目了然。<br>求职简历职能生成入职表，让人才档案管理轻松快捷',
				link: '',
				bg: require('@imgs/company-design/bg1.png')
			}, {
				title: '招聘专题定制申请',
				content: '专属企业的招聘版面，按需定制的人才委培，人才全锁定快培养，让你招聘无忧',
				link: '',
				bg: require('@imgs/company-design/bg2.png')
			}, {
				title: '人才市场供给分析',
				content: '人才市场行情实时掌握，招聘有的放矢易如反掌',
				link: '',
				bg: require('@imgs/company-design/bg3.png')
			}, {
				title: '定制测评',
				content: '专属企业的“入学考试”，人才选拔、考核晋升有理有据',
				link: '',
				bg: require('@imgs/company-design/bg4.png')
			}, {
				title: '跨平台简历匹配扫描',
				content: '专属企业的招聘版面，按需定制的人才委培，人才全锁定快培养，让你招聘无忧',
				link: 'platform_search',
				bg: require('@imgs/company-design/bg5.png')
			}]
		}
	}
};

</script>
<style>
@import '@pages/company-design/company-design.css';

</style>
