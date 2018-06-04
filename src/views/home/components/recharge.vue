<template>
    <div class='recharge_page'>
        <div class='step_box'>
            <x-steps v-model='curIndex'>
                <x-step style='font-size: 16px;'>1.请选择充值金额</x-step>
                <x-step style='font-size: 16px;'>2.请选择支付方式</x-step>
                <x-step style='font-size: 16px;'>3.完成</x-step>
            </x-steps>
        </div>

        <Row class='recharge_list_box'>
            <Col span='4' class='align_right'>
            <span class='title'>充值金额：</span>
            </Col>
            <Col span='17' offset="1">
            <div class='recharge_list'>
                <div class='recharge_item'>
                    <p class='p1'>200元</p>
                    <p class='p2'>
                        <span>可获得200元金币</span>
                    </p>
                </div>
                <div class='recharge_item'>
                    <p class='p1'>200元</p>
                    <p class='p2'>
                        <span>可获得200元金币</span>
                    </p>
                </div>
                <div class='recharge_item'>
                    <p class='p1'>200元</p>
                    <p class='p2'>
                        <span>可获得200元金币</span>
                    </p>
                </div>
                <div class='recharge_item'>
                    <p class='p1'>200元</p>
                    <p class='p2'>
                        <span>可获得200元金币</span>
                    </p>
                </div>
                <div class='recharge_item'>
                    <p class='p1'>200元</p>
                    <p class='p2'>
                        <span>可获得200元金币</span>
                    </p>
                </div>
            </div>
            </Col>
        </Row>

        <div style='border-top: 1px dashed #E7E7E7;margin-top: 22px;'></div>

        <Row class='pay_type_list_box'>
            <Col span='4' class='align_right'>
            <span class='title'>支付方式：</span>
            </Col>
            <Col span='17' offset="1">
            <div class='pay_type_list'>
                <div class='pay_type_item'>
                    <img src="@imgs/home/3.png">
                </div>
                <div class='pay_type_item'>
                    <img src="@imgs/home/4.png">
                </div>
                <div class='pay_type_item'>
                    <p class='p1'>
                        <span>对公账户：</span>
                        <span>1111 1111 1111 1111</span>
                    </p>
                </div>
            </div>
            </Col>
        </Row>

        <flexbox justify-content='center'>
            <x-button type='xbtn-primary' width='105' height='40' :padding='[0, 0]' fontsize='14'>确定</x-button>
        </flexbox>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'recharge',
    data() {
        return {
            curIndex: '2'
        };
    }
};

</script>
<style type="text/css" scoped>
@import '@pages/home/recharge.css'

</style>
