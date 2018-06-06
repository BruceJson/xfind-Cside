<template>
	<div class='no_resume_box'>
		<img src="@imgs/home/6.png" alt="">
		<p>您还没有简历，赶快去
			<x-link class='inline_block' to='/edit_resume'>创建简历</x-link>吧~</p>
	</div>
</template>
<script>
export default {
	name: 'no_resume'
};

</script>
<style scoped>
@import '@pages/home/home.css';

</style>
