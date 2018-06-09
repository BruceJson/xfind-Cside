<template>
    <div class='edit_box'>
        <Form ref='careermind_form' class='baseinfo_form' :model="formData" :rules="rules">
            <Row>
                <Col span='12'>
                <FormItem :label-width='120' label='获取时间' prop='time'>
                    <DatePicker v-model="formData.time" format="yyyy/MM/dd" type="date" placement="bottom-end" placeholder="请选择时间" style="width: 100%"></DatePicker>
                </FormItem>
                </Col>
                <Col span='12'>
                <FormItem :label-width='120' label='证书名称' prop='name'>
                    <Input v-model="formData.name" placeholder="请输入姓名"></Input>
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
    name: 'certificate-edit-info',
    data() {
        return {
            avatarUrl: require('@imgs/default.png'),
            infoData: null,
            formData: {
                time: '',
                name: '0'
            },
            rules: {
                time: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }],
                name: [{
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
