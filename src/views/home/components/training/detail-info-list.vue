<template>
    <div class='content_list_box'>
        <div class='content_list'>
            <educationexps-detail-info v-for='(item,index) in details' :key='index' @delete='deleteDetail(index)'></educationexps-detail-info>
        </div>
    </div>
</template>
<script>
import EducationexpsDetailInfo from './detail-info';
export default {
    name: 'projectexps-defail-info-list',
    components: {
        EducationexpsDetailInfo
    },
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
        deleteDetail(index) {
            this.$emit('delete', index);
        }
    }
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
