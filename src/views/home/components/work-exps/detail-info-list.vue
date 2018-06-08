<template>
    <div class='content_box'>
        <div class='title'>
            <p>求职意向</p>
            <img class='edit_btn' src="@imgs/home/9.png" alt="" @click='editClick'>
        </div>
        <Row class='row' type='flex' :gutter='30'>
            <Col class='label' span='4'>期望薪资</Col>
            <Col class='content' span='5'>20K/月</Col>
            <Col class='label' span='4'>工作地点</Col>
            <Col class='content' span='5'>上海市</Col>
            </Col>
        </Row>
        <Row class='row' type='flex' :gutter='30'>
            <Col class='label' span='4'>职&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp位</Col>
            <Col class='content' span='5'>上海市</Col>
            <Col class='label' span='4'>工作类型</Col>
            <Col class='content' span='5'>上海市</Col>
            </Col>
        </Row>
        <Row class='row' type='flex' :gutter='30'>
            <Col class='label' span='4'>行&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp业</Col>
            <Col class='content' span='5'>上海市</Col>
            <Col class='label' span='4'>到岗时间</Col>
            <Col class='content' span='5'>上海市</Col>
        </Row>
        <Row class='row' type='flex' :gutter='30'>
            <Col class='label' span='4'>职&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp能</Col>
            <Col class='content' span='5'>上海市</Col>
            <Col class='label' span='4'>个人标签</Col>
            <Col class='content' span='5'>上海市</Col>
        </Row>
        <Row class='row' type='flex' :gutter='30'>
            <Col class='label' span='4'>自我评价</Col>
            <Col class='content' span='14'>上海市</Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'workexps-defail-info-list',
    props: {
        detail: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    methods: {
        editClick() {
            this.$emit('edit');
        }
    }
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
