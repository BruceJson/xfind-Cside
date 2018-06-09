<template>
    <div class='edit_box'>
        <div class='title'>
            <p>教育经历</p>
        </div>
        <Form ref='careermind_form' class='baseinfo_form' :model="formData" :rules="rules">
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='时间' prop='time'>
                    <DatePicker v-model="formData.time" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择时间" style="width: 100%"></DatePicker>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='学校' prop='school'>
                    <Input v-model="formData.school" placeholder="请输入姓名"></Input>
                </FormItem>
                </Col>
                <Col span='12'>
                <FormItem :label-width='120' label='专业' prop='major'>
                    <Input v-model="formData.major" placeholder="请输入姓名"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='学历' prop='education'>
                    <Input v-model="formData.education" placeholder="请输入姓名"></Input>
                </FormItem>
                </Col>
                <Col span='12' style='padding-top: 10px;padding-left: 50px;'>
                <Checkbox v-model="formData.learnType">全日制</Checkbox>
                <RadioGroup v-model="formData.schoolType">
                    <Radio label="0">985</Radio>
                    <Radio label="1">211</Radio>
                </RadioGroup>
                </Col>
            </Row>
            <Row>
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
                <Col span='24'>
                <FormItem :label-width='120' label='在校情况' prop='schoolDesc'>
                    <Input type='textarea' :rows='5' v-model="formData.schoolDesc" placeholder="请输入工作描述"></Input>
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
    name: 'projectexps-edit-info',
    data() {
        return {
            avatarUrl: require('@imgs/default.png'),
            infoData: null,
            formData: {
                time: '',
                school: '0',
                major: '0',
                education: '',
                learnType: '',
                schoolType: '',
                overseaExp: '',
                schoolDesc: ''
            },
            rules: {
                time: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                school: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                major: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                education: [{
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
