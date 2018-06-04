<template>
	<div class='chat_page'>
		<div class='content_inner_width'>
			<div class='sub_title'>
				<div class='tab1' :class="{'active': curIndex === '0'}" @click='tabClick("0")'>
					<div class='bg_box'></div>
					<span>沟通</span>
				</div>
				<div class='tab2' :class="{'active': curIndex === '1'}" @click='tabClick("1")'>
					<div class='bg_box'></div>
					<span>系统消息</span>
				</div>
				<div class='bg_box'></div>
			</div>
			<transition name='fade' mode='out-in'>
				<div class='chat_box' v-if='curIndex==="0"'>
					<div class='left'>
						<div class='up'>
							<img src="@imgs/test.png" alt="">
							<div class='box1'>
								<p class='p1'>Lee</p>
								<span class='span1'>彗星网络科技有限公司</span>
							</div>
						</div>
						<div class='down'>
							<div class='part1'>
								<input type="text" placeholder="搜索" name="">
							</div>
							<div class='part2 message_list'>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
								<div class='item'>
									<img src="@imgs/test.png" alt="">
									<div class='part1'>
										<p class='p1'>王霄-网络工程师</p>
										<p class='p2 text_ellipsis'>您好您投递了我们公司的简历您好您投递了我们公司的简历您好您投递了我们公司的简历</p>
									</div>
									<div class='part2'>
										<p class='p1'>16:00</p>
										<div class='box1'>
											<span>1</span>
											<img src="@imgs/chat/1.png" alt="">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='right'>
						<div class='part1'>
							<p class='p1'>
								<span class='inline_block vertical_middle'>职位：UI设计师（发布中）</span>
								<x-link class='inline_block vertical_middle' font-size='12' :showArrow='false'>更换</x-link>
							</p>
							<p class='p2'>董韵-UI设计师（未投递）</p>
							<x-link font-size='12' class='p3'>查看人才信息</x-link>
						</div>
						<div class='part2'>
							<p class='time_line'>2018-12-12 12:12:12</p>
							<chat-item v-for='(item, index) in chatList' :key='index' :src='item.img' :content='item.content' :type='item.type'></chat-item>
						</div>
						<div class='part3'>
							<div class='line1'>
								<div class='face_box'>
									<img src="@imgs/chat/2.png" alt="">
								</div>
								<div class='quick_reply_box'>
									<img src="@imgs/chat/3.png" alt="">
								</div>
								<div class='del_box'>
									<span>删除聊天记录</span>
								</div>
							</div>
							<div class='line2'>
								<textarea v-model='sendContent'></textarea>
							</div>
							<div class='line3'>
								<button>发送</button>
							</div>
						</div>
					</div>
				</div>
				<div class='system_msgbox' v-if='curIndex==="1"'>
					<div class='message_item'>
						<p class='line1'>欢迎来到讯聘选材网</p>
						<div class='line2'>
							<p>这里有优质的大型企业等待选拔人才，您是第1000位候选人，感谢我们的相遇！完善简历后，您将得到高效率的筛选。现在就开始
								<x-link class='inline_block'>完善简历</x-link>吧！</p>
							<x-button type='xbtn-border-primary' fontsize='12' :padding='[7, 11]'>完善简历>></x-button>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
import ChatItem from './components/chat-item';
export default {
	name: 'chat',
	components: { ChatItem },
	data() {
		return {
			curIndex: '0',
			chatList: [{
				img: require('@imgs/test.png'),
				content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
				type: '0' // 0 对面 1 自己
			}, {
				img: require('@imgs/test.png'),
				content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
				type: '1' // 0 对面 1 自己
			}, {
				img: require('@imgs/test.png'),
				content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
				type: '0' // 0 对面 1 自己
			}, {
				img: require('@imgs/test.png'),
				content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
				type: '0' // 0 对面 1 自己
			}],
			sendContent: ''
		};
	},
	methods: {
		tabClick(index) {
			this.curIndex = index;
		}
	}
};

</script>
<style>
@import '@pages/chat/chat.css';

</style>
