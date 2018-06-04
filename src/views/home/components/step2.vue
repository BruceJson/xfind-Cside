<template>
    <div>
        <Form ref="step2_form" :model="formData" :label-width="120" :rules='ruleValidate'>
            <FormItem label="企业logo" prop="logo">
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="ghost" icon="ios-cloud-upload-outline">选择文件</Button>
                    <span>请上传小于10M的图片(支持GIF、JPG、PNG等)</span>
                </Upload>
            </FormItem>
            <FormItem label="营业执照" prop="license">
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="ghost" icon="ios-cloud-upload-outline">选择文件</Button>
                    <span>请上传小于10M的图片(支持GIF、JPG、PNG等)</span>
                </Upload>
            </FormItem>
            <FormItem label="企业地址" prop="address">
                <x-address v-model='formData.address'></x-address>
            </FormItem>
            <FormItem label="企业简介" prop="desc">
                <Input type='textarea' v-model="formData.desc" placeholder="企业简介" :autosize="{minRows: 4,maxRows: 5}"></Input>
            </FormItem>
            <FormItem label="企业网址">
                <Input v-model="formData.desc" placeholder="企业网址"></Input>
            </FormItem>
        </Form>
    </div>

</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin'
export default {
    name: 'perfect-info-dialog',
    data() {
        return {
            formData: {
                logo: '',
                license: '',
                address: [],
                desc: '',
                link: ''
            },
            ruleValidate: {
                logo: [{
                    required: true,
                    message: '请上传公司logo',
                    trigger: 'change'
                }],
                license: [{
                    required: true,
                    message: '请上传公司营业执照',
                    trigger: 'change'
                }],
                address: [{
                    required: true,
                    message: '请选择公司地址',
                    type: 'array',
                    min: 3,
                    trigger: 'change'
                }],
                desc: [{
                    required: true,
                    message: '请填写公司简介'
                }],

            }
        };
    },
    methods: {
        validate() {
            this.$refs.step2_form.validate(valid => {
                console.log('=========', valid)
            });
        }
    }
}

</script>
<style type="text/css">


</style>
