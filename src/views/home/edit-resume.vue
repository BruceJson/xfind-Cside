<template>
	<div class='edit_resume_page'>
		<div class='content_inner_width'>
			<Breadcrumb class='breadcrumbs' separator=">">
				<BreadcrumbItem to='/'>我的主页</BreadcrumbItem>
				<BreadcrumbItem v-for='(item, index) in $route.matched' :key='index' :to="item.path">{{item.meta.title || ''}}</BreadcrumbItem>
			</Breadcrumb>
			<div class='edit_box'>
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
							<img src="@imgs/home/7.png" alt="">
						</a>
						<div class='item'>
							<span>求职意向</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>工作经验</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>项目经历</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>教育经历</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>培训技能</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
						<div class='item'>
							<span>附加信息</span>
							<img src="@imgs/home/7.png" alt="">
						</div>
					</div>
				</div>
				<div class='right'>
					<!-- 个人信息 -->
					<div class='part1'>
						<!-- 详情 -->
						<div class='content_box'>
							<img class='col1' src="@imgs/test.png" alt="">
							<div class='col2'>
								<p class='line line1'>林晓光</p>
								<div class='line line2'>男
									<span class='cutter'>|</span>26岁(1992-09-06)
									<span class='cutter'>|</span>三年工作经验
									<span class='cutter'>|</span>南京
									<span class='cutter'>|</span>目前正在找工作</div>
								<div class='line line3'>
									<span class='span1'>邮箱：55555555@qq.com</span>
									<span class='span2'>手机：13333333333</span>
								</div>
							</div>
							<img class='edit_btn' src="@imgs/home/9.png" alt="">
						</div>
						<!-- 编辑 -->
						<div class='edit_box'>
							<Form ref='user_data_form' class='user_data_form' :model="personData.formData" :rules="personData.rules">
								<div class='form_box'>
									<div class='left'>
										<div class='select_img_area'>
											<img src="@imgs/default.png" alt="">
											<p>更换头像</p>
											<input type="file" name="">
										</div>
										<FormItem :label-width='0' prop="avatar">
										</FormItem>
									</div>
									<div class='right'>
										<Row>
											<Col span='12'>
											<FormItem :label-width='120' label='姓名' prop='name'>
												<Input v-model="personData.formData.name" placeholder="请输入姓名"></Input>
											</FormItem>
											</Col>
											<Col span='12'>
											<FormItem :label-width='120' label='性别' prop='gender'>
												<RadioGroup v-model="personData.formData.gender">
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
												<DatePicker v-model='personData.formData.birth' type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
											</FormItem>
											</Col>
											<Col span='12'>
											<FormItem :label-width='120' label='参与工作年份' prop='jobStarttime'>
												<DatePicker v-model='personData.formData.jobStarttime' type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
											</FormItem>
											</Col>
										</Row>
										<Row>
											<Col span='12'>
											<FormItem :label-width='120' label='手机' prop='mobile'>
												<Input v-model="personData.formData.mobile" placeholder="请输入姓名"></Input>
											</FormItem>
											</Col>
											<Col span='12'>
											<FormItem :label-width='120' label='现居地区' prop='location'>
												<x-address v-model='personData.formData.location'></x-address>
											</FormItem>
											</Col>
										</Row>
										<Row>
											<Col span='12'>
											<FormItem :label-width='120' label='邮箱' prop='email'>
												<Input v-model="personData.formData.mobile" placeholder="请输入姓名"></Input>
											</FormItem>
											</Col>
											<Col span='12'>
											<FormItem :label-width='120' label='目前状况' prop='marriage'>
												<Select v-model="personData.formData.marriage">
													<Option value="0">已婚</Option>
													<Option value="1">未婚</Option>
												</Select>
											</FormItem>
											</Col>
										</Row>
									</div>
								</div>
								<flexbox justify-content='center' style='margin-top: 40px;'>
									<x-button type='xbtn-border-primary' width='105' height='40' :padding='[0,0]'>取消</x-button>
									<x-button style='margin-left: 30px;' type='xbtn-primary' width='105' height='40' :padding='[0,0]' @click.native='userDataSubmit'>确定</x-button>
								</flexbox>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import EditFactory from './components/edit-factory';
import AddFactory from './components/add-factory';
export default {
	name: 'edit-resume',
	components: {
		EditFactory,
		AddFactory
	},
	data() {
		return {
			// 个人信息
			personData: {
				infoData: {

				},
				formData: {
					avatar: '',
					name: '',
					gender: '0',
					birth: '',
					jobStarttime: '',
					mobile: '',
					location: '',
					email: '',
					marriage: '',
				},
				rules: {
					avatar: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					name: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					gender: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					birth: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					jobStarttime: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					mobile: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					location: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					email: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
					marriage: [
						{ required: true, message: 'The avatar cannot be empty', trigger: 'blur' }
					],
				}
			}
		};
	},
	methods: {
		userDataSubmit() {
			this.$refs['user_data_form'].validate((valid) => {
				if (valid) {
					this.$Message.success('form1 Success!');
				} else {
					this.$Message.error('form1 Fail!');
				}
			})
		}
	}
};

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
