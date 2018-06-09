<template>
    <div class='detail-info'>
        <div class='content_box' v-show='!editMode'>
            <flexbox>
                <div class='left'>
                    <flexbox class='l3' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;width: 60px;'>附件名称</span>
                        <span style='color: #333333;margin-right: 15px;'>资格证书</span>
                        <a style='text-decoration: underline;'>查看</a>
                    </flexbox>
                    <flexbox class='l3' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;width: 60px;'>附件描述</span>
                        <span style='color: #333333;flex: 1;'>关于上传附件的描述</span>
                    </flexbox>
                </div>
                <flexbox class='right' style='padding-right: 15px;'>
                    <x-button type='xbtn-border-primary' style='margin-right: 18px;' width='60' height='30' :padding='[0,0]' @click.native='editClick'>编辑</x-button>
                    <x-button type='xbtn-border-primary' width='60' height='30' :padding='[0,0]' @click.native='delClick'>删除</x-button>
                </flexbox>
            </flexbox>
        </div>

        <other-edit-info v-show='editMode' @on-submit='expSubmit'></other-edit-info>
    </div>

</template>
<script>
import OtherEditInfo from './edit-info';
export default {
    name: 'other-defail-info',
    components: {
        OtherEditInfo
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
