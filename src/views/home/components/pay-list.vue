<template>
    <div class='pay_list'>
        <Form :model="formData" :label-width="80" inline>
            <FormItem label="金币流水">
                <Select v-model="formData.moneyType" style='width: 150px;'>
                    <Option value="0">全部</Option>
                    <Option value="1">充值记录</Option>
                    <Option value="2">消费记录</Option>
                </Select>
            </FormItem>
            <FormItem :label-width='1'>
                <x-button type="xbtn-primary">查询</x-button>
            </FormItem>
        </Form>
        <Table class='table_list' :columns="tableData.columns" :data="tableData.data"></Table>
        <Page class='align_center margin_top_30' :total="100"></Page>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'pay-list',
    data() {
        return {
            // 金币流水类型 '0'：全部    '1'：充值记录    '2'：消费记录
            formData: {
                moneyType: '0'
            }
        }
    },
    computed: {
        tableData() {
            return {
                columns: [{
                    title: '序号',
                    key: 'index'
                }, {
                    title: '日期',
                    key: 'index'
                }, {
                    title: '事项',
                    key: 'index'
                }, {
                    title: '金币流水',
                    key: 'index'
                }, {
                    title: '余额',
                    key: 'index'
                }, {
                    title: '发票',
                    key: 'index'
                }, ],
                data: [{
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }]
            }
        }
    }
};

</script>
<style type="text/css" scoped>
@import '@pages/home/pay-list.css';

</style>
