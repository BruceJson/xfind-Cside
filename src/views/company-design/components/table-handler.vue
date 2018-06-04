<template>
	<div class='handle-box'>
		<x-button :padding='[7, 10]' class='xbtn xbtn_border inline_block' @click.native='handleClick("0")'>查看</x-button>
		<x-button :padding='[7, 10]' class='xbtn xbtn_border inline_block' style='margin-left: 30px;' @click.native='handleClick("1")'>下载</x-button>
		<x-button :padding='[7, 10]' class='xbtn xbtn_border inline_block' style='margin-left: 30px;' @click.native='handleClick("2")'>删除</x-button>
	</div>
</template>
<script>
export default {
	name: 'handle-box',
	methods: {
		handleClick(type) {
			this.$emit('handleClick', type);
		}
	}
}

</script>
<style scoped>
.handle-box {
	&>span {
		color: #00457d;
		cursor: pointer;
	}
}

</style>
