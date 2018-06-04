<template>
    <Modal class='chat-dialog' v-model="showDialog" title="和TA聊聊" :width='830'>
        <div>
            <div class='line line1'>
                <Select v-model="selectJob" style="width:275px">
                    <Option v-for="(item, index) in jobList" :value="item.key" :key="index">{{ item.value }}</Option>
                </Select>
                <span style='margin-left: 25px;'>选择要沟通的职位</span>
            </div>

            <div class='line line2'>
                <Select v-model="selectModel" style="width:275px">
                    <Option v-for="(item, index) in modelList" :value="item.key" :key="index">{{ item.value }}</Option>
                </Select>
                <span style='margin-left: 25px;'>邀约模板</span>
                <Checkbox v-model="useModel" style='font-size: 16px;margin-left: 25px;'>不使用模板</Checkbox>
            </div>

            <div class='line line3' style='margin-bottom: 5px;'>
                <Input v-model="modelText" type="textarea" :rows="7" placeholder="Enter something..."></Input>
            </div>
            <div class='line line4'>
                <Checkbox v-model="invite" style='font-size: 16px;'>邀请对方投递简历</Checkbox>
            </div>
        </div>
        <div slot='footer'>
            <flexbox justify-content='center'>
                <x-button type='xbtn-primary' width='105' height='40' fontsize='14' @click.native='sendClick'>发送</x-button>
                <x-button style='margin-left: 130px;' type='xbtn-border-primary' width='105' height='40' fontsize='14' @click.native='showDialog=false'>取消</x-button>
            </flexbox>
        </div>
    </Modal>
</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin';
export default {
    name: 'chat-dialog',
    mixins: [dialogMixin],
    props: {
        curResume: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {
            jobList: [{
                key: '00',
                value: 'UI设计师'
            }, {
                key: '01',
                value: 'UI设计师'
            }, {
                key: '02',
                value: 'UI设计师'
            }],
            selectJob: '',
            selectModel: '',
            modelList: [{
                key: '00',
                value: '模板1'
            }, {
                key: '01',
                value: '模板2'
            }, {
                key: '02',
                value: '模板3'
            }],
            useModel: false,
            modelText: '',
            invite: false
        };
    },
    methods: {
        sendClick() {}
    }
}

</script>
<style type="text/css">
.chat-dialog {
    & .line{
        margin-bottom: 25px;
    }
}

</style>
