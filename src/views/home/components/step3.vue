<template>
    <div>
        <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>上传企业照片</p>
            </div>
        </Upload>
        <p class="align_center margin_top_20" style='color: #999999;font-size: 14px;'>请上传小于10M的图片(支持GIF、JPG、PNG等)</p>
    </div>

</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin'
export default {
    name: 'perfect-info-dialog',
    data() {
        return {
            formData: {
                title: '',
                desc: '',
                type: '',
                size: '',
                group1: '',
                group2: ''
            }
        };
    },
    methods: {}
}

</script>
<style type="text/css">


</style>
