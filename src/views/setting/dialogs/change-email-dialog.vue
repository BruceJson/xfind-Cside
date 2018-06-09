<template>
    <Modal class='money_useways_dialog' v-model="showDialog" title="修改邮箱" :width='560'>
        <Form :label-width="100" v-show='!isSend'>
            <FormItem label='当前邮箱：'>
                <p style='line-height: 40px;font-size: 14px;'>531232196@qq.com</p>
            </FormItem>
            <FormItem label='新邮箱：'>
                <Input v-model="newEmail" placeholder="请输入新邮箱" style='width: 265px;'></Input>
            </FormItem>
        </Form> 
        <div v-show='isSend' style='display: flex;flex-direction: column;align-items: center;'>
            <p class='font-size: 14px;color: #333;'>验证邮件已发送到12331233@qq.com,请及时验证</p>
            <x-button type='xbtn-border-primary' width='112' height='32' fontsize='14' :padding='[0,0]' style='margin: 20px 0;'>查看验证邮箱</x-button>
            <p style='font-size: 12px;color: #008cee;'>如果您未收到邮件，请尝试到垃圾邮件、广告邮件目录查看。</p>
        </div>
        <div slot='footer'>
            <flexbox v-show='!isSend' justify-content='center'>
                <x-button type='xbtn-primary' width='105' height='40' fontsize='14' @click.native='btnOkClick'>确认</x-button>
                <x-button type='xbtn-border-primary' width='105' height='40' fontsize='14' style='margin-left: 50px;' @click.native='showDialog=false'>取消</x-button>
            </flexbox>
            <div v-show='isSend'></div>
        </div>
    </Modal>
</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin'
export default {
    name: 'change-email-dialog',
    mixins: [dialogMixin],
    data(){
        return {
            newEmail: '',
            isSend: false
        };
    },
    methods: {
        btnOkClick() {
            this.isSend = true;
        }
    }
}

</script>
<style type="text/css" scoped>


</style>
