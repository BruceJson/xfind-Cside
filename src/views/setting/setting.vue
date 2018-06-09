<template>
	<div class='setting_page'>
		<div class='content_inner_width'>
			<div class='subtitle'>账号设置</div>
			<div class='setting_box'>
				<div class='avatar_box'>
					<img src="@imgs/test.png" alt="">
					<Upload action="//jsonplaceholder.typicode.com/posts/" style='margin-top: 20px;'>
						<div class='upload_btn'>
							<x-button type='xbtn-primary' width='70' height='26' :padding='[0,0]'>修改头像</x-button>
						</div>
					</Upload>
				</div>
				<Form :label-width="120">
					<Row>
						<Col span='11' offset='5'>
						<FormItem label='注册账号：'>
							<p style='height: 40px;border: 1px solid #A1A1A1;line-height: 38px;font-size: 14px;color: #333;padding-left: 15px;'>13333333333</p>
						</FormItem>
						</Col>
						<Col span='2' offset='1'>
						<x-button class='fl' type='xbtn-border-primary' width='70' height='40' :padding='[0,0]' @click.native='changeAccount'>修改</x-button>
						</Col>
					</Row>
					<Row>
						<Col span='11' offset='5'>
						<FormItem label='密码：'>
							<p style='height: 40px;border: 1px solid #A1A1A1;line-height: 38px;font-size: 14px;color: #333;padding-left: 15px;'>13333333333</p>
						</FormItem>
						</Col>
						<Col span='2' offset='1'>
						<x-button class='fl' type='xbtn-border-primary' width='70' height='40' :padding='[0,0]' @click.native='changePwd'>修改</x-button>
						</Col>
					</Row>
					<Row>
						<Col span='11' offset='5'>
						<FormItem label='邮箱：'>
							<p style='height: 40px;border: 1px solid #A1A1A1;line-height: 38px;font-size: 14px;color: #333;padding-left: 15px;'>13333333333</p>
						</FormItem>
						</Col>
						<Col span='2' offset='1'>
						<x-button class='fl' type='xbtn-border-primary' width='70' height='40' :padding='[0,0]' @click.native='changeEmail'>修改</x-button>
						</Col>
					</Row>
					<Row>
						<Col span='11' offset='5'>
						<FormItem label='绑定QQ：'>
							<a style='font-size: 14px;text-decoration: underline;color: #2288fe;display: inline-block;padding-top: 4px;'>绑定</a>
						</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span='11' offset='5'>
						<FormItem label='绑定微信：'>
							<a style='font-size: 14px;text-decoration: underline;color: #2288fe;display: inline-block;padding-top: 4px;'>绑定</a>
						</FormItem>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
		<change-account-dialog v-model='showAccountDialog'></change-account-dialog>
		<change-pwd-dialog v-model='showPwdDialog'></change-pwd-dialog>
		<change-email-dialog v-model='showEmailDialog'></change-email-dialog>
	</div>
</template>
<script>
import ChangeAccountDialog from './dialogs/change-account-dialog';
import ChangePwdDialog from './dialogs/change-password-dialog';
import ChangeEmailDialog from './dialogs/change-email-dialog';
export default {
	name: 'setting',
	components: {
		ChangeAccountDialog,
		ChangePwdDialog,
		ChangeEmailDialog
	},
	data() {
		return {
			showAccountDialog: false,
			showPwdDialog: false,
			showEmailDialog: false,
		};
	},
	methods: {
		changeAccount() {
			this.showAccountDialog = true;
		},
		changePwd() {
			this.showPwdDialog = true;
		},
		changeEmail() {
			this.showEmailDialog = true;
		},
	}
};

</script>
<style scoped>
@import '@pages/setting/setting.css';

</style>
