<template>
    <div class='nodata_box'>
        <div class='title'>
            <p>工作经验</p>
            <span style='color: #b8b8b8;cursor: pointer;' @click='editClick'>+添加</span>
        </div>
        <p class='nodata_tip'>完善求职意向，我们将为您更精准的推荐工作！</p>
    </div>
</template>
<script>
export default {
    name: 'workexps-no-data',
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
