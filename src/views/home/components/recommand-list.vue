<template>
	<div class='part3'>
		<div class='title'>
			<p>为您推荐</p>
		</div>
		<div class='recommand_list clx'>
			<div class='item'>
				<div class='line1'>
					<p class='p1'>web前端</p>
					<p class='p2'>20K</p>
				</div>
				<div class='line2'>
					<p class='p1'>南京市/本科3年</p>
					<p class='p2'>2018-03-01</p>
				</div>
				<div class='line3'>
					<img src="@imgs/test.png" alt="">
					<p>南京众泰教育科技有限公司</p>
				</div>
				<div class='progress_box'>
					<p>简历匹配度</p>
					<Progress :percent="90" :stroke-width="7" class='progress'>
						<span class='progress_info'>90%</span>
					</Progress>
				</div>
			</div>
			<div class='item'>
				<div class='line1'>
					<p class='p1'>web前端</p>
					<p class='p2'>20K</p>
				</div>
				<div class='line2'>
					<p class='p1'>南京市/本科3年</p>
					<p class='p2'>2018-03-01</p>
				</div>
				<div class='line3'>
					<img src="@imgs/test.png" alt="">
					<p>南京众泰教育科技有限公司</p>
				</div>
				<div class='progress_box'>
					<p>简历匹配度</p>
					<Progress :percent="90" :stroke-width="7" class='progress'>
						<span class='progress_info'>90%</span>
					</Progress>
				</div>
			</div>
			<div class='item'>
				<div class='line1'>
					<p class='p1'>web前端</p>
					<p class='p2'>20K</p>
				</div>
				<div class='line2'>
					<p class='p1'>南京市/本科3年</p>
					<p class='p2'>2018-03-01</p>
				</div>
				<div class='line3'>
					<img src="@imgs/test.png" alt="">
					<p>南京众泰教育科技有限公司</p>
				</div>
				<div class='progress_box'>
					<p>简历匹配度</p>
					<Progress :percent="90" :stroke-width="7" class='progress'>
						<span class='progress_info'>90%</span>
					</Progress>
				</div>
			</div>
			<div class='item'>
				<div class='line1'>
					<p class='p1'>web前端</p>
					<p class='p2'>20K</p>
				</div>
				<div class='line2'>
					<p class='p1'>南京市/本科3年</p>
					<p class='p2'>2018-03-01</p>
				</div>
				<div class='line3'>
					<img src="@imgs/test.png" alt="">
					<p>南京众泰教育科技有限公司</p>
				</div>
				<div class='progress_box'>
					<p>简历匹配度</p>
					<Progress :percent="90" :stroke-width="7" class='progress'>
						<span class='progress_info'>90%</span>
					</Progress>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'recommand-list',
	data() {
		return {

		};
	}
};

</script>
<style scoped>
@import '@pages/home/home.css';

</style>
