<template>
    <div class='content_list_box'>
        <div class='content_list'>
            <other-detail-info v-for='(item,index) in details' :key='index' @delete='deleteDetail(index)'></other-detail-info>
        </div>
    </div>
</template>
<script>
import OtherDetailInfo from './detail-info';
export default {
    name: 'other-defail-info-list',
    components: {
        OtherDetailInfo
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
