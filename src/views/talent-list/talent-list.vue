<template>
	<div class='talent_list_page'>
		<div class='content_inner_width'>
			<tab class='table_tabs' v-model='curIndex'>
				<tab-item class='tab_item' tab-index='0'>邮件选材</tab-item>
				<tab-item class='tab_item' tab-index='1'>人才储备库</tab-item>
				<tab-item class='tab_item' tab-index='2'>员工档案</tab-item>
				<transition name='fade'>
					<div v-show='curIndex==="0"' class='info_content'>
						<span class='span'>选材库：</span>
						<span class='span span2'>
							<span>10</span>/50</span>
						<span class='span span3'>12312321323@qq.com</span>
						<x-button class='colect_btn' type='xbtn-border-primary' :padding='[10,20]'>收取并分析</x-button>
					</div>
				</transition>
			</tab>
			<transition name='slide-fade' mode='out-in'>
				<component :is='currentComp'></component>
			</transition>
		</div>
	</div>
</template>
<script>
import EmailList from './components/email-list';
import RecordList from './components/record-list';
import StoreList from './components/store-list';
export default {
	name: 'talent-list',
	data() {
		return {
			curIndex: '0'
		};
	},
	computed: {
		currentComp() {
			if (this.curIndex === '0') {
				return EmailList;
			} else if (this.curIndex === '1') {
				return StoreList;
			} else {
				return RecordList;
			}
		}
	}
};

</script>
<style scoped>
@import '@pages/talent-list/talent-list.css';

</style>
