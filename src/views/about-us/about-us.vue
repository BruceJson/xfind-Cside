<template>
	<div class='about_us_page'>
		<div class='banner'>
			<div class='inner'></div>
			<div class='banner_img'>
				<img src="@imgs/about-us/1.png">
			</div>
		</div>
		<div class='part1'>
			<div class='content_inner_width'>
				<div class='sub_title'>
					<p class='line1'>公司简介</p>
					<div class='line2 '>
						<div class='line'></div>
						<p>About us</p>
						<div class='line'></div>
					</div>
				</div>
				<div class='line3'>
					<img class='left' src="@imgs/about-us/2.png" alt="">
					<div class='right'>
						<p>
							<span style='font-size: 20px;color: #008cee;'>江</span>苏德尔菲网络科技有限公司成立于2016年，是国内创新型大学生能力发展和智能招聘的信息技术公司。我们的主要产品是X-find 迅聘在线招聘平台，此平台运用大数据手段，推动智能化和精确化的职业教育与招聘升级，打破了原有网络招聘以“搜索-筛选-投递”的逻辑，通过智能化的系统算法，为每一个人推荐与他能力特点匹配度高的职位与资源，提升求职的精准性，实现“测评-匹配-推送”的智能化职业发展和招聘。</p>
						<p>如今，找工作找实习是学校以及大学生十分头疼的一件事，如何找到既跟自己所学专业相关，又能感兴趣的岗位是所有面临毕业的大学生急需的事情。在我们的招聘平台上，为了给大学生提供更加适合的岗位，我们特别为大学生打造了
							<span style='font-size: 20px;color: #008cee;'>职业测评</span>+
							<span style='font-size: 20px;color: #008cee;'>岗位定制培训</span>的项目（此项目对学生为免费项目）。</p>
					</div>
				</div>
			</div>
		</div>
		<div class='part2'>
			<div class='left'>
				<div class='inner'>
					<div class='l1'>
						<p class='p1'>Career Assessment</p>
						<p class='p2'>职业测评</p>
					</div>
					<div class='l2'>职业测评不同于以往常见的测评，它可以给出精准的岗位匹配度结果，可以得出学生的职业倾向并提供职业建议。学生在学习阶段，对自己今后的发展十分模糊，面对找工作更加迷茫。他们不仅对工作岗位不了解，对自身的潜能也不是十分清楚，职业测评将每个人分为了39个维度，学生可以从不同维度了解自己，从而发掘今后适合的岗位。</div>
				</div>
			</div>
			<div class='right'>
				<div class='inner'>
					<div class='l1'>
						<p class='p1'>Career Assessment</p>
						<p class='p2'>岗位定制培训</p>
					</div>
					<div class='l2'>岗位定制培训是企业为具体岗位量身定制的实地培训，大学生可以通过X-find 迅聘在线招聘平台获取培训信息，从而参与到自己感兴趣的培训中，这是进入职场前的热身。此项目的最大优势就是学生在不了解岗位和工作内容的前提下，通过参加定制培训，可以了解企业了解岗位了解工作内容，了解清楚自己适合并感兴趣的岗位后在做出选择，使得企业与学生之间实现真正的双向选择。不仅如此，学生参加岗位定制培训可以打破年级的限制，不用等到大四找工作前夕才开始，这样便于学生尽早的熟悉职场环境，找到适合自己的岗位方向。另外，学生参与岗位定制培训，也可以提早获得个人职场经验，使自己快速成长，我们会追踪记录学生的培训情况，根据培训成果为学生日后找到工作提供依据。当然，对于即将毕业的学生，岗位定制培训更是他们找到工作的一项重要途径，学生参与了岗位定制培训后，如果通过了企业的各项考核，即可直接入职。</div>
				</div>
			</div>
		</div>
		<div class='part3'>
			<div class='content_inner_width'>
				<div class='left'>除此之外，公司还为学校提供职业发展类的辅导讲座，例如职业生涯规划、简历制作、面试技巧等。不同于学校开设的同类型课程，我们的讲座聘请的是各大企业内的资深HR、咨询顾问等，他们会站在企业的角度去给学生展示企业需要什么样的学生，让学生更加直观的了解企业需求，并从中提升自己。</div>
				<img class='right' src="@imgs/about-us/3.png" alt="">
			</div>
		</div>
		<div class='part4'>
			<div class='content_inner_width'>
				<div class='line1 sub_title'>
					<p class='line1'>联系我们</p>
					<div class='line2 '>
						<div class='line'></div>
						<p>Contact Us</p>
						<div class='line'></div>
					</div>
				</div>
				<p class='line2'>如果您在迅聘选才网上，遇到任何疑问，欢迎您与迅聘选才的客服人员联系，迅聘选才会为您提供专业、细致的解答。</p>
				<div class='line3'>
					<div class='left'>
						<img src="@imgs/about-us/5.png" alt="">
						<p>江苏省南京市建邺区梦都大街
							<br>132号紫鑫商务花园D3幢506</p>
					</div>
					<div class='right'>
						<img src="@imgs/about-us/6.png" alt="">
						<p>025 - 86636819</p>
					</div>
				</div>
				<div class='line4'>
					<div class='left'>
						<baidu-map class="map" style="display: flex; flex-direction: column;height:100%;" :center="{lng: 118.736948, lat: 32.017074}" :zoom="15" :scroll-wheel-zoom='true'>
							<bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
							<bm-marker :position="{lng: 118.7364234657, lat: 32.0174873171}"></bm-marker>
						</baidu-map>
					</div>
					<div class='right'>
						<p class='l1'>官方信息</p>
						<div class='l2'>
							<img src="@imgs/about-us/8.png" alt="">
							<p>www.delphis.cn</p>
						</div>
						<div class='l3'>
							<img src="@imgs/about-us/8.png" alt="">
							<p>delphis_1988@163.com</p>
						</div>
					</div>
				</div>
				<div class='line5'>如您有任何疑问或建议，请发送邮件，我们会尽快回复您，非常感谢！</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'about-us'
};

</script>
<style scoped>
@import '@pages/about-us/about-us.css'

</style>
