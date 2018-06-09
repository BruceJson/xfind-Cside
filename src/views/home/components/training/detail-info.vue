<template>
    <div class='detail-info'>
        <div class='content_box' v-show='!editMode'>
            <flexbox>
                <div class='left'>
                    <flexbox class='l3' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;'>2017.10~2018.1</span>
                        <span style='color: #333333;flex: 1;'>UI设计</span>
                    </flexbox>
                    <flexbox class='l3' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;width:60px;'>培训机构</span>
                        <span style='color: #333333;flex: 1;'>培训机构</span>
                    </flexbox>
                    <flexbox class='l3' style='margin-bottom: 15px;'>
                        <span style='color: #a1a1a1;margin-right: 30px;width:60px;'>培训说明</span>
                        <span style='color: #333333;flex: 1;'>培训说明培训说明培训说明培训说明培训说明</span>
                    </flexbox>
                </div>
                <flexbox class='right' style='padding-right: 15px;'>
                    <x-button type='xbtn-border-primary' style='margin-right: 18px;' width='60' height='30' :padding='[0,0]' @click.native='editClick'>编辑</x-button>
                    <x-button type='xbtn-border-primary' width='60' height='30' :padding='[0,0]' @click.native='delClick'>删除</x-button>
                </flexbox>
            </flexbox>
        </div>

        <training-edit-info v-show='editMode' @on-submit='expSubmit'></training-edit-info>
    </div>

</template>
<script>
import TrainingEditInfo from './edit-info';
export default {
    name: 'projectexps-defail-info',
    components: {
        TrainingEditInfo
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
