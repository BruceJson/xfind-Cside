<template>
    <div class='detail-info'>
        <div class='content_box' v-show='!editMode'>
            <flexbox>
                <div class='left'>
                    <div class='l1' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;'>2015.9~2017.6</span>
                        <span style='color: #333333;margin-right: 30px;'>德尔斐网络科技有限公司</span>
                        <span style='color: #333333;'>UI设计（全职）</span>
                    </div>
                    <div class='l2' style='color: #333333;margin-bottom: 15px;'>互联网/电子商务|150~500人|民营公司|产品研发部|职位月薪：15000~25000元/月</div>
                    <flexbox class='l3' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;width:60px;'>工作描述</span>
                        <span style='color: #333333;flex: 1;'>工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述工作描述</span>
                    </flexbox>
                </div>
                <flexbox class='right' style='padding-right: 15px;'>
                    <x-button type='xbtn-border-primary' style='margin-right: 18px;' width='60' height='30' :padding='[0,0]' @click.native='editClick'>编辑</x-button>
                    <x-button type='xbtn-border-primary' width='60' height='30' :padding='[0,0]' @click.native='delClick'>删除</x-button>
                </flexbox>
            </flexbox>
        </div>

        <workexps-edit-info v-show='editMode' @on-submit='expSubmit'></workexps-edit-info>
    </div>

</template>
<script>
import WorkexpsEditInfo from './edit-info';
export default {
    name: 'workexps-defail-info',
    components: {
        WorkexpsEditInfo
    },
    props: {
        detail: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    data() {
        return {
            editMode: false
        };
    },
    methods: {
        editClick() {
            this.editMode = true;
        },
        delClick() {
            this.$emit('delete');
        },
        expSubmit(exp) {
            this.editMode = false;
        }

    }
}

</script>
<style>
@import '@pages/home/edit-resume.css';

</style>
