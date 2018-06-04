<template>
    <div>
        <Form ref="step4_form" :model="formData" :rules='formRules' :label-width="120">
            <FormItem label="联系人" prop='person'>
                <Input v-model="formData.person" placeholder="联系人"></Input>
            </FormItem>
            <FormItem label="联系手机" prop='mobile'>
                <Input v-model="formData.mobile" placeholder="联系手机"></Input>
            </FormItem>
            <FormItem label="办公电话" prop='tel'>
                <Input v-model="formData.tel" placeholder="办公电话"></Input>
            </FormItem>
            <FormItem label="公司邮箱" prop='email'>
                <Input v-model="formData.email" placeholder="公司邮箱"></Input>
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
                person: '',
                mobile: '',
                tel: '',
                email: ''
            },
            formRules: {
                person: [{
                    required: true,
                    message: '请填写联系人',
                    trigger: 'blur'
                }],
                mobile: [{
                    required: true,
                    message: '请填写手机号',
                    trigger: 'blur'
                }],
                tel: [{
                    required: true,
                    message: '请填写办公电话',
                    trigger: 'blur'
                }],
                email: [{
                    required: true,
                    message: '请填写公司邮箱',
                    trigger: 'blur'
                }],
            }
        };
    },
    methods: {
        validate() {
            this.$refs.step4_form.validate(valid => {
                console.log('=========', valid)
            });
        }
    }
}

</script>
<style type="text/css">


</style>
