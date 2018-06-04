<template>
    <div class='x_progress'>
        <div class='x_progress_inner'></div>
        <span></span>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'x-progress',
    props: {
        progress: {
            type: [Number, String],
            default: 0
        }
    },
    data() {
        return {

        };
    }
};

</script>
