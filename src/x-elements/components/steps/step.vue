<template>
	<div class='x_step' :class='classes'>
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'step',
	data() {
		return {
			selected: false
		}
	},
	computed: {
		classes() {
			return {
				'active': this.selected
			};
		}
	}
};

</script>
<style type="text/css">
@import '../../styles/step.css';

</style>
