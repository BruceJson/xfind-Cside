<template>
	<div class='talent_list_page'>
		<div class='content_inner_width'>
			<tab class='table_tabs' v-model='curIndex'>
				<tab-item class='tab_item' tab-index='0'>收到的简历</tab-item>
				<tab-item class='tab_item' tab-index='1'>下载的简历</tab-item>
				<tab-item class='tab_item' tab-index='2'>收藏的简历</tab-item>
				<div class='info_content'>
					<span class='span ' style='font-size: 12px;margin-right: 15px;'>共70条</span>
					<Select class='' v-model="curPage" size='small' style="width:85px">
						<Option v-for="item in totalPage" :value="item" :key="item">{{ item + '/' + totalPage + '页'}}</Option>
					</Select>
				</div>
			</tab>
			<transition name='slide-fade' mode='out-in'>
				<component :is='currentComp'></component>
			</transition>
		</div>
	</div>
</template>
<script>
import GetResume from './components/get-resume';
import DownloadResume from './components/download-resume';
import CollectionResume from './components/collection-resume';
export default {
	name: 'resume-manager',
	data() {
		return {
			curIndex: '0',
			curPage: 1,
			totalPage: 10
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
@import '@pages/talent-list/talent-list.css';
.talent_list_page .table_tabs .info_content{
	padding: 0;
	align-items: center;
	padding-right: 20px;
}
</style>
