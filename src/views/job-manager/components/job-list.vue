<template>
	<div class='job_list_component'>
		<div class='job_list'>
			<div class='item' v-for='(item, index) in jobList' :key='index'>
				<div class='up'>
					<div class='part1'>
						<Checkbox v-model="item.selected"></Checkbox>
					</div>
					<div class='part2'>
						<div class='line1'>
							<p class='p1'>产品经理</p>
							<p class='p2'>发布中</p>
							<p class='p3'>暂停</p>
							<p class='p4'>应聘简历：
								<span>8</span>
							</p>
						</div>
						<div class='line2'>
							<p>小桔科技有限公司
								<span>|</span>工作地点：南京</p>
						</div>
					</div>
					<div class='part3'>
						<x-button :padding='[7, 10]' class='xbtn xbtn_border'>刷新</x-button>
						<x-button :padding='[7, 10]' class='xbtn xbtn_border'>重新发布</x-button>
						<x-button :padding='[7, 10]' class='xbtn xbtn_border'>搜索</x-button>
						<x-button :padding='[7, 10]' class='xbtn xbtn_border'>暂停</x-button>
					</div>
				</div>
				<div class='down'>
					<p>发布者：jkljklj</p>
					<p>发布日期：2018-12-12</p>
					<p>截止日期：2018-12-12</p>
				</div>
			</div>
		</div>
		<div class='action_area'>
			<div>
				<Checkbox v-model="selectAll">全选</Checkbox>
			</div>
			<div class='right'>
				<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>全部刷新</x-button>
				<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>暂停</x-button>
				<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>重新发布</x-button>
				<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' style='margin-left: 40px;'>复制职位</x-button>
				<x-button class='xbtn xbtn_fill' width='65' height='28' fontsize='12' :padding='[0, 0]' :is-link='true' to='/create_job' style='margin-left: 40px;'>新增职位</x-button>
			</div>
		</div>
		<Page class='align_center margin_top_30 margin_bottom_40' :total="100"></Page>
	</div>
</template>
<script>
export default {
	name: 'email-list',
	props: {
		type: {
			type: String,
			default: '0' // '0' 发布中职位 '1'已暂停职位 '2'全部职位
		}
	},
	data() {
		return {
			jobList: [{
				selected: false,
				state: '0', // '0' 发布中 '1'暂停
			}],
			selectAll: false
		};
	}
};

</script>
<style scoped>
@import '@pages/talent-list/talent-list.css';
.job_list {
	padding-top: 20px;
	&>.item {
		height: 123px;
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
		&>.up {
			flex: 1;
			display: flex;
			border: 1px solid #D2D2D2;
			border-bottom: none;
			align-items: center;
			padding-right: 60px;
			&>.part1 {
				width: 40px;
				justify-content: center;
				align-items: center;
				display: flex;
			}
			&>.part2 {
				display: flex;
				flex-direction: column;
				&>.line1 {
					display: flex;
					&>.p1 {
						font-size: 20px;
						color: var(--mainColor);
						margin-right: 20px;
					}
					&>.p2 {
						width: 57px;
						height: 24px;
						border-radius: 4px;
						background-color: var(--mainColor);
						color: #fff;
						text-align: center;
						line-height: 24px;
						font-size: 12px;
						margin-right: 20px;
					}
					&>.p3 {
						width: 44px;
						height: 24px;
						border-radius: 4px;
						border: 1px solid var(--mainColor);
						color: var(--mainColor);
						text-align: center;
						line-height: 22px;
						font-size: 12px;
						margin-right: 20px;
					}
					&>.p4 {
						font-size: 12px;
						color: #333;
						margin-right: 20px;
						&>span {
							color: var(--mainColor);
							font-size: 16px;
						}
					}
				}
				&>.line2 {
					font-size: 12px;
					color: #333;
					margin-top: 15px;
				}
			}
			&>.part3 {
				display: flex;
				align-items: center;
				flex: 1;
				justify-content: flex-end;
				&>.xbtn {
					margin-left: 40px;
				}
			}
		}
		&>.down {
			height: 40px;
			background-color: #EEEEEE;
			display: flex;
			align-items: center;
			&>p {
				margin-left: 40px;
				color: #999999;
			}
		}
	}
}

.action_area {
	padding-left: 11px;
	&>.right{
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
}

</style>
