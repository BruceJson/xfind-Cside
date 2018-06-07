<template>
	<div class='edit_box'>
		<Form ref='user_data_form' class='user_data_form' :model="formData" :rules="rules">
			<div class='form_box'>
				<div class='left'>
					<div class='select_img_area'>
						<img :src="avatarUrl" alt="">
						<p>更换头像</p>
						<input type="file" name="" @change='fileChange'>
					</div>
					<FormItem :label-width='0' prop="avatar">
					</FormItem>
				</div>
				<div class='right'>
					<Row>
						<Col span='12'>
						<FormItem :label-width='120' label='姓名' prop='name'>
							<Input v-model="formData.name" placeholder="请输入姓名"></Input>
						</FormItem>
						</Col>
						<Col span='12'>
						<FormItem :label-width='120' label='性别' prop='gender'>
							<RadioGroup v-model="formData.gender">
								<Radio label="0">
									<span>男</span>
								</Radio>
								<Radio label="1">
									<span>女</span>
								</Radio>
							</RadioGroup>
						</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span='12'>
						<FormItem :label-width='120' label='出生日期' prop='birth'>
							<DatePicker v-model='formData.birth' type="date" placeholder="选择日期" style="width: 100%"></DatePicker>
						</FormItem>
						</Col>
						<Col span='12'>
						<FormItem :label-width='120' label='参与工作年份' prop='jobStarttime'>
							<DatePicker v-model='formData.jobStarttime' type="date" placeholder="选择日期" style="width: 100%"></DatePicker>
						</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span='12'>
						<FormItem :label-width='120' label='手机' prop='mobile'>
							<Input v-model="formData.mobile" placeholder="请输入姓名"></Input>
						</FormItem>
						</Col>
						<Col span='12'>
						<FormItem :label-width='120' label='现居地区' prop='location'>
							<x-address v-model='formData.location'></x-address>
						</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span='12'>
						<FormItem :label-width='120' label='邮箱' prop='email'>
							<Input v-model="formData.email" placeholder="请输入姓名"></Input>
						</FormItem>
						</Col>
						<Col span='12'>
						<FormItem :label-width='120' label='目前状况' prop='marriage'>
							<Select v-model="formData.marriage">
								<Option value="0">已婚</Option>
								<Option value="1">未婚</Option>
							</Select>
						</FormItem>
						</Col>
					</Row>
				</div>
			</div>
			<flexbox justify-content='center' style='margin-top: 20px;'>
				<x-button type='xbtn-border-primary' width='105' height='40' :padding='[0,0]'>取消</x-button>
				<x-button style='margin-left: 30px;' type='xbtn-primary' width='105' height='40' :padding='[0,0]' @click.native='userDataSubmit'>确定</x-button>
			</flexbox>
		</Form>
	</div>
</template>
<script>
export default {
	name: 'userdata-edit-info',
	data() {
		return {
			avatarUrl: require('@imgs/default.png'),
			infoData: null,
			formData: {
				avatar: '',
				name: '',
				gender: '0',
				birth: '',
				jobStarttime: '',
				mobile: '',
				location: [],
				email: '',
				marriage: '',
			},
			rules: {
				avatar: [
					{ type: 'object', required: true, message: '请选择头像', trigger: 'blur' }
				],
				name: [
					{ required: true, message: '请输入姓名', trigger: 'blur' }
				],
				gender: [
					{ required: true, message: '请选择性别', trigger: 'blur' }
				],
				birth: [
					{ type: 'date', required: true, message: '请选择出生日期', trigger: 'blur' }
				],
				jobStarttime: [
					{ type: 'date', required: true, message: '请选择参与工作年份', trigger: 'blur' }
				],
				mobile: [
					{ type: 'string', pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, required: true, message: '请输入正确的手机号', trigger: 'blur' }
				],
				location: [
					{ type: "array", required: true, length: 3, message: '请选择现居地址' }
				],
				email: [
					{ type: 'email', required: true, message: '请输入正确的邮箱', trigger: 'blur' }
				],
				marriage: [
					{ required: true, message: '请选择目前状况', trigger: 'blur' }
				],
			}
		};
	},
	computed: {
		formatedFormData() {
			// avatar: '',
			// name: '',
			// gender: '0',
			// birth: '',
			// jobStarttime: '',
			// mobile: '',
			// location: [],
			// email: '',
			// marriage: '',
		}
	},
	methods: {
		userDataSubmit() {
			this.$refs['user_data_form'].validate((valid) => {
				if (valid) {
					this.$Message.success('form1 Success!');
					this.$emit('on-submit', this.formData);
				} else {
					this.$Message.error('form1 Fail!');
				}
			})
		},
		fileChange(e) {
			let file = e.target.files[0];
			this.formData.avatar = file;
			this.fileToBase64(file).then(base64 => {
				this.avatarUrl = base64;
			})
		},
		fileToBase64(file) {
			return new Promise(resolve => {
				let reader = new window.FileReader();
				reader.readAsDataURL(file);
				reader.onloadend = function() {
					let base64 = reader.result;
					resolve(base64);
				};
			});

		}
	}
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
