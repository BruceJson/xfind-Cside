<template>
    <Modal class='ticket_setting_dialog' v-model="showDialog" title="完善信息" :width='735'>
        <Steps :current="step" style='margin-bottom: 30px;'>
            <Step title="基本信息"></Step>
            <Step title="企业风采"></Step>
            <Step title="招聘联系人信息"></Step>
        </Steps>
        <perfect-step1 v-show='currentStep === 0'></perfect-step1>
        <perfect-step2 v-show='currentStep === 1'></perfect-step2>
        <perfect-step3 v-show='currentStep === 2'></perfect-step3>
        <perfect-step4 v-show='currentStep === 3'></perfect-step4>
        <div slot='footer'>
            <flexbox justify-content='space-around'>
                <x-button type='xbtn-border-primary' width='105' height='40' fontsize='14' @click.native='preClick' v-show='currentStep > 0'>上一步</x-button>
                <x-button type='xbtn-primary' width='105' height='40' fontsize='14' @click.native='nextClick' v-show='currentStep < 3'>下一步</x-button>
                <x-button type='xbtn-border-primary' width='105' height='40' fontsize='14' @click.native='jumpNext' v-show='currentStep === 2'>可跳过</x-button>
                <x-button type='xbtn-primary' width='105' height='40' fontsize='14' :padding='[0,0]' @click.native='commit' v-show='currentStep === 3'>提交认证申请</x-button>
            </flexbox>
        </div>
    </Modal>
</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin';

import perfectStep1 from '../components/step1';
import perfectStep2 from '../components/step2';
import perfectStep3 from '../components/step3';
import perfectStep4 from '../components/step4';
export default {
    name: 'perfect-info-dialog',
    mixins: [dialogMixin],
    components: {
        perfectStep1,
        perfectStep2,
        perfectStep3,
        perfectStep4
    },
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
            }],

            currentStep: 0
        };
    },
    methods: {
        preClick() {
            if (this.currentStep === 0) {
                return;
            }
            this.currentStep--;
        },
        nextClick() {
            if (this.currentStep === 3) return;

            this.currentStep++;
        },
        jumpNext() {
            this.currentStep++;
        },
        commit() {

        }
    },
    computed: {
        step() {
            return this.currentStep === 0 || this.currentStep === 1 ? 0 : (this.currentStep - 1);
        }
    }
}

</script>
<style type="text/css">


</style>
