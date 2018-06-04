<template>
	<div class='search_page'>
		<div class='content_inner_width'>
			<div class='part1'>
				<div class='search_input_box'>
					<Input class='search_input' v-model="searchContent" placeholder="搜索职位、公司等"></Input>
					<x-button class='xbtn xbtn_fill search_btn' fontsize='16'>搜索</x-button>
				</div>
				<div class='workplace_select_box'>
					<p>工作地区:</p>
					<x-address class='workplace_selector' v-model="workPlace"></x-address>
				</div>
				<div class='job_type_select_box'>
					<p>岗位匹配:</p>
					<Select class='job_type_selector' v-model="jobType" style="width:300px">
						<Option value="beijing">New York</Option>
						<Option value="shanghai" disabled>London</Option>
						<Option value="shenzhen">Sydney</Option>
					</Select>
				</div>
			</div>
			<div class='part2'>
				<div class='part2_inner' :class='{open: showSelectors}'>
					<!-- 已选条件 -->
					<Row class='selected_list filter_item'>
						<Col span='2'>已选条件：</Col>
						<Col class='filter_list' span='22'>
						<span class='filter_list_item active'>南京</span>
						<span class='filter_list_item active'>南京</span>
						<span class='filter_list_item active'>南京</span>
						<span class='filter_list_item active'>南京</span>
						</Col>
					</Row>
					<!-- 选择条件列表块 -->
					<div class='list'>
						<filter-item v-model='curFilter1' label='期望薪资：' :list='filterList1'></filter-item>
						<filter-item v-model='curFilter1' label='工作年限：' :list='filterList1'></filter-item>
						<filter-item v-model='curFilter1' label='学历：' :list='filterList1'></filter-item>
						<filter-item v-model='curFilter1' label='所学专业：' :list='filterList1'></filter-item>
						<filter-item v-model='curFilter1' label='目前月薪：' :list='filterList1'></filter-item>
						<filter-item v-model='curFilter1' label='更新日期：' :list='filterList1'></filter-item>
						<Row class='item'>
							<Col span='2'>其他条件：</Col>
							<Col class='filter_list' span='22'>
							<div class='filter_list_item'>
								<Dropdown trigger="click" @on-click='dropDownClick1'>
									<a>行业
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem v-for='(item, index) in dropDownList1' :name='index' :key='index'>{{item.value}}</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<span style='margin-left: 10px;'>{{dropDownList1[dropDownIndex1].value}}</span>
							</div>
							<div class='filter_list_item'>
								<Dropdown trigger="click" @on-click='dropDownClick2'>
									<a>职能
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem v-for='(item, index) in dropDownList2' :name='index' :key='index'>{{item.value}}</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<span style='margin-left: 10px;'>{{dropDownList2[dropDownIndex2].value}}</span>
							</div>
							<div class='filter_list_item'>
								<Dropdown trigger="click" @on-click='dropDownClick3'>
									<a>职能
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem v-for='(item, index) in dropDownList3' :name='index' :key='index'>{{item.value}}</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<span style='margin-left: 10px;'>{{dropDownList3[dropDownIndex3].value}}</span>
							</div>
							<div class='filter_list_item'>
								<Dropdown trigger="click" @on-click='dropDownClick4'>
									<a>性别
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem v-for='(item, index) in dropDownList4' :name='index' :key='index'>{{item.value}}</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<span style='margin-left: 10px;'>{{dropDownList4[dropDownIndex4].value}}</span>
							</div>
							<div class='filter_list_item'>
								<Dropdown trigger="click" @on-click='dropDownClick5'>
									<a>所学专业
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem v-for='(item, index) in dropDownList5' :name='index' :key='index'>{{item.value}}</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<span style='margin-left: 10px;'>{{dropDownList5[dropDownIndex5].value}}</span>
							</div>
							<div class='filter_list_item'>
								<Dropdown trigger="click" @on-click='dropDownClick6'>
									<a>户口
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem v-for='(item, index) in dropDownList6' :name='index' :key='index'>{{item.value}}</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<span style='margin-left: 10px;'>{{dropDownList6[dropDownIndex6].value}}</span>
							</div>
							<div class='filter_list_item'>
								<Dropdown trigger="click" @on-click='dropDownClick7'>
									<a>求职状态
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem v-for='(item, index) in dropDownList7' :name='index' :key='index'>{{item.value}}</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<span style='margin-left: 10px;'>{{dropDownList7[dropDownIndex7].value}}</span>
							</div>
							</Col>
						</Row>
					</div>
				</div>
				<!-- 展开按钮 -->
				<div class='open_close_btn' :class='{open: showSelectors}' @click='showBtnClick'>
					<span>展开选项</span>
					<img src="@imgs/search/1.png">
				</div>
			</div>
			<div class='part3'>
				<span class='title'>排序方式：</span>
				<span class='selector' :class='{active: commonSort}' @click='commonSortClick'>默认</span>
				<span class='selector' :class='{active: timeSort}' @click='timeSortClick'>发布时间</span>
				<span class='selector' :class='{active: matchSort}' @click='matchSortClick'>简历匹配度</span>
			</div>
			<div class='part4'>
				<div class='list'>
					<div class='item' v-for='(item, index) in resumeList'>
						<img src="@imgs/test.png">
						<div class='div1' style='margin-left: 40px;width: 200px;'>
							<p class='p2' style='color: #666;'>董云霞</p>
							<p class='p1' style='margin-bottom: 0;'>ID:12312312412</p>
						</div>
						<div class='div1'>
							<p class='p2'>女
								<span class='dot'>|</span>24岁
								<span class='dot'>|</span>南京</p>
							<p class='p3'>南京
								<span class='dot'>|</span>本科
								<span class='dot'>|</span>计算机管理</p>
						</div>
						<div class='div2'>
							<p class='p1'>2018-03-10</p>
							<p class='p2'>软件工程师
								<span class='dot'>|</span>2年</p>
						</div>
						<div class='div3'>
							<i-circle :percent="80" :stroke-color='circleColor' :size='85' class='circle'>
								<p class="demo-Circle-inner" style="font-size:28px">
									<p class='span1'>匹配度</p>
									<p class='span2'>40%</p>
								</p>
							</i-circle>
						</div>
						<div class='div4'>
							<div class='chat_btn inline_block vertical_middle'>
								<img class='vertical_middle' src="@imgs/search/2.png">
								<div class='hover_tip'>
									<div class='hover_tip_inner'>
										<span @click='chatClick(item)'>和TA聊聊</span>
									</div>
								</div>
							</div>
							<span class='vertical_middle'>10条</span>
						</div>
					</div>
				</div>
			</div>
			<Page style='margin-bottom: 40px;' class='align_center margin_top_30' :total="100"></Page>
		</div>
		<chat-dialog v-model='showChatDialog' :curResume='curResume'></chat-dialog>
	</div>
