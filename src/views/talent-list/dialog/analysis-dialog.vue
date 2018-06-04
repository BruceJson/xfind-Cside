<template>
    <Modal class='analysis_dialog' v-model="showDialog" title="金币使用方式" :width='830'>
        <p>选材免费空间已满（50/50），超出部分按每份简历1个金币收取，</p>
        <p>确认收件并分析吗？</p>
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
    name: 'analysis-dialog',
    mixins: [dialogMixin],
    methods: {
        btnOkClick() {
            this.$emit('ok-click');
        }
    }
}

</script>
<style type="text/css" scoped>


</style>
