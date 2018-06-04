export default {
    props: {
        'value': {
            type: Boolean
        }
    },
    computed: {
        showDialog: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    }
}
