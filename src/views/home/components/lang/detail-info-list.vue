<template>
    <div class='content_list_box'>
        <div class='content_list'>
            <lang-detail-info v-for='(item,index) in details' :key='index' @delete='deleteDetail(index)'></lang-detail-info>
        </div>
    </div>
</template>
<script>
import LangDetailInfo from './detail-info';
export default {
    name: 'lang-defail-info-list',
    components: {
        LangDetailInfo
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
