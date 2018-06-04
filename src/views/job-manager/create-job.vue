<template>
	<div class='create_job_page'>
		<div class='content_inner_width'>
			<Breadcrumb class='breadcrumbs' separator=">">
				<BreadcrumbItem to="">职位管理</BreadcrumbItem>
				<BreadcrumbItem to="">企业信息</BreadcrumbItem>
				<BreadcrumbItem to="">发布新职位</BreadcrumbItem>
			</Breadcrumb>
			<div class='create_job_subtitle'>发布新职位</div>
			<div class='create_job_form_box'>
				<div class='left'>
					<Form class='company_info_form' ref="form1" :model="formValidate" :rules="ruleValidate" :label-width="100">
						<Row>
							<FormItem label="职位模板" prop="model">
								<Select v-model="formValidate.model" placeholder="请选择企业类型">
									<Option value="beijing">New York</Option>
									<Option value="shanghai">London</Option>
									<Option value="shenzhen">Sydney</Option>
								</Select>
							</FormItem>
						</Row>
						<Row>
							<FormItem label="职位种类" prop="type">
								<RadioGroup v-model="formValidate.type" size='large'>
									<Radio label="全职">
										<span>全职</span>
									</Radio>
									<Radio label="兼职">
										<span>兼职</span>
									</Radio>
									<Radio label="实习">
										<span>实习</span>
									</Radio>
								</RadioGroup>
							</FormItem>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="职位名称" prop="jobname">
								<Input type='password' v-model="formValidate.jobname" placeholder="请输入密码"></Input>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='22'>
							<FormItem label="职能" prop="workType">
								<div class='work_typelist_content'>
									<div class='work_typelist_box' @click='showWorkList=true'>
										<div v-for='(item, index) in formValidate.workType' :key='index' class="ivu-tag ivu-tag-checked">
											<span class="ivu-tag-text">{{item.name}}</span>
											<i class="ivu-icon ivu-icon-ios-close-empty" @click.stop='workTypeItemClose(index)'></i>
										</div>
									</div>
									<work-type-list v-model='showWorkList' :list='formValidate.workType' @change='workTypeListChange'></work-type-list>
								</div>
								<!-- <Select v-model="formValidate.workType" placeholder='请选择您要发布的职位类型' multiple @on-change='workTypeChange'>
									<Option v-for="item in workTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								</Select> -->
							</FormItem>
							</Col>
							<Col span='2' style='padding-top: 10px;text-align: center;'>
							<span>{{formValidate.workType.length}}/3</span>
							</Col>
						</Row>
						<Row>
							<Col span='16'>
							<FormItem label="薪资待遇" prop="salary">
								<Select v-model="formValidate.salary" placeholder='请选择薪资待遇'>
									<Option v-for="item in salaryList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								</Select>
							</FormItem>
							</Col>
							<Col span='8' style='display:flex;justify-content: flex-end;'>
							<x-button type='xbtn-primary' height='40'>自定义薪酬范围</x-button>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="职位描述" prop="jobDesc">
								<Input type='textarea' :rows='10' v-model="formValidate.jobDesc" placeholder="请输入职位描述"></Input>
								<p style='line-height: 1.1;margin-top: 3px;color: #C2C2C2;'>请输入最能代表该职位特点的关键词，最多10个，每个不超过6个中文或12个英文，关键词之间用空格隔开。</p>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="职位关键字">
								<Input v-model="formValidate.jobKeys" placeholder="请输入职位关键字"></Input>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="福利标签">
								<Tag class='tag_item' v-for="(item,index) in formValidate.tagList" :key="index" :name="item.name" type='border' color='#008CEE' closable @on-close="handleCloseTag(index)">{{ item.name }}</Tag>
								<x-button class='inline_block vertical_middle' style='margin: 2px 4px 2px 0;' type="xbtn-primary" height='30' width='80' :padding='[0,0]' @click.native="handleAddTag">添加标签</x-button>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='18'>
							<FormItem label="工作地址" prop='address'>
								<x-address v-model='formValidate.address'></x-address>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label=" ">
								<Input v-model="formValidate.addressDetail" placeholder="请输入详细地址"></Input>
							</FormItem>
							</Col>
						</Row>
						<div class='create_job_subtitle'>任职要求</div>
						<Row>
							<Col span='10'>
							<FormItem label="人数">
								<Input v-model="formValidate.number" placeholder="默认若干"></Input>
							</FormItem>
							</Col>
							<Col span='2' style='text-align: center;padding-top: 10px;'>
							<span>人</span>
							</Col>
							<Col span='12'>
							<FormItem label="工作年限">
								<Select v-model="formValidate.workYear" placeholder="默认若干">
									<Option value="beijing">New York</Option>
									<Option value="shanghai">London</Option>
									<Option value="shenzhen">Sydney</Option>
								</Select>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='12'>
							<FormItem label="年龄">
								<Row>
									<Col span='10'>
									<Input v-model="formValidate.ageFrom" placeholder="默认若干"></Input>
									</Col>
									<Col span='2' class='align_center'>~</Col>
									<Col span='10'>
									<Input v-model="formValidate.ageTo" placeholder="默认若干"></Input>
									</Col>
								</Row>
							</FormItem>
							</Col>
							<Col span='12'>
							<FormItem label="性别">
								<Select v-model="formValidate.gender" placeholder="默认不限">
									<Option value="beijing">男</Option>
									<Option value="shanghai">女</Option>
								</Select>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='12'>
							<FormItem label="学历">
								<Select v-model="formValidate.education" placeholder="默认不限">
									<Option value="beijing">本科</Option>
									<Option value="shanghai">专科</Option>
								</Select>
							</FormItem>
							</Col>
							<Col span='12' style='padding-left: 30px;padding-top: 10px;'>
							<Checkbox v-model="formValidate.check1">全日制</Checkbox>
							<Checkbox v-model="formValidate.check2">985/211</Checkbox>
							<Checkbox v-model="formValidate.check3">含以上</Checkbox>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="年龄">
								<Row>
									<Col span='11'>
									<Input v-model="formValidate.ageFrom" placeholder="请选择"></Input>
									</Col>
									<Col span='2' class='align_center'>-</Col>
									<Col span='11'>
									<Input v-model="formValidate.ageTo" placeholder="请选择程度"></Input>
									</Col>
								</Row>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="专业">
								<Select v-model="formValidate.platformList" placeholder='选择对口专业，最多选5个' multiple @on-change='platformListChange'>
									<Option v-for="item in platformList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								</Select>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="其他要求">
								<Input type='textarea' :rows='10' v-model="formValidate.other" placeholder="请输入其他要求"></Input>
							</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span='24'>
							<FormItem label="简历接收设置">
								<Checkbox v-model="formValidate.check4">将应聘简历同时转发到邮箱中</Checkbox>
							</FormItem>
							</Col>
						</Row>
						<flexbox justify-content='center' style='margin-bottom: 52px;'>
							<x-button type='xbtn-border-primary' width='130' height='40' :padding='[0,0]' @click.native='saveModelClick'>保存为职位模板</x-button>
							<x-button style='margin-left: 25px;' type='xbtn-primary' width='130' height='40' :padding='[0,0]' @click.native='submitClick'>确认并发布</x-button>
							<x-button style='margin-left: 25px;' type='xbtn-primary' width='130' height='40' :padding='[0,0]' @click.native='previewClick'>预览</x-button>
						</flexbox>
					</Form>
				</div>
				<div class='right'>
					<div class='column_line'>
						<div class='point'></div>
					</div>
					<div class='right_form'>
						<div class='right_form_subtitle'>
							<p class='p1'>简历匹配度设计</p>
							<div class='p2'></div>
							<span class='p3'>说明</span>
						</div>
						<p style='font-size: 14px;color: #666;line-height: 1.8;margin-bottom: 25px;'>系统将根据您的要求，计算出简历匹配程度。滑动按钮选择以下信息的重要程度。</p>
						<Form ref="form2" :model="formValidate" :rules="ruleValidate" :label-width="120">
							<Row v-for='(item, index) in resumeMatchList' :key='index'>
								<Col span='22'>
								<FormItem :label="item.label">
									<Slider v-model="item.value" :step="25"></Slider>
								</FormItem>
								</Col>
								<Col span='2' style='padding-top: 10px;text-align:right;color:#008CEE;'>
								<span>{{getSlideLevel(item.value)}}</span>
								</Col>
							</Row>
							<flexbox justify-content='center'>
								<x-button type='xbtn-border-primary' width='105' height='40' :padding='[0,0]'>确定</x-button>
								<x-button style='margin-left: 25px;' type='xbtn-primary' width='105' height='40' :padding='[0,0]'>重新选择</x-button>
							</flexbox>
						</Form>
					</div>
				</div>
			</div>
		</div>
		<create-model-dialog v-model='showCreateModelDialog'></create-model-dialog>
	</div>
