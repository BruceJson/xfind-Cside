<template>
	<div class='chat_item' :class='{"myself": type==="1"}'>
		<img :src="src" alt="">
		<div class='content'>{{content}}</div>
	</div>
</template>
<script>
export default {
	name: 'chat-item',
	props: {
		src: {},
		content: {
			type: String
		},
		type: {
			type: String
		}
	}
};

</script>
<style>
.chat_item {
	display: flex;
	padding: 0 40px;
	margin-bottom: 30px;
	&.myself {
		flex-direction: row-reverse;
		&>.content {
			margin-right: 30px;

			&:before {
				border-left: 8px solid #fff;
				border-right: none;
				right: -8px;
				left: initial;
			}
		}
	}
	&>img {
		width: 41px;
		height: 41px;
		border-radius: 50%;
	}
	&>.content {
		width: 320px;
		padding: 15px 24px;
		background-color: #fff;
		border-radius: 6px;
		position: relative;
		margin-left: 30px;

		&:before {
			content: '';
			display: block;
			border-bottom: 4px solid transparent;
			border-top: 4px solid transparent;
			border-right: 8px solid #fff;
			position: absolute;
			left: -8px;
			top: 17px;
		}
	}
}

</style>
