<template>
	<div class='handle-box'>
		<span @click='handleClick("0")'>编辑</span> |
		<span @click='handleClick("1")'>删除</span> |
		<span @click='handleClick("2")'>复制</span>
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
