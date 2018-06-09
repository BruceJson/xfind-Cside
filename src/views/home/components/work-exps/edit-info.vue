<template>
    <div class='edit_box'>
        <div class='title'>
            <p>工作经验</p>
        </div>
        <Form ref='careermind_form' class='baseinfo_form' :model="formData" :rules="rules">
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='时间' prop='time'>
                    <DatePicker v-model="formData.time" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择时间" style="width: 100%"></DatePicker>
                </FormItem>
                </Col>
                <Col span='12'>
                <FormItem :label-width='120' label='工作类型' prop='workType'>
                    <Select v-model="formData.workType">
                        <Option value="0">已婚</Option>
                        <Option value="1">未婚</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='公司' prop='company'>
                    <Input v-model="formData.company" placeholder="请输入姓名"></Input>
                </FormItem>
                </Col>
                <Col span='12'>
                <FormItem :label-width='120' label='职位' prop='job'>
                    <Input v-model="formData.job" placeholder="请输入姓名"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='部门' prop='department'>
                    <Input v-model="formData.department" placeholder="请输入姓名"></Input>
                </FormItem>
                </Col>
                <Col span='12'>
                <FormItem :label-width='120' label='职能' prop='func'>
                    <Select v-model="formData.func">
                        <Option value="0">已婚</Option>
                        <Option value="1">未婚</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='行业' prop='industry'>
                    <Select v-model="formData.industry">
                        <Option value="0">已婚</Option>
                        <Option value="1">未婚</Option>
                    </Select>
                </FormItem>
                </Col>
                <Col span='12'>
                <FormItem :label-width='120' label='公司性质' prop='companyNature'>
                    <Select v-model="formData.companyNature">
                        <Option value="0">已婚</Option>
                        <Option value="1">未婚</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='公司规模' prop='companySize'>
                    <Select v-model="formData.companySize">
                        <Option value="0">已婚</Option>
                        <Option value="1">未婚</Option>
                    </Select>
                </FormItem>
                </Col>
                <Col span='12'>
                <FormItem :label-width='120' label='海外经历' prop='overseaExp'>
                    <Select v-model="formData.overseaExp">
                        <Option value="0">已婚</Option>
                        <Option value="1">未婚</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span='12' v-show='formData.salaryWriteType === "0"'>
                <FormItem :label-width='120' label='薪资待遇' prop='salary'>
                    <Select v-model="formData.homeRegist">
                        <Option value="0">已婚</Option>
                        <Option value="1">未婚</Option>
                    </Select>
                </FormItem>
                </Col>
                <Col span='12' v-show='formData.salaryWriteType === "1"'>
                <FormItem :label-width='120' label='薪资待遇' prop='salary'>
                    <Input v-model="formData.startSalary" style='width: 70px;'></Input>
                    <span style='margin: 0 20px;'>-</span>
                    <Input v-model="formData.endSarary" style='width: 70px;'></Input>
                </FormItem>
                </Col>
                <x-button type='xbtn-primary' height='40' style='margin-left: 40px;float: left' v-show='formData.salaryWriteType === "0"' @click.native='formData.salaryWriteType="1"'>自定义薪酬范围</x-button>
                <x-button type='xbtn-primary' height='40' style='margin-left: 40px;float: left' v-show='formData.salaryWriteType === "1"' @click.native='formData.salaryWriteType="0"'>选择薪酬范围</x-button>
            </Row>
            <Row>
                <Col span='24'>
                <FormItem :label-width='120' label='工作描述' prop='workDesc'>
                    <Input type='textarea' :rows='5' v-model="formData.workDesc" placeholder="请输入工作描述"></Input>
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
    name: 'workexp-edit-info',
    data() {
        return {
            avatarUrl: require('@imgs/default.png'),
            infoData: null,
            formData: {
                time: '',
                workType: '0',
                company: '0',
                job: '',
                department: '',
                func: '',
                industry: '',
                companyNature: '',
                companySize: '',
                overseaExp: '',
                salaryWriteType: '0', // 薪水选择方式 0：下拉框选择 1：手动输入
                salary: '0', // 下拉框选择薪水
                startSalary: '', // 手动填写最低薪水
                endSarary: '', // 手动填写最高薪水
                workDesc: ''
            },
            rules: {
                time: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                workType: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                company: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                job: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                department: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }]
            }
        }
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
            // 表单验证 开发时注释打开按需修改
            // this.$refs['careermind_form'].validate((valid) => {
            //  if (valid) {
            //      this.$Message.success('form1 Success!');
            //      this.$emit('on-submit', this.formData);
            //  } else {
            //      this.$Message.error('form1 Fail!');
            //  }
            // })
            this.$emit('on-submit', this.formData);
        }
    }
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
