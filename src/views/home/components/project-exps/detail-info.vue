<template>
    <div class='detail-info'>
        <div class='content_box' v-show='!editMode'>
            <flexbox>
                <div class='left'>
                    <div class='l1' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;'>2015.9~2017.6</span>
                        <span style='color: #333333;margin-right: 30px;'>产品开发计划</span>
                        <span style='color: #333333;'>德尔斐网络科技有限公司</span>
                    </div>
                    <flexbox class='l3' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;width:60px;'>项目描述</span>
                        <span style='color: #333333;flex: 1;'>项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述</span>
                    </flexbox>
                </div>
                <flexbox class='right' style='padding-right: 15px;'>
                    <x-button type='xbtn-border-primary' style='margin-right: 18px;' width='60' height='30' :padding='[0,0]' @click.native='editClick'>编辑</x-button>
                    <x-button type='xbtn-border-primary' width='60' height='30' :padding='[0,0]' @click.native='delClick'>删除</x-button>
                </flexbox>
            </flexbox>
        </div>

        <projectexps-edit-info v-show='editMode' @on-submit='expSubmit'></projectexps-edit-info>
    </div>

</template>
<script>
import ProjectexpsEditInfo from './edit-info';
export default {
    name: 'projectexps-defail-info',
    components: {
        ProjectexpsEditInfo
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
