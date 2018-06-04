<template>
    <div class='children_item'>{{workType.name}}
        <div class='func_list'>
            <div class='func_list_inner'>
                <div class='func_item' v-for='(funcItem, index) in workType.children' @click.stop='selectClick(funcItem)'>{{funcItem.name}}</div>
            </div>
            <!-- <flexbox justify-content='flex-end' align-items='center' style='margin-top: 15px;'>
                <x-button type='xbtn-primary' @click.native.stop='handleClose' :padding='[10, 15]'>关闭</x-button>
            </flexbox> -->
        </div>
    </div>
    <!-- <Dropdown placement="bottom-start" trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            {{workType.name}}
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
                <Button type="primary" @click="handleClose">关闭</Button>
            </div>
        </DropdownMenu>
    </Dropdown> -->
</template>
<script type="text/javascript">
export default {
    name: 'work-type-item',
    props: {
        workType: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    data() {
        return {
            visible: false
        };
    },
    methods: {
        selectClick(funcItem) {
            this.$emit('on-select', Object.assign({}, funcItem));
        }
    }
};

</script>
<style type="text/css" scoped>
.children_item {
    position: relative;
    &:hover .func_list{
        /*display: block;*/
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
        z-index: 11;
    }
}
.func_item {
    position: relative;
    width: 100px;
    font-size: 12px;
    cursor: pointer;
    padding-left: 5px;
    transition: all linear .3s;
    &:hover {
        background-color: rgba(150, 150, 150, 0.1);
    }
}
.func_list {
    cursor: initial;
    /*display: none;*/
    position: absolute;
    /*z-index: 10;*/
    left: 0;
    top: 30px;
    border: 1px solid #D7D7D7;
    background-color: #fff;
    padding: 15px;
    width: 500px;
    opacity: 0;
    visibility: visible;
    transform: translateY(-10px);
    transition: all linear .3s;
    &>.func_list_inner {
        display: flex;
        flex-wrap: wrap;
    }
}

</style>
