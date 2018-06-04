<template>
    <div class='home_page'>
        <div class='company_info'>
            <div class='company_info_inner content_inner_width'>
                <img src="/static/imgs/test2.png">
                <div class='right_content'>
                    <div class='company_title'>
                        <p>小桔科技有限公司</p>
                    </div>
                    <div class='company_content'>
                        <div class='item'>
                            <x-link class='p1' color='#FF6123' to='./paylist'>1000</x-link>
                            <p class='p2'>余额</p>
                        </div>
                        <div class='item'>
                            <x-link class='p1' color='#D724FF' to='./paylist'>500</x-link>
                            <p class='p2'>获得</p>
                        </div>
                        <div class='item'>
                            <x-link class='p1' color='#3779FF' to='./paylist'>200</x-link>
                            <p class='p2'>话费</p>
                        </div>
                        <div class='recharge_box'>
                            <div class='part1 align_center'>
                                <x-button class='xbtn xbtn_border xbtn_bradius' :padding='[10, 25]' :fontsize='14' :is-link='true' to='./recharge'>充值</x-button>
                            </div>
                            <p class='part2'>
                                <span @click='showTicketSettingDialog=true'>开票设置</span>
                                <span>|</span>
                                <span @click='showMoneyWaysDialog=true'>金币规则</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='home_content'>
            <div class='content_inner_width'>
                <router-view></router-view>
            </div>
        </div>

        <money-ways-dialog v-model='showMoneyWaysDialog'></money-ways-dialog>
        <ticket-setting-dialog v-model='showTicketSettingDialog'></ticket-setting-dialog>
        <perfect-info-dialog v-model='showPerfectInfoDialog'></perfect-info-dialog>
    </div>
</template>
<script type="text/javascript">
import moneyWaysDialog from './dialogs/money-useways-dialog';
import ticketSettingDialog from './dialogs/ticket-setting-dialog';
import perfectInfoDialog from './dialogs/perfect-info-dialog';
export default {
    name: 'home',
    components: {
        moneyWaysDialog,
        ticketSettingDialog,
        perfectInfoDialog
    },
    data() {
        return {
            showMoneyWaysDialog: false,
            showTicketSettingDialog: false,
            showPerfectInfoDialog: true
        }
    }

};

</script>
<style type="text/css" scoped>
@import '@pages/home/home.css';

</style>
