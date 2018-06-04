<template>
	<div class='company_info_page'>
		<div class='part'>
			<div class='subtitle_header'>添加信息</div>
			<Form class='company_info_form' ref="form1" :model="formValidate" :rules="ruleValidate" :label-width="120">
				<Row>
					<Col span='10'>
					<FormItem label="用户名" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入用户名"></Input>
					</FormItem>
					</Col>
					<Col span='10'>
					<FormItem label="公司邮箱" prop="mail">
						<Input v-model="formValidate.mail" placeholder="请输入公司邮箱"></Input>
					</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span='10'>
					<FormItem label="设置密码" prop="pwd1">
						<Input type='password' v-model="formValidate.pwd1" placeholder="请输入密码"></Input>
					</FormItem>
					</Col>
					<Col span='10'>
					<FormItem label="密码确认" prop="pwd2">
						<Input type='password' v-model="formValidate.pwd2" placeholder="请输入密码"></Input>
					</FormItem>
					</Col>
				</Row>
			</Form>
		</div>
		<div class='part'>
			<div class='subtitle_header'>用户权限</div>
			<Form class='company_info_form' ref="form3" :model="formValidate" :rules="ruleValidate" :label-width="120" style='padding: 24px 35px;'>
				<Row>
					<Checkbox v-model="auths.auth1">职位管理</Checkbox>
					<Checkbox v-model="auths.auth2">简历管理</Checkbox>
					<Checkbox v-model="auths.auth3">企业人才库</Checkbox>
					<Checkbox v-model="auths.auth4">消息</Checkbox>
					<Checkbox v-model="auths.auth5">收藏夹</Checkbox>
				</Row>
			</Form>
		</div>
		<flexbox justify-content='center' align-items='center' style='margin-bottom: 45px;'>
			<x-button type='xbtn-primary' width='150' height='40' @click.native='handleSubmit'>保存</x-button>
			<x-button type='xbtn-border-primary' width='150' height='40' style='margin-left: 75px;'>提交认证申请</x-button>
		</flexbox>
	</div>
</template>
<script>
export default {
	name: 'create-user',
	data() {
		return {
			formValidate: {
				name: '',
				mail: '',
				pwd1: '',
				pwd2: ''
			},
			ruleValidate: {
				name: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				mail: [
					{ required: true, message: '请输入邮箱', trigger: 'blur' },
					{ type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
				],
				pwd1: [
					{ required: true, message: '请输入密码', trigger: 'change' }
				],
				pwd2: [
					{ required: true, message: '请输入密码', trigger: 'change' }
				]
			},
			auths: {
				auth1: false,
				auth2: false,
				auth3: false,
				auth4: false,
				auth5: false
			}
		}
	},
	methods: {
		handleSubmit() {
			this.$refs['form1'].validate((valid) => {
				if (valid) {
					this.$Message.success('form1 Success!');
				} else {
					this.$Message.error('form1 Fail!');
				}
			})
		},
		handleReset(name) {
			this.$refs[name].resetFields();
		}
	}
};

</script>
<style scoped>
@import '@pages/setting/company-info.css';

</style>
