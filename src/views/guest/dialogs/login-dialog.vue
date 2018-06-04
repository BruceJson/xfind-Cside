<template>
    <Modal class='login_dialog' v-model="showDialog" title="" :width='436'>
        <div slot="header"></div>
        <!-- login -->
        <div class='login_box'>
            <tab class='login_tab' v-model='curIndex'>
                <tab-item class='item' v-for='(item, index) in tabList' :tab-index='index' :path='item.path' :key='index'>
                    <span class='text'>{{item.name}}</span>
                </tab-item>
            </tab>
            <div class='login_content'>
                <component :is='curComponent' :key='curType' @on-goto='changeComponent'></component>
            </div>
        </div>
        <div slot='footer'></div>
    </Modal>
</template>
<script type="text/javascript">
import dialogMixin from '@/x-elements/mixins/dialog-mixin';

import IdentifyLogin from '../components/identify-login';
import PasswordLogin from '../components/password-login';
import Regist from '../components/regist';

export default {
    name: 'login-dialog',
    mixins: [dialogMixin],
    data() {
        return {
            curIndex: '0',
            tabList: [{
                name: '登录',
                type: '0' // 0:密码登录 1注册 2验证码登录
            }, {
                name: '注册',
                path: '1'
            }],
            curType: '0'
        };
    },

    computed: {
        curComponent() {
            if (this.curType === '0') {
                return PasswordLogin;
            } else if (this.curType === '1') {
                return Regist;
            } else {
                return IdentifyLogin;
            }
        }
    },

    watch: {
        curIndex(val) {
            console.log('curIndex', val);
            this.curType = val + '';
        }
    },

    methods: {
        changeComponent(type) {
            this.curType = type;
            if (this.curType === '1') {
                this.curIndex = '1';
            } else {
                this.curIndex = '0';
            }
        }
    },
}

</script>
<style type="text/css" scoped>
@import '@pages/guest/login-dialog.css';

</style>
