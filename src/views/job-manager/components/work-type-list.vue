<template>
	<div class='worktype_list' :class='{show: showList}'>
		<div class='li_1'>
			<p>选择职能（最多选3项）</p>
			<div class='btn_box'>
				<span class='btn1' @click='okClick'>确定</span>
				<span class='btn2' @click='showList=false;'>取消</span>
			</div>
		</div>
		<div class='li_2'>
			<p>已选职能</p>
			<div class='select_worktype_list'>
				<Tag class='tag_item' v-for="(item,index) in selectWorkTypeList" :key="index" :name="item.name" type='border' color='#008CEE' closable @on-close="handleCloseTag(index)">{{ item.name }}</Tag>
			</div>
		</div>
		<div class='li_3'>
			<div v-for='(item, index) in totalWorkTypeList' class='item'>
				<div class='title'>{{item.name}}</div>
				<div class='children'>
					<!-- <div class='children_item' v-for='(child, index1) in item.children' @click='addWorkType(child)'>{{child.name}}</div> -->

					<work-type-item v-for='(child, index1) in item.children' :key="index" :work-type='child' @on-select='workTypeSelect'></work-type-item>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import HandleBox from './handle-box';
import WorkTypeItem from './work-type-item';
export default {
	name: 'work-type-list',
	components: {
		HandleBox,
		WorkTypeItem
	},
	props: {
		value: {
			type: Boolean,
			default: false
		},
		list: {
			type: Array,
			default () {
				return [];
			}
		}
	},
	data() {
		var self = this;
		return {
			totalWorkTypeList: [{
				name: '计算机/互联网/通信/电子',
				children: [{
					name: '计算机硬件',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '计算机软件',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '互联网/电子商务/网游',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '网店淘宝',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: 'IT管理',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: 'IT品管、技术支持及其他',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '通信技术开发及应用',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '电子/电器/半导体/仪器仪表',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '销售/客服/技术支持',
				children: [{
					name: '销售管理',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '销售人员',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '销售行政及商务',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '客服及支持',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '会计/金融/银行/保险',
				children: [{
					name: '财务/审计/税务',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '金融/证券/期货/投资',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '银行',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '保险',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '生产/营运/从购/物流',
				children: [{
					name: '生产/营运',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '质量安全',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '工程/机械/能源',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '汽车制造',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '技术普工',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '机械机床',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '服装/纺织/皮革',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '印刷包装',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '采购',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '贸易',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '物流/仓储',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '汽车销售与服务',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '生物/制药/医疗/护理',
				children: [{
					name: '生物/制药/医疗器械',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '化工',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '医院/医疗护理',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '广告/市场/媒体/艺术',
				children: [{
					name: '广告',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '公关/媒介',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '市场/营销',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '影视/媒体',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '编辑/出版',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '艺术/设计',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '建筑/房地产',
				children: [{
					name: '建筑工程与装潢',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '房地产开发',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '物业管理',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '房地产销售与中介',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '人事/行政/高级管理',
				children: [{
					name: '人力资源',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '高级管理 ',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '行政/后勤',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '客服及支持',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '咨询/法律/教育/科研',
				children: [{
					name: '咨询/顾问',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '律师/法务/合规',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '教师',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '培训',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '科研',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '服务业',
				children: [{
					name: '餐饮服务',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '酒店旅游',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '美容保健',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '运动健身',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '休闲娱乐',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '百货零售',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '交通运输服务',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '家政保洁',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}, {
				name: '公务员/翻译/其他',
				children: [{
					name: '公务员',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '翻译',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '在校学生',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '储备干部/培训生/实习生',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '兼职',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '其他',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '环保',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}, {
					name: '农/林/牧/渔',
					children: [{
						id: '01',
						name: '职能1'
					}, {
						id: '02',
						name: '职能2'
					}]
				}]
			}],
			selectWorkTypeList: Object.assign([], this.list)
		};
	},

	computed: {
		showList: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			}
		}
	},
	methods: {
		handleCloseTag(index) {
			this.selectWorkTypeList.splice(index, 1);
		},
		addWorkType(child) {
			if (this.selectWorkTypeList.length < 3 && !this.selectWorkTypeList.find(obj => child.name === obj.name)) {
				this.selectWorkTypeList.push(child);
			}
		},
		okClick() {
			this.$emit('change', this.selectWorkTypeList);
			this.showList = false;
		},
		workTypeSelect(funcItem) {
			if (this.selectWorkTypeList.length < 3 && !this.selectWorkTypeList.find(obj => funcItem.id === obj.id)) {
				this.selectWorkTypeList.push(funcItem);
			}
		}
	},
	watch: {
		list() {
			this.selectWorkTypeList = Object.assign([], this.list);
		}
	}
};

</script>
<style scoped>
@import '@pages/job-manager/work-type-list.css';

</style>
