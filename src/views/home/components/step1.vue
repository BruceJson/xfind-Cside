<template>
    <div>
        <Form :model="formData" :rules='formRules' :label-width="120">
            <FormItem label="企业名称" prop='title'>
                <Input v-model="formData.title" placeholder="企业名称"></Input>
            </FormItem>
            <FormItem label="企业简称" prop='desc'>
                <Input v-model="formData.desc" placeholder="企业简称"></Input>
            </FormItem>
            <FormItem label="企业类型" prop='type'>
                <Select v-model="formData.type">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="企业规模" prop='size'>
                <Select v-model="formData.size">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="所属行业1" prop='group1'>
                <Select v-model="formData.group1">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="所属行业2">
                <Select v-model="formData.group2">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
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
                title: '',
                desc: '',
                type: '',
                size: '',
                group1: '',
                group2: ''
            },
            formRules: {
                title: [{
                    required: true,
                    message: '请填写企业名称',
                    trigger: 'blur'
                }],
                desc: [{
                    required: true,
                    message: '请填写企业简称',
                    trigger: 'blur'
                }],
                type: [{
                    required: true,
                    message: '请选择企业类型',
                    trigger: 'change'
                }],
                size: [{
                    required: true,
                    message: '请选择企业规模',
                    trigger: 'change'
                }],
                group1: [{
                    required: true,
                    message: '请选择所属行业1',
                    trigger: 'change'
                }],
            }
        };
    },
    methods: {}
}

</script>
<style type="text/css">


</style>
