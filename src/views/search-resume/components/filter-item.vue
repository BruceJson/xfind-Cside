<template>
	<Row class='filter_item'>
		<Col span='2'>{{label}}</Col>
		<Col class='filter_list' span='22'>
		<span class='filter_list_item' :class="{'active': curFilter === item.key}" v-for='(item, index) in filterList' :key='index' @click='filterItemClick(item)'>{{item.value}}</span>
		</Col>
	</Row>
</template>
<script>
export default {
	name: 'filter-item',
	props: {
		value: {
			type: String, // {key: '0', value: 'value'}
			default: ''
		},
		label: {
			type: String
		},
		list: {
			type: Array,
			default () {
				return [];
			}
		}
	},
	computed: {
		filterList() {
			return this.list;
		},
		curFilter: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			}
		}
	},
	methods: {
		filterItemClick(item) {
			this.curFilter = item.key;
			this.$emit('on-filter-change', this.curFilter);
		}
	}
};

</script>
<style>
.filter_item {
	padding: 14px 10px;
	border-bottom: 1px solid #F6F6F6;
	font-size: 14px;
	color: var(--commonFontColor2);
	& .filter_list {
		& .filter_list_item {
			margin-right: 40px;
			display: inline-block;
			font-size: 14px;
			color: var(--commonFontColor);
			cursor: pointer;
			transition: all linear .3s;
			&.active,
			&:hover {
				color: var(--mainColor);
			}
		}
	}
}

</style>
