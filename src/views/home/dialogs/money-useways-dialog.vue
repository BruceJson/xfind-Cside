<template>
    <Modal class='money_useways_dialog' v-model="showDialog" title="金币使用方式" :width='830'>
        <p>1. 企业要想获取该人的联系方式就需要花费
            <span>10个金币</span>；</p>
        <p>2. 企业发布1条招聘信息需要花费
            <span>30个金币</span>；</p>
        <p>3. 企业超出选才库免费容量（50份）
            <span>每分析1份简历需要花费1金币</span>；</p>
        <p>4. 企业职位置顶
            <span>100金币/月</span>（职位列表前列推荐，需要联系客服/业务申请）；</p>
        <p>5. 企业定制入职表导出样板
            <span>300金币</span>（需要联系客服，提供相应要求）；</p>
        <p>6. 企业定制面试信息表
            <span>300金币</span>（需要联系客服，提供相应要求）；</p>
        <p>7. 企业定制专题招聘
            <span>500金币</span>（需要联系客服，提供相应要求）；</p>
        <p>
            <span>活动：</span>企业首次注册送500金币。</p>
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
    methods: {
        btnOkClick() {
            this.$emit('ok-click');
        }
    }
}

</script>
<style type="text/css" scoped>
.money_useways_dialog p {
    margin-bottom: 10px;
    & span {
        color: var(--mainColor);
    }
}

</style>
