<template>
    <div class='content_list_box'>
        <div class='title'>
            <p>工作经验</p>
            <span style='color: #b8b8b8;cursor: pointer;' @click='editClick'>+添加</span>
        </div>
        <div class='content_list'>
            <workexps-detail-info v-for='(item,index) in details' :key='index' @delete='deleteDetail(index)'></workexps-detail-info>
        </div>
    </div>
</template>
<script>
import WorkexpsDetailInfo from './detail-info';
export default {
    name: 'workexps-defail-info-list',
    components: {WorkexpsDetailInfo},
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
