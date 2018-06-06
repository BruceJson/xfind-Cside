<template>
    <div class='home_page'>
        <div class='home_content'>
            <div class='content_inner_width'>
                <no-resume></no-resume>
                <has-resume></has-resume>
                <div class='part1'>
                    <div class='item'>
                        <img src="@imgs/home/3.png" alt="">
                        <span class='span1'>我的投递</span>
                        <span class='span2'>0</span>
                    </div>
                    <div class='item'>
                        <img src="@imgs/home/4.png" alt="">
                        <span class='span1'>谁看过我</span>
                        <span class='span2'>0</span>
                    </div>
                    <div class='item'>
                        <img src="@imgs/home/5.png" alt="">
                        <span class='span1'>我的收藏</span>
                        <span class='span2'>0</span>
                    </div>
                </div>
                <div class='part2'>
                    <Flexbox class='up' align-items='center'>
                        <p class='p1'>您有一条未读消息</p>
                        <p class='p2'>2018-03-09 21:09</p>
                    </Flexbox>
                    <Flexbox class='down' align-items='center'>
                        <p class='p1'>有人查看了您发布的
                            <span>UI设计师</span>的岗位</p>
                        <x-button type='xbtn-border-primary' width='84' height='30' :padding='[0,0]' fontsize='12'>查看详情>></x-button>
                    </Flexbox>
                </div>
                <recommand-list></recommand-list>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import NoResume from './components/no-resume';
import HasResume from './components/has-resume';
import RecommandList from './components/recommand-list';
export default {
    name: 'home',
    components: {
        NoResume,
        HasResume,
        RecommandList
    },
    data() {
        return {

        }
    }

};

</script>
<style type="text/css" scoped>
@import '@pages/home/home.css';

</style>
