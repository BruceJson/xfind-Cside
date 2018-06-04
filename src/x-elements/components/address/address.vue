<template>
    <Cascader :data="data" v-model="value1" :render-format='renderFormat'></Cascader>
</template>
<script type="text/javascript">
import addressData from './addressData';
export default {
    mounted() {},
    props: {
        'value': {
            type: Array
        }
    },
    data() {
        return {
            value1: [],
            data: addressData
        };
    },
    methods: {
        renderFormat(label) {
            return label.join('/');
        }
    }
};

</script>
