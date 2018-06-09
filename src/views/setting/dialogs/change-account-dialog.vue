<template>
    <Modal class='money_useways_dialog' v-model="showDialog" title="修改手机" :width='560'>
        <Form :label-width="100">
            <FormItem label='手机：'>
                <Input v-model="mobile" placeholder="请输入新手机号码" style='width: 265px;'></Input>
            </FormItem>
            <FormItem label='图形验证：'>
                <Input v-model="imgVerCode" placeholder="请输入图形验证码" style='width: 138px;margin-right: 4px;'></Input>
                <div class='identify_code_box' style='position: relative;display: inline-block;vertical-align: middle;height: 40px;'>
                    <div class='refresh_code absolute_full' @click='refreshCode'></div>
                    <identify-code :identifyCode="identifyCode" @click='refreshCode' :contentHeight='40' :contentWidth='122'></identify-code>
                </div>
            </FormItem>
            <FormItem label='验证码：'>
                <Input v-model="verCode" placeholder="请输入获取的验证码" style='width: 140px;margin-right: 5px;'></Input>
                <x-button class='inline_block' type='xbtn-primary' height='40'>获取验证码</x-button>
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
    name: 'change-account-dialog',
    mixins: [dialogMixin],
    data() {
        return {
            mobile: '',
            imgVerCode: '',
            verCode: '',
            identifyCodes: "1234567890",
            identifyCode: ""
        };
    },
    mounted() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    methods: {
        btnOkClick() {
            this.$emit('ok-click');
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                ];
            }
            console.log(this.identifyCode);
        }
    }
}

</script>
<style type="text/css" scoped>


</style>
