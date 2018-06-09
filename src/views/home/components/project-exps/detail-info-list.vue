<template>
    <div class='content_list_box'>
        <div class='title'>
            <p>项目经历</p>
            <span style='color: #b8b8b8;cursor: pointer;' @click='editClick'>+添加</span>
        </div>
        <div class='content_list'>
            <projectexps-detail-info v-for='(item,index) in details' :key='index' @delete='deleteDetail(index)'></projectexps-detail-info>
        </div>
    </div>
</template>
<script>
import ProjectexpsDetailInfo from './detail-info';
export default {
    name: 'projectexps-defail-info-list',
    components: {ProjectexpsDetailInfo},
    props: {
        details: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    methods: {
        editClick() {
            this.$emit('edit');
        },
        deleteDetail(index){
            this.$emit('delete', index);
        }
    }
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
