<template>
    <Modal class='money_useways_dialog' v-model="showDialog" title="修改密码" :width='560'>
        <Form :label-width="100">
            <FormItem label='原密码'>
                <Input v-model="oldPwd" placeholder="请输入原密码" style='width: 265px;'></Input>
            </FormItem>
            <FormItem label='新密码'>
                <Input v-model="newPwd" placeholder="请输入新密码" style='width: 265px;'></Input>
            </FormItem>
            <FormItem label='确认密码'>
                <Input v-model="newPwd1" placeholder="请确认新密码" style='width: 265px;'></Input>
            </FormItem>
        </Form>
        <div slot='footer'>
            <flexbox justify-content='center'>
                <x-button type='xbtn-primary' width='105' height='40' fontsize='14' @click.native='btnOkClick'>确认</x-button>
                <x-button type='xbtn-border-primary' width='105' height='40' fontsize='14' style='margin-left: 50px;' @click.native='showDialog=false'>取消</x-button>
            </flexbox>
        </div>
    </Modal>
</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin'
export default {
    name: 'change-pwd-dialog',
    mixins: [dialogMixin],
    data() {
        return {
            oldPwd: '',
            newPwd: '',
            newPwd1: '',
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
