<template>
    <Modal class='create_model_dialog' v-model="showDialog" title="新增职位模板" :width='600'>
        <Form class='company_info_form' ref="form1" :model="formData" :rules="ruleValidate" :label-width="130">
            <Row>
                <Col span='24'>
                <FormItem label="职位模板名称：" prop="name">
                    <Input v-model="formData.name" placeholder="请输入职位模板名称"></Input>
                </FormItem>
                </Col>
            </Row>
        </Form>
        <div slot='footer'>
            <flexbox justify-content='center'>
                <x-button type='xbtn-primary' width='105' height='40' fontsize='14' @click.native='btnOkClick'>确认</x-button>
                <x-button type='xbtn-border-primary' width='105' height='40' fontsize='14' style='margin-left: 150px;' @click.native='showDialog=false'>取消</x-button>
            </flexbox>
        </div>
    </Modal>
</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin'
export default {
    name: 'money-useways-dialog',
    mixins: [dialogMixin],
    data() {
        return {
            formData: {
                name: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: '请输入模板名称', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        btnOkClick() {
            this.$emit('ok-click');
        }
    }
}

</script>
<style type="text/css" scoped>

</style>
