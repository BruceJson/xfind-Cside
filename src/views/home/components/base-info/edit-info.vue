<template>
	<div class='edit_box'>
		<div class='title'>
			<p>基本信息</p>
		</div>
		<Form ref='baseinfo_form' class='baseinfo_form' :model="formData">
			<Row>
				<Col span='12'>
				<FormItem :label-width='120' label='户籍'>
					<Select v-model="formData.homeRegist">
						<Option value="0">已婚</Option>
						<Option value="1">未婚</Option>
					</Select>
				</FormItem>
				</Col>
				<Col span='11'>
				<FormItem :label-width='120' label='身高'>
					<Input v-model="formData.tall" placeholder="请输入姓名"></Input>
				</FormItem>
				</Col>
				<Col span='1' style='padding-top: 12px;text-align: right;'>cm</Col>
			</Row>
			<Row>
				<Col span='12'>
				<FormItem :label-width='120' label='婚姻状况'>
					<Select v-model="formData.marrage">
						<Option value="0">已婚</Option>
						<Option value="1">未婚</Option>
					</Select>
				</FormItem>
				</Col>
				<Col span='12'>
				<FormItem :label-width='120' label='政治面貌'>
					<Select v-model="formData.politicalStatus">
						<Option value="0">已婚</Option>
						<Option value="1">未婚</Option>
					</Select>
				</FormItem>
				</Col>
			</Row>
			<Row>
				<Col span='24'>
				<FormItem :label-width='120' label='家庭住址'>
					<Input v-model="formData.location" placeholder="请输入姓名"></Input>
				</FormItem>
				</Col>
			</Row>
			<Row>
				<Col span='24'>
				<FormItem :label-width='120' label='个人主页'>
					<Input v-model="formData.website" placeholder="请输入姓名"></Input>
				</FormItem>
				</Col>
			</Row>
			<flexbox justify-content='center' style='margin-top: 20px;'>
				<x-button type='xbtn-border-primary' width='105' height='40' :padding='[0,0]'>取消</x-button>
				<x-button style='margin-left: 30px;' type='xbtn-primary' width='105' height='40' :padding='[0,0]' @click.native='userDataSubmit'>确定</x-button>
			</flexbox>
		</Form>
	</div>
</template>
<script>
export default {
	name: 'baseinfo-edit-info',
	data() {
		return {
			avatarUrl: require('@imgs/default.png'),
			infoData: null,
			formData: {
				homeRegist: '0',
				tall: '',
				marrage: '0',
				politicalStatus: '0',
				location: '',
				website: ''
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
			this.$emit('on-submit', this.formData);
		}
	}
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
