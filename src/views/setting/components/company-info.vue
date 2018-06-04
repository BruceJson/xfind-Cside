<template>
	<div class='company_info_page'>
		<div class='part'>
			<div class='subtitle_header'>基本信息</div>
			<Form class='company_info_form' ref="form1" :model="formValidate" :rules="ruleValidate" :label-width="120">
				<Row>
					<Col span='10'>
					<FormItem label="企业名称" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入企业名称"></Input>
					</FormItem>
					</Col>
					<Col span='10'>
					<FormItem label="企业简称" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入企业简称"></Input>
					</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span='10'>
					<FormItem label="企业类型" prop="name">
						<Select v-model="formValidate.city" placeholder="请选择企业类型">
							<Option value="beijing">New York</Option>
							<Option value="shanghai">London</Option>
							<Option value="shenzhen">Sydney</Option>
						</Select>
					</FormItem>
					</Col>
					<Col span='10'>
					<FormItem label="企业规模" prop="name">
						<Select v-model="formValidate.city" placeholder="请选择企业规模">
							<Option value="beijing">New York</Option>
							<Option value="shanghai">London</Option>
							<Option value="shenzhen">Sydney</Option>
						</Select>
					</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span='10'>
					<FormItem label="所属行业1" prop="name">
						<Select v-model="formValidate.city" placeholder="请选择所属行业">
							<Option value="beijing">New York</Option>
							<Option value="shanghai">London</Option>
							<Option value="shenzhen">Sydney</Option>
						</Select>
					</FormItem>
					</Col>
					<Col span='10'>
					<FormItem label="所属行业2" prop="name">
						<Select v-model="formValidate.city" placeholder="请选择所属行业">
							<Option value="beijing">New York</Option>
							<Option value="shanghai">London</Option>
							<Option value="shenzhen">Sydney</Option>
						</Select>
					</FormItem>
					</Col>
				</Row>
				<FormItem label="企业logo" prop="name">
					<Upload action="//jsonplaceholder.typicode.com/posts/">
						<Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
						<span style='margin-left: 15px;'>请上传小于10M的图片（支持GIF、JPG、PNG等）</span>
					</Upload>
				</FormItem>
				<FormItem label="营业执照" prop="mail">
					<Upload action="//jsonplaceholder.typicode.com/posts/">
						<Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
						<span style='margin-left: 15px;'>请上传小于10M的图片（支持GIF、JPG、PNG等）</span>
					</Upload>
				</FormItem>
				<Row>
					<Col span='10'>
					<FormItem label="企业地址" prop="mail">
						<x-address></x-address>
					</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span='20'>
					<FormItem label=" ">
						<Input v-model="formValidate.name" placeholder="详细地址"></Input>
					</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span='20'>
					<FormItem label="企业简介" prop="mail">
						<Input type='textarea' :rows='6' v-model="formValidate.name" placeholder="请输入公司介绍"></Input>
					</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span='20'>
					<FormItem label="企业网址">
						<Input v-model="formValidate.name" placeholder="请输入公司网址"></Input>
					</FormItem>
					</Col>
				</Row>
			</Form>
		</div>
		<div class='part'>
			<div class='subtitle_header'>企业风采</div>
			<Form class='company_info_form' ref="form2" :model="formValidate" :rules="ruleValidate" :label-width="0" style='padding-left: 35px;'>
				<Row>
					<Col span='8'>
					<FormItem label="" prop="name">
						<Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
							<div style="padding: 20px 0">
								<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
								<p>上传企业照片</p>
							</div>
						</Upload>
						<p>请上传小于10M的图片（支持GIF、JPG、PNG等）</p>
					</FormItem>
					</Col>
				</Row>
			</Form>
		</div>
		<div class='part'>
			<div class='subtitle_header'>招聘联系人信息</div>
			<Form class='company_info_form' ref="form3" :model="formValidate" :rules="ruleValidate" :label-width="120">
				<Row>
					<Col span='10'>
					<FormItem label="联系人" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
					</FormItem>
					</Col>
					<Col span='10'>
					<FormItem label="办公电话" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入办公电话"></Input>
					</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span='10'>
					<FormItem label="联系手机" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入手机号"></Input>
					</FormItem>
					</Col>
					<Col span='10'>
					<FormItem label="公司邮箱" prop="name">
						<Input v-model="formValidate.name" placeholder="请输入公司邮箱"></Input>
					</FormItem>
					</Col>
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
	name: 'company-info',
	data() {
		return {
			formValidate: {
				name: '',
				mail: '',
				city: '',
				gender: '',
				interest: [],
				date: '',
				time: '',
				desc: ''
			},
			ruleValidate: {
				name: [
					{ required: true, message: 'The name cannot be empty', trigger: 'blur' }
				],
				mail: [
					{ required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
					{ type: 'email', message: 'Incorrect email format', trigger: 'blur' }
				],
				city: [
					{ required: true, message: 'Please select the city', trigger: 'change' }
				],
				gender: [
					{ required: true, message: 'Please select gender', trigger: 'change' }
				],
				interest: [
					{ required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
					{ type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
				],
				date: [
					{ required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
				],
				time: [
					{ required: true, type: 'string', message: 'Please select time', trigger: 'change' }
				],
				desc: [
					{ required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
					{ type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
				]
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
			this.$refs['form3'].validate((valid) => {
				if (valid) {
					this.$Message.success('form3 Success!');
				} else {
					this.$Message.error('form3 Fail!');
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
