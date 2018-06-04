<template>
    <Modal class='ticket_setting_dialog' v-model="showDialog" title="开票信息设置" :width='830'>
        <Form :model="formData" :label-width="100">
            <FormItem label="发票类型">
                <p class='form-text-content'>电子发票</p>
            </FormItem>
            <FormItem label="发票抬头">
                <Input v-model="formData.title" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="税号">
                <Input v-model="formData.code" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="发票内容">
                <Select v-model="formData.info">
                    <Option v-for='(item, index) in selectList' :key='index' :value="item.key">{{item.value}}</Option>
                </Select>
            </FormItem>
        </Form>
        <div slot='footer'>
            <flexbox justify-content='center'>
                <x-button type='xbtn-primary' width='105' height='40' fontsize='14' @click.native='btnOkClick'>确认</x-button>
                <x-button type='xbtn-border-primary' width='105' height='40' fontsize='14' style='margin-left: 80px;' @click.native='showDialog=false'>取消</x-button>
            </flexbox>
        </div>
    </Modal>
</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin'
export default {
    name: 'ticket-setting-dialog',
    mixins: [dialogMixin],
    data() {
        return {
            formData: {
                title: '',
                code: '',
                info: ''
            },

            selectList: [{
                key: '0',
                value: '人力资源服务费'
            }, {
                key: '1',
                value: '人力资源服务费'
            }, {
                key: '2',
                value: '人力资源服务费'
            }]
        };
    },
    methods: {
        btnOkClick() {
            this.$emit('ok-click', this.formData);
        }
    }
}

</script>
<style type="text/css">


</style>