</template>
<script>
import JobList from './components/job-list';
import ModelList from './components/model-list';
import WorkTypeList from './components/work-type-list';
import CreateModelDialog from './dialogs/create-model';
export default {
	name: 'create-job',
	components: { WorkTypeList, CreateModelDialog },
	data() {
		return {
			showCreateModelDialog: false,
			showWorkList: false,
			salaryList: [{
				value: '1',
				label: '月薪范围1'
			}, {
				value: '2',
				label: '月薪范围2'
			}, {
				value: '3',
				label: '月薪范围3'
			}, {
				value: '4',
				label: '月薪范围4'
			}],
			platformList: [{
				value: '1',
				label: '专业1'
			}, {
				value: '2',
				label: '专业2'
			}, {
				value: '3',
				label: '专业3'
			}, {
				value: '4',
				label: '专业4'
			}, {
				value: '5',
				label: '专业5'
			}, {
				value: '6',
				label: '专业6'
			}, {
				value: '7',
				label: '专业7'
			}, {
				value: '8',
				label: '专业8'
			}],
			formValidate: {
				model: '',
				type: '',
				jobname: '',
				workType: [{
					name: '计算机硬件'
				}, {
					name: '计算机软件'
				}],
				salary: '',
				jobDesc: '',
				jobKeys: '',
				tagList: [{
					name: '标签1'
				}, {
					name: '标签2'
				}],
				address: [],
				addressDetail: '',
				number: '',
				workYear: '',
				ageFrom: '',
				ageTo: '',
				gender: '',
				education: '',
				check1: false,
				check2: false,
				check3: false,
				platformList: ['1', '2', '3'],
				other: '',
				check4: false
			},
			ruleValidate: {
				model: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				type: [
					{ required: true, message: '请选择职位种类', trigger: 'blur' }
				],
				jobname: [
					{ required: true, message: '请选择职位种类', trigger: 'blur' }
				],
				workType: [
					{ required: true, message: '请选择职能', trigger: 'change' }
				],
				salary: [
					{ required: true, message: '请选择薪资待遇', trigger: 'change' }
				],
				jobDesc: [
					{ required: true, message: '请填写工作介绍', trigger: 'change' }
				],
				address: [
					{ required: true, message: '请选择工作地址', trigger: 'change' }
				]
			},
			resumeMatchList: [{
				label: '年龄',
				value: 0
			}, {
				label: '毕业院校',
				value: 25
			}, {
				label: '学历',
				value: 50
			}, {
				label: '专业',
				value: 75
			}, {
				label: '职能',
				value: 100
			}, {
				label: '薪资',
				value: 0
			}, {
				label: '工作年限',
				value: 25
			}, {
				label: '工作地点',
				value: 50
			}, {
				label: '语言',
				value: 75
			}, {
				label: '行业',
				value: 100
			}],
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
		workTypeChange(value) {
			console.log(value);
			if (this.formValidate.workType.length > 3) {
				this.formValidate.workType = this.formValidate.workType.slice(0, 3);
			}
		},
		platformListChange(value) {
			console.log(value);
			if (this.formValidate.platformList.length > 5) {
				this.formValidate.platformList = this.formValidate.platformList.slice(0, 5);
			}
		},
		handleCloseTag(index) {
			this.formValidate.tagList.splice(index, 1);
		},
		handleAddTag() {
			this.formValidate.tagList.push({
				name: '标签' + (this.formValidate.tagList.length + 1)
			});
		},
		handleSubmit() {
			return new Promise((resolve, reject) => {
				this.$refs['form1'].validate((valid) => {
					if (valid) {
						this.$Message.success('form1 Success!');
						resolve();
					} else {
						this.$Message.error('form1 Fail!');
						reject();
					}
				})
			});

		},
		handleReset(name) {
			this.$refs[name].resetFields();
		},
		getSlideLevel(value) {
			if (value === 0) {
				return '极低';
			} else if (value <= 25) {
				return '低';
			} else if (value <= 50) {
				return '中';
			} else if (value <= 75) {
				return '高';
			} else if (value <= 100) {
				return '极高';
			}
		},

		workTypeListChange(arr) {
			this.formValidate.workType = arr;
		},
		workTypeItemClose(index) {
			this.formValidate.workType.splice(index, 1);
		},

		saveModelClick() {
			this.handleSubmit().then(() => {
				this.showCreateModelDialog = true;
			});
		},
		submitClick() {
			this.handleSubmit();
		},
		previewClick() {
			this.handleSubmit();
		},
	}
};

</script>
<style scoped>
@import '@pages/job-manager/create-job.css';

</style>