</template>
<script>
import FilterItem from './components/filter-item';
import ChatDialog from './dialogs/chat-dialog';
export default {
	name: 'search',
	components: {
		FilterItem,
		ChatDialog
	},
	data() {
		return {
			circleColor: require('@/assets/style/variables.js').mainColor,
			// 显示隐藏和TA聊聊弹框
			showChatDialog: false,

			// 当前想要聊天的resume
			curResume: null,

			// 是否展开下拉框
			showSelectors: false,

			// 搜索内容
			searchContent: '',

			// 工作地点
			workPlace: [],

			// 岗位匹配
			jobType: '',

			dropDownIndex1: '0',
			dropDownList1: [{
				key: '0',
				value: 'name1'
			}, {
				key: '1',
				value: 'name2'
			}],
			dropDownIndex2: '0',
			dropDownList2: [{
				key: '0',
				value: 'name1'
			}, {
				key: '1',
				value: 'name2'
			}],
			dropDownIndex3: '0',
			dropDownList3: [{
				key: '0',
				value: 'name1'
			}, {
				key: '1',
				value: 'name2'
			}],
			dropDownIndex4: '0',
			dropDownList4: [{
				key: '0',
				value: 'name1'
			}, {
				key: '1',
				value: 'name2'
			}],
			dropDownIndex5: '0',
			dropDownList5: [{
				key: '0',
				value: 'name1'
			}, {
				key: '1',
				value: 'name2'
			}],
			dropDownIndex6: '0',
			dropDownList6: [{
				key: '0',
				value: 'name1'
			}, {
				key: '1',
				value: 'name2'
			}],
			dropDownIndex7: '0',
			dropDownList7: [{
				key: '0',
				value: 'name1'
			}, {
				key: '1',
				value: 'name2'
			}],

			// 其他条件（每项对应的都是key值）
			otherFilterObj: {
				business: '',
				job: '',
				age: '',
				gender: '',
				discipline: '',
				address: '',
				state: ''
			},

			curFilter1: '0',
			filterList1: [{
				key: '0',
				value: '不限'
			}, {
				key: '1',
				value: '3K及以下'
			}, {
				key: '2',
				value: '3K~4.5K'
			}, {
				key: '3',
				value: '4.5K~6K'
			}, {
				key: '4',
				value: '6K~8K'
			}, {
				key: '5',
				value: '8K~10K'
			}, {
				key: '6',
				value: '10K~15K'
			}, {
				key: '7',
				value: '20K~30K'
			}, {
				key: '8',
				value: '30K~50K'
			}, {
				key: '9',
				value: '50K以上'
			}],

			// 简历列表
			resumeList: [{
				id: '1232132132321',
				name: '111'
			}, {
				id: '1232132132321',
				name: '222'
			}, {
				id: '1232132132321',
				name: '333'
			}],

			// 默认排序
			commonSort: true,

			// 时间排序
			timeSort: false,

			// 简历匹配度排序
			matchSort: false
		}
	},
	methods: {
		dropDownClick1(index) {
			this.dropDownIndex1 = index;
		},
		dropDownClick2(index) {
			this.dropDownIndex2 = index;
		},
		dropDownClick3(index) {
			this.dropDownIndex3 = index;
		},
		dropDownClick4(index) {
			this.dropDownIndex4 = index;
		},
		dropDownClick5(index) {
			this.dropDownIndex5 = index;
		},
		dropDownClick6(index) {
			this.dropDownIndex6 = index;
		},
		dropDownClick7(index) {
			this.dropDownIndex7 = index;
		},
		showBtnClick() {
			this.showSelectors = !this.showSelectors;
		},
		chatClick(item) {
			this.curResume = Object.assign({}, item);
			this.showChatDialog = true;
		},
		commonSortClick() {
			this.commonSort = true;
			this.timeSort = false;
			this.matchSort = false;
		},
		timeSortClick() {
			if (!this.timeSort) {
				this.commonSort = false;
				this.timeSort = true;
			} else {
				!this.matchSort && (this.commonSort = true);
				this.timeSort = false;
			}
		},
		matchSortClick() {
			if (!this.matchSort) {
				this.commonSort = false;
				this.matchSort = true;
			} else {
				!this.timeSort && (this.commonSort = true);
				this.matchSort = false;
			}
		}
	}
}

</script>
<style scoped>
@import '@pages/search-resume/search.css';

</style>
