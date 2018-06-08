<template>
    <div class='nodata_box'>
        <div class='title'>
            <p>求职意向</p>
            <img class='edit_btn' src="@imgs/home/9.png" alt="" @click='editClick'>
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
