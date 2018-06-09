<template>
    <div class='page_header'>
        <div class='content_inner_width page_header_inner'>
            <div class="layout_header_logo">
                <img class='block' src="@imgs/logo.png">
            </div>
            <div class='layout_header_list'>
                <router-link class='layout_header_item' :class="{active: checkActive('home')}" to='/home'>
                    <div class='inner_content'>
                        <p>我的主页</p>
                    </div>
                    <div class='bottom_line'></div>
                </router-link>
                <router-link class='layout_header_item' :class="{active: checkActive('search_resume')}" to='/search_resume'>
                    <div class='inner_content'>
                        <p>简历搜索</p>
                    </div>
                    <div class='bottom_line'></div>
                </router-link>
                <router-link class='layout_header_item' :class="{active: checkActive('talent_list')}" to='/talent_list'>
                    <div class='inner_content'>
                        <p>企业人才库</p>
                    </div>
                    <div class='bottom_line'></div>
                </router-link>
                <router-link class='layout_header_item' :class="{active: checkActive('company_design')}" to='/company_design'>
                    <div class='inner_content'>
                        <p>企业定制</p>
                    </div>
                    <div class='bottom_line'></div>
                </router-link>
            </div>
            <div class='accout_login_box'>
                <div class='login_success'>
                    <flexbox align-items='center'>
                        <img class='vertical_middle' src="@imgs/home/2.png">
                        <Avatar class='avatar' style='width: 53px;height: 53px;border-radius: 50%;' :src="avatar" size="large" @click.native='avatarClick' />
                        <x-button v-show='!$store.getters.token' type='xbtn-primary' width='153' height='40' :padding='[0,0]'>进入企业版>></x-button>
                    </flexbox>
                    <!-- <div class='drop_down_list'>
                        <div class='item' @click='goto("/job_manager")'>职位管理</div>
                        <div class='item' @click='goto("/resume_manager")'>简历管理</div>
                        <div class='item' @click='goto("/setting")'>账户信息</div>
                        <div class='item'>退出</div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'xheader',
    data() {
        return {

        };
    },
    computed: {
        avatar() {
            return this.$store.getters.token ? require('@imgs/test.png') : require('@imgs/default.png');
        }
    },
    methods: {
        checkActive(name) {
            return this.$route.matched[0].name === name;
        },
        goto(path) {
            this.$router.push({
                path: path
            });
        },
        avatarClick() {
            if (!this.$store.getters.token) {
                this.$store.dispatch('ShowLogin');
            } else {
                // 如果已经登录
                this.$router.push({
                    path: '/setting'
                });
            }
        }
    }
};

</script>
<style scoped>


</style>
