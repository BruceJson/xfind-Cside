<template>
    <div class='x_steps'>
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'steps',
    props: {
        'value': {
            type: [String, Number],
            default: '0'
        }
    },
    mounted() {
        this.selectChildren(this.value);
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal) {
                this.selectChildren(newVal);

                this.$emit('input', newVal);
            }

        }
    },
    methods: {
        selectChildren(index) {
            for (let i = 0; i < this.$children.length; i++) {
                if (i <= index) {
                    this.$children[i].selected = true;
                } else {
                    this.$children[i].selected = false;
                }
            }
        }
    }
};

</script>
<style type="text/css">
@import '../../styles/steps.css';

</style>
