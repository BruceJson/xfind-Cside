<template>
	<div class='setting_page'>
		<div class='content_inner_width'>
			<Breadcrumb class='breadcrumbs' separator=">">
				<BreadcrumbItem v-for='(item, index) in $route.matched' :key='index' :to="item.path">{{item.meta.title || ''}}</BreadcrumbItem>
			</Breadcrumb>
			<div class='setting_page_inner'>
				<tab class='tabs_box' v-model='curIndex'>
					<tab-item class='tab_item' tab-index='0'>
						<span>企业信息</span>
					</tab-item>
					<tab-item class='tab_item' tab-index='1'>
						<span>用户管理</span>
					</tab-item>
					<tab-item class='tab_item' tab-index='2'>
						<span>账户设置</span>
					</tab-item>
				</tab>
				<div class='right_part'>
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'setting',
	data() {
		console.log(this.$route);
		return {
			curIndex: this.getIndex()
		};
	},
	watch: {
		curIndex(newVal, oldVal) {
			switch (newVal) {
				case '0':
					this.$router.push('./company_info');
					break;
				case '1':
					this.$router.push('./user_manager');
					break;
				case '2':
					this.$router.push('./account_setting');
					break;
				default:
					break;
			}
		},

		$route(route) {
			switch (route.name) {
				case 'company_info':
					this.curIndex = '0';
					break;
				case 'user_manager':
					this.curIndex = '1';
					break;
				case 'create_user':
					this.curIndex = '1';
					break;
				case 'account_setting':
					this.curIndex = '2';
					break;
				default:
					break;
			}
		}
	},
	methods: {
		getIndex() {
			var index = '0';
			switch (this.$route.name) {
				case 'company_info':
					index = '0';
					break;
				case 'user_manager':
					index = '1';
					break;
				case 'create_user':
					index = '1';
					break;
				case 'account_setting':
					index = '2';
					break;
				default:
					break;
			}
			return index;
		}
	}
};

</script>
<style scoped>
@import '@pages/setting/setting.css';

</style>
